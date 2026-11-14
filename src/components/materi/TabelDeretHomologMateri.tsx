/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Tabel Deret Homolog Lengkap (10 Anggota Pertama) & Tabel Alkil
 * Klik baris untuk melihat rumus struktur SVG/visual.
 * Penjelasan selisih CH₂ dan Mr 14.
 */

import React, { useState } from 'react';
import { KEGIATAN_2_DATA } from '../../data';
import { Info, Layers, X, Sparkles } from 'lucide-react';

export const TabelDeretHomologMateri: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alkana' | 'alkena' | 'alkuna'>('alkana');
  const [selectedMember, setSelectedMember] = useState<{
    n: number;
    nama: string;
    rumusMolekul: string;
    rumusStruktur: string;
    mr: number;
  } | null>(null);

  const dataList = KEGIATAN_2_DATA.deretHomologLengkap[activeTab];

  const getAksenColor = () => {
    switch (activeTab) {
      case 'alkana':
        return '#5EEAD4';
      case 'alkena':
        return '#B4A7FF';
      case 'alkuna':
        return '#FFA8C5';
    }
  };

  const aksen = getAksenColor();

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      {/* Concept Callout: Selisih CH2 dan Mr 14 */}
      <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
              Karakteristik Deret Homolog
            </span>
          </div>
          <h4 className="text-base font-bold text-[#EEEDFB]">
            Selisih Antarsuku: Gugus —CH₂— (Selisih Mr = 14)
          </h4>
          <p className="text-xs text-[#B8B5DE] leading-relaxed max-w-2xl">
            {KEGIATAN_2_DATA.definisiDeretHomolog.uraian} {KEGIATAN_2_DATA.definisiDeretHomolog.selisihMr}
          </p>
        </div>
      </div>

      {/* Tabs Golongan */}
      <div className="flex items-center gap-2 border-b border-[#3A3280] pb-2 overflow-x-auto">
        <button
          onClick={() => { setActiveTab('alkana'); setSelectedMember(null); }}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'alkana'
              ? 'bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/50'
              : 'text-[#B8B5DE] hover:text-[#5EEAD4]'
          }`}
        >
          <span className="font-mono font-bold">—</span>
          <span>Alkana (CₙH₂ₙ₊₂)</span>
        </button>
        <button
          onClick={() => { setActiveTab('alkena'); setSelectedMember(null); }}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'alkena'
              ? 'bg-[#B4A7FF]/20 text-[#B4A7FF] border border-[#B4A7FF]/50'
              : 'text-[#B8B5DE] hover:text-[#B4A7FF]'
          }`}
        >
          <span className="font-mono font-bold">=</span>
          <span>Alkena (CₙH₂ₙ)</span>
        </button>
        <button
          onClick={() => { setActiveTab('alkuna'); setSelectedMember(null); }}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'alkuna'
              ? 'bg-[#FFA8C5]/20 text-[#FFA8C5] border border-[#FFA8C5]/50'
              : 'text-[#B8B5DE] hover:text-[#FFA8C5]'
          }`}
        >
          <span className="font-mono font-bold">≡</span>
          <span>Alkuna (CₙH₂ₙ₋₂)</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm text-[#EEEDFB] border-collapse">
          <thead>
            <tr className="border-b border-[#3A3280] text-[#B8B5DE] uppercase text-[11px] tracking-wider">
              <th className="py-3 px-3">n</th>
              <th className="py-3 px-3">Nama Senyawa</th>
              <th className="py-3 px-3">Rumus Molekul</th>
              <th className="py-3 px-3">Mr</th>
              <th className="py-3 px-3">Rumus Struktur Ringkas</th>
              <th className="py-3 px-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3A3280]/60">
            {dataList.map((item) => (
              <tr
                key={item.n}
                onClick={() => setSelectedMember(item)}
                className="hover:bg-[#150F38] cursor-pointer transition-colors group"
              >
                <td className="py-3 px-3 font-mono text-[#B8B5DE]">{item.n}</td>
                <td className="py-3 px-3 font-bold capitalize text-[#EEEDFB] group-hover:text-[#5EEAD4] transition-colors">
                  {item.nama}
                </td>
                <td className="py-3 px-3 font-mono font-bold" style={{ color: aksen }}>
                  {item.rumusMolekul}
                </td>
                <td className="py-3 px-3 font-mono text-[#B8B5DE]">{item.mr}</td>
                <td className="py-3 px-3 font-mono text-[#EEEDFB] truncate max-w-[200px] sm:max-w-xs">
                  {item.rumusStruktur}
                </td>
                <td className="py-3 px-3 text-right">
                  <span className="text-[11px] font-semibold text-[#A99CFF] group-hover:underline">
                    Lihat Struktur ↗
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal / Card Rumus Struktur (SVG visual) */}
      {selectedMember && (
        <div className="p-5 bg-[#0F0B2A] border-2 rounded-xl relative animate-in fade-in duration-150" style={{ borderColor: aksen }}>
          <button
            onClick={() => setSelectedMember(null)}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#1E1850] transition-colors cursor-pointer"
            aria-label="Tutup pratinjau rumus struktur"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider" style={{ color: aksen }}>
                Model Struktur Visual · n = {selectedMember.n}
              </span>
              <h4 className="text-xl font-extrabold capitalize text-[#EEEDFB]">
                {selectedMember.nama} ({selectedMember.rumusMolekul})
              </h4>
            </div>
            <div className="text-xs font-mono text-[#B8B5DE]">
              Massa Relatif Mr = {selectedMember.mr}
            </div>
          </div>

          <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl my-3">
            <span className="text-[11px] font-semibold uppercase text-[#B8B5DE] block mb-1">
              Rumus Struktur Rantai:
            </span>
            <div className="font-mono text-sm sm:text-base text-[#5EEAD4] font-bold overflow-x-auto py-1">
              {selectedMember.rumusStruktur}
            </div>
          </div>

          {/* Handcrafted SVG Chain of Carbons */}
          <div className="p-4 bg-[#1E1850] border border-[#3A3280] rounded-xl flex items-center justify-center overflow-x-auto">
            <svg
              height="60"
              width={Math.max(300, selectedMember.n * 50 + 40)}
              viewBox={`0 0 ${Math.max(300, selectedMember.n * 50 + 40)} 60`}
              className="select-none"
            >
              {Array.from({ length: selectedMember.n }).map((_, idx) => {
                const cx = 30 + idx * 50;
                const nextCx = 30 + (idx + 1) * 50;
                const cy = 30;

                return (
                  <g key={idx}>
                    {/* Bonds between C atoms */}
                    {idx < selectedMember.n - 1 && (
                      <>
                        {activeTab === 'alkana' && (
                          <line x1={cx} y1={cy} x2={nextCx} y2={cy} stroke={aksen} strokeWidth="3" />
                        )}
                        {activeTab === 'alkena' && idx === 0 && (
                          <>
                            <line x1={cx} y1={cy - 3} x2={nextCx} y2={cy - 3} stroke={aksen} strokeWidth="2.5" />
                            <line x1={cx} y1={cy + 3} x2={nextCx} y2={cy + 3} stroke={aksen} strokeWidth="2.5" />
                          </>
                        )}
                        {activeTab === 'alkena' && idx > 0 && (
                          <line x1={cx} y1={cy} x2={nextCx} y2={cy} stroke={aksen} strokeWidth="3" />
                        )}
                        {activeTab === 'alkuna' && idx === 0 && (
                          <>
                            <line x1={cx} y1={cy - 5} x2={nextCx} y2={cy - 5} stroke={aksen} strokeWidth="2" />
                            <line x1={cx} y1={cy} x2={nextCx} y2={cy} stroke={aksen} strokeWidth="2" />
                            <line x1={cx} y1={cy + 5} x2={nextCx} y2={cy + 5} stroke={aksen} strokeWidth="2" />
                          </>
                        )}
                        {activeTab === 'alkuna' && idx > 0 && (
                          <line x1={cx} y1={cy} x2={nextCx} y2={cy} stroke={aksen} strokeWidth="3" />
                        )}
                      </>
                    )}

                    {/* Carbon node circle */}
                    <circle cx={cx} cy={cy} r="14" fill="#0F0B2A" stroke={aksen} strokeWidth="2" />
                    <text x={cx} y={cy + 4} textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      C
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}

      {/* Tabel Alkil (Cabang) */}
      <div className="pt-6 border-t border-[#3A3280]">
        <div className="mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B4A7FF]">
            Gugus Cabang
          </span>
          <h4 className="text-lg font-bold text-[#EEEDFB]">
            Tabel Gugus Alkil (—CₙH₂ₙ₊₁)
          </h4>
          <p className="text-xs text-[#B8B5DE] mt-0.5 leading-relaxed">
            Gugus alkil adalah gugus cabang yang terbentuk apabila alkana kehilangan 1 atom hidrogen. Akhiran <em>-ana</em> diganti menjadi <em>-il</em>.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-[#EEEDFB] border-collapse">
            <thead>
              <tr className="border-b border-[#3A3280] text-[#B8B5DE] uppercase text-[11px] tracking-wider">
                <th className="py-2.5 px-3">Nama Alkil</th>
                <th className="py-2.5 px-3">Rumus Alkil</th>
                <th className="py-2.5 px-3">Rumus Struktur Cabang</th>
                <th className="py-2.5 px-3">Asal Alkana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3A3280]/60">
              {KEGIATAN_2_DATA.tabelAlkil.map((alkil) => (
                <tr key={alkil.namaAlkil} className="hover:bg-[#150F38]">
                  <td className="py-2.5 px-3 font-bold text-[#EEEDFB]">{alkil.namaAlkil}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-[#B4A7FF]">{alkil.rumusAlkil}</td>
                  <td className="py-2.5 px-3 font-mono text-[#5EEAD4]">{alkil.rumusStruktur}</td>
                  <td className="py-2.5 px-3 text-[#B8B5DE] text-xs">{alkil.asalAlkana}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
