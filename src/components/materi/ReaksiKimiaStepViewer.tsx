/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Reaksi Kimia Hidrokarbon Langkah Demi Langkah (Interaktif)
 * Klik "Next" untuk melihat tahapan pemutusan dan pembentukan ikatan baru.
 * Mencakup Pembakaran, Substitusi, Eliminasi, Adisi Alkena, Adisi Alkuna, & Markovnikov.
 */

import React, { useState } from 'react';
import { KEGIATAN_3_DATA, ReaksiStepItem } from '../../data';
import { ChevronRight, ChevronLeft, ArrowRight, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

export const ReaksiKimiaStepViewer: React.FC = () => {
  const reaksiList = KEGIATAN_3_DATA.reaksiKimiaList;
  const [selectedRxId, setSelectedRxId] = useState<string>('rx-pembakaran');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const activeRx = reaksiList.find((r) => r.id === selectedRxId) || reaksiList[0];
  const step = activeRx.steps[currentStepIndex];

  const handleSelectRx = (id: string) => {
    setSelectedRxId(id);
    setCurrentStepIndex(0);
  };

  const handleNext = () => {
    if (currentStepIndex < activeRx.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
            Simulasi Mekanisme Reaksi
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#EEEDFB]">
          Reaksi-Reaksi Senyawa Hidrokarbon
        </h3>
        <p className="text-xs sm:text-sm text-[#B8B5DE] mt-1 leading-relaxed">
          Pilih jenis reaksi di bawah, lalu klik tombol <strong className="text-[#A99CFF]">Langkah Berikutnya (Next)</strong> untuk mengamati proses pemutusan ikatan lama dan pembentukan ikatan baru secara bertahap.
        </p>
      </div>

      {/* Reaksi Type Tabs (6 Reaksi: A - F) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {reaksiList.map((r) => {
          const isSelected = selectedRxId === r.id;
          return (
            <button
              key={r.id}
              onClick={() => handleSelectRx(r.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#150F38] border-[#5EEAD4] shadow-md shadow-[#5EEAD4]/10'
                  : 'bg-[#0F0B2A] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] hover:border-[#8E8BB5]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[11px] font-bold ${
                    isSelected ? 'bg-[#5EEAD4] text-[#0F0B2A]' : 'bg-[#1E1850] text-[#EEEDFB]'
                  }`}
                >
                  {r.nomor}
                </span>
                <span className="text-[10px] text-[#8E8BB5]">{r.golongan.split(' ')[0]}</span>
              </div>
              <span className={`text-xs font-bold leading-tight line-clamp-2 ${isSelected ? 'text-[#5EEAD4]' : 'text-[#EEEDFB]'}`}>
                {r.judul.split('(')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage for Selected Reaction */}
      <div className="p-5 sm:p-6 bg-[#0F0B2A] border border-[#3A3280] rounded-2xl space-y-5">
        {/* Header Reaction Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3A3280] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/40">
                Reaksi {activeRx.nomor}
              </span>
              <span className="text-xs uppercase font-semibold text-[#B8B5DE]">
                {activeRx.golongan}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#EEEDFB] mt-1">
              {activeRx.judul}
            </h4>
          </div>

          {/* Stepper counter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#B8B5DE]">
              Tahap {currentStepIndex + 1} dari {activeRx.steps.length}
            </span>
            <div className="flex gap-1.5">
              {activeRx.steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentStepIndex
                      ? 'bg-[#5EEAD4] w-6'
                      : idx < currentStepIndex
                      ? 'bg-[#A99CFF]'
                      : 'bg-[#3A3280]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Persamaan Reaksi Bersih */}
        <div className="p-3.5 bg-[#150F38] border border-[#3A3280] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8B5DE]">
            Persamaan Reaksi Lengkap:
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#5EEAD4]">
            {activeRx.persamaanReaksi}
          </span>
        </div>

        {/* Dynamic Visual Stage Box */}
        <div className="p-6 bg-[#1E1850] border border-[#3A3280] rounded-2xl text-center space-y-4">
          <div className="flex items-center justify-between text-xs text-[#8E8BB5]">
            <span className="uppercase font-semibold tracking-wider">
              {step.keadaan === 'awal' && 'Keadaan Awal: Pereaksi (Reaktan)'}
              {step.keadaan === 'pemutusan' && 'Proses Reaksi: Pemutusan / Penataan Ikatan'}
              {step.keadaan === 'hasil_akhir' && 'Keadaan Akhir: Terbentuk Produk Baru'}
            </span>
            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
              step.keadaan === 'awal'
                ? 'bg-[#B4A7FF]/20 text-[#B4A7FF]'
                : step.keadaan === 'pemutusan'
                ? 'bg-[#FFA8C5]/20 text-[#FFA8C5]'
                : 'bg-[#5EEAD4]/20 text-[#5EEAD4]'
            }`}>
              Tahap {step.tahap}: {step.subJudul}
            </span>
          </div>

          {/* Visual Formula Display */}
          <div className="py-4 px-2 font-mono text-base sm:text-xl font-extrabold text-[#EEEDFB] min-h-[64px] flex items-center justify-center bg-[#0F0B2A] rounded-xl border border-[#3A3280]">
            {step.visualFormula}
          </div>

          {/* Mechanism Explanation */}
          <div className="p-4 bg-[#150F38] rounded-xl text-left border border-[#3A3280]/60 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A99CFF] block">
              Mekanisme yang Terjadi:
            </span>
            <p className="text-xs sm:text-sm text-[#EEEDFB] leading-relaxed">
              {step.deskripsiMekanisme}
            </p>
          </div>
        </div>

        {/* Stepper Navigation Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="px-4 py-2 rounded-xl border border-[#3A3280] text-xs font-semibold text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#150F38] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Tahap Sebelumnya</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-lg text-xs text-[#8E8BB5] hover:text-[#EEEDFB] transition-colors cursor-pointer"
            title="Ulangi dari tahap 1"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === activeRx.steps.length - 1}
            className="px-5 py-2.5 rounded-xl bg-[#A99CFF] text-[#0F0B2A] text-xs sm:text-sm font-bold hover:bg-[#9889FC] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-[#A99CFF]/15"
          >
            <span>{currentStepIndex === activeRx.steps.length - 1 ? 'Tahap Selesai' : 'Langkah Berikutnya (Next)'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
