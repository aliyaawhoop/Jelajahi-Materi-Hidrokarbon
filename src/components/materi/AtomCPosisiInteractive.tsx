/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Interaktif Posisi Atom Karbon (1°, 2°, 3°, 4°)
 * Siswa mengklik tiap atom C dan sistem menampilkan jenisnya beserta alasannya,
 * lalu ringkasan jumlah tiap jenis atom C.
 */

import React, { useState } from 'react';
import { KEGIATAN_1_DATA, AtomCInteractive } from '../../data';
import { Info, CheckCircle2, Sparkles } from 'lucide-react';

export const AtomCPosisiInteractive: React.FC = () => {
  const contoh = KEGIATAN_1_DATA.strukturInteraktif.contoh1;
  const [selectedAtomId, setSelectedAtomId] = useState<string>('C2');

  const selectedAtom = contoh.atoms.find((a) => a.id === selectedAtomId) || contoh.atoms[1];

  const getTipeBadgeColor = (tipe: AtomCInteractive['tipe']) => {
    switch (tipe) {
      case 'primer':
        return { bg: 'bg-[#5EEAD4]/20', text: 'text-[#5EEAD4]', border: 'border-[#5EEAD4]/50' };
      case 'sekunder':
        return { bg: 'bg-[#B4A7FF]/20', text: 'text-[#B4A7FF]', border: 'border-[#B4A7FF]/50' };
      case 'tersier':
        return { bg: 'bg-[#FFA8C5]/20', text: 'text-[#FFA8C5]', border: 'border-[#FFA8C5]/50' };
      case 'kuarterner':
        return { bg: 'bg-[#FDE68A]/20', text: 'text-[#FDE68A]', border: 'border-[#FDE68A]/50' };
    }
  };

  const badgeColor = getTipeBadgeColor(selectedAtom.tipe);

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      {/* Title & Instructions */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
            Simulasi Interaktif Posisi Atom Karbon
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Identifikasi Atom C Primer, Sekunder, Tersier, dan Kuarterner
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1.5 leading-relaxed">
          Sentuh atau klik salah satu bulatan atom Karbon (C) pada rumus struktur rantai bercabang di bawah ini untuk melihat jenis kedudukan dan alasannya.
        </p>
      </div>

      {/* Interactive Molecule Diagram (SVG Canvas) */}
      <div className="p-4 sm:p-6 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl relative overflow-hidden">
        <div className="text-xs text-[#8E8BB5] mb-4 flex items-center justify-between">
          <span className="font-mono text-[#EEEDFB] font-semibold">{contoh.rumusMolekul} ({contoh.namaIUPAC})</span>
          <span>Klik atom C untuk memeriksa</span>
        </div>

        {/* Structural Map Canvas */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[300px] min-h-[200px] flex items-center justify-center">
          {/* SVG connecting bonds */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {contoh.bonds.map((bond, idx) => {
              const fromAtom = contoh.atoms.find((a) => a.id === bond.from);
              const toAtom = contoh.atoms.find((a) => a.id === bond.to);
              if (!fromAtom || !toAtom) return null;

              const isHighlighted = selectedAtom.id === fromAtom.id || selectedAtom.id === toAtom.id;

              return (
                <line
                  key={idx}
                  x1={`${fromAtom.x}%`}
                  y1={`${fromAtom.y}%`}
                  x2={`${toAtom.x}%`}
                  y2={`${toAtom.y}%`}
                  stroke={isHighlighted ? '#5EEAD4' : '#3A3280'}
                  strokeWidth={isHighlighted ? '2.5' : '1.8'}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Clickable Carbon Atom Nodes */}
          {contoh.atoms.map((atom) => {
            const isSelected = atom.id === selectedAtom.id;
            const isConnectedToSelected = selectedAtom.terikatKe.includes(atom.id);
            const atomBadge = getTipeBadgeColor(atom.tipe);

            return (
              <button
                key={atom.id}
                onClick={() => setSelectedAtomId(atom.id)}
                style={{
                  left: `${atom.x}%`,
                  top: `${atom.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 flex flex-col items-center justify-center transition-all cursor-pointer focus-visible:outline-2 ${
                  isSelected
                    ? 'bg-[#150F38] border-[#5EEAD4] scale-110 shadow-lg shadow-[#5EEAD4]/30 ring-2 ring-offset-2 ring-offset-[#0F0B2A] ring-[#5EEAD4]'
                    : isConnectedToSelected
                    ? 'bg-[#1E1850] border-[#B4A7FF] scale-105'
                    : 'bg-[#1E1850] border-[#3A3280] hover:border-[#8E8BB5]'
                }`}
                aria-label={`Atom ${atom.label}: ${atom.formula}, tipe ${atom.tipe}`}
              >
                <span className="font-bold text-xs sm:text-sm text-[#EEEDFB] leading-none">
                  {atom.formula}
                </span>
                <span className="text-[9px] font-mono font-semibold text-[#B8B5DE] leading-none mt-0.5">
                  {atom.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Atom Explanatory Panel (Solid #1E1850, high contrast) */}
      <div className="p-5 bg-[#150F38] border border-[#3A3280] rounded-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#EEEDFB]">
              Atom {selectedAtom.label} ({selectedAtom.formula})
            </span>
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeColor.bg} ${badgeColor.text} ${badgeColor.border}`}>
              Atom C {selectedAtom.tipe.toUpperCase()} ({selectedAtom.derajat})
            </span>
          </div>
          <span className="text-xs text-[#8E8BB5]">
            Terikat pada {selectedAtom.terikatKe.length} atom C lain
          </span>
        </div>

        <div className="p-3.5 bg-[#0F0B2A] border border-[#3A3280] rounded-lg">
          <p className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider mb-1">
            Alasan Ilmiah:
          </p>
          <p className="text-sm text-[#EEEDFB] leading-relaxed">
            {selectedAtom.alasan}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#B8B5DE]">
          <span className="text-[#5EEAD4] font-bold">Atom C yang diikat langsung:</span>
          <div className="flex items-center gap-1.5">
            {selectedAtom.terikatKe.map((cId) => (
              <span key={cId} className="px-2 py-0.5 bg-[#1E1850] border border-[#3A3280] rounded text-[#EEEDFB] font-mono text-[11px]">
                {cId}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Counters: Jumlah Tiap Jenis Atom C */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8B5DE] mb-3">
          Ringkasan Jumlah Posisi Atom C pada Molekul Ini:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Primer */}
          <div className="p-3.5 bg-[#0F0B2A] border border-[#5EEAD4]/40 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#5EEAD4]">Primer (1°)</div>
              <div className="text-[11px] text-[#B8B5DE]">Ikat 1 atom C</div>
            </div>
            <div className="text-2xl font-mono font-extrabold text-[#5EEAD4]">
              {contoh.summary.primer}
            </div>
          </div>

          {/* Sekunder */}
          <div className="p-3.5 bg-[#0F0B2A] border border-[#B4A7FF]/40 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#B4A7FF]">Sekunder (2°)</div>
              <div className="text-[11px] text-[#B8B5DE]">Ikat 2 atom C</div>
            </div>
            <div className="text-2xl font-mono font-extrabold text-[#B4A7FF]">
              {contoh.summary.sekunder}
            </div>
          </div>

          {/* Tersier */}
          <div className="p-3.5 bg-[#0F0B2A] border border-[#FFA8C5]/40 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#FFA8C5]">Tersier (3°)</div>
              <div className="text-[11px] text-[#B8B5DE]">Ikat 3 atom C</div>
            </div>
            <div className="text-2xl font-mono font-extrabold text-[#FFA8C5]">
              {contoh.summary.tersier}
            </div>
          </div>

          {/* Kuarterner */}
          <div className="p-3.5 bg-[#0F0B2A] border border-[#FDE68A]/40 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#FDE68A]">Kuarterner (4°)</div>
              <div className="text-[11px] text-[#B8B5DE]">Ikat 4 atom C</div>
            </div>
            <div className="text-2xl font-mono font-extrabold text-[#FDE68A]">
              {contoh.summary.kuarterner}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
