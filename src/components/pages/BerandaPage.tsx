/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Landing Page (Beranda) Lengkap
 * - Hero dengan animasi SVG molekul melayang & orbit
 * - Kartu "Yang Akan Kamu Pelajari" (3 kartu)
 * - Bagian "Deret Homolog: Dari Sederhana sampai Dekana" (3 tab + baris planet)
 * - Peta Konsep Interaktif (cabang & sub-bab klik-able)
 * - Tujuan Belajar (KD 3.1 & KD 4.1)
 * - Cara Belajar 3 Langkah
 */

import React from 'react';
import { YANG_DIPELAJARI, TUJUAN_BELAJAR, CARA_BELAJAR } from '../../data';
import { MoleculeOrbit } from '../MoleculeOrbit';
import { DeretHomolog } from '../DeretHomolog';
import { PetaKonsep } from '../PetaKonsep';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Compass, Award } from 'lucide-react';
import { NavTab } from '../Navbar';

interface BerandaPageProps {
  onNavigateTab: (tab: NavTab) => void;
  onSelectSubBab: (subBabId: string) => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({ onNavigateTab, onSelectSubBab }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-8 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
        {/* Subtle decorative cosmic twinkling stars (pure CSS, lightweight) */}
        <div className="absolute top-12 left-8 w-1 h-1 rounded-full bg-[#FDE68A] animate-star-1 pointer-events-none" />
        <div className="absolute top-28 right-12 w-1.5 h-1.5 rounded-full bg-[#B4A7FF] animate-star-2 pointer-events-none" />
        <div className="absolute bottom-16 left-1/4 w-1 h-1 rounded-full bg-[#5EEAD4] animate-star-3 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Subtle Curriculum Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1E1850] border border-[#3A3280] rounded-full text-xs font-semibold text-[#EEEDFB]">
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>Kimia SMA/MA Kelas XI · Kurikulum Nasional</span>
            </div>

            {/* Main Title with subtle gradient strictly on text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EEEDFB] leading-[1.15] text-balance">
              Jelajahi Dunia{' '}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#B4A7FF] to-[#FFA8C5] bg-clip-text text-transparent">
                Hidrokarbon
              </span>
            </h1>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              {/* Primary CTA (Solid #A99CFF, text #0F0B2A, NO gradient) */}
              <button
                onClick={() => {
                  const el = document.getElementById('yang-dipelajari');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#A99CFF] text-[#0F0B2A] rounded-xl font-bold text-sm sm:text-base hover:bg-[#9889FC] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#A99CFF]/15 cursor-pointer min-h-[48px]"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA (Outline #A99CFF, text #EEEDFB, NO gradient) */}
              <button
                onClick={() => onNavigateTab('latihan-soal')}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#A99CFF] text-[#EEEDFB] rounded-xl font-semibold text-sm sm:text-base hover:bg-[#A99CFF]/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Coba Latihan Soal</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Column: SVG Molecule Animation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 shadow-xl flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs text-[#B8B5DE] mb-2 px-1">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Visualisasi Molekul</span>
                <span className="text-[#FDE68A] text-xs">Orbit Kosmis</span>
              </div>
              <MoleculeOrbit />
            </div>
          </div>
        </div>
      </section>

      {/* 2. KARTU "YANG AKAN KAMU PELAJARI" (3 KARTU) */}
      <section id="yang-dipelajari" className="w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A99CFF]">
            Cakupan Pengetahuan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#EEEDFB] mt-1.5">
            Yang Akan Kamu Pelajari
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YANG_DIPELAJARI.map((item) => (
            <div
              key={item.nomor}
              className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-7 shadow-lg hover:border-[#8E8BB5]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm"
                    style={{
                      backgroundColor: `${item.warnaAksen}20`,
                      color: item.warnaAksen,
                      border: `1px solid ${item.warnaAksen}50`
                    }}
                  >
                    {item.nomor}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#8E8BB5]">
                    Simbol {item.simbol}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#EEEDFB] group-hover:text-[#5EEAD4] transition-colors leading-snug">
                  {item.judul}
                </h3>

                <p className="mt-3 text-sm text-[#B8B5DE] leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#3A3280]/60 flex items-center justify-between">
                <span className="text-xs text-[#8E8BB5]">Kurikulum SMA XI</span>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="text-xs font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                  style={{ color: item.warnaAksen }}
                >
                  <span>Buka bab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PETA KONSEP INTERAKTIF */}
      <PetaKonsep onSelectSubBab={(subId) => onSelectSubBab(subId)} />

      {/* 4. TUJUAN BELAJAR (KD 3.1 & KD 4.1) */}
      <section id="tujuan-belajar" className="w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#3A3280]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5EEAD4]">
                Kompetensi Dasar (KD)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#EEEDFB] mt-1">
                Tujuan Pembelajaran Siswa
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#B8B5DE] max-w-md leading-relaxed">
              Target capaian pembelajaran Kimia SMA/MA Kelas XI sesuai standar kurikulum nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TUJUAN_BELAJAR.map((tujuan) => (
              <div
                key={tujuan.kode}
                className="p-5 bg-[#0F0B2A]/70 border border-[#3A3280] rounded-xl flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs font-mono shrink-0"
                  style={{
                    backgroundColor: `${tujuan.warnaAksen}20`,
                    color: tujuan.warnaAksen,
                    border: `1px solid ${tujuan.warnaAksen}50`
                  }}
                >
                  {tujuan.kode}
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EEEDFB]">
                    {tujuan.jenis}
                  </span>
                  <p className="text-sm text-[#B8B5DE] leading-relaxed">
                    {tujuan.uraian}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARA BELAJAR 3 LANGKAH */}
      <section id="cara-belajar" className="w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A99CFF]">
            Alur Pembelajaran Mandiri
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEDFB] mt-1">
            Cara Belajar 3 Langkah
          </h2>
          <p className="mt-2 text-base text-[#B8B5DE] max-w-lg mx-auto leading-relaxed">
            Ikuti tiga langkah sederhana ini untuk menguasai materi hidrokarbon dengan efektif di rumah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARA_BELAJAR.map((item) => (
            <div
              key={item.langkah}
              className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#FDE68A] uppercase tracking-wider">
                    Langkah 0{item.langkah}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-xs font-bold text-[#EEEDFB]">
                    {item.langkah}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#EEEDFB]">
                  {item.nama}
                </h3>

                <p className="mt-2 text-sm text-[#B8B5DE] leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3A3280]/60">
                {item.langkah === 1 && (
                  <button
                    onClick={() => onNavigateTab('materi')}
                    className="text-xs font-semibold text-[#5EEAD4] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Mulai Membaca Materi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {item.langkah === 2 && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('deret-homolog');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#B4A7FF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Eksplorasi Deret Homolog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {item.langkah === 3 && (
                  <button
                    onClick={() => onNavigateTab('latihan-soal')}
                    className="text-xs font-semibold text-[#FFA8C5] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Uji Pemahaman Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BAGIAN "DERET HOMOLOG: DARI SEDERHANA SAMPAI DEKANA" */}
      <DeretHomolog onGoToMateri={() => onNavigateTab('materi')} />
    </div>
  );
};
