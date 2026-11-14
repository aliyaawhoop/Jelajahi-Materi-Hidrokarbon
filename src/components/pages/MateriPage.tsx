/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Halaman Materi Lengkap: Kegiatan Pembelajaran 1, 2, & 3
 * Dilengkapi tab per kegiatan, sidebar sub-bab, dan progress bar interaktif.
 */

import React, { useState, useEffect } from 'react';
import {
  KEGIATAN_1_DATA,
  KEGIATAN_2_DATA,
  KEGIATAN_3_DATA
} from '../../data';
import { AtomCPosisiInteractive } from '../materi/AtomCPosisiInteractive';
import { SliderRumusMolekul } from '../materi/SliderRumusMolekul';
import { TabelDeretHomologMateri } from '../materi/TabelDeretHomologMateri';
import { TataNamaIUPACViewer } from '../materi/TataNamaIUPACViewer';
import { CekPemahamanBox } from '../materi/CekPemahamanBox';
import { SifatFisikaViewer } from '../materi/SifatFisikaViewer';
import { ReaksiKimiaStepViewer } from '../materi/ReaksiKimiaStepViewer';
import { PenjelajahIsomer } from '../materi/PenjelajahIsomer';
import {
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Atom,
  Layers,
  ChevronRight,
  Sparkles,
  Info,
  Award
} from 'lucide-react';

interface MateriPageProps {
  onBackToBeranda: () => void;
}

