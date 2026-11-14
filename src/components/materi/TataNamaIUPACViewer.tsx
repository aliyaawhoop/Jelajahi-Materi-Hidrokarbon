/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Tata Nama IUPAC Viewer:
 * - Stepper 4 Langkah Sistematis
 * - 9 Contoh Resmi Modul (Alkana, Alkena, Alkuna)
 * - Latihan Penamaan Interaktif Step-by-Step
 */

import React, { useState } from 'react';
import { KEGIATAN_2_DATA, ContohTataNama } from '../../data';
import { CheckCircle2, AlertCircle, ArrowRight, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

export const TataNamaIUPACViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeGolonganContoh, setActiveGolonganContoh] = useState<'semua' | 'alkana' | 'alkena' | 'alkuna'>('semua');
  const [selectedContohId, setSelectedContohId] = useState<string>('ex-1');

  // Latihan interaktif state
  const latihan = KEGIATAN_2_DATA.latihanInteraktif;
  const [jawabanUser, setJawabanUser] = useState<{ [key: string]: number | null }>({
    l1: null,
    l2: null,
    l3: null,
    l4: null
  });

  const filteredContoh = KEGIATAN_2_DATA.contohTataNamaModul.filter(
    (c) => activeGolonganContoh === 'semua' || c.golongan === activeGolonganContoh
  );

  const selectedContoh = KEGIATAN_2_DATA.contohTataNamaModul.find((c) => c.id === selectedContohId) || filteredContoh[0];

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-8">
      {/* SECTION 1: STEPPER TATA NAMA IUPAC */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A99CFF]">
            Panduan 4 Langkah
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Aturan Tata Nama IUPAC
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1 leading-relaxed">
          Pahami empat tahapan terstruktur dalam memberikan nama resmi senyawa hidrokarbon:
        </p>

        {/* Stepper buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
          {KEGIATAN_2_DATA.tataNamaStepper.map((step) => {
            const isActive = activeStep === step.langkah;
            return (
              <button
                key={step.langkah}
                onClick={() => setActiveStep(step.langkah)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                  isActive
                    ? 'bg-[#150F38] border-[#A99CFF] shadow-md shadow-[#A99CFF]/10'
                    : 'bg-[#0F0B2A] border-[#3A3280] hover:border-[#8E8BB5]'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                    isActive ? 'bg-[#A99CFF] text-[#0F0B2A]' : 'bg-[#1E1850] text-[#EEEDFB]'
                  }`}
                >
                  {step.langkah}
                </span>
                <div className="truncate">
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-[#EEEDFB]' : 'text-[#B8B5DE]'}`}>
                    Langkah {step.langkah}
                  </div>
                  <div className="text-[10px] text-[#8E8BB5] truncate">
                    {step.judul}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Panel */}
        {(() => {
          const cur = KEGIATAN_2_DATA.tataNamaStepper.find((s) => s.langkah === activeStep)!;
          return (
            <div className="p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#A99CFF]/20 text-[#A99CFF] border border-[#A99CFF]/40">
                  Tahap 0{cur.langkah}
                </span>
                <h4 className="text-base font-bold text-[#EEEDFB]">
                  {cur.judul}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Alkana Rule */}
                <div className="p-4 bg-[#150F38] border border-[#5EEAD4]/40 rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-[#5EEAD4]">
                    Aturan untuk Alkana (Ikatan Tunggal):
                  </div>
                  <p className="text-xs sm:text-sm text-[#EEEDFB] leading-relaxed">
                    {cur.deskripsiAlkana}
                  </p>
                </div>

                {/* Alkena & Alkuna Rule */}
                <div className="p-4 bg-[#150F38] border border-[#B4A7FF]/40 rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-[#B4A7FF]">
                    Aturan untuk Alkena & Alkuna (Ikatan Rangkap):
                  </div>
                  <p className="text-xs sm:text-sm text-[#EEEDFB] leading-relaxed">
                    {cur.deskripsiAlkenaAlkuna}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* SECTION 2: 9 CONTOH TATA NAMA RESMI MODUL */}
      <div className="pt-6 border-t border-[#3A3280]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
              9 Contoh Lengkap Tata Nama
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#EEEDFB]">
              Koleksi 9 Contoh Resmi Tata Nama IUPAC
            </h4>
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-1.5 bg-[#0F0B2A] p-1 border border-[#3A3280] rounded-xl text-xs">
            <button
              onClick={() => setActiveGolonganContoh('semua')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activeGolonganContoh === 'semua'
                  ? 'bg-[#1E1850] text-[#EEEDFB] font-bold border border-[#3A3280]'
                  : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
              }`}
            >
              Semua (9)
            </button>
            <button
              onClick={() => setActiveGolonganContoh('alkana')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeGolonganContoh === 'alkana'
                  ? 'bg-[#1E1850] text-[#5EEAD4] font-bold border border-[#5EEAD4]/40'
                  : 'text-[#B8B5DE] hover:text-[#5EEAD4]'
              }`}
            >
              <span className="font-mono font-bold">—</span>
              <span>Alkana</span>
            </button>
            <button
              onClick={() => setActiveGolonganContoh('alkena')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeGolonganContoh === 'alkena'
                  ? 'bg-[#1E1850] text-[#B4A7FF] font-bold border border-[#B4A7FF]/40'
                  : 'text-[#B8B5DE] hover:text-[#B4A7FF]'
              }`}
            >
              <span className="font-mono font-bold">=</span>
              <span>Alkena</span>
            </button>
            <button
              onClick={() => setActiveGolonganContoh('alkuna')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeGolonganContoh === 'alkuna'
                  ? 'bg-[#1E1850] text-[#FFA8C5] font-bold border border-[#FFA8C5]/40'
                  : 'text-[#B8B5DE] hover:text-[#FFA8C5]'
              }`}
            >
              <span className="font-mono font-bold">≡</span>
              <span>Alkuna</span>
            </button>
          </div>
        </div>

        {/* Horizontal chip selector for the 9 examples */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
          {filteredContoh.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedContohId(ex.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedContoh.id === ex.id
                  ? 'bg-[#150F38] border-[#5EEAD4] text-[#5EEAD4] shadow-md shadow-[#5EEAD4]/10'
                  : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
              }`}
            >
              {ex.namaIUPAC}
            </button>
          ))}
        </div>

        {/* Detail Box for Selected Example */}
        {selectedContoh && (
          <div className="p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3A3280] pb-3">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-[#A99CFF]">
                  Golongan {selectedContoh.golongan.toUpperCase()}
                </span>
                <h5 className="text-xl font-bold text-[#EEEDFB] mt-0.5">
                  {selectedContoh.namaIUPAC}
                </h5>
              </div>
            </div>

            {/* Structure Formula Display */}
            <div className="p-4 bg-[#1E1850] border border-[#3A3280] rounded-xl">
              <span className="text-[11px] font-semibold text-[#B8B5DE] uppercase tracking-wider block mb-1">
                Rumus Struktur:
              </span>
              <div className="font-mono text-base sm:text-lg font-bold text-[#5EEAD4] overflow-x-auto py-1">
                {selectedContoh.rumusStrukturTeks}
              </div>
            </div>

            {/* Step-by-step breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-1">
                <span className="font-bold text-[#5EEAD4]">1. Rantai Induk:</span>
                <p className="text-[#EEEDFB]">{selectedContoh.langkah1_RantaiInduk}</p>
              </div>
              <div className="p-3 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-1">
                <span className="font-bold text-[#B4A7FF]">2. Arah Penomoran:</span>
                <p className="text-[#EEEDFB]">{selectedContoh.langkah2_Penomoran}</p>
              </div>
              <div className="p-3 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-1">
                <span className="font-bold text-[#FFA8C5]">3. Identifikasi Cabang:</span>
                <p className="text-[#EEEDFB]">{selectedContoh.langkah3_Cabang}</p>
              </div>
              <div className="p-3 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-1">
                <span className="font-bold text-[#FDE68A]">4. Nama Lengkap IUPAC:</span>
                <p className="text-[#EEEDFB] font-semibold">{selectedContoh.langkah4_NamaAkhir}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION 3: LATIHAN PENAMAAN INTERAKTIF STEP-BY-STEP */}
      <div className="pt-6 border-t border-[#3A3280]">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDE68A]">
              Latihan Interaktif Siswa
            </span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#EEEDFB]">
            {latihan.judul}
          </h4>
          <p className="text-xs text-[#B8B5DE] mt-1">
            Tentukan nama senyawa berikut melalui 4 langkah penalaran berurutan.
          </p>
        </div>

        {/* Problem Card */}
        <div className="p-4 sm:p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl mb-5 text-center">
          <span className="text-xs text-[#8E8BB5] uppercase tracking-wider">Struktur Senyawa Uji:</span>
          <div className="font-mono text-base sm:text-xl font-bold text-[#5EEAD4] my-2">
            {latihan.struktur}
          </div>
          <span className="text-xs text-[#B8B5DE]">
            Golongan: <strong className="text-[#B4A7FF] uppercase">{latihan.golongan}</strong> ({latihan.rumusMolekul})
          </span>
        </div>

        {/* 4 Interactive Steps */}
        <div className="space-y-4">
          {/* Langkah 1 */}
          <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-3">
            <div className="text-xs font-bold text-[#5EEAD4]">
              {latihan.langkah1.pertanyaan}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {latihan.langkah1.opsi.map((opsi, idx) => (
                <button
                  key={idx}
                  onClick={() => setJawabanUser((prev) => ({ ...prev, l1: idx }))}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border ${
                    jawabanUser.l1 === idx
                      ? idx === latihan.langkah1.jawabanBenarIndex
                        ? 'bg-[#5EEAD4]/20 border-[#5EEAD4] text-[#5EEAD4]'
                        : 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]'
                      : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                  }`}
                >
                  {opsi}
                </button>
              ))}
            </div>
            {jawabanUser.l1 !== null && (
              <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                jawabanUser.l1 === latihan.langkah1.jawabanBenarIndex
                  ? 'bg-[#5EEAD4]/10 text-[#5EEAD4] border border-[#5EEAD4]/30'
                  : 'bg-[#FFA8C5]/10 text-[#FFA8C5] border border-[#FFA8C5]/30'
              }`}>
                {latihan.langkah1.penjelasan}
              </div>
            )}
          </div>

          {/* Langkah 2 */}
          <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-3">
            <div className="text-xs font-bold text-[#B4A7FF]">
              {latihan.langkah2.pertanyaan}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {latihan.langkah2.opsi.map((opsi, idx) => (
                <button
                  key={idx}
                  onClick={() => setJawabanUser((prev) => ({ ...prev, l2: idx }))}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border ${
                    jawabanUser.l2 === idx
                      ? idx === latihan.langkah2.jawabanBenarIndex
                        ? 'bg-[#B4A7FF]/20 border-[#B4A7FF] text-[#B4A7FF]'
                        : 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]'
                      : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                  }`}
                >
                  {opsi}
                </button>
              ))}
            </div>
            {jawabanUser.l2 !== null && (
              <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                jawabanUser.l2 === latihan.langkah2.jawabanBenarIndex
                  ? 'bg-[#B4A7FF]/10 text-[#B4A7FF] border border-[#B4A7FF]/30'
                  : 'bg-[#FFA8C5]/10 text-[#FFA8C5] border border-[#FFA8C5]/30'
              }`}>
                {latihan.langkah2.penjelasan}
              </div>
            )}
          </div>

          {/* Langkah 3 */}
          <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-3">
            <div className="text-xs font-bold text-[#FFA8C5]">
              {latihan.langkah3.pertanyaan}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {latihan.langkah3.opsi.map((opsi, idx) => (
                <button
                  key={idx}
                  onClick={() => setJawabanUser((prev) => ({ ...prev, l3: idx }))}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border ${
                    jawabanUser.l3 === idx
                      ? idx === latihan.langkah3.jawabanBenarIndex
                        ? 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]'
                        : 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]'
                      : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                  }`}
                >
                  {opsi}
                </button>
              ))}
            </div>
            {jawabanUser.l3 !== null && (
              <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                jawabanUser.l3 === latihan.langkah3.jawabanBenarIndex
                  ? 'bg-[#FFA8C5]/10 text-[#FFA8C5] border border-[#FFA8C5]/30'
                  : 'bg-[#FFA8C5]/10 text-[#FFA8C5] border border-[#FFA8C5]/30'
              }`}>
                {latihan.langkah3.penjelasan}
              </div>
            )}
          </div>

          {/* Langkah 4 */}
          <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-3">
            <div className="text-xs font-bold text-[#FDE68A]">
              {latihan.langkah4.pertanyaan}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {latihan.langkah4.opsi.map((opsi, idx) => (
                <button
                  key={idx}
                  onClick={() => setJawabanUser((prev) => ({ ...prev, l4: idx }))}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border ${
                    jawabanUser.l4 === idx
                      ? idx === latihan.langkah4.jawabanBenarIndex
                        ? 'bg-[#5EEAD4]/20 border-[#5EEAD4] text-[#5EEAD4]'
                        : 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]'
                      : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                  }`}
                >
                  {opsi}
                </button>
              ))}
            </div>
            {jawabanUser.l4 !== null && (
              <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                jawabanUser.l4 === latihan.langkah4.jawabanBenarIndex
                  ? 'bg-[#5EEAD4]/10 text-[#5EEAD4] border border-[#5EEAD4]/30'
                  : 'bg-[#FFA8C5]/10 text-[#FFA8C5] border border-[#FFA8C5]/30'
              }`}>
                {latihan.langkah4.penjelasan}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
