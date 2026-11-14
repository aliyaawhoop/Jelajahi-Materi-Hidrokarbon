/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Halaman Latihan Soal Interaktif "Jelajahi Dunia Hidrokarbon"
 * Memuat 15 soal standar kurikulum KD 3.1 & 4.1 Kimia SMA/MA Kelas XI.
 * Fitur:
 * - Mode "Semua Soal Acak" atau "Per Kegiatan (1, 2, 3)"
 * - Pengacakan urutan soal dan urutan opsi A-E tiap sesi
 * - Satu soal per layar dengan indikator progres
 * - Tombol petunjuk opsional tanpa membocorkan kunci
 * - Umpan balik instan (warna lembut) & pembahasan langkah demi langkah
 * - Layar hasil lengkap: skor, persentase, predikat, daftar kegiatan perlu diulang, dan rekomendasi tindak lanjut
 */

import React, { useState, useEffect } from 'react';
import { ARRAY_SOAL, SoalLatihan } from '../../data';
import { SoalDiagramSvg } from '../soal/SoalDiagramSvg';
import {
  Award,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  BookOpen,
  Sparkles,
  Layers,
  ChevronRight,
  BarChart2,
  CheckSquare
} from 'lucide-react';

interface LatihanSoalPageProps {
  onBackToBeranda: () => void;
  onNavigateTab?: (tab: 'beranda' | 'materi' | 'latihan-soal' | 'penilaian-diri' | 'tentang') => void;
}

type QuizMode = 'semua' | 1 | 2 | 3;

interface ShuffledOption {
  displayLabel: 'A' | 'B' | 'C' | 'D' | 'E';
  originalLabel: 'A' | 'B' | 'C' | 'D' | 'E';
  teks: string;
  isCorrect: boolean;
}

interface ShuffledQuestion extends Omit<SoalLatihan, 'pilihan'> {
  pilihanShuffled: ShuffledOption[];
}

interface UserAnswerRecord {
  questionId: number;
  kegiatan: 1 | 2 | 3;
  selectedDisplayLabel: 'A' | 'B' | 'C' | 'D' | 'E';
  isCorrect: boolean;
  questionTitle: string;
}

interface QuizHistoryRecord {
  mode: string;
  score: number;
  total: number;
  percentage: number;
  category: string;
  date: string;
}

