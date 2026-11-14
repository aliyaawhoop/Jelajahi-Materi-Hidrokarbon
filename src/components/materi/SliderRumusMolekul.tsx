/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Slider Interaktif Jumlah Atom C
 * Menghitung rumus molekul otomatis untuk alkana, alkena, dan alkuna.
 * Alkena dan alkuna memiliki batas minimal C₂ karena membutuhkan ikatan rangkap.
 */

import React, { useState } from 'react';
import { DERET_HOMOLOG } from '../../data';
import { Sliders, AlertCircle, ArrowRight } from 'lucide-react';

export const SliderRumusMolekul: React.FC = () => {
  const [n, setN] = useState<number>(3);

  // Helper names
  const getName = (golongan: 'alkana' | 'alkena' | 'alkuna', count: number) => {
    const list = DERET_HOMOLOG[golongan].anggota;
    const found = list.find((item) => item.n === count);
    return found ? found.nama : `(n = ${count})`;
  };

  const alkanaH = 2 * n + 2;
  const alkenaH = 2 * n;
  const alkunaH = 2 * n - 2;

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A99CFF]">
            Kalkulator Rumus Umum
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Eksplorasi Perubahan Nilai n (Jumlah Atom Karbon)
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1 leading-relaxed">
          Geser bilah slider di bawah untuk melihat bagaimana rumus umum menentukan jumlah atom H secara instan pada ketiga golongan hidrokarbon.
        </p>
      </div>

      {/* Slider Control Container */}
      <div className="p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="c-slider" className="text-sm font-semibold text-[#EEEDFB] flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#FDE68A]" />
            <span>Jumlah Atom Karbon (n):</span>
          </label>
          <span className="px-3.5 py-1 rounded-lg bg-[#1E1850] border border-[#A99CFF] font-mono text-lg font-extrabold text-[#A99CFF]">
            n = {n}
          </span>
        </div>

        <input
          id="c-slider"
          type="range"
          min="1"
          max="20"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-[#1E1850] rounded-lg appearance-none cursor-pointer accent-[#A99CFF]"
          aria-label="Jumlah atom karbon"
        />

        <div className="flex justify-between text-[11px] font-mono text-[#8E8BB5]">
          <span>n = 1</span>
          <span>n = 5</span>
          <span>n = 10</span>
          <span>n = 15</span>
          <span>n = 20</span>
        </div>
      </div>

      {/* 3 Golongan Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Alkana Card */}
        <div className="p-4 bg-[#150F38] border border-[#5EEAD4]/60 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#5EEAD4] uppercase tracking-wide">
              Alkana (CₙH₂ₙ₊₂)
            </span>
            <span className="text-xs font-mono font-bold text-[#EEEDFB]">― Tunggal</span>
          </div>

          <div className="text-xl sm:text-2xl font-bold font-mono text-[#5EEAD4]">
            C{n === 1 ? '' : n}H{alkanaH}
          </div>

          <div className="text-xs font-semibold capitalize text-[#EEEDFB]">
            {getName('alkana', n)}
          </div>

          <div className="p-2.5 bg-[#0F0B2A] rounded-lg border border-[#3A3280] text-[11px] font-mono text-[#B8B5DE]">
            H = 2({n}) + 2 = {2 * n} + 2 = {alkanaH}
          </div>
        </div>

        {/* Alkena Card */}
        <div className="p-4 bg-[#150F38] border border-[#B4A7FF]/60 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#B4A7FF] uppercase tracking-wide">
              Alkena (CₙH₂ₙ)
            </span>
            <span className="text-xs font-mono font-bold text-[#EEEDFB]">= Rangkap 2</span>
          </div>

          {n === 1 ? (
            <div className="py-2 text-xs text-[#FFA8C5] flex items-start gap-1.5 leading-snug">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Tidak ada (Alkena minimal n = 2 karena ikatan rangkap dua butuh 2 atom C).</span>
            </div>
          ) : (
            <>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#B4A7FF]">
                C{n}H{alkenaH}
              </div>

              <div className="text-xs font-semibold capitalize text-[#EEEDFB]">
                {getName('alkena', n)}
              </div>

              <div className="p-2.5 bg-[#0F0B2A] rounded-lg border border-[#3A3280] text-[11px] font-mono text-[#B8B5DE]">
                H = 2({n}) = {alkenaH}
              </div>
            </>
          )}
        </div>

        {/* Alkuna Card */}
        <div className="p-4 bg-[#150F38] border border-[#FFA8C5]/60 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#FFA8C5] uppercase tracking-wide">
              Alkuna (CₙH₂ₙ₋₂)
            </span>
            <span className="text-xs font-mono font-bold text-[#EEEDFB]">≡ Rangkap 3</span>
          </div>

          {n === 1 ? (
            <div className="py-2 text-xs text-[#FFA8C5] flex items-start gap-1.5 leading-snug">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Tidak ada (Alkuna minimal n = 2 karena ikatan rangkap tiga butuh 2 atom C).</span>
            </div>
          ) : (
            <>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#FFA8C5]">
                C{n}H{alkunaH}
              </div>

              <div className="text-xs font-semibold capitalize text-[#EEEDFB]">
                {getName('alkuna', n)}
              </div>

              <div className="p-2.5 bg-[#0F0B2A] rounded-lg border border-[#3A3280] text-[11px] font-mono text-[#B8B5DE]">
                H = 2({n}) - 2 = {2 * n} - 2 = {alkunaH}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
