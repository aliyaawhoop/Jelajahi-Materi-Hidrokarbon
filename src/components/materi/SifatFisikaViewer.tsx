/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Penampil Sifat Fisika Hidrokarbon (Tren Kualitatif)
 * Titik didih/leleh, massa jenis, viskositas, dan kelarutan nonpolar vs air.
 * Tanpa menyajikan angka titik didih sesuai instruksi.
 */

import React, { useState } from 'react';
import { KEGIATAN_3_DATA } from '../../data';
import { Droplets, Thermometer, Compass, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export const SifatFisikaViewer: React.FC = () => {
  const [selectedKelarutan, setSelectedKelarutan] = useState<'air' | 'nonpolar'>('air');
  const sifat = KEGIATAN_3_DATA.sifatFisika;

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFA8C5]">
            Sifat Fisika Kualitatif
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Karakteristik Fisika Senyawa Hidrokarbon
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1 leading-relaxed">
          {sifat.deskripsi}
        </p>
      </div>

      {/* 4 Poin Tren Fisika Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sifat.poinTren.map((item, idx) => (
          <div
            key={item.parameter}
            className="p-4 sm:p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A99CFF]">
                  Parameter 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#150F38] border border-[#3A3280] text-[#5EEAD4]">
                  Kualitatif
                </span>
              </div>
              <h4 className="text-base font-bold text-[#EEEDFB]">
                {item.parameter}
              </h4>
              <div className="text-xs font-semibold text-[#FFA8C5] my-1">
                Tren: {item.tren}
              </div>
              <p className="text-xs text-[#B8B5DE] leading-relaxed mt-2">
                {item.penjelasan}
              </p>
            </div>

            {/* Visual Bar Kualitatif Sederhana */}
            {idx === 0 && (
              <div className="pt-3 mt-3 border-t border-[#3A3280]/60 space-y-1.5">
                <div className="flex justify-between text-[10px] text-[#8E8BB5]">
                  <span>Suku Rendah (Gas: C₁—C₄)</span>
                  <span>Suku Sedang (Cair: C₅—C₁₇)</span>
                  <span>Suku Tinggi (Padat: ≥C₁₈)</span>
                </div>
                <div className="h-2 w-full bg-[#150F38] rounded-full overflow-hidden border border-[#3A3280]">
                  <div className="h-full bg-gradient-to-r from-[#5EEAD4] via-[#B4A7FF] to-[#FFA8C5] rounded-full w-full" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Simulasi Interaktif Kelarutan: Air (Polar) vs Pelarut Organik (Nonpolar) */}
      <div className="p-5 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
              Simulasi Prinsip "Like Dissolves Like"
            </span>
            <h4 className="text-base font-bold text-[#EEEDFB] mt-0.5">
              Uji Kelarutan Hidrokarbon dalam Pelarut Berbeda
            </h4>
          </div>

          <div className="flex items-center gap-2 bg-[#0F0B2A] p-1 rounded-xl border border-[#3A3280]">
            <button
              onClick={() => setSelectedKelarutan('air')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedKelarutan === 'air'
                  ? 'bg-[#1E1850] text-[#5EEAD4] border border-[#5EEAD4]/50'
                  : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
              }`}
            >
              Dalam Air (Polar)
            </button>
            <button
              onClick={() => setSelectedKelarutan('nonpolar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedKelarutan === 'nonpolar'
                  ? 'bg-[#1E1850] text-[#FFA8C5] border border-[#FFA8C5]/50'
                  : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
              }`}
            >
              Dalam CCl₄ / Benzena (Nonpolar)
            </button>
          </div>
        </div>

        {/* Visual Tabung Reaksi Sederhana (SVG Handcrafted) */}
        <div className="p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-xl flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="w-24 h-44 border-2 border-[#8E8BB5] rounded-b-3xl relative overflow-hidden bg-[#150F38] shadow-inner">
            {selectedKelarutan === 'air' ? (
              <>
                {/* Lapisan Atas: Minyak Hidrokarbon (Massa jenis lebih kecil) */}
                <div className="absolute top-12 left-0 right-0 h-12 bg-[#FDE68A]/30 border-b border-dashed border-[#FDE68A] flex items-center justify-center text-[10px] text-[#FDE68A] font-bold">
                  Hidrokarbon (Nonpolar)
                </div>
                {/* Lapisan Bawah: Air */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#5EEAD4]/20 flex items-center justify-center text-[10px] text-[#5EEAD4] font-bold">
                  Air (Polar)
                </div>
              </>
            ) : (
              /* Larutan homogen bercampur */
              <div className="absolute inset-x-0 bottom-0 top-12 bg-gradient-to-t from-[#FFA8C5]/30 to-[#B4A7FF]/30 flex flex-col items-center justify-center text-[10px] text-[#EEEDFB] font-bold text-center px-1">
                <span>Larut Sempurna</span>
                <span className="text-[9px] text-[#FFA8C5] font-normal">Homogen</span>
              </div>
            )}
          </div>

          <div className="max-w-md space-y-2 text-xs">
            <div className="font-bold text-sm text-[#EEEDFB]">
              {selectedKelarutan === 'air'
                ? 'Hasil: Tidak Larut / Membentuk 2 Lapisan Terpisah'
                : 'Hasil: Larut Sempurna (Homogen)'}
            </div>
            <p className="text-[#B8B5DE] leading-relaxed">
              {selectedKelarutan === 'air'
                ? 'Karena molekul hidrokarbon bersifat nonpolar sedangkan air bersifat polar, keduanya tidak dapat saling melarutkan. Hidrokarbon memiliki massa jenis lebih kecil dari air sehingga membentuk lapisan di bagian atas.'
                : 'Pelarut seperti karbon tetraklorida (CCl₄), eter, atau benzena bersifat nonpolar, sama seperti molekul hidrokarbon. Terjadi interaksi gaya dispersi London yang seimbang sehingga senyawa hidrokarbon larut sempurna.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
