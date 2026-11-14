/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Halaman Tentang - Placeholder "Segera Hadir"
 * Menguraikan latar belakang pengembangan, sasaran pengguna, dan rujukan kurikulum.
 */

import React from 'react';
import { Info, Atom, ArrowLeft, GraduationCap, ShieldCheck } from 'lucide-react';

interface TentangPageProps {
  onBackToBeranda: () => void;
}

export const TentangPage: React.FC<TentangPageProps> = ({ onBackToBeranda }) => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBackToBeranda}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8B5DE] hover:text-[#5EEAD4] transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </button>

      {/* Header Banner */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-8 mb-8 text-center sm:text-left relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#150F38] border border-[#3A3280] rounded-full text-xs font-semibold text-[#5EEAD4] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Media Edukasi Kimia Interaktif</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#EEEDFB]">
              Tentang Jelajahi Dunia Hidrokarbon
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#B8B5DE] max-w-xl leading-relaxed">
              Inisiatif platform pembelajaran kimia berbasis web yang dirancang khusus untuk memudahkan siswa SMA/MA Kelas XI memahami materi abstrak senyawa hidrokarbon.
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#150F38] border border-[#3A3280] flex items-center justify-center text-[#5EEAD4] shrink-0">
            <Atom className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1: Visi & Pendekatan Kosmis */}
        <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Atom className="w-5 h-5 text-[#5EEAD4]" />
            <h2 className="text-base font-bold text-[#EEEDFB]">
              Mengapa Bertema Galaksi?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
            Struktur atom karbon yang memiliki 4 elektron valensi dan mengikat atom hidrogen divisualisasikan menyerupai tata surya kosmis: atom karbon sebagai bintang pusat dan atom hidrogen sebagai planet pengorbit. Pendekatan visual ini memudahkan daya ingat dan daya imajinasi spasial siswa.
          </p>
        </div>

        {/* Card 2: Sasaran & Standar Kurikulum */}
        <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B4A7FF]" />
            <h2 className="text-base font-bold text-[#EEEDFB]">
              Sasaran Belajar & Privasi
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B8B5DE] leading-relaxed">
            Didesain responsif dengan fokus utama pada layar HP (smartphone) siswa, tanpa memerlukan login dan tanpa pencatatan server. Semua kemajuan belajar dan kuis tersimpan di peramban masing-masing secara privat.
          </p>
        </div>
      </div>

      {/* Credit Card */}
      <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 text-center">
        <p className="text-xs text-[#B8B5DE]">
          Dibuat oleh Mahasiswa UM Mengajar 2026
        </p>
      </div>
    </div>
  );
};
