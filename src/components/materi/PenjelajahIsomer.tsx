/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Penjelajah Isomer Interaktif (KD 4.1)
 * Membuat model visual struktur molekul hidrokarbon yang memiliki rumus molekul yang sama (isomer).
 * Pilihan rumus molekul: C4H10, C5H12, C4H8, C5H10.
 * Dilengkapi visual struktur SVG buatan sendiri, nama IUPAC, dan toggle cis/trans untuk 2-butena.
 */

import React, { useState } from 'react';
import { KEGIATAN_3_DATA, IsomerItem } from '../../data';
import { Layers, Sparkles, AlertCircle, Eye, RefreshCw } from 'lucide-react';

export const PenjelajahIsomer: React.FC = () => {
  const [selectedFormulaKey, setSelectedFormulaKey] = useState<'C4H10' | 'C5H12' | 'C4H8' | 'C5H10'>('C4H10');
  const [selectedIsomerId, setSelectedIsomerId] = useState<string>('c4h10-1');
  const [cisTransMode, setCisTransMode] = useState<'cis' | 'trans'>('cis');

  const formulaData = KEGIATAN_3_DATA.dataIsomer[selectedFormulaKey];
  const activeIsomer = formulaData.isomers.find((i) => i.id === selectedIsomerId) || formulaData.isomers[0];

  const handleSelectFormula = (key: 'C4H10' | 'C5H12' | 'C4H8' | 'C5H10') => {
    setSelectedFormulaKey(key);
    setSelectedIsomerId(KEGIATAN_3_DATA.dataIsomer[key].isomers[0].id);
  };

  // Helper render custom SVG for isomers
  const renderIsomerSVG = (item: IsomerItem) => {
    // If 2-butena, we check if we should render cis or trans
    const is2Butena = item.namaIUPAC.includes('2-butena') && !item.namaIUPAC.includes('dimetil');

    if (is2Butena) {
      return (
        <svg viewBox="0 0 320 180" className="w-full max-w-sm h-44 select-none mx-auto">
          {/* Double Bond Center C=C */}
          <line x1="130" y1="87" x2="190" y2="87" stroke="#B4A7FF" strokeWidth="4" />
          <line x1="130" y1="95" x2="190" y2="95" stroke="#B4A7FF" strokeWidth="4" />

          {/* Carbon 2 & Carbon 3 centers */}
          <circle cx="130" cy="91" r="16" fill="#150F38" stroke="#B4A7FF" strokeWidth="2.5" />
          <text x="130" y="96" textAnchor="middle" fill="#EEEDFB" fontSize="13" fontWeight="bold">C</text>

          <circle cx="190" cy="91" r="16" fill="#150F38" stroke="#B4A7FF" strokeWidth="2.5" />
          <text x="190" y="96" textAnchor="middle" fill="#EEEDFB" fontSize="13" fontWeight="bold">C</text>

          {cisTransMode === 'cis' ? (
            /* CIS: Both CH3 groups on top (same side) */
            <>
              {/* Left Top: CH3 */}
              <line x1="130" y1="91" x2="80" y2="45" stroke="#5EEAD4" strokeWidth="3" />
              <circle cx="70" cy="38" r="18" fill="#0F0B2A" stroke="#5EEAD4" strokeWidth="2" />
              <text x="70" y="42" textAnchor="middle" fill="#5EEAD4" fontSize="11" fontWeight="bold">CH₃</text>

              {/* Right Top: CH3 */}
              <line x1="190" y1="91" x2="240" y2="45" stroke="#5EEAD4" strokeWidth="3" />
              <circle cx="250" cy="38" r="18" fill="#0F0B2A" stroke="#5EEAD4" strokeWidth="2" />
              <text x="250" y="42" textAnchor="middle" fill="#5EEAD4" fontSize="11" fontWeight="bold">CH₃</text>

              {/* Left Bottom: H */}
              <line x1="130" y1="91" x2="85" y2="135" stroke="#B8B5DE" strokeWidth="2.5" />
              <circle cx="75" cy="142" r="14" fill="#0F0B2A" stroke="#B8B5DE" strokeWidth="1.5" />
              <text x="75" y="146" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">H</text>

              {/* Right Bottom: H */}
              <line x1="190" y1="91" x2="235" y2="135" stroke="#B8B5DE" strokeWidth="2.5" />
              <circle cx="245" cy="142" r="14" fill="#0F0B2A" stroke="#B8B5DE" strokeWidth="1.5" />
              <text x="245" y="146" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">H</text>

              {/* Reference plane line */}
              <line x1="40" y1="91" x2="280" y2="91" stroke="#3A3280" strokeWidth="1" strokeDasharray="3 3" />
              <text x="160" y="170" textAnchor="middle" fill="#5EEAD4" fontSize="11" fontWeight="bold">
                cis-2-butena (Kedua gugus —CH₃ sepihak di atas bidang)
              </text>
            </>
          ) : (
            /* TRANS: CH3 groups on opposite sides */
            <>
              {/* Left Top: CH3 */}
              <line x1="130" y1="91" x2="80" y2="45" stroke="#FFA8C5" strokeWidth="3" />
              <circle cx="70" cy="38" r="18" fill="#0F0B2A" stroke="#FFA8C5" strokeWidth="2" />
              <text x="70" y="42" textAnchor="middle" fill="#FFA8C5" fontSize="11" fontWeight="bold">CH₃</text>

              {/* Right Bottom: CH3 */}
              <line x1="190" y1="91" x2="240" y2="135" stroke="#FFA8C5" strokeWidth="3" />
              <circle cx="250" cy="142" r="18" fill="#0F0B2A" stroke="#FFA8C5" strokeWidth="2" />
              <text x="250" y="146" textAnchor="middle" fill="#FFA8C5" fontSize="11" fontWeight="bold">CH₃</text>

              {/* Left Bottom: H */}
              <line x1="130" y1="91" x2="85" y2="135" stroke="#B8B5DE" strokeWidth="2.5" />
              <circle cx="75" cy="142" r="14" fill="#0F0B2A" stroke="#B8B5DE" strokeWidth="1.5" />
              <text x="75" y="146" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">H</text>

              {/* Right Top: H */}
              <line x1="190" y1="91" x2="235" y2="45" stroke="#B8B5DE" strokeWidth="2.5" />
              <circle cx="245" cy="38" r="14" fill="#0F0B2A" stroke="#B8B5DE" strokeWidth="1.5" />
              <text x="245" y="42" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">H</text>

              {/* Reference plane line */}
              <line x1="40" y1="91" x2="280" y2="91" stroke="#3A3280" strokeWidth="1" strokeDasharray="3 3" />
              <text x="160" y="170" textAnchor="middle" fill="#FFA8C5" fontSize="11" fontWeight="bold">
                trans-2-butena (Kedua gugus —CH₃ berseberangan diagonal)
              </text>
            </>
          )}
        </svg>
      );
    }

    // Default Structural Chain SVG for other isomers
    return (
      <svg viewBox="0 0 340 130" className="w-full max-w-sm h-36 select-none mx-auto">
        <rect x="0" y="0" width="340" height="130" rx="12" fill="#0F0B2A" />
        
        {/* Render text-based schematic in high clarity */}
        <text x="170" y="55" textAnchor="middle" fill="#5EEAD4" fontSize="15" fontWeight="bold" fontFamily="monospace">
          {item.rumusStruktur}
        </text>
        <text x="170" y="85" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="sans-serif">
          Tipe: Isomer {item.tipeIsomer.toUpperCase()}
        </text>
        <text x="170" y="105" textAnchor="middle" fill="#8E8BB5" fontSize="10" fontFamily="sans-serif">
          {item.catatan}
        </text>
      </svg>
    );
  };

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A99CFF]">
            Fitur Praktikum Mandiri KD 4.1
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Penjelajah Isomer Hidrokarbon
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1 leading-relaxed">
          Pilih rumus molekul untuk mengeksplorasi berbagai bentuk rumus struktur yang mungkin, membedakan isomer rangka, isomer posisi, dan isomer geometri <em>cis-trans</em>.
        </p>
      </div>

      {/* Formula Selector Tabs (C4H10, C5H12, C4H8, C5H10) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {(['C4H10', 'C5H12', 'C4H8', 'C5H10'] as const).map((key) => {
          const item = KEGIATAN_3_DATA.dataIsomer[key];
          const isSelected = selectedFormulaKey === key;
          return (
            <button
              key={key}
              onClick={() => handleSelectFormula(key)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#150F38] border-[#A99CFF] shadow-md shadow-[#A99CFF]/15'
                  : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-base font-extrabold ${isSelected ? 'text-[#A99CFF]' : 'text-[#EEEDFB]'}`}>
                  {item.rumusMolekul}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1E1850] text-[#5EEAD4] font-mono">
                  {item.totalIsomerStruktur} isomer
                </span>
              </div>
              <div className="text-[11px] text-[#8E8BB5] truncate">
                {item.golongan.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Isomers Horizontal Selector Bar */}
      <div className="p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B8B5DE]">
            Daftar Isomer untuk {formulaData.rumusMolekul}:
          </span>
          <span className="text-xs text-[#5EEAD4] font-semibold">
            {formulaData.isomers.length} Varian Struktur
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {formulaData.isomers.map((iso, idx) => {
            const isSelected = activeIsomer.id === iso.id;
            return (
              <button
                key={iso.id}
                onClick={() => setSelectedIsomerId(iso.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#150F38] border-[#5EEAD4] text-[#5EEAD4] shadow-md shadow-[#5EEAD4]/10'
                    : 'bg-[#1E1850] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB]'
                }`}
              >
                <span className="font-mono text-[10px] text-[#8E8BB5]">#{idx + 1}</span>
                <span>{iso.namaIUPAC}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Isomer Visualization Card */}
      <div className="p-5 sm:p-6 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3A3280] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/40">
                Isomer {activeIsomer.tipeIsomer.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-[#B8B5DE]">
                Rumus: {formulaData.rumusMolekul}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#EEEDFB] mt-1">
              {activeIsomer.namaIUPAC}
            </h4>
          </div>

          {/* Toggle Cis/Trans if 2-butena is selected */}
          {activeIsomer.namaIUPAC.includes('2-butena') && (
            <div className="flex items-center gap-1.5 p-1 bg-[#150F38] border border-[#3A3280] rounded-xl">
              <span className="text-xs font-bold text-[#B8B5DE] px-2">Geometri:</span>
              <button
                onClick={() => setCisTransMode('cis')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cisTransMode === 'cis'
                    ? 'bg-[#5EEAD4] text-[#0F0B2A]'
                    : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
                }`}
              >
                cis-2-butena
              </button>
              <button
                onClick={() => setCisTransMode('trans')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cisTransMode === 'trans'
                    ? 'bg-[#FFA8C5] text-[#0F0B2A]'
                    : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
                }`}
              >
                trans-2-butena
              </button>
            </div>
          )}
        </div>

        {/* Formula text container */}
        <div className="p-4 bg-[#150F38] border border-[#3A3280] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-[#B8B5DE] uppercase tracking-wider">
            Rumus Struktur Kimia:
          </span>
          <span className="font-mono text-base font-bold text-[#5EEAD4] overflow-x-auto">
            {activeIsomer.rumusStruktur}
          </span>
        </div>

        {/* SVG Structure Viewport */}
        <div className="p-4 bg-[#1E1850] border border-[#3A3280] rounded-xl flex items-center justify-center">
          {renderIsomerSVG(activeIsomer)}
        </div>

        {/* Educational Note */}
        <div className="p-3.5 bg-[#150F38] border border-[#3A3280]/60 rounded-xl text-xs text-[#B8B5DE] leading-relaxed">
          <strong className="text-[#EEEDFB]">Karakteristik Isomer Ini:</strong> {activeIsomer.catatan}
        </div>
      </div>
    </div>
  );
};
