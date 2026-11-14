/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Halaman Penilaian Diri Siswa "Jelajahi Dunia Hidrokarbon"
 * Mengelompokkan 15 butir refleksi diri per Kegiatan (1, 2, 3), masing-masing 5 butir.
 * - Tombol interaktif "Ya" dan "Tidak"
 * - Penyimpanan progres otomatis di localStorage
 * - Jika memilih "Tidak": tampilkan rekomendasi bagian materi spesifik yang harus dipelajari ulang
 * - Jika semua "Ya": tampilkan ucapan selamat, badge ketuntasan, dan tombol lanjut
 */

import React, { useState, useEffect } from 'react';
import { ARRAY_PENILAIAN_DIRI, ButirPenilaianDiri } from '../../data';
import {
  CheckSquare,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  Award,
  RotateCcw,
  ArrowRight,
  Target,
  AlertCircle
} from 'lucide-react';

interface PenilaianDiriPageProps {
  onBackToBeranda: () => void;
  onNavigateTab?: (tab: 'beranda' | 'materi' | 'latihan-soal' | 'penilaian-diri' | 'tentang') => void;
}

type TabKegiatan = 1 | 2 | 3;

export const PenilaianDiriPage: React.FC<PenilaianDiriPageProps> = ({
  onBackToBeranda,
  onNavigateTab
}) => {
  const [activeKegiatan, setActiveKegiatan] = useState<TabKegiatan>(1);

  // Map of item ID -> 'ya' | 'tidak'
  const [responses, setResponses] = useState<Record<number, 'ya' | 'tidak'>>(() => {
    try {
      const saved = localStorage.getItem('hidrokarbon_penilaian_diri');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return {};
  });

  // Save responses to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hidrokarbon_penilaian_diri', JSON.stringify(responses));
    } catch {
      // Ignore
    }
  }, [responses]);

  const handleSelectAnswer = (id: number, val: 'ya' | 'tidak') => {
    setResponses(prev => ({
      ...prev,
      [id]: val
    }));
  };

  const handleResetCurrentKegiatan = () => {
    const currentItems = ARRAY_PENILAIAN_DIRI.filter(item => item.kegiatan === activeKegiatan);
    setResponses(prev => {
      const updated = { ...prev };
      currentItems.forEach(item => {
        delete updated[item.id];
      });
      return updated;
    });
  };

  const handleGoToMateri = () => {
    if (onNavigateTab) {
      onNavigateTab('materi');
    }
  };

  const handleGoToLatihanSoal = () => {
    if (onNavigateTab) {
      onNavigateTab('latihan-soal');
    }
  };

  // Filter items for current activity
  const currentItems = ARRAY_PENILAIAN_DIRI.filter(item => item.kegiatan === activeKegiatan);
  const totalInCurrent = currentItems.length; // 5
  const answeredInCurrent = currentItems.filter(item => responses[item.id] !== undefined);
  const yaCountInCurrent = currentItems.filter(item => responses[item.id] === 'ya').length;
  const tidakItemsInCurrent = currentItems.filter(item => responses[item.id] === 'tidak');
  const isCurrentAllYa = yaCountInCurrent === totalInCurrent;
  const isCurrentComplete = answeredInCurrent.length === totalInCurrent;

  // Global counts across all 15 items
  const totalYaGlobal = Object.values(responses).filter(v => v === 'ya').length;

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

      {/* Header Banner */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#FFA8C5]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#FFA8C5] mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Instrumen Refleksi Mandiri Siswa (15 Indikator)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EEEDFB] tracking-tight">
              Penilaian Diri Pembelajaran
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#B8B5DE] max-w-xl leading-relaxed">
              Jawablah pertanyaan refleksi berikut secara jujur dan objektif untuk mengukur sejauh mana kamu telah menguasai indikator pembelajaran pada tiap kegiatan belajar.
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-[#FFA8C5] shrink-0 shadow-inner">
            <CheckSquare className="w-8 h-8" />
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-5 border-t border-[#3A3280]/80">
          <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
            <span className="text-[#B8B5DE]">
              Total Indikator Tuntas (Jawaban "Ya"):
            </span>
            <span className="font-bold text-[#5EEAD4]">
              {totalYaGlobal} dari 15 Indikator ({Math.round((totalYaGlobal / 15) * 100)}%)
            </span>
          </div>
          <div className="w-full h-2 bg-[#150F38] rounded-full overflow-hidden border border-[#3A3280]">
            <div
              className="h-full bg-gradient-to-r from-[#5EEAD4] via-[#B4A7FF] to-[#FFA8C5] transition-all duration-300"
              style={{ width: `${(totalYaGlobal / 15) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Kegiatan Tabs (1, 2, 3) */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
        {[
          { id: 1 as TabKegiatan, label: 'Kegiatan 1', sub: 'Kekhasan & Kedudukan C', color: '#5EEAD4' },
          { id: 2 as TabKegiatan, label: 'Kegiatan 2', sub: 'Penggolongan & Tata Nama', color: '#B4A7FF' },
          { id: 3 as TabKegiatan, label: 'Kegiatan 3', sub: 'Sifat, Reaksi & Isomer', color: '#FFA8C5' }
        ].map(tab => {
          const isActive = activeKegiatan === tab.id;
          const tabItems = ARRAY_PENILAIAN_DIRI.filter(i => i.kegiatan === tab.id);
          const tabYaCount = tabItems.filter(i => responses[i.id] === 'ya').length;
          const isTabTuntas = tabYaCount === tabItems.length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveKegiatan(tab.id)}
              className={`flex-1 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                isActive
                  ? 'bg-[#1E1850] border-[#5EEAD4] shadow-md ring-1 ring-[#5EEAD4]/40'
                  : 'bg-[#150F38]/70 hover:bg-[#1E1850] border-[#3A3280] text-[#B8B5DE]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${isActive ? 'text-[#5EEAD4]' : 'text-[#EEEDFB]'}`}>
                    {tab.label}
                  </span>
                  {isTabTuntas && (
                    <span className="w-2 h-2 rounded-full bg-[#5EEAD4]"></span>
                  )}
                </div>
                <div className="text-[11px] text-[#B8B5DE] truncate">
                  {tab.sub}
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded text-[11px] font-bold border shrink-0 ${
                isTabTuntas
                  ? 'bg-[#5EEAD4]/20 border-[#5EEAD4]/40 text-[#5EEAD4]'
                  : 'bg-[#150F38] border-[#3A3280] text-[#B8B5DE]'
              }`}>
                {tabYaCount}/5 Ya
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Checklist Card for Active Kegiatan */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-xl mb-8">
        {/* Header of Active Kegiatan */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#3A3280]/80">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#EEEDFB]">
              Instrumen Penilaian Diri: Kegiatan Belajar {activeKegiatan}
            </h2>
            <p className="text-xs text-[#B8B5DE]">
              Tandai "Ya" jika kamu merasa telah mampu, atau "Tidak" jika masih ragu.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetCurrentKegiatan}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#150F38] hover:bg-[#20194E] border border-[#3A3280] text-xs font-medium text-[#B8B5DE] hover:text-[#EEEDFB] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 5 Indicator Items */}
        <div className="space-y-4">
          {currentItems.map((item, idx) => {
            const resp = responses[item.id];
            const isYa = resp === 'ya';
            const isTidak = resp === 'tidak';

            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  isYa
                    ? 'bg-[#0F0B2A]/90 border-[#5EEAD4]/40'
                    : isTidak
                    ? 'bg-[#0F0B2A]/90 border-[#FFA8C5]/40'
                    : 'bg-[#0F0B2A]/50 border-[#3A3280]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-[10px] font-mono font-bold text-[#5EEAD4]">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-[#B4A7FF]">
                        {item.kd}
                      </span>
                      <span className="text-[11px] text-[#B8B5DE]">
                        ({item.indikator})
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#EEEDFB] leading-relaxed">
                      {item.pertanyaanRefleksi}
                    </p>
                  </div>

                  {/* Ya / Tidak Buttons */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => handleSelectAnswer(item.id, 'ya')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                        isYa
                          ? 'bg-[#5EEAD4] border-[#5EEAD4] text-[#0F0B2A] shadow-md'
                          : 'bg-[#150F38] hover:bg-[#20194E] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ya</span>
                    </button>

                    <button
                      onClick={() => handleSelectAnswer(item.id, 'tidak')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                        isTidak
                          ? 'bg-[#FFA8C5] border-[#FFA8C5] text-[#0F0B2A] shadow-md'
                          : 'bg-[#150F38] hover:bg-[#20194E] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                      }`}
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Tidak</span>
                    </button>
                  </div>
                </div>

                {/* Specific Recommendation if "Tidak" */}
                {isTidak && (
                  <div className="mt-3 pt-3 border-t border-[#FFA8C5]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs text-[#FFA8C5]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        Rekomendasi: Pelajari ulang <strong>{item.subBabRekomendasi.judul}</strong>
                      </span>
                    </div>

                    <button
                      onClick={handleGoToMateri}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#150F38] hover:bg-[#20194E] border border-[#FFA8C5]/40 text-[11px] font-semibold text-[#FFA8C5] hover:text-[#EEEDFB] transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Buka Materi</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FEEDBACK STATUS CARD FOR ACTIVE KEGIATAN */}
        {isCurrentComplete && (
          <div className="mt-6 pt-5 border-t border-[#3A3280] animate-fadeIn">
            {isCurrentAllYa ? (
              /* If all 5 items are "Ya" */
              <div className="p-5 bg-gradient-to-r from-[#5EEAD4]/15 via-[#B4A7FF]/10 to-[#5EEAD4]/15 border-2 border-[#5EEAD4] rounded-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-[#5EEAD4] text-[#0F0B2A] flex items-center justify-center shrink-0 shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#5EEAD4]/20 text-[#5EEAD4] text-xs font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>Kompetensi Tuntas 5/5</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#EEEDFB]">
                      Selamat! Kamu Telah Menguasai Kegiatan {activeKegiatan}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
                      Kamu telah merefleksikan seluruh indikator pada kegiatan ini dengan hasil tuntas. Kamu siap untuk melanjutkan ke kegiatan berikutnya atau menguji pemahaman lewat Latihan Soal!
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                    {activeKegiatan < 3 ? (
                      <button
                        onClick={() => setActiveKegiatan((activeKegiatan + 1) as TabKegiatan)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#5EEAD4] hover:bg-[#4dd6c0] text-[#0F0B2A] font-bold text-xs transition-all shadow-md cursor-pointer"
                      >
                        <span>Lanjut Kegiatan {activeKegiatan + 1}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : null}

                    <button
                      onClick={handleGoToLatihanSoal}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E1850] hover:bg-[#251E60] border border-[#5EEAD4]/50 text-[#5EEAD4] font-bold text-xs transition-all cursor-pointer"
                    >
                      <Target className="w-3.5 h-3.5" />
                      <span>Coba Latihan Soal</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* If there are any "Tidak" */
              <div className="p-5 bg-[#150F38] border border-[#FFA8C5]/40 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFA8C5]/15 border border-[#FFA8C5]/30 text-[#FFA8C5] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#EEEDFB]">
                      Perlu Penguatan pada {tidakItemsInCurrent.length} Indikator
                    </h3>
                    <p className="text-xs text-[#B8B5DE] leading-relaxed">
                      Kamu menjawab "Tidak" pada beberapa indikator berikut. Sebaiknya pelajari kembali bagian modul tersebut sebelum melanjutkan ke evaluasi ujian:
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {tidakItemsInCurrent.map(item => (
                        <li key={item.id} className="text-xs text-[#FFA8C5] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFA8C5]"></span>
                          <span>
                            <strong>{item.subBabRekomendasi.judul}</strong> ({item.indikator})
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={handleGoToMateri}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E1850] hover:bg-[#251E60] border border-[#3A3280] text-xs font-bold text-[#5EEAD4] transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Buka Halaman Materi</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Helpful Curriculum Note */}
      <div className="bg-[#150F38]/80 border border-[#3A3280] rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-[#B8B5DE]">
        <HelpCircle className="w-4 h-4 shrink-0 text-[#B4A7FF] mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold text-[#EEEDFB]">Catatan Pembelajaran Mandiri: </span>
          Penilaian diri ini disusun mengacu pada indikator pencapaian kompetensi KD 3.1 & 4.1 Kurikulum Kimia SMA/MA Kelas XI. Refleksi yang jujur akan membantumu memahami titik kekuatan dan konsep yang masih perlu dipelajari kembali.
        </div>
      </div>
    </div>
  );
};
