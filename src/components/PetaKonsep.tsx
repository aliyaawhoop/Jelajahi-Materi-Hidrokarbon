/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Peta Konsep Interaktif Senyawa Hidrokarbon
 * Senyawa Hidrokarbon -> Struktur Atom Karbon | Penggolongan | Sifat & Reaksi
 * Tiap kotak dapat diklik untuk membuka penjelasan sub-bab.
 */

import React, { useState } from 'react';
import { PETA_KONSEP_DATA, NodePetaKonsep } from '../data';
import { GitFork, X, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface PetaKonsepProps {
  onSelectSubBab?: (nodeId: string) => void;
}

export const PetaKonsep: React.FC<PetaKonsepProps> = ({ onSelectSubBab }) => {
  const [activeModalNode, setActiveModalNode] = useState<NodePetaKonsep | null>(null);

  const handleNodeClick = (node: NodePetaKonsep) => {
    setActiveModalNode(node);
  };

  return (
    <section id="peta-konsep" className="w-full py-12 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1850] border border-[#3A3280] rounded-full text-xs font-semibold text-[#B8B5DE] mb-3">
          <Layers className="w-3.5 h-3.5 text-[#A99CFF]" />
          <span>Navigasi Konseptual</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#EEEDFB]">
          Peta Konsep Interaktif
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#B8B5DE] max-w-2xl mx-auto leading-relaxed">
          Klik atau sentuh setiap kotak pada diagram untuk menjelajahi konsep, hubungan materi, dan sub-bab terkait.
        </p>
      </div>

      {/* Interactive Concept Map Visual Hierarchy */}
      <div className="relative">
        {/* Root Node: Senyawa Hidrokarbon */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'akar')!)}
            className="w-full max-w-md bg-[#1E1850] border-2 border-[#A99CFF] rounded-2xl p-5 text-center shadow-lg hover:border-[#EEEDFB] transition-all cursor-pointer group text-left"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase font-bold tracking-wider text-[#A99CFF]">
                Tema Utama
              </span>
              <span className="text-xs text-[#8E8BB5] group-hover:text-[#EEEDFB] transition-colors">
                Sentuh untuk detail ↗
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
              Senyawa Hidrokarbon
            </h3>
            <p className="text-sm text-[#B8B5DE] mt-1.5 line-clamp-2">
              Hanya terdiri atas atom Karbon (C) dan Hidrogen (H). Dasar utama kimia organik.
            </p>
          </button>
        </div>

        {/* Desktop connection lines */}
        <div className="hidden md:flex justify-center mb-6">
          <div className="w-3/4 border-t-2 border-[#3A3280] relative">
            <div className="absolute left-0 -top-2 w-3 h-3 rounded-full bg-[#5EEAD4]" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full bg-[#B4A7FF]" />
            <div className="absolute right-0 -top-2 w-3 h-3 rounded-full bg-[#FFA8C5]" />
          </div>
        </div>

        {/* 3 Main Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Branch 1: Struktur Atom Karbon */}
          <div className="space-y-4">
            <button
              onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'struktur')!)}
              className="w-full bg-[#1E1850] border border-[#5EEAD4]/60 rounded-2xl p-5 text-left shadow-md hover:border-[#5EEAD4] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#5EEAD4]">Cabang 1</span>
                <span className="text-xs text-[#8E8BB5] group-hover:text-[#5EEAD4]">Detail ↗</span>
              </div>
              <h4 className="text-lg font-bold text-[#EEEDFB]">Struktur Atom Karbon</h4>
              <p className="text-xs text-[#B8B5DE] mt-1">
                Kekhasan 4 elektron valensi & posisi atom C (primer, sekunder, tersier, kuarterner).
              </p>
            </button>

            {/* Sub-nodes of Branch 1 */}
            <div className="pl-4 border-l-2 border-[#3A3280] space-y-2.5">
              <button
                onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'kekhasan')!)}
                className="w-full bg-[#150F38] border border-[#3A3280] rounded-xl p-3 text-left hover:border-[#5EEAD4] transition-all cursor-pointer"
              >
                <div className="text-xs font-semibold text-[#EEEDFB]">Kekhasan Atom Karbon</div>
                <div className="text-[11px] text-[#B8B5DE] mt-0.5">Membentuk rantai panjang & stabil</div>
              </button>
              <button
                onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'jenis-c')!)}
                className="w-full bg-[#150F38] border border-[#3A3280] rounded-xl p-3 text-left hover:border-[#5EEAD4] transition-all cursor-pointer"
              >
                <div className="text-xs font-semibold text-[#EEEDFB]">Posisi Atom C (1°, 2°, 3°, 4°)</div>
                <div className="text-[11px] text-[#B8B5DE] mt-0.5">Berdasarkan jumlah atom C terikat</div>
              </button>
            </div>
          </div>

          {/* Branch 2: Penggolongan Hidrokarbon */}
          <div className="space-y-4">
            <button
              onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'penggolongan')!)}
              className="w-full bg-[#1E1850] border border-[#B4A7FF]/60 rounded-2xl p-5 text-left shadow-md hover:border-[#B4A7FF] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#B4A7FF]">Cabang 2</span>
                <span className="text-xs text-[#8E8BB5] group-hover:text-[#B4A7FF]">Detail ↗</span>
              </div>
              <h4 className="text-lg font-bold text-[#EEEDFB]">Penggolongan Hidrokarbon</h4>
              <p className="text-xs text-[#B8B5DE] mt-1">
                Klasifikasi alifatik jenuh dan tak jenuh: Alkana, Alkena, dan Alkuna.
              </p>
            </button>

            {/* Sub-nodes of Branch 2 */}
            <div className="pl-4 border-l-2 border-[#3A3280] space-y-2.5">
              <div className="bg-[#150F38] border border-[#3A3280] rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#5EEAD4]">Alkana (―)</div>
                  <div className="text-[11px] text-[#B8B5DE]">Ikatan tunggal / jenuh</div>
                </div>
                <span className="font-mono text-xs text-[#5EEAD4] bg-[#0F0B2A] px-2 py-0.5 rounded border border-[#3A3280]">
                  CₙH₂ₙ₊₂
                </span>
              </div>

              <div className="bg-[#150F38] border border-[#3A3280] rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#B4A7FF]">Alkena (=)</div>
                  <div className="text-[11px] text-[#B8B5DE]">Ikatan rangkap dua</div>
                </div>
                <span className="font-mono text-xs text-[#B4A7FF] bg-[#0F0B2A] px-2 py-0.5 rounded border border-[#3A3280]">
                  CₙH₂ₙ
                </span>
              </div>

              <div className="bg-[#150F38] border border-[#3A3280] rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#FFA8C5]">Alkuna (≡)</div>
                  <div className="text-[11px] text-[#B8B5DE]">Ikatan rangkap tiga</div>
                </div>
                <span className="font-mono text-xs text-[#FFA8C5] bg-[#0F0B2A] px-2 py-0.5 rounded border border-[#3A3280]">
                  CₙH₂ₙ₋₂
                </span>
              </div>
            </div>
          </div>

          {/* Branch 3: Sifat & Isomer */}
          <div className="space-y-4">
            <button
              onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'sifat')!)}
              className="w-full bg-[#1E1850] border border-[#FFA8C5]/60 rounded-2xl p-5 text-left shadow-md hover:border-[#FFA8C5] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#FFA8C5]">Cabang 3</span>
                <span className="text-xs text-[#8E8BB5] group-hover:text-[#FFA8C5]">Detail ↗</span>
              </div>
              <h4 className="text-lg font-bold text-[#EEEDFB]">Sifat, Reaksi & Isomer</h4>
              <p className="text-xs text-[#B8B5DE] mt-1">
                Karakteristik fisik, jenis reaksi kimia, serta variasi isomeri molekul.
              </p>
            </button>

            {/* Sub-nodes of Branch 3 */}
            <div className="pl-4 border-l-2 border-[#3A3280] space-y-2.5">
              <button
                onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'reaksi')!)}
                className="w-full bg-[#150F38] border border-[#3A3280] rounded-xl p-3 text-left hover:border-[#FFA8C5] transition-all cursor-pointer"
              >
                <div className="text-xs font-semibold text-[#EEEDFB]">Reaksi Hidrokarbon</div>
                <div className="text-[11px] text-[#B8B5DE] mt-0.5">Pembakaran, substitusi, adisi, eliminasi</div>
              </button>
              <button
                onClick={() => handleNodeClick(PETA_KONSEP_DATA.find((n) => n.id === 'isomer')!)}
                className="w-full bg-[#150F38] border border-[#3A3280] rounded-xl p-3 text-left hover:border-[#FFA8C5] transition-all cursor-pointer"
              >
                <div className="text-xs font-semibold text-[#EEEDFB]">Isomerisme Hidrokarbon</div>
                <div className="text-[11px] text-[#B8B5DE] mt-0.5">Isomer kerangka, posisi, & geometri</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal (Solid #1E1850, Border #3A3280, No Blur) */}
      {activeModalNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0B2A]/80 backdrop-blur-xs">
          <div
            className="w-full max-w-lg bg-[#1E1850] border border-[#3A3280] rounded-2xl p-6 sm:p-7 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalNode(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#3A3280]/40 transition-colors cursor-pointer"
              aria-label="Tutup jendela penjelasan"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${activeModalNode.warnaAksen || '#A99CFF'}20`,
                  color: activeModalNode.warnaAksen || '#A99CFF',
                  border: `1px solid ${activeModalNode.warnaAksen || '#A99CFF'}40`
                }}
              >
                {activeModalNode.kategori.replace('-', ' ')}
              </span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
              {activeModalNode.judul}
            </h3>

            <div className="mt-4 p-4 bg-[#0F0B2A] border border-[#3A3280] rounded-xl">
              <p className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider mb-1">
                Ringkasan Inti:
              </p>
              <p className="text-sm sm:text-base text-[#EEEDFB] leading-relaxed">
                {activeModalNode.ringkasan}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-[#B8B5DE] uppercase tracking-wider mb-1.5">
                Penjelasan & Kaitan Materi:
              </p>
              <p className="text-sm text-[#B8B5DE] leading-relaxed">
                {activeModalNode.detail}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3A3280] flex items-center justify-between">
              <button
                onClick={() => setActiveModalNode(null)}
                className="px-4 py-2 rounded-xl border border-[#3A3280] text-xs font-semibold text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#3A3280]/20 transition-all cursor-pointer"
              >
                Tutup
              </button>

              {onSelectSubBab && (
                <button
                  onClick={() => {
                    const id = activeModalNode.id;
                    setActiveModalNode(null);
                    onSelectSubBab(id);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#A99CFF] text-[#0F0B2A] text-xs font-bold hover:bg-[#9889FC] transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Buka di Halaman Materi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
