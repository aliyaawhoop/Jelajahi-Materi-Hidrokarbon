/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Kotak Cek Pemahaman
 * 1-2 Soal cepat untuk menguji pemahaman siswa setelah membaca materi
 */

import React, { useState } from 'react';
import { SoalCekPemahaman } from '../../data';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';

interface CekPemahamanBoxProps {
  judul: string;
  soals: SoalCekPemahaman[];
  aksenColor?: string;
}

export const CekPemahamanBox: React.FC<CekPemahamanBoxProps> = ({
  judul,
  soals,
  aksenColor = '#5EEAD4'
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [soalId: number]: string }>({});

  const handleSelectOption = (soalId: number, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [soalId]: optionId }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  return (
    <div className="bg-[#1E1850] border border-[#3A3280] rounded-2xl p-5 sm:p-7 shadow-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3A3280] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FDE68A]">
            Evaluasi Cepat
          </span>
          <h3 className="text-xl font-bold text-[#EEEDFB] mt-0.5">
            {judul}
          </h3>
          <p className="text-xs text-[#B8B5DE] mt-1">
            Jawab soal singkat berikut untuk mengecek pemahaman materi yang baru saja kamu pelajari.
          </p>
        </div>

        {Object.keys(selectedAnswers).length > 0 && (
          <button
            onClick={handleReset}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#150F38] border border-[#3A3280] text-xs font-semibold text-[#B8B5DE] hover:text-[#EEEDFB] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi Soal</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {soals.map((soal, index) => {
          const userChoice = selectedAnswers[soal.id];
          const isAnswered = !!userChoice;
          const isCorrect = userChoice === soal.kunci;

          return (
            <div key={soal.id} className="p-4 sm:p-5 bg-[#0F0B2A] border border-[#3A3280] rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#150F38] border border-[#3A3280] flex items-center justify-center font-mono text-xs font-bold text-[#EEEDFB] shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#EEEDFB] leading-relaxed">
                  {soal.pertanyaan}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 pt-1 pl-9">
                {soal.pilihan.map((pil) => {
                  const isThisSelected = userChoice === pil.id;
                  let optionStyles = 'bg-[#150F38] border-[#3A3280] text-[#B8B5DE] hover:text-[#EEEDFB] hover:border-[#8E8BB5]';

                  if (isAnswered) {
                    if (pil.id === soal.kunci) {
                      optionStyles = 'bg-[#5EEAD4]/20 border-[#5EEAD4] text-[#5EEAD4] font-semibold';
                    } else if (isThisSelected) {
                      optionStyles = 'bg-[#FFA8C5]/20 border-[#FFA8C5] text-[#FFA8C5]';
                    } else {
                      optionStyles = 'bg-[#150F38]/50 border-[#3A3280]/40 text-[#B8B5DE] opacity-60';
                    }
                  }

                  return (
                    <button
                      key={pil.id}
                      onClick={() => handleSelectOption(soal.id, pil.id)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer flex items-center gap-3 ${optionStyles}`}
                      disabled={isAnswered}
                    >
                      <span className="w-6 h-6 rounded-md bg-[#0F0B2A] border border-[#3A3280] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {pil.id}
                      </span>
                      <span className="leading-relaxed">{pil.teks}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswered && (
                <div
                  className={`p-3.5 rounded-xl border text-xs leading-relaxed ml-9 flex items-start gap-2.5 ${
                    isCorrect
                      ? 'bg-[#5EEAD4]/10 border-[#5EEAD4]/40 text-[#5EEAD4]'
                      : 'bg-[#FFA8C5]/10 border-[#FFA8C5]/40 text-[#FFA8C5]'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#5EEAD4]" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#FFA8C5]" />
                  )}
                  <div>
                    <span className="font-bold block mb-0.5">
                      {isCorrect ? 'Jawaban Benar!' : `Belum Tepat (Kunci: ${soal.kunci})`}
                    </span>
                    <span className="text-[#EEEDFB]">{soal.pembahasan}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