// Algoritma Fisher-Yates untuk pengacakan array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const LatihanSoalPage: React.FC<LatihanSoalPageProps> = ({
  onBackToBeranda,
  onNavigateTab
}) => {
  // Screen views: 'menu' | 'quiz' | 'result'
  const [viewState, setViewState] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [selectedMode, setSelectedMode] = useState<QuizMode>('semua');
  
  // Session state
  const [sessionQuestions, setSessionQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<ShuffledOption | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);

  // History from localStorage
  const [lastHistory, setLastHistory] = useState<QuizHistoryRecord | null>(() => {
    try {
      const saved = localStorage.getItem('hidrokarbon_latihan_history');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return null;
  });

  // Prepare a new randomized quiz session
  const startQuizSession = (mode: QuizMode) => {
    setSelectedMode(mode);

    // 1. Filter questions based on mode
    let filtered = ARRAY_SOAL;
    if (mode !== 'semua') {
      filtered = ARRAY_SOAL.filter(s => s.kegiatan === mode);
    }

    // 2. Shuffle questions order
    const randomizedQuestions = shuffleArray(filtered);

    // 3. For each question, shuffle options order and assign labels A-E
    const labels: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];
    const preparedQuestions: ShuffledQuestion[] = randomizedQuestions.map(q => {
      const shuffledRaw = shuffleArray(q.pilihan);
      const shuffledOptions: ShuffledOption[] = shuffledRaw.map((opt, idx) => ({
        displayLabel: labels[idx],
        originalLabel: opt.label,
        teks: opt.teks,
        isCorrect: opt.label === q.kunciJawaban
      }));

      return {
        ...q,
        pilihanShuffled: shuffledOptions
      };
    });

    setSessionQuestions(preparedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setUserAnswers([]);
    setViewState('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle selecting an option (instant feedback)
  const handleSelectOption = (opt: ShuffledOption) => {
    if (isAnswerSubmitted) return; // Prevent changing after submission
    setSelectedOption(opt);
    setIsAnswerSubmitted(true);

    const currentQ = sessionQuestions[currentIndex];
    const newAnswer: UserAnswerRecord = {
      questionId: currentQ.id,
      kegiatan: currentQ.kegiatan,
      selectedDisplayLabel: opt.displayLabel,
      isCorrect: opt.isCorrect,
      questionTitle: currentQ.pertanyaan.slice(0, 45) + '...'
    };

    setUserAnswers(prev => [...prev, newAnswer]);
  };

  // Move to next question or show results
  const handleNextQuestion = () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Finish quiz: calculate results
      const total = sessionQuestions.length;
      const score = userAnswers.filter(a => a.isCorrect).length;
      const percentage = Math.round((score / total) * 100);

      let category = 'Kurang';
      if (percentage >= 90) category = 'Baik Sekali';
      else if (percentage >= 80) category = 'Baik';
      else if (percentage >= 70) category = 'Cukup';

      const modeTitle = selectedMode === 'semua' ? 'Semua Soal Acak' : `Kegiatan ${selectedMode}`;
      const record: QuizHistoryRecord = {
        mode: modeTitle,
        score,
        total,
        percentage,
        category,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      try {
        localStorage.setItem('hidrokarbon_latihan_history', JSON.stringify(record));
        setLastHistory(record);
      } catch {
        // Ignore
      }

      setViewState('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigation handlers
  const handleGoToMateri = () => {
    if (onNavigateTab) {
      onNavigateTab('materi');
    }
  };

  const handleGoToPenilaianDiri = () => {
    if (onNavigateTab) {
      onNavigateTab('penilaian-diri');
    }
  };

  // =========================================================================
  // RENDER: 1. MENU PEMILIHAN MODE
  // =========================================================================
  if (viewState === 'menu') {
    return (
      <div className="w-full py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto animate-fadeIn">
        {/* Back button */}
        <button
          onClick={onBackToBeranda}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8B5DE] hover:text-[#5EEAD4] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Hero Header */}
        <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#B4A7FF]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#5EEAD4] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>15 Soal Standar Kimia SMA KD 3.1 & 4.1</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EEEDFB] tracking-tight">
                Latihan Soal & Evaluasi Pemahaman
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[#B8B5DE] max-w-xl leading-relaxed">
                Uji pemahaman konsep hidrokarbonmu dengan simulasi interaktif. Dilengkapi petunjuk kontekstual, umpan balik langsung, pembahasan terstruktur, dan analisis kegiatan yang perlu diperkuat.
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-[#5EEAD4] shrink-0 shadow-inner">
              <Award className="w-8 h-8" />
            </div>
          </div>

          {/* Last Score Banner if Available */}
          {lastHistory && (
            <div className="mt-6 pt-5 border-t border-[#3A3280]/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#B8B5DE]">
                <BarChart2 className="w-4 h-4 text-[#FDE68A]" />
                <span>Hasil Latihan Terakhir ({lastHistory.mode}):</span>
                <span className="font-bold text-[#EEEDFB]">
                  {lastHistory.score}/{lastHistory.total} ({lastHistory.percentage}%)
                </span>
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  lastHistory.percentage >= 80 ? 'bg-[#5EEAD4]/20 text-[#5EEAD4]' : 'bg-[#FFA8C5]/20 text-[#FFA8C5]'
                }`}>
                  {lastHistory.category}
                </span>
              </div>
              <span className="text-xs text-[#B8B5DE]">{lastHistory.date}</span>
            </div>
          )}
        </div>

        {/* Mode Selector Heading */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#5EEAD4]" />
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#EEEDFB]">
              Pilih Paket Latihan Soal
            </h2>
          </div>
          <span className="text-xs text-[#B8B5DE]">
            Urutan soal & opsi diacak otomatis
          </span>
        </div>

        {/* 4 Mode Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Option 1: Semua Soal Acak */}
          <div
            onClick={() => startQuizSession('semua')}
            className="group p-5 bg-[#1E1850] hover:bg-[#251E60] border-2 border-[#5EEAD4]/50 hover:border-[#5EEAD4] rounded-2xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5EEAD4]/15 border border-[#5EEAD4]/30 rounded-full text-xs font-bold text-[#5EEAD4]">
                <span>15 Soal Lengkap</span>
              </div>
              <span className="text-xs text-[#5EEAD4] font-semibold group-hover:underline flex items-center gap-1">
                Mulai Simulasi <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#EEEDFB] group-hover:text-[#5EEAD4] transition-colors mb-1.5">
              Semua Soal Acak (Simulasi Penuh)
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
              Kombinasi acak dari seluruh Kegiatan 1, 2, dan 3. Sangat cocok untuk menguji kesiapan sebelum penilaian harian kimia.
            </p>
          </div>

          {/* Option 2: Kegiatan 1 */}
          <div
            onClick={() => startQuizSession(1)}
            className="group p-5 bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] hover:border-[#5EEAD4] rounded-2xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#5EEAD4]">
                <span>Kegiatan 1 · 4 Soal</span>
              </div>
              <span className="text-xs text-[#B8B5DE] group-hover:text-[#5EEAD4] font-medium flex items-center gap-1">
                Mulai <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h3 className="text-base font-bold text-[#EEEDFB] group-hover:text-[#5EEAD4] transition-colors mb-1.5">
              Kekhasan & Struktur Atom Karbon
            </h3>
            <p className="text-xs text-[#B8B5DE] leading-relaxed">
              Fokus pada konsep hidrokarbon, konfigurasi 4 elektron valensi, keunikan ikatan kovalen, dan penentuan atom C 1°, 2°, 3°, 4°.
            </p>
          </div>

          {/* Option 3: Kegiatan 2 */}
          <div
            onClick={() => startQuizSession(2)}
            className="group p-5 bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] hover:border-[#B4A7FF] rounded-2xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#B4A7FF]">
                <span>Kegiatan 2 · 6 Soal</span>
              </div>
              <span className="text-xs text-[#B8B5DE] group-hover:text-[#B4A7FF] font-medium flex items-center gap-1">
                Mulai <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h3 className="text-base font-bold text-[#EEEDFB] group-hover:text-[#B4A7FF] transition-colors mb-1.5">
              Penggolongan & Tata Nama IUPAC
            </h3>
            <p className="text-xs text-[#B8B5DE] leading-relaxed">
              Latihan deret homolog alkana, alkena, alkuna, identifikasi senyawa jenuh/tak jenuh, serta langkah penamaan senyawa bercabang.
            </p>
          </div>

          {/* Option 4: Kegiatan 3 */}
          <div
            onClick={() => startQuizSession(3)}
            className="group p-5 bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] hover:border-[#FFA8C5] rounded-2xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#FFA8C5]">
                <span>Kegiatan 3 · 5 Soal</span>
              </div>
              <span className="text-xs text-[#B8B5DE] group-hover:text-[#FFA8C5] font-medium flex items-center gap-1">
                Mulai <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <h3 className="text-base font-bold text-[#EEEDFB] group-hover:text-[#FFA8C5] transition-colors mb-1.5">
              Sifat Hidrokarbon, Reaksi & Isomer
            </h3>
            <p className="text-xs text-[#B8B5DE] leading-relaxed">
              Mencakup tren titik didih, reaksi pembakaran, substitusi, adisi Markovnikov, eliminasi, serta isomer struktur dan cis-trans.
            </p>
          </div>
        </div>

        {/* Quick Study Navigation Card */}
        <div className="bg-[#150F38]/80 border border-[#3A3280] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E1850] border border-[#3A3280] flex items-center justify-center text-[#5EEAD4] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#EEEDFB]">Belum yakin dengan materinya?</h4>
              <p className="text-xs text-[#B8B5DE]">
                Baca ringkasan interaktif materi Kegiatan 1, 2, dan 3 terlebih dahulu.
              </p>
            </div>
          </div>

          <button
            onClick={handleGoToMateri}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-xs font-semibold text-[#EEEDFB] hover:text-[#5EEAD4] transition-colors cursor-pointer shrink-0"
          >
            Buka Halaman Materi
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: 2. GAMEPLAY VIEW (SATU SOAL PER LAYAR)
  // =========================================================================
  if (viewState === 'quiz') {
    const currentQ = sessionQuestions[currentIndex];
    const totalQ = sessionQuestions.length;
    const progressPercent = ((currentIndex + 1) / totalQ) * 100;
    const modeLabel = selectedMode === 'semua' ? 'Semua Soal Acak' : `Kegiatan ${selectedMode}`;

    return (
      <div className="w-full py-8 sm:py-10 px-4 sm:px-6 max-w-3xl mx-auto animate-fadeIn">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <button
            onClick={() => setViewState('menu')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8B5DE] hover:text-[#EEEDFB] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Menu Latihan</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#150F38] border border-[#3A3280] text-xs font-medium text-[#B8B5DE]">
              {modeLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#1E1850] border border-[#5EEAD4]/40 text-xs font-bold text-[#5EEAD4]">
              Soal {currentIndex + 1} dari {totalQ}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-[#150F38] border border-[#3A3280]/60 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-[#5EEAD4] via-[#B4A7FF] to-[#FFA8C5] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Container Card */}
        <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-xl mb-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#150F38] border border-[#3A3280] text-[11px] font-bold text-[#5EEAD4]">
                {currentQ.kdTerkait}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#150F38] border border-[#3A3280] text-[11px] font-medium text-[#B8B5DE]">
                Kegiatan {currentQ.kegiatan} · {currentQ.kategori}
              </span>
            </div>

            {/* Hint Button */}
            <button
              onClick={() => setShowHint(prev => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#150F38] hover:bg-[#251E60] border border-[#FDE68A]/40 text-xs font-semibold text-[#FDE68A] transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{showHint ? 'Tutup Petunjuk' : 'Lihat Petunjuk'}</span>
            </button>
          </div>

          {/* Optional Hint Box */}
          {showHint && (
            <div className="p-3.5 bg-[#150F38] border border-[#FDE68A]/40 rounded-xl text-xs text-[#FDE68A] mb-5 flex items-start gap-2.5 animate-fadeIn">
              <Lightbulb className="w-4 h-4 shrink-0 text-[#FDE68A] mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold">Petunjuk Belajar: </span>
                {currentQ.petunjuk}
              </div>
            </div>
          )}

          {/* Question Text */}
          <div className="text-base sm:text-lg font-semibold text-[#EEEDFB] leading-relaxed mb-4 whitespace-pre-line">
            {currentQ.pertanyaan}
          </div>

          {/* Optional SVG Molecular Diagram */}
          {currentQ.svgStrukturType && (
            <SoalDiagramSvg type={currentQ.svgStrukturType} />
          )}

          {/* Options List (A to E) */}
          <div className="space-y-3 mt-5">
            {currentQ.pilihanShuffled.map((opt) => {
              const isSelected = selectedOption?.displayLabel === opt.displayLabel;
              
              // Styling logic when answered vs not answered
              let btnClass = 'bg-[#150F38]/90 hover:bg-[#20194E] border-[#3A3280] text-[#EEEDFB] cursor-pointer';
              let badgeClass = 'bg-[#1E1850] text-[#5EEAD4] border-[#3A3280]';

              if (isAnswerSubmitted) {
                if (opt.isCorrect) {
                  // Correct option is always highlighted softly in mint
                  btnClass = 'bg-[#5EEAD4]/15 border-2 border-[#5EEAD4] text-[#EEEDFB] cursor-default';
                  badgeClass = 'bg-[#5EEAD4] text-[#0F0B2A] border-[#5EEAD4] font-extrabold';
                } else if (isSelected && !opt.isCorrect) {
                  // Chosen wrong option highlighted softly in pink peach
                  btnClass = 'bg-[#FFA8C5]/15 border-2 border-[#FFA8C5] text-[#EEEDFB] cursor-default';
                  badgeClass = 'bg-[#FFA8C5] text-[#0F0B2A] border-[#FFA8C5] font-extrabold';
                } else {
                  // Other options muted
                  btnClass = 'bg-[#0F0B2A]/40 border-[#3A3280]/40 text-[#B8B5DE] opacity-60 cursor-not-allowed';
                  badgeClass = 'bg-[#150F38] text-[#B8B5DE] border-[#3A3280]/40';
                }
              }

              return (
                <button
                  key={opt.displayLabel}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3.5 group relative ${btnClass}`}
                >
                  <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 ${badgeClass}`}>
                    {opt.displayLabel}
                  </span>

                  <span className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5 flex-1">
                    {opt.teks}
                  </span>

                  {/* Feedback Icon Indicator */}
                  {isAnswerSubmitted && opt.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#5EEAD4] shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-[#FFA8C5] shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Step-by-Step Feedback & Explanation */}
          {isAnswerSubmitted && (
            <div className="mt-6 pt-5 border-t border-[#3A3280] animate-fadeIn">
              {/* Status Header */}
              <div className={`p-4 rounded-xl border mb-4 flex items-center gap-3 ${
                selectedOption?.isCorrect
                  ? 'bg-[#5EEAD4]/10 border-[#5EEAD4]/40 text-[#5EEAD4]'
                  : 'bg-[#FFA8C5]/10 border-[#FFA8C5]/40 text-[#FFA8C5]'
              }`}>
                {selectedOption?.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#5EEAD4]" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 text-[#FFA8C5]" />
                )}
                <div className="text-sm font-bold">
                  {selectedOption?.isCorrect ? (
                    <span>Tepat Sekali! Pilihan jawabanmu benar. 🎉</span>
                  ) : (
                    <span>Kurang Tepat. Simak langkah pembahasannya di bawah ini ya! 😊</span>
                  )}
                </div>
              </div>

              {/* Detailed Step-by-step Explanation */}
              <div className="p-4 sm:p-5 bg-[#0F0B2A]/80 border border-[#3A3280] rounded-xl space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#B4A7FF] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Pembahasan Runtut & Kunci Konsep:</span>
                </div>
                <div className="text-xs sm:text-sm text-[#EEEDFB] leading-relaxed whitespace-pre-line">
                  {currentQ.pembahasan}
                </div>
              </div>

              {/* Action Button: Next Question or View Results */}
              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5EEAD4] hover:bg-[#4dd6c0] text-[#0F0B2A] font-bold text-sm transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  <span>{currentIndex + 1 < totalQ ? 'Lanjut ke Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: 3. RESULTS SCREEN (LAYAR HASIL & REKOMENDASI TINDAK LANJUT)
  // =========================================================================
  const total = sessionQuestions.length;
  const score = userAnswers.filter(a => a.isCorrect).length;
  const percentage = Math.round((score / total) * 100);

  // Categories: 90-100% Baik Sekali, 80-89% Baik, 70-79% Cukup, <70% Kurang
  let categoryLabel = 'Kurang';
  let categoryColor = 'text-[#FFA8C5] bg-[#FFA8C5]/15 border-[#FFA8C5]/40';
  let categoryMessage = 'Jangan berkecil hati! Senyawa hidrokarbon memang butuh ketelitian pada tata nama dan reaksi. Yuk buka kembali materinya dan coba lagi!';

  if (percentage >= 90) {
    categoryLabel = 'Baik Sekali';
    categoryColor = 'text-[#5EEAD4] bg-[#5EEAD4]/15 border-[#5EEAD4]/40';
    categoryMessage = 'Luar biasa! Penguasaan konsep hidrokarbonmu sudah sangat matang dan mendalam. Pertahankan prestasimu!';
  } else if (percentage >= 80) {
    categoryLabel = 'Baik';
    categoryColor = 'text-[#B4A7FF] bg-[#B4A7FF]/15 border-[#B4A7FF]/40';
    categoryMessage = 'Kerja bagus! Kamu telah mencapai kriteria ketuntasan dengan sangat baik. Siap untuk melangkah ke tahapan berikutnya!';
  } else if (percentage >= 70) {
    categoryLabel = 'Cukup';
    categoryColor = 'text-[#FDE68A] bg-[#FDE68A]/15 border-[#FDE68A]/40';
    categoryMessage = 'Cukup baik! Tinggal sedikit lagi untuk mencapai kategori memuaskan. Perhatikan kembali beberapa soal yang belum tepat.';
  }

  // Kegiatan breakdown analysis
  const incorrectAnswers = userAnswers.filter(a => !a.isCorrect);
  const kegiatan1Wrong = incorrectAnswers.filter(a => a.kegiatan === 1).length;
  const kegiatan2Wrong = incorrectAnswers.filter(a => a.kegiatan === 2).length;
  const kegiatan3Wrong = incorrectAnswers.filter(a => a.kegiatan === 3).length;

  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 max-w-3xl mx-auto animate-fadeIn">
      {/* Result Card */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl mb-8">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#5EEAD4]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-16 h-16 rounded-full bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-[#5EEAD4] mx-auto mb-4 shadow-inner">
          <Award className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EEEDFB] mb-2">
          Hasil Latihan Soal
        </h1>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mb-6">
          Paket: {selectedMode === 'semua' ? 'Semua Soal Acak' : `Kegiatan ${selectedMode}`}
        </p>

        {/* Score Circles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0B2A]/90 border border-[#3A3280] w-full sm:w-44">
            <span className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider block mb-1">
              Skor Perolehan
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#EEEDFB]">
              {score} <span className="text-base text-[#B8B5DE] font-normal">/ {total}</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0B2A]/90 border border-[#3A3280] w-full sm:w-44">
            <span className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider block mb-1">
              Persentase Nilai
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#5EEAD4]">
              {percentage}%
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0B2A]/90 border border-[#3A3280] w-full sm:w-44">
            <span className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider block mb-1">
              Kategori Predikat
            </span>
            <div className="mt-1">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold border ${categoryColor}`}>
                {categoryLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Category Description Message */}
        <p className="text-xs sm:text-sm text-[#EEEDFB] max-w-lg mx-auto leading-relaxed bg-[#150F38]/80 p-4 rounded-xl border border-[#3A3280]">
          {categoryMessage}
        </p>
      </div>

      {/* Review Recommendations: Daftar Kegiatan yang Perlu Diulang */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 mb-8">
        <h2 className="text-sm sm:text-base font-bold text-[#EEEDFB] mb-3 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-[#5EEAD4]" />
          <span>Analisis Capaian & Rekomendasi Tindak Lanjut</span>
        </h2>

        {incorrectAnswers.length === 0 ? (
          <div className="p-4 bg-[#5EEAD4]/10 border border-[#5EEAD4]/30 rounded-xl text-xs sm:text-sm text-[#5EEAD4] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>
              Selamat! Kamu menjawab SEMUA soal dengan benar. Tidak ada materi yang perlu diulang!
            </span>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-[#B8B5DE]">
              Berdasarkan jawabanmu, berikut kegiatan yang perlu dipelajari ulang:
            </p>

            {kegiatan1Wrong > 0 && (
              <div className="p-3.5 bg-[#0F0B2A] border border-[#FFA8C5]/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#FFA8C5]">
                    Kegiatan 1: Kekhasan & Kedudukan Atom Karbon ({kegiatan1Wrong} salah)
                  </span>
                  <p className="text-[#B8B5DE]">
                    Fokuskan review pada: Konfigurasi elektron 6C, kestabilan ikatan kovalen, dan penentuan atom C 1°, 2°, 3°, 4°.
                  </p>
                </div>
                <button
                  onClick={handleGoToMateri}
                  className="px-3 py-1.5 rounded-lg bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-[#5EEAD4] font-semibold text-xs shrink-0 cursor-pointer"
                >
                  Buka Materi
                </button>
              </div>
            )}

            {kegiatan2Wrong > 0 && (
              <div className="p-3.5 bg-[#0F0B2A] border border-[#FFA8C5]/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#FFA8C5]">
                    Kegiatan 2: Penggolongan & Tata Nama IUPAC ({kegiatan2Wrong} salah)
                  </span>
                  <p className="text-[#B8B5DE]">
                    Fokuskan review pada: Deret homolog CH2, rumus umum alkena/alkuna, penomoran terdekat ikatan rangkap, dan urutan alfabet cabang.
                  </p>
                </div>
                <button
                  onClick={handleGoToMateri}
                  className="px-3 py-1.5 rounded-lg bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-[#5EEAD4] font-semibold text-xs shrink-0 cursor-pointer"
                >
                  Buka Materi
                </button>
              </div>
            )}

            {kegiatan3Wrong > 0 && (
              <div className="p-3.5 bg-[#0F0B2A] border border-[#FFA8C5]/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#FFA8C5]">
                    Kegiatan 3: Sifat, Reaksi & Isomer ({kegiatan3Wrong} salah)
                  </span>
                  <p className="text-[#B8B5DE]">
                    Fokuskan review pada: Titik didih rantai lurus vs cabang, reaksi adisi Markovnikov, dan pembedaan isomer struktur vs cis-trans.
                  </p>
                </div>
                <button
                  onClick={handleGoToMateri}
                  className="px-3 py-1.5 rounded-lg bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-[#5EEAD4] font-semibold text-xs shrink-0 cursor-pointer"
                >
                  Buka Materi
                </button>
              </div>
            )}
          </div>
        )}

        {/* Dynamic Advice Recommendation */}
        <div className="mt-5 p-4 rounded-xl bg-[#150F38] border border-[#3A3280] text-xs sm:text-sm text-[#EEEDFB] leading-relaxed flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[#5EEAD4] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#5EEAD4]">Saran Tindak Lanjut: </span>
            {percentage >= 80 ? (
              <span>
                Karena nilaimu sudah mencapai target kelulusan (≥ 80%), kamu sangat dianjurkan untuk melanjutkan ke tahap <strong>Penilaian Diri</strong> untuk mengonfirmasi penguasaan indikator KD secara mandiri!
              </span>
            ) : (
              <span>
                Karena nilaimu masih di bawah 80%, kami sarankan untuk mempelajari kembali materi pada kegiatan yang ditandai di atas sebelum mengulang latihan soal.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => startQuizSession(selectedMode)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5EEAD4] hover:bg-[#4dd6c0] text-[#0F0B2A] font-bold text-sm transition-all shadow-md cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Latihan Ini</span>
        </button>

        <button
          onClick={() => setViewState('menu')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-[#EEEDFB] font-semibold text-sm transition-all cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>Pilih Paket Soal Lain</span>
        </button>

        <button
          onClick={handleGoToMateri}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] font-semibold text-sm transition-all cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Kembali ke Materi</span>
        </button>

        {percentage >= 80 && (
          <button
            onClick={handleGoToPenilaianDiri}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B4A7FF] hover:bg-[#a192fc] text-[#0F0B2A] font-bold text-sm transition-all cursor-pointer"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Lanjut ke Penilaian Diri</span>
          </button>
        )}
      </div>
    </div>
  );
};