export const MateriPage: React.FC<MateriPageProps> = ({ onBackToBeranda }) => {
  const [activeKegiatan, setActiveKegiatan] = useState<'kegiatan-1' | 'kegiatan-2' | 'kegiatan-3'>('kegiatan-1');
  const [activeSubBabId, setActiveSubBabId] = useState<string>('1.1');

  // Track opened sub-babs with localStorage persistence
  const [openedSubBabs, setOpenedSubBabs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hidrokarbon_opened_subbabs');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return ['1.1'];
  });

  // Total sub-babs across Kegiatan 1, 2, and 3
  const allSubBabs = [
    ...KEGIATAN_1_DATA.subBabs.map((s) => ({ ...s, kegiatan: 'kegiatan-1' as const })),
    ...KEGIATAN_2_DATA.subBabs.map((s) => ({ ...s, kegiatan: 'kegiatan-2' as const })),
    ...KEGIATAN_3_DATA.subBabs.map((s) => ({ ...s, kegiatan: 'kegiatan-3' as const }))
  ];

  // When activeSubBabId changes, mark it as opened
  useEffect(() => {
    if (!openedSubBabs.includes(activeSubBabId)) {
      const nextOpened = [...openedSubBabs, activeSubBabId];
      setOpenedSubBabs(nextOpened);
      try {
        localStorage.setItem('hidrokarbon_opened_subbabs', JSON.stringify(nextOpened));
      } catch {
        // ignore
      }
    }
  }, [activeSubBabId, openedSubBabs]);

  const progressPercentage = Math.round((openedSubBabs.length / allSubBabs.length) * 100);

  const handleSelectSubBab = (subId: string, kegiatan: 'kegiatan-1' | 'kegiatan-2' | 'kegiatan-3') => {
    setActiveKegiatan(kegiatan);
    setActiveSubBabId(subId);
    const element = document.getElementById(`subbab-${subId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSwitchKegiatan = (kegiatan: 'kegiatan-1' | 'kegiatan-2' | 'kegiatan-3') => {
    setActiveKegiatan(kegiatan);
    const firstSub = kegiatan === 'kegiatan-1' ? '1.1' : kegiatan === 'kegiatan-2' ? '2.1' : '3.1';
    setActiveSubBabId(firstSub);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Helper current sub-babs
  const currentSubBabs =
    activeKegiatan === 'kegiatan-1'
      ? KEGIATAN_1_DATA.subBabs
      : activeKegiatan === 'kegiatan-2'
      ? KEGIATAN_2_DATA.subBabs
      : KEGIATAN_3_DATA.subBabs;

  return (
    <div className="w-full py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Navigation & Back Button */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToBeranda}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8B5DE] hover:text-[#5EEAD4] transition-colors cursor-pointer py-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="text-xs text-[#B8B5DE]">
          Kimia SMA/MA Kelas XI · KD 3.1 & KD 4.1
        </div>
      </div>

      {/* PROGRESS BAR SECTION */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-4 sm:p-5 mb-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEEDFB]">
              Progres Belajar Materi
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-[#5EEAD4]">
            {progressPercentage}% Selesai ({openedSubBabs.length} dari {allSubBabs.length} Sub-bab Dibuka)
          </span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-2.5 bg-[#0F0B2A] rounded-full overflow-hidden border border-[#3A3280]/60">
          <div
            className="h-full bg-gradient-to-r from-[#5EEAD4] via-[#B4A7FF] to-[#FFA8C5] rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* KEGIATAN TABS SELECTOR (3 Tab Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {/* Tab Kegiatan 1 */}
        <button
          onClick={() => handleSwitchKegiatan('kegiatan-1')}
          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
            activeKegiatan === 'kegiatan-1'
              ? 'bg-[#1E1850] border-[#5EEAD4] shadow-lg shadow-[#5EEAD4]/10'
              : 'bg-[#150F38]/60 border-[#3A3280] hover:border-[#8E8BB5]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
              activeKegiatan === 'kegiatan-1'
                ? 'bg-[#5EEAD4] text-[#0F0B2A]'
                : 'bg-[#1E1850] text-[#B8B5DE] border border-[#3A3280]'
            }`}
          >
            01
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5EEAD4]">
              Kegiatan 1
            </span>
            <h2 className="text-sm sm:text-base font-bold text-[#EEEDFB]">
              Kekhasan Atom Karbon
            </h2>
            <p className="text-xs text-[#B8B5DE] line-clamp-1">
              Konfigurasi ₆C, 4 valensi, posisi 1°, 2°, 3°, 4°.
            </p>
          </div>
        </button>

        {/* Tab Kegiatan 2 */}
        <button
          onClick={() => handleSwitchKegiatan('kegiatan-2')}
          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
            activeKegiatan === 'kegiatan-2'
              ? 'bg-[#1E1850] border-[#B4A7FF] shadow-lg shadow-[#B4A7FF]/10'
              : 'bg-[#150F38]/60 border-[#3A3280] hover:border-[#8E8BB5]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
              activeKegiatan === 'kegiatan-2'
                ? 'bg-[#B4A7FF] text-[#0F0B2A]'
                : 'bg-[#1E1850] text-[#B8B5DE] border border-[#3A3280]'
            }`}
          >
            02
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4A7FF]">
              Kegiatan 2
            </span>
            <h2 className="text-sm sm:text-base font-bold text-[#EEEDFB]">
              Penggolongan & Tata Nama
            </h2>
            <p className="text-xs text-[#B8B5DE] line-clamp-1">
              Alkana, Alkena, Alkuna, Deret Homolog, & IUPAC.
            </p>
          </div>
        </button>

        {/* Tab Kegiatan 3 */}
        <button
          onClick={() => handleSwitchKegiatan('kegiatan-3')}
          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
            activeKegiatan === 'kegiatan-3'
              ? 'bg-[#1E1850] border-[#FFA8C5] shadow-lg shadow-[#FFA8C5]/10'
              : 'bg-[#150F38]/60 border-[#3A3280] hover:border-[#8E8BB5]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
              activeKegiatan === 'kegiatan-3'
                ? 'bg-[#FFA8C5] text-[#0F0B2A]'
                : 'bg-[#1E1850] text-[#B8B5DE] border border-[#3A3280]'
            }`}
          >
            03
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFA8C5]">
              Kegiatan 3
            </span>
            <h2 className="text-sm sm:text-base font-bold text-[#EEEDFB]">
              Sifat Hidrokarbon & Isomer
            </h2>
            <p className="text-xs text-[#B8B5DE] line-clamp-1">
              Reaksi bertahap, Markovnikov, & Penjelajah Isomer.
            </p>
          </div>
        </button>
      </div>

      {/* MAIN TWO-ZONE LAYOUT: SIDEBAR (SUB-BAB NAV) & CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SIDEBAR SUB-BAB NAVIGATOR */}
        <aside className="lg:col-span-4 bg-[#1E1850] border border-[#3A3280] rounded-2xl p-4 sm:p-5 lg:sticky lg:top-24 space-y-4">
          <div className="flex items-center justify-between border-b border-[#3A3280] pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#5EEAD4]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEEDFB]">
                Daftar Sub-Bab
              </span>
            </div>
            <span className="text-[11px] text-[#B8B5DE]">
              {activeKegiatan === 'kegiatan-1'
                ? 'Kegiatan 1 (Hal. 8-10)'
                : activeKegiatan === 'kegiatan-2'
                ? 'Kegiatan 2 (Hal. 15-21)'
                : 'Kegiatan 3 (Hal. 28-31)'}
            </span>
          </div>

          <div className="space-y-1.5">
            {currentSubBabs.map((sub) => {
              const isCurrent = activeSubBabId === sub.id;
              const isOpened = openedSubBabs.includes(sub.id);

              return (
                <button
                  key={sub.id}
                  onClick={() => handleSelectSubBab(sub.id, activeKegiatan)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                    isCurrent
                      ? activeKegiatan === 'kegiatan-1'
                        ? 'bg-[#150F38] border border-[#5EEAD4] text-[#5EEAD4] font-bold'
                        : activeKegiatan === 'kegiatan-2'
                        ? 'bg-[#150F38] border border-[#B4A7FF] text-[#B4A7FF] font-bold'
                        : 'bg-[#150F38] border border-[#FFA8C5] text-[#FFA8C5] font-bold'
                      : 'text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#150F38]/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="font-mono text-xs font-bold shrink-0">
                      {sub.id}
                    </span>
                    <span className="truncate">{sub.judul}</span>
                  </div>
                  {isOpened && (
                    <CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#3A3280]/60 text-[11px] text-[#B8B5DE] leading-relaxed">
            Klik sub-bab untuk berpindah langsung ke topik pembelajaran yang diinginkan.
          </div>
        </aside>

        {/* CONTENT STAGE */}
        <div className="lg:col-span-8 space-y-10">
          {/* ================================================================ */}
          {/* ISI KEGIATAN 1                                                   */}
          {/* ================================================================ */}
          {activeKegiatan === 'kegiatan-1' && (
            <div className="space-y-10">
              {/* Sub-Bab 1.1: Kekhasan Atom Karbon */}
              <section id="subbab-1.1" className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/40">
                    Sub-Bab 1.1
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
                  Kekhasan Atom Karbon
                </h3>

                {/* Konfigurasi Box */}
                <div className="p-4 sm:p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3A3280] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#5EEAD4]/20 border border-[#5EEAD4]/50 flex items-center justify-center font-bold text-sm text-[#5EEAD4]">
                        ₆C
                      </div>
                      <div>
                        <div className="text-xs text-[#B8B5DE]">Nomor Atom Karbon: 6</div>
                        <div className="text-sm font-mono font-bold text-[#EEEDFB]">
                          {KEGIATAN_1_DATA.kekhasan.konfigurasi}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#150F38] border border-[#3A3280] text-xs font-bold text-[#5EEAD4]">
                      4 Elektron Valensi
                    </div>
                  </div>

                  <p className="text-sm text-[#EEEDFB] leading-relaxed">
                    {KEGIATAN_1_DATA.kekhasan.penjelasanValensi}
                  </p>
                </div>

                <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
                  <strong className="text-[#5EEAD4]">Kestabilan Ikatan:</strong> {KEGIATAN_1_DATA.kekhasan.keistimewaanIkatan}
                </div>
              </section>

              {/* Sub-Bab 1.2: Bentuk Ikatan & Bentuk Rantai Karbon */}
              <section id="subbab-1.2" className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg scroll-mt-24">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      Sub-Bab 1.2
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
                    Bentuk Ikatan Kovalen & Kerangka Rantai Karbon
                  </h3>
                </div>

                {/* Jenis Ikatan: Tunggal, Rangkap 2, Rangkap 3 */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8B5DE]">
                    1. Berdasarkan Jumlah Pasangan Elektron Ikatan:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {KEGIATAN_1_DATA.bentukIkatan.map((ikatan) => (
                      <div
                        key={ikatan.jenis}
                        className="p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#EEEDFB]">
                            {ikatan.jenis}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            ikatan.sifat === 'Jenuh' ? 'bg-[#5EEAD4]/20 text-[#5EEAD4]' : 'bg-[#FFA8C5]/20 text-[#FFA8C5]'
                          }`}>
                            {ikatan.sifat}
                          </span>
                        </div>
                        <p className="text-xs text-[#B8B5DE] leading-relaxed">
                          {ikatan.penjelasan}
                        </p>
                        <div className="text-xs font-mono text-[#A99CFF]">
                          {ikatan.contoh}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bentuk Rantai: Terbuka (Alifatik) & Tertutup (Siklis) */}
                <div className="space-y-3 pt-4 border-t border-[#3A3280]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8B5DE]">
                    2. Berdasarkan Bentuk Susunan Rantai Karbon:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {KEGIATAN_1_DATA.bentukRantai.map((rantai) => (
                      <div
                        key={rantai.nama}
                        className="p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-2"
                      >
                        <h5 className="text-sm font-bold text-[#5EEAD4]">
                          {rantai.nama}
                        </h5>
                        <div className="space-y-2">
                          {rantai.subTipe.map((st) => (
                            <div key={st.nama} className="p-2.5 bg-[#150F38] rounded-lg border border-[#3A3280]/60 text-xs">
                              <span className="font-bold text-[#EEEDFB] block mb-0.5">{st.nama}:</span>
                              <span className="text-[#B8B5DE] leading-relaxed">{st.deskripsi}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Sub-Bab 1.3: Posisi Atom C (Interaktif) */}
              <section id="subbab-1.3" className="scroll-mt-24">
                <AtomCPosisiInteractive />
              </section>

              {/* Sub-Bab 1.4: Rangkuman & Cek Pemahaman Kegiatan 1 */}
              <section id="subbab-1.4" className="space-y-6 scroll-mt-24">
                {/* Rangkuman */}
                <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5EEAD4]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#EEEDFB]">
                      Rangkuman Kegiatan Pembelajaran 1
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {KEGIATAN_1_DATA.rangkuman.map((poin, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
                        <span className="text-[#5EEAD4] font-bold mt-0.5">#{idx + 1}</span>
                        <span>{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cek Pemahaman */}
                <CekPemahamanBox
                  judul="Cek Pemahaman: Kegiatan Pembelajaran 1"
                  soals={KEGIATAN_1_DATA.cekPemahaman}
                  aksenColor="#5EEAD4"
                />

                {/* Tombol Lanjut ke Kegiatan 2 */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => handleSwitchKegiatan('kegiatan-2')}
                    className="px-5 py-3 rounded-xl bg-[#B4A7FF] text-[#0F0B2A] font-bold text-xs sm:text-sm hover:bg-[#9E8EFE] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Lanjut ke Kegiatan 2: Penggolongan Hidrokarbon</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* ================================================================ */}
          {/* ISI KEGIATAN 2                                                   */}
          {/* ================================================================ */}
          {activeKegiatan === 'kegiatan-2' && (
            <div className="space-y-10">
              {/* Sub-Bab 2.1: Penggolongan Alkana, Alkena, Alkuna */}
              <section id="subbab-2.1" className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#B4A7FF]/20 text-[#B4A7FF] border border-[#B4A7FF]/40">
                    Sub-Bab 2.1
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
                  Penggolongan Hidrokarbon Alifatik: Alkana, Alkena, dan Alkuna
                </h3>

                {/* 3 Golongan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {KEGIATAN_2_DATA.golonganUtama.map((gol) => (
                    <div
                      key={gol.id}
                      className="p-5 bg-[#0F0B2A] border rounded-xl space-y-3 flex flex-col justify-between"
                      style={{ borderColor: `${gol.warna}50` }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xl font-bold" style={{ color: gol.warna }}>
                            {gol.simbolIkatan}
                          </span>
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#150F38] border border-[#3A3280] text-[#EEEDFB]">
                            {gol.rumusUmum}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-[#EEEDFB]">
                          {gol.nama}
                        </h4>
                        <div className="text-xs font-medium" style={{ color: gol.warna }}>
                          {gol.jenisIkatan}
                        </div>
                        <p className="text-xs text-[#B8B5DE] leading-relaxed">
                          {gol.deskripsi}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#3A3280]/60 text-xs">
                        <span className="text-[#B8B5DE] block text-[11px]">Suku Paling Sederhana:</span>
                        <strong className="text-[#EEEDFB] font-mono">{gol.anggotaSederhana}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sub-Bab 2.2: Deret Homolog & Tabel Rumus Struktur */}
              <section id="subbab-2.2" className="scroll-mt-24">
                <TabelDeretHomologMateri />
              </section>

              {/* Sub-Bab 2.3: Slider Rumus Molekul Interaktif */}
              <section id="subbab-2.3" className="scroll-mt-24">
                <SliderRumusMolekul />
              </section>

              {/* Sub-Bab 2.5 & 2.6 & 2.7: Tata Nama IUPAC & 9 Contoh & Latihan */}
              <section id="subbab-2.5" className="scroll-mt-24">
                <TataNamaIUPACViewer />
              </section>

              {/* Sub-Bab 2.8: Rangkuman & Cek Pemahaman Kegiatan 2 */}
              <section id="subbab-2.8" className="space-y-6 scroll-mt-24">
                {/* Rangkuman Kegiatan 2 */}
                <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#B4A7FF]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#EEEDFB]">
                      Rangkuman Kegiatan Pembelajaran 2
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {KEGIATAN_2_DATA.rangkuman.map((poin, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
                        <span className="text-[#B4A7FF] font-bold mt-0.5">#{idx + 1}</span>
                        <span>{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cek Pemahaman Kegiatan 2 */}
                <CekPemahamanBox
                  judul="Cek Pemahaman: Kegiatan Pembelajaran 2"
                  soals={KEGIATAN_2_DATA.cekPemahaman}
                  aksenColor="#B4A7FF"
                />

                {/* Tombol Navigasi Antar Kegiatan */}
                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => handleSwitchKegiatan('kegiatan-1')}
                    className="px-4 py-2.5 rounded-xl border border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    ← Kembali ke Kegiatan 1
                  </button>

                  <button
                    onClick={() => handleSwitchKegiatan('kegiatan-3')}
                    className="px-5 py-2.5 rounded-xl bg-[#FFA8C5] text-[#0F0B2A] font-bold text-xs sm:text-sm hover:bg-[#FF94B6] transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                  >
                    <span>Lanjut ke Kegiatan 3: Sifat & Isomer</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* ================================================================ */}
          {/* ISI KEGIATAN 3                                                   */}
          {/* ================================================================ */}
          {activeKegiatan === 'kegiatan-3' && (
            <div className="space-y-10">
              {/* Sub-Bab 3.1: Sifat Fisika Hidrokarbon */}
              <section id="subbab-3.1" className="scroll-mt-24">
                <SifatFisikaViewer />
              </section>

              {/* Sub-Bab 3.2 & 3.3: Reaksi-Reaksi Kimia Hidrokarbon & Aturan Markovnikov */}
              <section id="subbab-3.2" className="scroll-mt-24">
                <ReaksiKimiaStepViewer />
              </section>

              {/* Sub-Bab 3.4 & 3.5: Penjelajah Isomer KD 4.1 */}
              <section id="subbab-3.4" className="scroll-mt-24">
                <PenjelajahIsomer />
              </section>

              {/* Sub-Bab 3.6: Rangkuman & Cek Pemahaman Kegiatan 3 */}
              <section id="subbab-3.6" className="space-y-6 scroll-mt-24">
                {/* Rangkuman Kegiatan 3 */}
                <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#FFA8C5]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#EEEDFB]">
                      Rangkuman Kegiatan Pembelajaran 3
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {KEGIATAN_3_DATA.rangkuman.map((poin, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
                        <span className="text-[#FFA8C5] font-bold mt-0.5">#{idx + 1}</span>
                        <span>{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cek Pemahaman Kegiatan 3 */}
                <CekPemahamanBox
                  judul="Cek Pemahaman: Kegiatan Pembelajaran 3"
                  soals={KEGIATAN_3_DATA.cekPemahaman}
                  aksenColor="#FFA8C5"
                />

                {/* Navigasi Footer Halaman Materi */}
                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => handleSwitchKegiatan('kegiatan-2')}
                    className="px-4 py-2.5 rounded-xl border border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    ← Kembali ke Kegiatan 2
                  </button>

                  <button
                    onClick={onBackToBeranda}
                    className="px-5 py-2.5 rounded-xl bg-[#5EEAD4] text-[#0F0B2A] font-bold text-xs sm:text-sm hover:bg-[#48D4BE] transition-all cursor-pointer shadow-md"
                  >
                    Kembali ke Beranda
                  </button>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
