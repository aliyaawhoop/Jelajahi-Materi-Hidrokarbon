/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Deret Homolog Interaktif: Dari Sederhana sampai Dekana
 * Baris "planet" yang dapat disentuh/diklik untuk menampilkan rincian rumus molekul & perhitungan jumlah H.
 */

import React, { useState } from 'react';
import { DERET_HOMOLOG, CATATAN_DERET_HOMOLOG, GolonganHidrokarbon, HomologItem } from '../data';
import { Info, Sparkles, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

interface DeretHomologProps {
  onGoToMateri?: () => void;
}

export const DeretHomolog: React.FC<DeretHomologProps> = ({ onGoToMateri }) => {
  const [activeTab, setActiveTab] = useState<'alkana' | 'alkena' | 'alkuna'>('alkana');
  const [selectedN, setSelectedN] = useState<number>(1);

  const golongan: GolonganHidrokarbon = DERET_HOMOLOG[activeTab];

  // If switched tab and selectedN is 1 (metana) while alkena/alkuna starts at 2, adjust to 2
  const effectiveSelectedN = (activeTab !== 'alkana' && selectedN === 1) ? 2 : selectedN;

  const currentMolecule: HomologItem =
    golongan.anggota.find((item) => item.n === effectiveSelectedN) || golongan.anggota[0];

  const handleTabChange = (tab: 'alkana' | 'alkena' | 'alkuna') => {
    setActiveTab(tab);
    if (tab !== 'alkana' && effectiveSelectedN === 1) {
      setSelectedN(2);
    }
  };

  return (
    <section id="deret-homolog" className="w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1850] border border-[#3A3280] rounded-full text-xs font-semibold text-[#B8B5DE] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
          <span>Eksplorasi Kosmis Molekul</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#EEEDFB]">
          Deret Homolog: Dari Sederhana sampai Dekana
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#B8B5DE] max-w-2xl mx-auto leading-relaxed">
          Pilih golongan hidrokarbon, lalu sentuh lingkaran planet <span className="text-[#EEEDFB] font-semibold">(n = 1–10)</span> untuk melihat perubahan jumlah atom C dan rumus molekulnya.
        </p>
      </div>

      {/* 3 Golongan Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-8">
        {/* Tab Alkana */}
        <button
          onClick={() => handleTabChange('alkana')}
          className={`w-full sm:w-auto px-5 py-3 rounded-xl border font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
            activeTab === 'alkana'
              ? 'bg-[#1E1850] border-[#5EEAD4] text-[#5EEAD4] shadow-md shadow-[#5EEAD4]/10'
              : 'bg-[#1E1850]/50 border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] hover:border-[#3A3280]'
          }`}
          aria-selected={activeTab === 'alkana'}
          role="tab"
        >
          <span className="font-mono text-lg font-bold">―</span>
          <span>Alkana (ikatan tunggal)</span>
        </button>

        {/* Tab Alkena */}
        <button
          onClick={() => handleTabChange('alkena')}
          className={`w-full sm:w-auto px-5 py-3 rounded-xl border font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
            activeTab === 'alkena'
              ? 'bg-[#1E1850] border-[#B4A7FF] text-[#B4A7FF] shadow-md shadow-[#B4A7FF]/10'
              : 'bg-[#1E1850]/50 border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] hover:border-[#3A3280]'
          }`}
          aria-selected={activeTab === 'alkena'}
          role="tab"
        >
          <span className="font-mono text-lg font-bold">=</span>
          <span>Alkena (ikatan rangkap dua)</span>
        </button>

        {/* Tab Alkuna */}
        <button
          onClick={() => handleTabChange('alkuna')}
          className={`w-full sm:w-auto px-5 py-3 rounded-xl border font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
            activeTab === 'alkuna'
              ? 'bg-[#1E1850] border-[#FFA8C5] text-[#FFA8C5] shadow-md shadow-[#FFA8C5]/10'
              : 'bg-[#1E1850]/50 border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] hover:border-[#3A3280]'
          }`}
          aria-selected={activeTab === 'alkuna'}
          role="tab"
        >
          <span className="font-mono text-lg font-bold">≡</span>
          <span>Alkuna (ikatan rangkap tiga)</span>
        </button>
      </div>

      {/* Group Info Header Bar */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-4 sm:p-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xl font-bold shrink-0"
            style={{
              backgroundColor: `${golongan.warnaAksen}20`,
              color: golongan.warnaAksen,
              border: `1px solid ${golongan.warnaAksen}50`
            }}
          >
            {golongan.simbolIkatan}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#EEEDFB]">{golongan.nama}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#0F0B2A] border border-[#3A3280] text-[#B8B5DE] font-mono">
                {golongan.rumusUmum}
              </span>
            </div>
            <p className="text-sm text-[#B8B5DE] mt-0.5">{golongan.jenisIkatan}</p>
          </div>
        </div>

        {/* Notes for Alkena/Alkuna or CH2 difference */}
        <div className="text-xs sm:text-sm text-[#B8B5DE] bg-[#0F0B2A]/60 rounded-xl p-3 border border-[#3A3280]/60 max-w-md">
          {activeTab !== 'alkana' ? (
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#FDE68A] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#EEEDFB]">Catatan:</strong> {CATATAN_DERET_HOMOLOG.rangkap}
              </span>
            </div>
          ) : (
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#5EEAD4] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#EEEDFB]">Karakteristik:</strong> Setiap anggota berselisih satu gugus <code className="text-[#5EEAD4] font-mono">―CH₂―</code>.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Row of Planet Circles (Horizontal Touch-friendly Strip) */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-4 sm:p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs sm:text-sm font-semibold text-[#B8B5DE] uppercase tracking-wider">
            Pilih Nilai n (Jumlah Atom Karbon):
          </span>
          <span className="text-xs text-[#8E8BB5] hidden sm:inline">
            Geser ke samping jika menggunakan HP
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar py-2 -mx-2 px-2">
          <div className="flex items-end justify-start sm:justify-center gap-3 sm:gap-4 min-w-max pb-2">
            {golongan.anggota.map((item) => {
              const isSelected = item.n === effectiveSelectedN;
              // Planet size scales slightly with n (from 46px to 64px)
              const size = 46 + (item.n - 1) * 2;

              return (
                <button
                  key={item.n}
                  onClick={() => setSelectedN(item.n)}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderColor: isSelected ? golongan.warnaAksen : '#3A3280',
                    backgroundColor: isSelected ? '#150F38' : '#100C2F',
                    boxShadow: isSelected ? `0 0 16px ${golongan.warnaAksen}40` : 'none'
                  }}
                  className={`group relative rounded-full border-2 flex flex-col items-center justify-center transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isSelected ? 'scale-105 ring-2 ring-offset-2 ring-offset-[#1E1850]' : 'hover:border-[#8E8BB5]'
                  }`}
                  aria-label={`${item.nama}, n sama dengan ${item.n}, rumus ${item.rumusMolekul}`}
                >
                  {/* Planetary ring decoration */}
                  <span
                    className="absolute inset-0 rounded-full opacity-30 pointer-events-none border border-dashed"
                    style={{ borderColor: golongan.warnaAksen }}
                  />

                  {/* n Label */}
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: isSelected ? golongan.warnaAksen : '#EEEDFB' }}
                  >
                    n={item.n}
                  </span>

                  {/* Formula preview */}
                  <span className="text-[10px] text-[#B8B5DE] font-medium leading-none mt-0.5">
                    {item.rumusMolekul}
                  </span>

                  {/* Tiny selection dot indicator */}
                  {isSelected && (
                    <span
                      className="absolute -bottom-2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: golongan.warnaAksen }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick mobile navigation prev/next */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#3A3280]/60 sm:hidden">
          <button
            onClick={() => {
              const currentIndex = golongan.anggota.findIndex((m) => m.n === effectiveSelectedN);
              if (currentIndex > 0) setSelectedN(golongan.anggota[currentIndex - 1].n);
            }}
            disabled={golongan.anggota.findIndex((m) => m.n === effectiveSelectedN) === 0}
            className="flex items-center gap-1 text-xs text-[#B8B5DE] disabled:opacity-30 p-2"
          >
            <ChevronLeft className="w-4 h-4" /> Sebelumnya
          </button>
          <span className="text-xs font-mono text-[#EEEDFB]">
            {currentMolecule.nama} (n={currentMolecule.n})
          </span>
          <button
            onClick={() => {
              const currentIndex = golongan.anggota.findIndex((m) => m.n === effectiveSelectedN);
              if (currentIndex < golongan.anggota.length - 1) setSelectedN(golongan.anggota[currentIndex + 1].n);
            }}
            disabled={golongan.anggota.findIndex((m) => m.n === effectiveSelectedN) === golongan.anggota.length - 1}
            className="flex items-center gap-1 text-xs text-[#B8B5DE] disabled:opacity-30 p-2"
          >
            Berikutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DETAIL PANEL (SOLID #1E1850, BORDER #3A3280, NO BLUR) */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: Molecule badge & formula */}
          <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#3A3280] pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${golongan.warnaAksen}20`,
                  color: golongan.warnaAksen,
                  border: `1px solid ${golongan.warnaAksen}40`
                }}
              >
                {golongan.simbolIkatan} {golongan.nama} · n = {currentMolecule.n}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold capitalize text-[#EEEDFB]">
              {currentMolecule.nama}
            </h3>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-xs text-[#B8B5DE]">Rumus Molekul:</span>
              <span
                className="text-2xl sm:text-3xl font-mono font-bold tracking-wide"
                style={{ color: golongan.warnaAksen }}
              >
                {currentMolecule.rumusMolekul}
              </span>
            </div>

            {/* Visual carbon chain representations */}
            <div className="mt-5 p-3.5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl">
              <div className="text-xs text-[#B8B5DE] mb-2 font-semibold flex items-center justify-between">
                <span>Rantai Atom Karbon:</span>
                <span className="text-[#EEEDFB] font-mono">{currentMolecule.n} Atom C</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {Array.from({ length: currentMolecule.n }).map((_, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: idx === 0 ? golongan.warnaAksen : '#1E1850',
                        color: idx === 0 ? '#0F0B2A' : '#EEEDFB',
                        border: `1px solid ${golongan.warnaAksen}60`
                      }}
                      title={`Atom C ke-${idx + 1}`}
                    >
                      C
                    </div>
                    {idx < currentMolecule.n - 1 && (
                      <span className="font-mono text-sm font-bold" style={{ color: golongan.warnaAksen }}>
                        {idx === 0 && activeTab !== 'alkana' ? golongan.simbolIkatan : '―'}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mathematical Calculation of H & Pedagogy */}
          <div className="md:col-span-7 flex flex-col justify-center md:pl-2 space-y-4">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#B8B5DE]">
                Perhitungan Jumlah Atom Hidrogen (H)
              </span>
              <div className="mt-2 p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-xl">
                <div className="flex items-center justify-between text-xs text-[#B8B5DE] mb-1">
                  <span>Rumus Umum Golongan:</span>
                  <span className="font-mono text-[#EEEDFB] font-bold text-sm">{golongan.rumusUmum}</span>
                </div>
                <div className="text-base sm:text-lg font-mono font-semibold text-[#EEEDFB] mt-2">
                  {currentMolecule.perhitunganH}
                </div>
                <div className="text-xs text-[#5EEAD4] mt-2 font-mono">
                  → Menghasilkan {currentMolecule.rumusMolekul}
                </div>
              </div>
            </div>

            {/* Educational Notes */}
            <div className="space-y-2 text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-[#FDE68A] font-bold">✦</span>
                <span>{CATATAN_DERET_HOMOLOG.selisih}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#FDE68A] font-bold">✦</span>
                <span>{CATATAN_DERET_HOMOLOG.strukturNote}</span>
              </p>
            </div>

            {/* Action CTA */}
            {onGoToMateri && (
              <div className="pt-2">
                <button
                  onClick={onGoToMateri}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A99CFF] hover:text-[#EEEDFB] transition-colors cursor-pointer"
                >
                  <span>Pelajari tata nama lengkap di halaman Materi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
