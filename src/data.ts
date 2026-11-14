/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Data Pusat "Jelajahi Dunia Hidrokarbon"
 * Berisi deret homolog lengkap, kerangka materi, array soal, dan penilaian diri
 * yang disiapkan untuk diisi secara bertahap.
 */

export interface HomologItem {
  n: number;
  nama: string;
  rumusMolekul: string;
  perhitunganH: string;
  deskripsiSingkat?: string;
}

export interface GolonganHidrokarbon {
  id: 'alkana' | 'alkena' | 'alkuna';
  nama: string;
  labelLengkap: string;
  simbolIkatan: string;
  jenisIkatan: string;
  rumusUmum: string;
  warnaAksen: string; // Pastel palette: #5EEAD4 (mint), #B4A7FF (lavender), #FFA8C5 (pink peach)
  catatanKhusus?: string;
  anggota: HomologItem[];
}

export const CATATAN_DERET_HOMOLOG = {
  selisih: 'Tiap anggota yang berurutan berselisih satu gugus —CH₂— (massa molekul relatif bertambah 14).',
  rangkap: 'Mulai dari C₂, karena ikatan rangkap butuh dua atom C.',
  strukturNote: 'Rumus struktur detail ditambahkan nanti di halaman Materi, jadi di sini cukup rumus molekul.'
};

export const DERET_HOMOLOG: Record<'alkana' | 'alkena' | 'alkuna', GolonganHidrokarbon> = {
  alkana: {
    id: 'alkana',
    nama: 'Alkana',
    labelLengkap: 'Alkana (ikatan tunggal)',
    simbolIkatan: '—',
    jenisIkatan: 'Ikatan Tunggal (Jenuh)',
    rumusUmum: 'CₙH₂ₙ₊₂',
    warnaAksen: '#5EEAD4', // Mint
    catatanKhusus: 'Merupakan hidrokarbon alifatik jenuh dengan ikatan kovalen tunggal antaratom karbon.',
    anggota: [
      { n: 1, nama: 'metana', rumusMolekul: 'CH₄', perhitunganH: 'n = 1 → H = 2(1) + 2 = 4' },
      { n: 2, nama: 'etana', rumusMolekul: 'C₂H₆', perhitunganH: 'n = 2 → H = 2(2) + 2 = 6' },
      { n: 3, nama: 'propana', rumusMolekul: 'C₃H₈', perhitunganH: 'n = 3 → H = 2(3) + 2 = 8' },
      { n: 4, nama: 'butana', rumusMolekul: 'C₄H₁₀', perhitunganH: 'n = 4 → H = 2(4) + 2 = 10' },
      { n: 5, nama: 'pentana', rumusMolekul: 'C₅H₁₂', perhitunganH: 'n = 5 → H = 2(5) + 2 = 12' },
      { n: 6, nama: 'heksana', rumusMolekul: 'C₆H₁₄', perhitunganH: 'n = 6 → H = 2(6) + 2 = 14' },
      { n: 7, nama: 'heptana', rumusMolekul: 'C₇H₁₆', perhitunganH: 'n = 7 → H = 2(7) + 2 = 16' },
      { n: 8, nama: 'oktana', rumusMolekul: 'C₈H₁₈', perhitunganH: 'n = 8 → H = 2(8) + 2 = 18' },
      { n: 9, nama: 'nonana', rumusMolekul: 'C₉H₂₀', perhitunganH: 'n = 9 → H = 2(9) + 2 = 20' },
      { n: 10, nama: 'dekana', rumusMolekul: 'C₁₀H₂₂', perhitunganH: 'n = 10 → H = 2(10) + 2 = 22' },
    ]
  },
  alkena: {
    id: 'alkena',
    nama: 'Alkena',
    labelLengkap: 'Alkena (ikatan rangkap dua)',
    simbolIkatan: '=',
    jenisIkatan: 'Ikatan Rangkap Dua (Tak Jenuh)',
    rumusUmum: 'CₙH₂ₙ',
    warnaAksen: '#B4A7FF', // Lavender
    catatanKhusus: 'Mulai dari C₂, karena ikatan rangkap butuh dua atom C.',
    anggota: [
      { n: 2, nama: 'etena', rumusMolekul: 'C₂H₄', perhitunganH: 'n = 2 → H = 2(2) = 4' },
      { n: 3, nama: 'propena', rumusMolekul: 'C₃H₆', perhitunganH: 'n = 3 → H = 2(3) = 6' },
      { n: 4, nama: '1-butena', rumusMolekul: 'C₄H₈', perhitunganH: 'n = 4 → H = 2(4) = 8' },
      { n: 5, nama: '1-pentena', rumusMolekul: 'C₅H₁₀', perhitunganH: 'n = 5 → H = 2(5) = 10' },
      { n: 6, nama: '1-heksena', rumusMolekul: 'C₆H₁₂', perhitunganH: 'n = 6 → H = 2(6) = 12' },
      { n: 7, nama: '1-heptena', rumusMolekul: 'C₇H₁₄', perhitunganH: 'n = 7 → H = 2(7) = 14' },
      { n: 8, nama: '1-oktena', rumusMolekul: 'C₈H₁₆', perhitunganH: 'n = 8 → H = 2(8) = 16' },
      { n: 9, nama: '1-nonena', rumusMolekul: 'C₉H₁₈', perhitunganH: 'n = 9 → H = 2(9) = 18' },
      { n: 10, nama: '1-dekena', rumusMolekul: 'C₁₀H₂₀', perhitunganH: 'n = 10 → H = 2(10) = 20' },
    ]
  },
  alkuna: {
    id: 'alkuna',
    nama: 'Alkuna',
    labelLengkap: 'Alkuna (ikatan rangkap tiga)',
    simbolIkatan: '≡',
    jenisIkatan: 'Ikatan Rangkap Tiga (Tak Jenuh)',
    rumusUmum: 'CₙH₂ₙ₋₂',
    warnaAksen: '#FFA8C5', // Pink Peach
    catatanKhusus: 'Mulai dari C₂, karena ikatan rangkap butuh dua atom C.',
    anggota: [
      { n: 2, nama: 'etuna', rumusMolekul: 'C₂H₂', perhitunganH: 'n = 2 → H = 2(2) - 2 = 2' },
      { n: 3, nama: 'propuna', rumusMolekul: 'C₃H₄', perhitunganH: 'n = 3 → H = 2(3) - 2 = 4' },
      { n: 4, nama: '1-butuna', rumusMolekul: 'C₄H₆', perhitunganH: 'n = 4 → H = 2(4) - 2 = 6' },
      { n: 5, nama: '1-pentuna', rumusMolekul: 'C₅H₈', perhitunganH: 'n = 5 → H = 2(5) - 2 = 8' },
      { n: 6, nama: '1-heksuna', rumusMolekul: 'C₆H₁₀', perhitunganH: 'n = 6 → H = 2(6) - 2 = 10' },
      { n: 7, nama: '1-heptuna', rumusMolekul: 'C₇H₁₂', perhitunganH: 'n = 7 → H = 2(7) - 2 = 12' },
      { n: 8, nama: '1-oktuna', rumusMolekul: 'C₈H₁₄', perhitunganH: 'n = 8 → H = 2(8) - 2 = 14' },
      { n: 9, nama: '1-nonuna', rumusMolekul: 'C₉H₁₆', perhitunganH: 'n = 9 → H = 2(9) - 2 = 16' },
      { n: 10, nama: '1-dekuna', rumusMolekul: 'C₁₀H₁₈', perhitunganH: 'n = 10 → H = 2(10) - 2 = 18' },
    ]
  }
};

/**
 * Peta Konsep Senyawa Hidrokarbon
 */
export interface NodePetaKonsep {
  id: string;
  judul: string;
  kategori: 'akar' | 'cabang' | 'sub-bab';
  ringkasan: string;
  detail: string;
  warnaAksen?: string;
  subNodeIds?: string[];
}

export const PETA_KONSEP_DATA: NodePetaKonsep[] = [
  {
    id: 'akar',
    judul: 'Senyawa Hidrokarbon',
    kategori: 'akar',
    ringkasan: 'Senyawa karbon paling sederhana yang tersusun hanya atas atom Karbon (C) dan Hidrogen (H).',
    detail: 'Membentuk dasar bagi jutaan senyawa organik di alam, bahan bakar fosil, polimer, dan biokimia makhluk hidup.',
    warnaAksen: '#A99CFF',
    subNodeIds: ['struktur', 'penggolongan', 'sifat']
  },
  {
    id: 'struktur',
    judul: 'Struktur Atom Karbon',
    kategori: 'cabang',
    ringkasan: 'Kekhasan atom karbon dengan 4 elektron valensi dan posisi atom C.',
    detail: 'Memiliki 4 elektron valensi untuk membentuk 4 ikatan kovalen stabil, jari-jari atom relatif kecil, serta dapat membentuk rantai karbon terbuka maupun melingkar. Dikenal atom C primer, sekunder, tersier, dan kuarterner.',
    warnaAksen: '#5EEAD4',
    subNodeIds: ['kekhasan', 'jenis-c']
  },
  {
    id: 'penggolongan',
    judul: 'Penggolongan Hidrokarbon',
    kategori: 'cabang',
    ringkasan: 'Klasifikasi hidrokarbon alifatik: Alkana, Alkena, dan Alkuna.',
    detail: 'Alkana (CₙH₂ₙ₊₂, ikatan tunggal/jenuh), Alkena (CₙH₂ₙ, ikatan rangkap dua/tak jenuh), dan Alkuna (CₙH₂ₙ₋₂, ikatan rangkap tiga/tak jenuh).',
    warnaAksen: '#B4A7FF',
    subNodeIds: ['alkana', 'alkena', 'alkuna']
  },
  {
    id: 'sifat',
    judul: 'Sifat, Reaksi & Isomer',
    kategori: 'cabang',
    ringkasan: 'Sifat fisis, karakteristik reaksi kimia, dan gejala isomeri.',
    detail: 'Sifat fisis mencakup titik didih dan kelarutan. Reaksi meliputi pembakaran, substitusi, adisi, dan eliminasi. Isomer meliputi isomer struktur (kerangka, posisi, gugus fungsi) dan isomer ruang (geometri).',
    warnaAksen: '#FFA8C5',
    subNodeIds: ['reaksi', 'isomer']
  },
  {
    id: 'kekhasan',
    judul: 'Kekhasan Atom Karbon',
    kategori: 'sub-bab',
    ringkasan: '4 elektron valensi & kemampuan membentuk rantai karbon panjang.',
    detail: 'Atom C (nomor atom 6, konfigurasi 2, 4) mampu membentuk ikatan kovalen tunggal, rangkap dua, maupun rangkap tiga dengan sesama atom C membentuk rantai lurus, bercabang, atau siklis.',
    warnaAksen: '#5EEAD4'
  },
  {
    id: 'jenis-c',
    judul: 'Posisi Atom Karbon',
    kategori: 'sub-bab',
    ringkasan: 'Atom C primer (1°), sekunder (2°), tersier (3°), dan kuarterner (4°).',
    detail: 'Primer mengikat 1 atom C lain; sekunder mengikat 2 atom C lain; tersier mengikat 3 atom C lain; kuarterner mengikat 4 atom C lain.',
    warnaAksen: '#5EEAD4'
  },
  {
    id: 'reaksi',
    judul: 'Reaksi Kimia Hidrokarbon',
    kategori: 'sub-bab',
    ringkasan: 'Pembakaran (oksidasi), Substitusi, Adisi, dan Eliminasi.',
    detail: 'Pembakaran sempurna menghasilkan CO₂ dan H₂O. Alkena dan alkuna mengalami reaksi adisi memutus ikatan rangkap.',
    warnaAksen: '#FFA8C5'
  },
  {
    id: 'isomer',
    judul: 'Isomerisme Hidrokarbon',
    kategori: 'sub-bab',
    ringkasan: 'Rumus molekul sama, rumus struktur atau susunan ruang berbeda.',
    detail: 'Isomer rangka (rantai lurus vs cabang), isomer posisi (letak ikatan rangkap berpindah), dan isomer geometri (cis-trans).',
    warnaAksen: '#FFA8C5'
  }
];

/**
 * 3 Kartu "Yang Akan Kamu Pelajari"
 */
export const YANG_DIPELAJARI = [
  {
    nomor: '01',
    judul: 'Kekhasan & Struktur Atom Karbon',
    deskripsi: 'Memahami konfigurasi 4 elektron valensi atom C, kemampuan istimewa membentuk rantai karbon terpanjang di alam semesta, serta identifikasi atom C primer, sekunder, tersier, dan kuarterner.',
    warnaAksen: '#5EEAD4',
    simbol: '●'
  },
  {
    nomor: '02',
    judul: 'Penggolongan: Alkana, Alkena, Alkuna',
    deskripsi: 'Menjelajahi perbedaan ikatan tunggal (jenuh), rangkap dua, dan rangkap tiga (tak jenuh). Mempelajari deret homolog, pola kenaikan massa molekul, dan tata nama senyawa IUPAC.',
    warnaAksen: '#B4A7FF',
    simbol: '='
  },
  {
    nomor: '03',
    judul: 'Sifat, Reaksi, dan Isomer',
    deskripsi: 'Menganalisis hubungan panjang rantai dengan titik didih, mekanisme reaksi pembakaran, substitusi, adisi, eliminasi, serta fenomena isomer rangka, posisi, dan geometri.',
    warnaAksen: '#FFA8C5',
    simbol: '≡'
  }
];

/**
 * Tujuan Pembelajaran (Kompetensi Dasar Kurikulum)
 */
export const TUJUAN_BELAJAR = [
  {
    kode: 'KD 3.1',
    jenis: 'Kompetensi Pengetahuan',
    uraian: 'Menganalisis struktur dan sifat senyawa hidrokarbon berdasarkan kekhasan atom karbon dan penggolongan senyawanya.',
    warnaAksen: '#5EEAD4'
  },
  {
    kode: 'KD 4.1',
    jenis: 'Kompetensi Keterampilan',
    uraian: 'Membuat model visual struktur molekul hidrokarbon yang memiliki rumus molekul yang sama (isomer).',
    warnaAksen: '#B4A7FF'
  }
];

/**
 * Cara Belajar 3 Langkah
 */
export const CARA_BELAJAR = [
  {
    langkah: 1,
    nama: 'Baca Materi',
    deskripsi: 'Pelajari konsep inti secara bertahap dengan bahasa yang ringkas, ilustrasi ramah siswa, dan contoh kasus nyata sehari-hari.'
  },
  {
    langkah: 2,
    nama: 'Eksplorasi',
    deskripsi: 'Sentuh dan jelajahi baris planet deret homolog, amati animasi orbit molekul, serta pahami perubahan rumus molekul secara interaktif.'
  },
  {
    langkah: 3,
    nama: 'Uji Pemahaman',
    deskripsi: 'Kerjakan latihan soal interaktif, periksa pembahasannya, dan ukur kesiapan diri melalui instrumen penilaian diri mandiri.'
  }
];

/**
 * KERANGKA DATA MATERI (Dipersiapkan untuk diisi bertahap)
 * Jangan diisi penuh dulu sesuai instruksi pengguna.
 */
export interface SubMateri {
  id: string;
  judul: string;
  status: 'segera-hadir' | 'siap';
  ringkasan: string;
  konten?: string;
}

export interface BabMateri {
  id: string;
  nomor: number;
  judul: string;
  deskripsi: string;
  subBab: SubMateri[];
}

export const KERANGKA_MATERI: BabMateri[] = [
  {
    id: 'bab-1',
    nomor: 1,
    judul: 'Kekhasan & Struktur Atom Karbon',
    deskripsi: 'Mempelajari 4 elektron valensi, kestabilan ikatan kovalen, dan penentuan posisi atom C.',
    subBab: [
      { id: '1.1', judul: 'Kekhasan Atom Karbon', status: 'segera-hadir', ringkasan: 'Konfigurasi elektron dan keunikan ikatan kovalen karbon.' },
      { id: '1.2', judul: 'Atom C Primer, Sekunder, Tersier, Kuarterner', status: 'segera-hadir', ringkasan: 'Cara menghitung dan membedakan posisi atom karbon pada rantai.' }
    ]
  },
  {
    id: 'bab-2',
    nomor: 2,
    judul: 'Penggolongan Senyawa Hidrokarbon',
    deskripsi: 'Tata nama, deret homolog, dan karakteristik alkana, alkena, dan alkuna.',
    subBab: [
      { id: '2.1', judul: 'Alkana (CₙH₂ₙ₊₂)', status: 'segera-hadir', ringkasan: 'Tata nama IUPAC dan deret homolog alkana rantai lurus dan bercabang.' },
      { id: '2.2', judul: 'Alkena (CₙH₂ₙ)', status: 'segera-hadir', ringkasan: 'Ikatan rangkap dua dan tata nama alkena.' },
      { id: '2.3', judul: 'Alkuna (CₙH₂ₙ₋₂)', status: 'segera-hadir', ringkasan: 'Ikatan rangkap tiga dan tata nama alkuna.' }
    ]
  },
  {
    id: 'bab-3',
    nomor: 3,
    judul: 'Sifat Fisis, Reaksi Kimia & Isomeri',
    deskripsi: 'Pola titik didih, reaksi khas hidrokarbon, dan bentuk-bentuk isomer.',
    subBab: [
      { id: '3.1', judul: 'Sifat Fisis & Reaksi Hidrokarbon', status: 'segera-hadir', ringkasan: 'Pembakaran, adisi, substitusi, dan eliminasi.' },
      { id: '3.2', judul: 'Isomer Rangka, Posisi, dan Geometri', status: 'segera-hadir', ringkasan: 'Memahami senyawa berumus molekul sama namun berbeda struktur.' }
    ]
  }
];

/**
 * KERANGKA ARRAY SOAL LATIHAN (Dipersiapkan untuk diisi bertahap)
 * Jangan diisi penuh dulu sesuai instruksi pengguna.
 */
export interface SoalLatihan {
  id: number;
  kegiatan: 1 | 2 | 3;
  kdTerkait: 'KD 3.1' | 'KD 4.1';
  kategori: string;
  pertanyaan: string;
  svgStrukturType?: 'soal-4' | 'soal-6' | 'soal-8' | 'soal-9';
  pilihan: {
    label: 'A' | 'B' | 'C' | 'D' | 'E';
    teks: string;
    svgOptionType?: string;
  }[];
  kunciJawaban: 'A' | 'B' | 'C' | 'D' | 'E';
  petunjuk: string;
  pembahasan: string;
}

export const ARRAY_SOAL: SoalLatihan[] = [
  // ==========================================
  // KEGIATAN 1 (Soal 1 - 4)
  // ==========================================
  {
    id: 1,
    kegiatan: 1,
    kdTerkait: 'KD 3.1',
    kategori: 'Pengertian Hidrokarbon',
    pertanyaan: 'Senyawa hidrokarbon adalah senyawa yang molekulnya terdiri dari ....',
    pilihan: [
      { label: 'A', teks: 'atom karbon dan molekul air' },
      { label: 'B', teks: 'atom karbon dan atom hidrogen' },
      { label: 'C', teks: 'atom C, H, O, dan N' },
      { label: 'D', teks: 'atom C, O, N, dan sedikit P, S, Cl' },
      { label: 'E', teks: 'atom karbon dan atom-atom nonlogam' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Perhatikan suku kata pembentuk istilah "hidro-karbon". Senyawa ini merupakan golongan senyawa organik paling mendasar.',
    pembahasan: 'Senyawa hidrokarbon adalah senyawa karbon paling sederhana yang hanya tersusun dari atom Karbon (C) dan atom Hidrogen (H). Pilihan A, C, D, dan E salah karena memuat unsur di luar C dan H (seperti O, N, P, S, atau molekul air).'
  },
  {
    id: 2,
    kegiatan: 1,
    kdTerkait: 'KD 3.1',
    kategori: 'Kekhasan Atom Karbon',
    pertanyaan: 'Pernyataan yang tepat mengenai kekhasan atom karbon adalah ....',
    pilihan: [
      { label: 'A', teks: 'Karbon mempunyai 4 elektron valensi yang mampu membentuk ikatan kovalen' },
      { label: 'B', teks: 'Karbon berukuran relatif besar sehingga mampu mengikat semua unsur' },
      { label: 'C', teks: 'Karbon mempunyai 6 elektron valensi sehingga mampu mengikat 6 atom lain' },
      { label: 'D', teks: 'Karbon dapat dibuat manusia' },
      { label: 'E', teks: 'Karbon dapat membentuk ikatan ion dari keempat elektron terluarnya' }
    ],
    kunciJawaban: 'A',
    petunjuk: 'Ingat kembali nomor atom karbon (6) serta jumlah elektron pada kulit terluarnya.',
    pembahasan: 'Atom karbon memiliki nomor atom 6 dengan konfigurasi elektron 1s² 2s² 2p² (kulit K = 2, L = 4). Dengan memiliki 4 elektron valensi, atom C dapat membentuk 4 ikatan kovalen stabil untuk mencapai susunan oktet. Jari-jari atom C relatif kecil (bukan besar) dan ikatannya berupa ikatan kovalen, bukan ikatan ionik.'
  },
  {
    id: 3,
    kegiatan: 1,
    kdTerkait: 'KD 3.1',
    kategori: 'Identifikasi Senyawa Hidrokarbon',
    pertanyaan: 'Pasangan zat yang merupakan senyawa hidrokarbon adalah ....',
    pilihan: [
      { label: 'A', teks: 'C₂H₆ dan C₁₂H₂₂O₁₁' },
      { label: 'B', teks: 'CH₄ dan C₂H₄' },
      { label: 'C', teks: 'C₂H₄ dan C₆H₁₂O₆' },
      { label: 'D', teks: 'CO₂ dan H₂O' },
      { label: 'E', teks: 'CH₄ dan CO₂' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Cari pasangan rumus kimia yang HANYA memuat lambang atom C dan H tanpa atom oksigen (O).',
    pembahasan: 'Senyawa hidrokarbon murni hanya tersusun atas atom C dan H. Pasangan CH₄ (metana) dan C₂H₄ (etena) keduanya murni hanya mengandung unsur karbon dan hidrogen. Zat lain seperti C₁₂H₂₂O₁₁ (sukrosa), C₆H₁₂O₆ (glukosa), CO₂, dan H₂O mengandung atom oksigen (O).'
  },
  {
    id: 4,
    kegiatan: 1,
    kdTerkait: 'KD 3.1',
    kategori: 'Posisi Atom Karbon (1°, 2°, 3°, 4°)',
    pertanyaan: 'Perhatikan struktur molekul di bawah ini: Atom C primer, sekunder, tersier, dan kuarterner berturut-turut ditunjukkan oleh nomor ....',
    svgStrukturType: 'soal-4',
    pilihan: [
      { label: 'A', teks: '6, 5, 2, 3' },
      { label: 'B', teks: '1, 7, 3, 2' },
      { label: 'C', teks: '10, 9, 5, 3' },
      { label: 'D', teks: '8, 3, 6, 7' },
      { label: 'E', teks: '4, 2, 3, 7' }
    ],
    kunciJawaban: 'A',
    petunjuk: 'Hitung berapa banyak atom C lain yang diikat langsung: Primer = 1 atom C lain, Sekunder = 2, Tersier = 3, Kuarterner = 4.',
    pembahasan: 'Mari kita telusuri jumlah atom C lain yang diikat langsung pada struktur:\n• Atom C primer (1°): terikat langsung pada 1 atom C lain. Contoh: C6 (hanya terikat ke C5), juga C1, C4, C8, C10.\n• Atom C sekunder (2°): terikat langsung pada 2 atom C lain. Contoh: C5 (terikat ke C3 dan C6), juga C7, C9.\n• Atom C tersier (3°): terikat langsung pada 3 atom C lain. Yaitu C2 (terikat ke C1, C3, dan C7).\n• Atom C kuarterner (4°): terikat langsung pada 4 atom C lain. Yaitu C3 (terikat ke C2, C4, C5, dan C8).\nMaka nomor urut berturut-turut (primer, sekunder, tersier, kuarterner) adalah 6, 5, 2, 3 (Pilihan A).'
  },

  // ==========================================
  // KEGIATAN 2 (Soal 5 - 10)
  // ==========================================
  {
    id: 5,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Deret Homolog',
    pertanyaan: 'Senyawa yang berada dalam satu deret homolog adalah ....\n(1) C₄H₈\n(2) C₄H₁₀\n(3) C₆H₁₂\n(4) C₅H₈\n(5) C₅H₁₂',
    pilihan: [
      { label: 'A', teks: '(1) dan (2)' },
      { label: 'B', teks: '(2) dan (3)' },
      { label: 'C', teks: '(3) dan (4)' },
      { label: 'D', teks: '(1) dan (5)' },
      { label: 'E', teks: '(2) dan (5)' }
    ],
    kunciJawaban: 'E',
    petunjuk: 'Deret homolog memiliki rumus umum yang sama dan antaranggota berurutan berselisih gugus —CH₂—.',
    pembahasan: 'Mari kita identifikasi rumus umum masing-masing senyawa:\n• (1) C₄H₈ → CₙH₂ₙ (Alkena)\n• (2) C₄H₁₀ → CₙH₂ₙ₊₂ (Alkana)\n• (3) C₆H₁₂ → CₙH₂ₙ (Alkena)\n• (4) C₅H₈ → CₙH₂ₙ₋₂ (Alkuna)\n• (5) C₅H₁₂ → CₙH₂ₙ₊₂ (Alkana)\nSenyawa (2) C₄H₁₀ dan (5) C₅H₁₂ keduanya merupakan homolog alkana dan berselisih tepat satu gugus —CH₂— (Mr selisih 14).'
  },
  {
    id: 6,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Tata Nama Alkana',
    pertanyaan: 'Perhatikan rumus struktur alkana berikut: CH₃—CH(CH₃)—CH(C₂H₅)—CH₂—CH₃. Nama IUPAC yang benar adalah ....',
    svgStrukturType: 'soal-6',
    pilihan: [
      { label: 'A', teks: '2-metil-3-etilpentana' },
      { label: 'B', teks: '2-etil-2-metilpentana' },
      { label: 'C', teks: 'isopropilpentana' },
      { label: 'D', teks: '3-etil-2-metilpentana' },
      { label: 'E', teks: '3-etil-4-metilpentana' }
    ],
    kunciJawaban: 'D',
    petunjuk: 'Tentukan rantai induk 5 C (pentana), cari penomoran dari ujung yang memberi nomor cabang terkecil, dan urutkan cabang sesuai abjad (etil sebelum metil).',
    pembahasan: 'Langkah penamaan IUPAC:\n1. Rantai induk terpanjang terdiri dari 5 atom C → pentana.\n2. Penomoran dari ujung kiri: C1—C2(CH₃)—C3(C₂H₅)—C4—C5, karena dari kiri cabang pertama berada di nomor 2 (jika dari kanan di nomor 3).\n3. Terdapat cabang metil di nomor 2 dan etil di nomor 3.\n4. Berdasarkan aturan IUPAC, cabang diurutkan secara alfabetis ("etil" ditulis sebelum "metil").\nNama resmi yang benar: 3-etil-2-metilpentana.'
  },
  {
    id: 7,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Tata Nama Alkana Bercabang',
    pertanyaan: 'Nama senyawa dengan struktur CH₃CH(CH₃)C(CH₃)₃ adalah ....',
    pilihan: [
      { label: 'A', teks: '2,2-dimetilpentana' },
      { label: 'B', teks: '2,2,3-trimetilbutana' },
      { label: 'C', teks: '2,3,3-trimetilbutana' },
      { label: 'D', teks: '1,1,1,2-tetrametilbutana' },
      { label: 'E', teks: 'isopentana' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Buka rumus struktur ringkas menjadi rantai terbuka. Pilih penomoran yang memberikan himpunan nomor cabang lebih kecil.',
    pembahasan: 'Struktur lengkapnya: CH₃—CH(CH₃)—C(CH₃)₂—CH₃.\n1. Rantai terpanjang memiliki 4 atom C → butana.\n2. Penomoran dimulai dari ujung kanan yang mengikat 2 cabang metil: C1(kanan) — C2 — C3 — C4(kiri).\n3. Nomor cabang dari kanan adalah 2, 2, 3 (himpunan {2, 2, 3}). Jika dinomori dari kiri menghasilkan {2, 3, 3}. Aturan IUPAC mengharuskan nomor serendah mungkin.\nNama resmi yang benar: 2,2,3-trimetilbutana.'
  },
  {
    id: 8,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Tata Nama Alkena',
    pertanyaan: 'Perhatikan struktur alkena berikut: CH₃—C(CH₃)=CH—CH₂—CH(C₂H₅)—CH₃. Nama IUPAC yang tepat adalah ....',
    svgStrukturType: 'soal-8',
    pilihan: [
      { label: 'A', teks: '2,5-dimetil-5-etil-2-pentena' },
      { label: 'B', teks: '2-metil-5-etil-2-heksena' },
      { label: 'C', teks: '2-etil-5-metil-2-heksena' },
      { label: 'D', teks: '2,5-dimetil-2-heptena' },
      { label: 'E', teks: '3,6-dimetil-5-heptena' }
    ],
    kunciJawaban: 'D',
    petunjuk: 'Perhatikan gugus —C₂H₅ di ujung kanan: jika diuraikan menjadi —CH₂—CH₃ rantai utama menjadi lebih panjang (7 atom C)!',
    pembahasan: 'Langkah penamaan:\n1. Uraikan gugus —CH(C₂H₅)—CH₃ menjadi —CH(CH₃)—CH₂—CH₃. Rantai terpanjang yang memuat ikatan rangkap dua terdiri dari 7 atom C → heptena.\n2. Penomoran dimulai dari kiri karena paling dekat dengan ikatan rangkap dua (posisi C2).\n3. Ikatan rangkap berada di atom C nomor 2 (2-heptena).\n4. Cabang metil berada pada C nomor 2 dan C nomor 5 (2,5-dimetil).\nNama resmi yang benar: 2,5-dimetil-2-heptena.'
  },
  {
    id: 9,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Rumus Struktur Alkuna',
    pertanyaan: 'Rumus struktur dari senyawa 3-metil-1-pentuna adalah ....',
    svgStrukturType: 'soal-9',
    pilihan: [
      { label: 'A', teks: 'CH₃—CH(CH₃)—CH₂—C≡CH' },
      { label: 'B', teks: 'CH₃—CH₂—CH(CH₃)—C≡CH' },
      { label: 'C', teks: 'CH₂=CH—CH(CH₃)—CH₂—CH₃' },
      { label: 'D', teks: 'CH₃—CH₂—C(CH₃)=CH₂' },
      { label: 'E', teks: 'CH₃—CH₂—CH(C₂H₅)—C≡CH' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Rantai utama adalah "pentuna" (5 atom C) dengan ikatan rangkap tiga di nomor 1, dan cabang metil di nomor 3.',
    pembahasan: 'Berdasarkan nama "3-metil-1-pentuna":\n• 1-pentuna = rantai utama 5 atom C dengan ikatan rangkap tiga (—C≡C—) pada atom C1—C2 (HC≡C—CH—CH₂—CH₃).\n• 3-metil = terdapat gugus metil (—CH₃) pada atom C nomor 3.\nStrukturnya adalah: CH₃—CH₂—CH(CH₃)—C≡CH (Pilihan B).'
  },
  {
    id: 10,
    kegiatan: 2,
    kdTerkait: 'KD 3.1',
    kategori: 'Klasifikasi Jenuh & Tak Jenuh',
    pertanyaan: 'Diberikan 5 kelompok hidrokarbon:\n(1) C₂H₂ ; C₃H₄ ; C₄H₆\n(2) C₂H₄ ; C₃H₆ ; C₄H₈\n(3) C₂H₄ ; C₃H₆ ; C₄H₁₀\n(4) C₂H₆ ; C₃H₈ ; C₄H₁₀\n(5) C₂H₆ ; C₃H₈ ; C₄H₆\nKelompok yang SELURUH anggotanya tergolong hidrokarbon tak jenuh adalah ....',
    pilihan: [
      { label: 'A', teks: '(1) dan (2)' },
      { label: 'B', teks: '(2) dan (4)' },
      { label: 'C', teks: '(1) dan (3)' },
      { label: 'D', teks: '(4) dan (5)' },
      { label: 'E', teks: '(2) dan (3)' }
    ],
    kunciJawaban: 'A',
    petunjuk: 'Hidrokarbon tak jenuh memiliki ikatan rangkap dua (alkena CₙH₂ₙ) atau ikatan rangkap tiga (alkuna CₙH₂ₙ₋₂).',
    pembahasan: 'Analisis kelima kelompok:\n• Kelompok (1): C₂H₂, C₃H₄, C₄H₆ semuanya memenuhi CₙH₂ₙ₋₂ (alkuna, ikatan rangkap tiga/tak jenuh).\n• Kelompok (2): C₂H₄, C₃H₆, C₄H₈ semuanya memenuhi CₙH₂ₙ (alkena, ikatan rangkap dua/tak jenuh).\n• Kelompok (4): semuanya memenuhi CₙH₂ₙ₊₂ (alkana, jenuh).\n• Kelompok (3) dan (5) memuat campuran senyawa jenuh dan tak jenuh.\nJadi kelompok yang seluruhnya tak jenuh adalah (1) dan (2).'
  },

  // ==========================================
  // KEGIATAN 3 (Soal 11 - 15)
  // ==========================================
  {
    id: 11,
    kegiatan: 3,
    kdTerkait: 'KD 3.1',
    kategori: 'Jenis Reaksi Hidrokarbon',
    pertanyaan: 'Perhatikan tiga reaksi hidrokarbon berikut:\n(1) CH₂=CH₂ + H₂ → CH₃—CH₃\n(2) CH₄ + Cl₂ → CH₃Cl + HCl\n(3) CH₃—CH₂—Br → CH₂=CH₂ + HBr\nJenis reaksi (1), (2), dan (3) berturut-turut adalah ....',
    pilihan: [
      { label: 'A', teks: 'adisi, substitusi, eliminasi' },
      { label: 'B', teks: 'substitusi, adisi, eliminasi' },
      { label: 'C', teks: 'adisi, eliminasi, substitusi' },
      { label: 'D', teks: 'substitusi, eliminasi, adisi' },
      { label: 'E', teks: 'eliminasi, substitusi, adisi' }
    ],
    kunciJawaban: 'A',
    petunjuk: 'Perhatikan perubahan ikatan: rangkap menjadi tunggal (adisi), penukaran atom (substitusi), atau pembentukan ikatan rangkap dari pelepasan molekul kecil (eliminasi).',
    pembahasan: 'Analisis reaksi:\n1. Reaksi (1): ikatan rangkap dua C=C berubah menjadi ikatan tunggal C—C dengan penangkapan gas H₂ → Reaksi Adisi.\n2. Reaksi (2): 1 atom H pada metana digantikan oleh 1 atom klorin → Reaksi Substitusi.\n3. Reaksi (3): pelepasan molekul HBr menghasilkan ikatan rangkap dua alkena → Reaksi Eliminasi.\nUrutan berturut-turut: adisi, substitusi, eliminasi (Pilihan A).'
  },
  {
    id: 12,
    kegiatan: 3,
    kdTerkait: 'KD 3.1',
    kategori: 'Sifat Fisika (Titik Didih)',
    pertanyaan: 'Di antara senyawa hidrokarbon berikut, yang memiliki titik didih paling tinggi adalah ....',
    pilihan: [
      { label: 'A', teks: 'CH₃CH₂CH₃' },
      { label: 'B', teks: 'CH₃CH₂CH₂CH₃' },
      { label: 'C', teks: 'CH₃CH(CH₃)CH₃' },
      { label: 'D', teks: 'CH₃CH(CH₃)CH₂CH₃' },
      { label: 'E', teks: 'CH₃CH₂CH₂CH₂CH₃' }
    ],
    kunciJawaban: 'E',
    petunjuk: 'Titik didih meningkat seiring bertambahnya Mr (panjang rantai C). Pada jumlah atom C sama, rantai lurus memiliki titik didih lebih tinggi dari rantai bercabang.',
    pembahasan: 'Titik didih senyawa hidrokarbon berbanding lurus dengan massa molekul relatif (Mr). Senyawa dengan 5 atom C (pentana, Mr = 72) memiliki titik didih lebih tinggi dibanding senyawa 3 C atau 4 C.\nDi antara senyawa berkarbon 5 (opsi D dan E), n-pentana (rantai lurus, opsi E) memiliki luas permukaan kontak antarmolekul lebih besar daripada 2-metilbutana (bercabang), sehingga gaya Van der Waals-nya paling kuat dan titik didihnya paling tinggi.'
  },
  {
    id: 13,
    kegiatan: 3,
    kdTerkait: 'KD 3.1',
    kategori: 'Reaksi Adisi & Aturan Markovnikov',
    pertanyaan: 'Campuran zat berikut yang dapat bereaksi menghasilkan senyawa 2-bromopropana adalah ....',
    pilihan: [
      { label: 'A', teks: 'propena + Br₂' },
      { label: 'B', teks: 'propena + HBr' },
      { label: 'C', teks: 'propana + HBr' },
      { label: 'D', teks: 'propuna + 1 mol HBr' },
      { label: 'E', teks: '2-metilpropana + Br₂' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Gunakan Aturan Markovnikov pada adisi alkena tak simetris dengan asam halida HX.',
    pembahasan: 'Reaksi propena (CH₃—CH=CH₂) dengan HBr adalah reaksi adisi alkena asimetris:\n• Berdasarkan Aturan Markovnikov, atom H dari HBr terikat pada atom C ikatan rangkap yang mengikat atom H lebih banyak (C-1 yang mengikat 2 H).\n• Atom Br terikat pada atom C ikatan rangkap yang mengikat atom H lebih sedikit (C-2 yang mengikat 1 H).\nHasil reaksinya adalah CH₃—CH(Br)—CH₃ (2-bromopropana).\nOpsi A menghasilkan 1,2-dibromopropana, opsi C tidak bereaksi, dan opsi D menghasilkan 2-bromopropena.'
  },
  {
    id: 14,
    kegiatan: 3,
    kdTerkait: 'KD 4.1',
    kategori: 'Isomer Alkena',
    pertanyaan: 'Jumlah isomer struktur alkena yang dimiliki oleh senyawa hidrokarbon dengan rumus molekul C₄H₈ adalah ....',
    pilihan: [
      { label: 'A', teks: '2' },
      { label: 'B', teks: '3' },
      { label: 'C', teks: '4' },
      { label: 'D', teks: '5' },
      { label: 'E', teks: '6' }
    ],
    kunciJawaban: 'B',
    petunjuk: 'Buatlah kerangka rantai lurus dan bercabang yang mengandung ikatan rangkap dua untuk 4 atom C.',
    pembahasan: 'Senyawa C₄H₈ memiliki tepat 3 isomer struktur alkena alifatik:\n1. 1-butena (CH₂=CH—CH₂—CH₃)\n2. 2-butena (CH₃—CH=CH—CH₃)\n3. 2-metilpropena (CH₂=C(CH₃)—CH₃)\nCatatan penting: Senyawa 2-butena juga mempunyai isomer geometri (cis-2-butena dan trans-2-butena), namun jumlah isomer STRUKTUR alkenanya adalah tepat 3 (Pilihan B).'
  },
  {
    id: 15,
    kegiatan: 3,
    kdTerkait: 'KD 4.1',
    kategori: 'Identifikasi Pasangan Isomer',
    pertanyaan: 'Berikut ini yang BUKAN merupakan pasangan isomer adalah ....',
    pilihan: [
      { label: 'A', teks: 'CH₂=CH—CH₂—CH₃ dan CH₃—CH=CH—CH₃' },
      { label: 'B', teks: '2-metilpropana dan butana' },
      { label: 'C', teks: 'CH₃—C≡C—CH₃ dan CH₃—CH₂—C≡CH' },
      { label: 'D', teks: 'CH₂=CH—CH=CH₂ dan CH≡C—CH₂—CH₃' },
      { label: 'E', teks: 'CH₂=C=CH—CH₃ dan CH≡C—CH=CH₂' }
    ],
    kunciJawaban: 'E',
    petunjuk: 'Syarat mutlak dua senyawa berisomer adalah mempunyai rumus molekul yang SAMA. Hitung jumlah atom C dan H pada tiap opsi.',
    pembahasan: 'Mari kita periksa rumus molekul masing-masing pasangan:\n• Pasangan A: keduanya C₄H₈ (isomer posisi alkena)\n• Pasangan B: keduanya C₄H₁₀ (isomer rangka alkana)\n• Pasangan C: keduanya C₄H₆ (isomer posisi alkuna)\n• Pasangan D: keduanya C₄H₆ (isomer fungsi antara alkadiena dan alkuna)\n• Pasangan E:\n  - CH₂=C=CH—CH₃ memiliki rumus molekul C₄H₆ (butadiena)\n  - CH≡C—CH=CH₂ memiliki rumus molekul C₄H₄ (butenuna)\nKarena rumus molekulnya berbeda (C₄H₆ vs C₄H₄), maka pasangan E BUKAN pasangan isomer.'
  }
];

// ==========================================
// PENILAIAN DIRI RESMI PER KEGIATAN
// ==========================================
export interface ButirPenilaianDiri {
  id: number;
  kegiatan: 1 | 2 | 3;
  kd: 'KD 3.1' | 'KD 4.1';
  indikator: string;
  pertanyaanRefleksi: string;
  subBabRekomendasi: {
    id: string;
    judul: string;
  };
}

export const ARRAY_PENILAIAN_DIRI: ButirPenilaianDiri[] = [
  // Kegiatan 1 (5 butir)
  {
    id: 1,
    kegiatan: 1,
    kd: 'KD 3.1',
    indikator: 'Kekhasan atom karbon',
    pertanyaanRefleksi: 'Saya dapat menganalisis kekhasan atom karbon yang menyebabkan banyaknya senyawa karbon.',
    subBabRekomendasi: { id: '1.1', judul: 'Kekhasan Atom Karbon' }
  },
  {
    id: 2,
    kegiatan: 1,
    kd: 'KD 3.1',
    indikator: 'Kestabilan ikatan kovalen',
    pertanyaanRefleksi: 'Saya dapat menjelaskan mengapa atom karbon dapat membentuk ikatan kovalen yang stabil.',
    subBabRekomendasi: { id: '1.1', judul: 'Elektron Valensi dan Ikatan Kovalen Karbon' }
  },
  {
    id: 3,
    kegiatan: 1,
    kd: 'KD 3.1',
    indikator: 'Bentuk rantai karbon',
    pertanyaanRefleksi: 'Saya dapat membedakan rantai karbon terbuka (alifatik lurus dan bercabang) dan tertutup (siklis).',
    subBabRekomendasi: { id: '1.2', judul: 'Bentuk Rantai Karbon' }
  },
  {
    id: 4,
    kegiatan: 1,
    kd: 'KD 3.1',
    indikator: 'Jenis ikatan kovalen',
    pertanyaanRefleksi: 'Saya dapat membedakan ikatan tunggal, rangkap dua, dan rangkap tiga.',
    subBabRekomendasi: { id: '1.2', judul: 'Ikatan Jenuh dan Tak Jenuh' }
  },
  {
    id: 5,
    kegiatan: 1,
    kd: 'KD 3.1',
    indikator: 'Kedudukan atom karbon',
    pertanyaanRefleksi: 'Saya dapat menentukan kedudukan atom C primer, sekunder, tersier, dan kuarterner pada suatu rumus struktur.',
    subBabRekomendasi: { id: '1.3', judul: 'Kedudukan Atom Karbon' }
  },

  // Kegiatan 2 (5 butir)
  {
    id: 6,
    kegiatan: 2,
    kd: 'KD 3.1',
    indikator: 'Deret homolog',
    pertanyaanRefleksi: 'Saya dapat menjelaskan pengertian deret homolog dan cirinya.',
    subBabRekomendasi: { id: '2.2', judul: 'Deret Homolog' }
  },
  {
    id: 7,
    kegiatan: 2,
    kd: 'KD 3.1',
    indikator: 'Penggolongan hidrokarbon',
    pertanyaanRefleksi: 'Saya dapat membedakan alkana, alkena, dan alkuna berdasarkan rumus umum dan jenis ikatannya.',
    subBabRekomendasi: { id: '2.1', judul: 'Penggolongan Hidrokarbon' }
  },
  {
    id: 8,
    kegiatan: 2,
    kd: 'KD 3.1',
    indikator: 'Tata nama alkana',
    pertanyaanRefleksi: 'Saya dapat memberi nama senyawa alkana rantai lurus dan bercabang menurut aturan IUPAC.',
    subBabRekomendasi: { id: '2.5', judul: 'Tata Nama Alkana' }
  },
  {
    id: 9,
    kegiatan: 2,
    kd: 'KD 3.1',
    indikator: 'Tata nama alkena dan alkuna',
    pertanyaanRefleksi: 'Saya dapat memberi nama senyawa alkena dan alkuna menurut aturan IUPAC.',
    subBabRekomendasi: { id: '2.5', judul: 'Tata Nama Alkena dan Alkuna' }
  },
  {
    id: 10,
    kegiatan: 2,
    kd: 'KD 3.1',
    indikator: 'Rumus struktur dan alkil',
    pertanyaanRefleksi: 'Saya dapat menggambarkan rumus struktur senyawa hidrokarbon jika diketahui namanya.',
    subBabRekomendasi: { id: '2.4', judul: 'Rumus Struktur dan Alkil' }
  },

  // Kegiatan 3 (5 butir)
  {
    id: 11,
    kegiatan: 3,
    kd: 'KD 3.1',
    indikator: 'Sifat fisis hidrokarbon',
    pertanyaanRefleksi: 'Saya dapat mendeskripsikan sifat fisis hidrokarbon (titik didih, kelarutan) dan trennya dalam deret homolog.',
    subBabRekomendasi: { id: '3.1', judul: 'Sifat Fisis Hidrokarbon' }
  },
  {
    id: 12,
    kegiatan: 3,
    kd: 'KD 3.1',
    indikator: 'Reaksi pembakaran',
    pertanyaanRefleksi: 'Saya dapat menuliskan persamaan reaksi pembakaran hidrokarbon.',
    subBabRekomendasi: { id: '3.2', judul: 'Reaksi Pembakaran' }
  },
  {
    id: 13,
    kegiatan: 3,
    kd: 'KD 3.1',
    indikator: 'Reaksi substitusi, eliminasi, dan adisi',
    pertanyaanRefleksi: 'Saya dapat membedakan dan menuliskan reaksi substitusi, eliminasi, dan adisi.',
    subBabRekomendasi: { id: '3.2', judul: 'Reaksi Substitusi, Adisi, dan Eliminasi' }
  },
  {
    id: 14,
    kegiatan: 3,
    kd: 'KD 3.1',
    indikator: 'Aturan Markovnikov',
    pertanyaanRefleksi: 'Saya dapat menerapkan aturan Markovnikov pada reaksi adisi alkena tak simetris.',
    subBabRekomendasi: { id: '3.2', judul: 'Aturan Markovnikov' }
  },
  {
    id: 15,
    kegiatan: 3,
    kd: 'KD 4.1',
    indikator: 'Isomerisme',
    pertanyaanRefleksi: 'Saya dapat menentukan jenis isomer (rangka, posisi, geometri cis-trans) dari suatu rumus molekul.',
    subBabRekomendasi: { id: '3.4', judul: 'Isomerisme' }
  }
];


// ============================================================================
// DATA MATERI KURIKULUM KIMIA KELAS XI KD 3.1 & KD 4.1
// Sesuai Kurikulum Kimia SMA/MA Kelas XI KD 3.1
// ============================================================================

export interface AtomCInteractive {
  id: string;
  label: string; // e.g., "C1", "C2"
  formula: string; // e.g. "CH3", "C", "CH2", "CH"
  tipe: 'primer' | 'sekunder' | 'tersier' | 'kuarterner';
  derajat: '1°' | '2°' | '3°' | '4°';
  terikatKe: string[]; // IDs of bonded C atoms
  alasan: string;
  x: number; // percentage in SVG/canvas
  y: number;
}

export interface StrukturContoh {
  id: string;
  judul: string;
  rumusMolekul: string;
  namaIUPAC: string;
  deskripsi: string;
  atoms: AtomCInteractive[];
  bonds: { from: string; to: string; type: 'single' | 'double' | 'triple' }[];
  summary: {
    primer: number;
    sekunder: number;
    tersier: number;
    kuarterner: number;
    total: number;
  };
}

export interface AlkilItem {
  n: number;
  namaAlkil: string;
  rumusAlkil: string;
  rumusStruktur: string;
  asalAlkana: string;
}

export interface ContohTataNama {
  id: string;
  golongan: 'alkana' | 'alkena' | 'alkuna';
  namaIUPAC: string;
  rumusStrukturTeks: string;
  langkah1_RantaiInduk: string;
  langkah2_Penomoran: string;
  langkah3_Cabang: string;
  langkah4_NamaAkhir: string;
  svgHighlightUrl?: string;
}

export interface SoalCekPemahaman {
  id: number;
  pertanyaan: string;
  pilihan: { id: string; teks: string }[];
  kunci: string;
  pembahasan: string;
}

// ----------------------------------------------------------------------------
// DATA KEGIATAN 1: Kekhasan & Posisi Atom Karbon (Halaman 8-10)
// ----------------------------------------------------------------------------

export const KEGIATAN_1_DATA = {
  id: 'kegiatan-1',
  nomor: 1,
  judul: 'Kekhasan Atom Karbon & Struktur Atom Karbon',
  deskripsi: 'Memahami konfigurasi elektron atom karbon, jenis ikatan kovalen, bentuk rantai, dan identifikasi posisi atom C primer, sekunder, tersier, dan kuarterner.',
  
  subBabs: [
    { id: '1.1', judul: 'Kekhasan Atom Karbon' },
    { id: '1.2', judul: 'Bentuk Ikatan & Rantai Karbon' },
    { id: '1.3', judul: 'Posisi Atom Karbon (1°, 2°, 3°, 4°)' },
    { id: '1.4', judul: 'Rangkuman & Cek Pemahaman' }
  ],

  // 1.1 Kekhasan Atom Karbon
  kekhasan: {
    nomorAtom: 6,
    simbol: '₆C',
    konfigurasi: '1s² 2s² 2p² (Kulit K = 2, L = 4)',
    elektronValensi: 4,
    penjelasanValensi: 'Atom karbon memiliki nomor atom 6 dengan konfigurasi elektron 1s² 2s² 2p² atau pada kulit utama K = 2, L = 4. Karena memiliki 4 elektron valensi, atom karbon membutuhkan 4 elektron lagi untuk mencapai susunan oktet yang stabil (seperti gas mulia Ne).',
    keistimewaanIkatan: 'Untuk mencapai kestabilan tersebut, atom karbon membentuk 4 pasang ikatan kovalen dengan atom lain atau sesama atom karbon. Jari-jari atom karbon yang relatif kecil membuat ikatan kovalen yang terbentuk sangat kuat dan stabil, sehingga mampu membentuk rantai karbon yang sangat panjang dan beragam di alam semesta.'
  },

  // 1.2 Bentuk Ikatan & Rantai
  bentukIkatan: [
    {
      jenis: 'Ikatan Kovalen Tunggal (—)',
      sifat: 'Jenuh',
      penjelasan: 'Ikatan kovalen tunggal terbentuk jika masing-masing atom C menyumbangkan 1 elektron untuk dipakai bersama (terdiri dari 1 pasang elektron ikatan). Contoh pada senyawa alkana.',
      contoh: 'Contoh: Etana (CH₃ — CH₃)'
    },
    {
      jenis: 'Ikatan Kovalen Rangkap Dua (=)',
      sifat: 'Tak Jenuh',
      penjelasan: 'Ikatan kovalen rangkap dua terjadi jika masing-masing atom C menyumbangkan 2 elektron ikatan (terdiri dari 2 pasang elektron ikatan). Contoh pada senyawa alkena.',
      contoh: 'Contoh: Etena (CH₂ = CH₂)'
    },
    {
      jenis: 'Ikatan Kovalen Rangkap Tiga (≡)',
      sifat: 'Tak Jenuh',
      penjelasan: 'Ikatan kovalen rangkap tiga terjadi jika masing-masing atom C menyumbangkan 3 elektron ikatan (terdiri dari 3 pasang elektron ikatan). Contoh pada senyawa alkuna.',
      contoh: 'Contoh: Etuna (CH ≡ CH)'
    }
  ],

  bentukRantai: [
    {
      nama: 'Rantai Terbuka (Alifatik)',
      subTipe: [
        { nama: 'Rantai Lurus', deskripsi: 'Semua atom C tersambung dalam satu deret lurus berkesinambungan tanpa cabang. Contoh: n-butana (CH₃—CH₂—CH₂—CH₃).' },
        { nama: 'Rantai Bercabang', deskripsi: 'Terdapat atom C yang terikat di luar rantai utama (sebagai cabang). Contoh: isobutana / 2-metilpropana.' }
      ]
    },
    {
      nama: 'Rantai Tertutup (Siklis)',
      subTipe: [
        { nama: 'Alisiklik & Aromatik', deskripsi: 'Ujung-ujung rantai atom C saling berikatan membentuk cincin tertutup. Contoh: sikloheksana (cincin 6 atom C) atau benzena.' }
      ]
    }
  ],

  // 1.3 Struktur Interaktif Posisi Atom C
  strukturInteraktif: {
    contoh1: {
      id: 'struktur-contoh-1',
      judul: 'Struktur Contoh: 2,2,4-trimetilpentana',
      rumusMolekul: 'C₈H₁₈',
      namaIUPAC: '2,2,4-trimetilpentana',
      deskripsi: 'Klik atau sentuh setiap bulatan atom Karbon (C) pada diagram rantai di bawah untuk mengetahui jenis kedudukan serta alasannya.',
      atoms: [
        { id: 'C1', label: 'C-1', formula: 'CH₃', tipe: 'primer', derajat: '1°', terikatKe: ['C2'], alasan: 'Hanya terikat langsung pada 1 atom C lain (yaitu atom C-2).', x: 12, y: 50 },
        { id: 'C2', label: 'C-2', formula: 'C', tipe: 'kuarterner', derajat: '4°', terikatKe: ['C1', 'C3', 'C6', 'C7'], alasan: 'Terikat langsung pada 4 atom C lain (C-1, C-3, C-6, dan C-7).', x: 34, y: 50 },
        { id: 'C3', label: 'C-3', formula: 'CH₂', tipe: 'sekunder', derajat: '2°', terikatKe: ['C2', 'C4'], alasan: 'Terikat langsung pada 2 atom C lain (yaitu C-2 dan C-4).', x: 54, y: 50 },
        { id: 'C4', label: 'C-4', formula: 'CH', tipe: 'tersier', derajat: '3°', terikatKe: ['C3', 'C5', 'C8'], alasan: 'Terikat langsung pada 3 atom C lain (yaitu C-3, C-5, dan C-8).', x: 74, y: 50 },
        { id: 'C5', label: 'C-5', formula: 'CH₃', tipe: 'primer', derajat: '1°', terikatKe: ['C4'], alasan: 'Hanya terikat langsung pada 1 atom C lain (yaitu atom C-4).', x: 92, y: 50 },
        { id: 'C6', label: 'C-6 (cabang)', formula: 'CH₃', tipe: 'primer', derajat: '1°', terikatKe: ['C2'], alasan: 'Merupakan gugus cabang yang hanya terikat langsung pada 1 atom C (C-2).', x: 34, y: 16 },
        { id: 'C7', label: 'C-7 (cabang)', formula: 'CH₃', tipe: 'primer', derajat: '1°', terikatKe: ['C2'], alasan: 'Merupakan gugus cabang yang hanya terikat langsung pada 1 atom C (C-2).', x: 34, y: 84 },
        { id: 'C8', label: 'C-8 (cabang)', formula: 'CH₃', tipe: 'primer', derajat: '1°', terikatKe: ['C4'], alasan: 'Merupakan gugus cabang yang hanya terikat langsung pada 1 atom C (C-4).', x: 74, y: 84 }
      ] as AtomCInteractive[],
      bonds: [
        { from: 'C1', to: 'C2', type: 'single' },
        { from: 'C2', to: 'C3', type: 'single' },
        { from: 'C3', to: 'C4', type: 'single' },
        { from: 'C4', to: 'C5', type: 'single' },
        { from: 'C2', to: 'C6', type: 'single' },
        { from: 'C2', to: 'C7', type: 'single' },
        { from: 'C4', to: 'C8', type: 'single' }
      ],
      summary: {
        primer: 5,
        sekunder: 1,
        tersier: 1,
        kuarterner: 1,
        total: 8
      }
    }
  },

  // 1.4 Rangkuman Kegiatan 1 (Sesuai Modul)
  rangkuman: [
    'Atom karbon memiliki nomor atom 6 dengan konfigurasi elektron 1s² 2s² 2p² atau pada kulit utama K = 2, L = 4 sehingga memiliki 4 elektron valensi.',
    'Untuk mencapai susunan oktet yang stabil, atom karbon membentuk 4 ikatan kovalen dengan sesama atom karbon atau atom lain.',
    'Atom karbon dapat membentuk ikatan kovalen tunggal (jenuh), ikatan rangkap dua (tak jenuh), dan ikatan rangkap tiga (tak jenuh).',
    'Berdasarkan bentuk rantainya, senyawa hidrokarbon dapat membentuk rantai terbuka (alifatik lurus maupun bercabang) dan rantai tertutup (siklis).',
    'Berdasarkan jumlah atom C lain yang diikat langsung, atom C dibedakan menjadi: (1) Atom C Primer: mengikat 1 atom C lain, (2) Atom C Sekunder: mengikat 2 atom C lain, (3) Atom C Tersier: mengikat 3 atom C lain, dan (4) Atom C Kuarterner: mengikat 4 atom C lain.'
  ],

  // Cek Pemahaman Kegiatan 1
  cekPemahaman: [
    {
      id: 1,
      pertanyaan: 'Berdasarkan konfigurasi elektronnya, berapakah jumlah elektron valensi atom karbon dan berapa banyak ikatan kovalen yang dapat dibentuknya untuk mencapai kestabilan?',
      pilihan: [
        { id: 'A', teks: '2 elektron valensi dan membentuk 2 ikatan kovalen' },
        { id: 'B', teks: '4 elektron valensi dan membentuk 4 ikatan kovalen' },
        { id: 'C', teks: '6 elektron valensi dan membentuk 6 ikatan kovalen' },
        { id: 'D', teks: '4 elektron valensi dan membentuk 2 ikatan ionik' }
      ],
      kunci: 'B',
      pembahasan: 'Atom karbon memiliki nomor atom 6 (konfigurasi 2, 4) sehingga mempunyai 4 elektron valensi dan membentuk 4 pasang ikatan kovalen untuk memenuhi kaidah oktet (8 elektron).'
    },
    {
      id: 2,
      pertanyaan: 'Sebuah atom karbon dalam rantai hidrokarbon terikat langsung pada 3 atom karbon lainnya dan 1 atom hidrogen. Berdasarkan posisinya, atom karbon tersebut tergolong sebagai...',
      pilihan: [
        { id: 'A', teks: 'Atom C Primer (1°)' },
        { id: 'B', teks: 'Atom C Sekunder (2°)' },
        { id: 'C', teks: 'Atom C Tersier (3°)' },
        { id: 'D', teks: 'Atom C Kuarterner (4°)' }
      ],
      kunci: 'C',
      pembahasan: 'Atom C tersier (3°) adalah atom karbon yang terikat langsung pada 3 atom karbon lain dalam rantai senyawa hidrokarbon.'
    }
  ] as SoalCekPemahaman[]
};

// ----------------------------------------------------------------------------
// DATA KEGIATAN 2: Penggolongan Hidrokarbon & Tata Nama IUPAC (Halaman 15-21)
// ----------------------------------------------------------------------------

export const KEGIATAN_2_DATA = {
  id: 'kegiatan-2',
  nomor: 2,
  judul: 'Penggolongan Senyawa Hidrokarbon & Tata Nama IUPAC',
  deskripsi: 'Membedakan alkana, alkena, alkuna, deret homolog, gugus alkil, serta tata nama IUPAC sistematis beserta latihan langkah demi langkah.',
  
  subBabs: [
    { id: '2.1', judul: 'Penggolongan: Alkana, Alkena, Alkuna' },
    { id: '2.2', judul: 'Deret Homolog & Rumus Struktur' },
    { id: '2.3', judul: 'Kalkulator Rumus Molekul (Slider C)' },
    { id: '2.4', judul: 'Gugus Alkil (Cabang)' },
    { id: '2.5', judul: 'Aturan Tata Nama IUPAC (Stepper)' },
    { id: '2.6', judul: '9 Contoh Tata Nama Resmi IUPAC' },
    { id: '2.7', judul: 'Latihan Penamaan Interaktif' },
    { id: '2.8', judul: 'Rangkuman & Cek Pemahaman' }
  ],

  // 2.1 Pengantar Golongan
  golonganUtama: [
    {
      id: 'alkana',
      nama: 'Alkana',
      simbolIkatan: '—',
      jenisIkatan: 'Ikatan Kovalen Tunggal (Jenuh)',
      rumusUmum: 'CₙH₂ₙ₊₂',
      anggotaSederhana: 'Metana (CH₄)',
      warna: '#5EEAD4',
      deskripsi: 'Hidrokarbon alifatik jenuh di mana semua ikatan antarkarbon berupa ikatan kovalen tunggal. Anggota paling sederhananya adalah gas metana (CH₄) dengan n = 1.'
    },
    {
      id: 'alkena',
      nama: 'Alkena',
      simbolIkatan: '=',
      jenisIkatan: 'Ikatan Rangkap Dua (Tak Jenuh)',
      rumusUmum: 'CₙH₂ₙ',
      anggotaSederhana: 'Etena (C₂H₄)',
      warna: '#B4A7FF',
      deskripsi: 'Hidrokarbon alifatik tak jenuh yang memiliki minimal satu ikatan rangkap dua (C=C). Anggota paling sederhananya adalah etena (C₂H₄) dengan n = 2, karena ikatan rangkap dua membutuhkan minimal dua atom karbon.'
    },
    {
      id: 'alkuna',
      nama: 'Alkuna',
      simbolIkatan: '≡',
      jenisIkatan: 'Ikatan Rangkap Tiga (Tak Jenuh)',
      rumusUmum: 'CₙH₂ₙ₋₂',
      anggotaSederhana: 'Etuna (C₂H₂)',
      warna: '#FFA8C5',
      deskripsi: 'Hidrokarbon alifatik tak jenuh yang memiliki minimal satu ikatan rangkap tiga (C≡C). Anggota paling sederhananya adalah etuna atau gas asetilena (C₂H₂) dengan n = 2.'
    }
  ],

  // 2.2 Penjelasan Deret Homolog
  definisiDeretHomolog: {
    judul: 'Apa Itu Deret Homolog?',
    uraian: 'Deret homolog adalah suatu golongan atau kelompok senyawa karbon dengan rumus umum yang sama, mempunyai sifat kimia yang mirip, dan rumus molekul dari dua suku berurutan selalu berselisih satu gugus —CH₂—.',
    selisihMr: 'Karena selisih antaranggota berurutan adalah 1 gugus —CH₂— (Ar C = 12, Ar H = 1), maka selisih massa molekul relatif (Mr) dari setiap suku yang berdekatan selalu tetap sebesar 14 satuan massa atom.',
    sifatFisis: 'Keteraturan ini menyebabkan titik didih dan massa jenis dalam deret homolog meningkat secara bertahap seiring bertambahnya panjang rantai karbon.'
  },

  // Detail Deret Homolog dengan Rumus Struktur untuk Modul
  deretHomologLengkap: {
    alkana: [
      { n: 1, nama: 'metana', rumusMolekul: 'CH₄', rumusStruktur: 'H — CH₂ — H (CH₄)', mr: 16 },
      { n: 2, nama: 'etana', rumusMolekul: 'C₂H₆', rumusStruktur: 'CH₃ — CH₃', mr: 30 },
      { n: 3, nama: 'propana', rumusMolekul: 'C₃H₈', rumusStruktur: 'CH₃ — CH₂ — CH₃', mr: 44 },
      { n: 4, nama: 'butana', rumusMolekul: 'C₄H₁₀', rumusStruktur: 'CH₃ — CH₂ — CH₂ — CH₃', mr: 58 },
      { n: 5, nama: 'pentana', rumusMolekul: 'C₅H₁₂', rumusStruktur: 'CH₃ — (CH₂)₃ — CH₃', mr: 72 },
      { n: 6, nama: 'heksana', rumusMolekul: 'C₆H₁₄', rumusStruktur: 'CH₃ — (CH₂)₄ — CH₃', mr: 86 },
      { n: 7, nama: 'heptana', rumusMolekul: 'C₇H₁₆', rumusStruktur: 'CH₃ — (CH₂)₅ — CH₃', mr: 100 },
      { n: 8, nama: 'oktana', rumusMolekul: 'C₈H₁₈', rumusStruktur: 'CH₃ — (CH₂)₆ — CH₃', mr: 114 },
      { n: 9, nama: 'nonana', rumusMolekul: 'C₉H₂₀', rumusStruktur: 'CH₃ — (CH₂)₇ — CH₃', mr: 128 },
      { n: 10, nama: 'dekana', rumusMolekul: 'C₁₀H₂₂', rumusStruktur: 'CH₃ — (CH₂)₈ — CH₃', mr: 142 }
    ],
    alkena: [
      { n: 2, nama: 'etena', rumusMolekul: 'C₂H₄', rumusStruktur: 'CH₂ = CH₂', mr: 28 },
      { n: 3, nama: 'propena', rumusMolekul: 'C₃H₆', rumusStruktur: 'CH₂ = CH — CH₃', mr: 42 },
      { n: 4, nama: '1-butena', rumusMolekul: 'C₄H₈', rumusStruktur: 'CH₂ = CH — CH₂ — CH₃', mr: 56 },
      { n: 5, nama: '1-pentena', rumusMolekul: 'C₅H₁₀', rumusStruktur: 'CH₂ = CH — (CH₂)₂ — CH₃', mr: 70 },
      { n: 6, nama: '1-heksena', rumusMolekul: 'C₆H₁₂', rumusStruktur: 'CH₂ = CH — (CH₂)₃ — CH₃', mr: 84 },
      { n: 7, nama: '1-heptena', rumusMolekul: 'C₇H₁₄', rumusStruktur: 'CH₂ = CH — (CH₂)₄ — CH₃', mr: 98 },
      { n: 8, nama: '1-oktena', rumusMolekul: 'C₈H₁₆', rumusStruktur: 'CH₂ = CH — (CH₂)₅ — CH₃', mr: 112 },
      { n: 9, nama: '1-nonena', rumusMolekul: 'C₉H₁₈', rumusStruktur: 'CH₂ = CH — (CH₂)₆ — CH₃', mr: 126 },
      { n: 10, nama: '1-dekena', rumusMolekul: 'C₁₀H₂₀', rumusStruktur: 'CH₂ = CH — (CH₂)₇ — CH₃', mr: 140 }
    ],
    alkuna: [
      { n: 2, nama: 'etuna', rumusMolekul: 'C₂H₂', rumusStruktur: 'CH ≡ CH', mr: 26 },
      { n: 3, nama: 'propuna', rumusMolekul: 'C₃H₄', rumusStruktur: 'CH ≡ C — CH₃', mr: 40 },
      { n: 4, nama: '1-butuna', rumusMolekul: 'C₄H₆', rumusStruktur: 'CH ≡ C — CH₂ — CH₃', mr: 54 },
      { n: 5, nama: '1-pentuna', rumusMolekul: 'C₅H₈', rumusStruktur: 'CH ≡ C — (CH₂)₂ — CH₃', mr: 68 },
      { n: 6, nama: '1-heksuna', rumusMolekul: 'C₆H₁₀', rumusStruktur: 'CH ≡ C — (CH₂)₃ — CH₃', mr: 82 },
      { n: 7, nama: '1-heptuna', rumusMolekul: 'C₇H₁₂', rumusStruktur: 'CH ≡ C — (CH₂)₄ — CH₃', mr: 96 },
      { n: 8, nama: '1-oktuna', rumusMolekul: 'C₈H₁₄', rumusStruktur: 'CH ≡ C — (CH₂)₅ — CH₃', mr: 110 },
      { n: 9, nama: '1-nonuna', rumusMolekul: 'C₉H₁₆', rumusStruktur: 'CH ≡ C — (CH₂)₆ — CH₃', mr: 124 },
      { n: 10, nama: '1-dekuna', rumusMolekul: 'C₁₀H₁₈', rumusStruktur: 'CH ≡ C — (CH₂)₇ — CH₃', mr: 138 }
    ]
  },

  // 2.4 Tabel Gugus Alkil
  tabelAlkil: [
    { n: 1, namaAlkil: 'Metil', rumusAlkil: '—CH₃', rumusStruktur: '—CH₃', asalAlkana: 'Metana (CH₄) kehilangan 1 H' },
    { n: 2, namaAlkil: 'Etil', rumusAlkil: '—C₂H₅', rumusStruktur: '—CH₂—CH₃', asalAlkana: 'Etana (C₂H₆) kehilangan 1 H' },
    { n: 3, namaAlkil: 'Propil', rumusAlkil: '—C₃H₇', rumusStruktur: '—CH₂—CH₂—CH₃', asalAlkana: 'Propana (C₃H₈) kehilangan 1 H' },
    { n: 4, namaAlkil: 'Butil', rumusAlkil: '—C₄H₉', rumusStruktur: '—CH₂—CH₂—CH₂—CH₃', asalAlkana: 'Butana (C₄H₁₀) kehilangan 1 H' },
    { n: 5, namaAlkil: 'Pentil (Amil)', rumusAlkil: '—C₅H₁₁', rumusStruktur: '—CH₂—(CH₂)₃—CH₃', asalAlkana: 'Pentana (C₅H₁₂) kehilangan 1 H' }
  ] as AlkilItem[],

  // 2.5 Stepper Tata Nama IUPAC
  tataNamaStepper: [
    {
      langkah: 1,
      judul: 'Tentukan Rantai Induk',
      deskripsiAlkana: 'Pilih rantai karbon terpanjang yang bersambungan sebagai rantai utama (rantai induk). Di luar rantai utama disebut cabang (gugus alkil).',
      deskripsiAlkenaAlkuna: 'Pilih rantai C terpanjang yang MENGANDUNG ikatan rangkap dua (alkena) atau ikatan rangkap tiga (alkuna) sebagai rantai induk. Akhiran -ana diubah menjadi -ena atau -una.'
    },
    {
      langkah: 2,
      judul: 'Penomoran Rantai Induk',
      deskripsiAlkana: 'Beri nomor atom karbon pada rantai induk mulai dari salah satu ujung sedemikian rupa sehingga posisi cabang mendapatkan NOMOR TERKECIL.',
      deskripsiAlkenaAlkuna: 'Beri nomor atom C mulai dari ujung yang PALING DEKAT DENGAN IKATAN RANGKAP (bukan dari cabang!). Ikatan rangkap harus memiliki nomor sekecil mungkin.'
    },
    {
      langkah: 3,
      judul: 'Penamaan dan Nomor Cabang',
      deskripsiAlkana: 'Tulis nomor letak cabang diikuti nama gugus alkil. Jika ada cabang sejenis lebih dari satu, gunakan awalan di- (2), tri- (3), tetra- (4). Jika ada cabang berbeda, urutkan secara ALFABETIS (misal etil ditulis sebelum metil).',
      deskripsiAlkenaAlkuna: 'Aturan cabang sama seperti alkana. Awalan jumlah cabang (di-, tri-) tidak memengaruhi urutan alfabetis.'
    },
    {
      langkah: 4,
      judul: 'Penulisan Nama Lengkap',
      deskripsiAlkana: 'Gabungkan dengan urutan: [nomor cabang]-[nama cabang][nama rantai induk alkana]. Contoh: 2-metilbutana.',
      deskripsiAlkenaAlkuna: 'Gabungkan dengan urutan: [nomor cabang]-[nama cabang]-[letak ikatan rangkap]-[nama rantai induk alkena/alkuna]. Contoh: 2-metil-1-butena atau 2-pentuna.'
    }
  ],

  // 2.6 9 Contoh Resmi Modul (Lengkap)
  contohTataNamaModul: [
    {
      id: 'ex-1',
      golongan: 'alkana',
      namaIUPAC: '2-metilbutana',
      rumusStrukturTeks: 'CH₃ — CH(CH₃) — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai terpanjang terdiri dari 4 atom C → butana.',
      langkah2_Penomoran: 'Penomoran dari ujung kiri karena lebih dekat dengan cabang: C1(CH₃) — C2(CH) — C3(CH₂) — C4(CH₃). Cabang berada di nomor 2.',
      langkah3_Cabang: 'Cabang pada atom C nomor 2 berupa gugus metil (—CH₃) → 2-metil.',
      langkah4_NamaAkhir: 'Gabungkan: 2-metilbutana.'
    },
    {
      id: 'ex-2',
      golongan: 'alkana',
      namaIUPAC: '2,3-dimetilbutana',
      rumusStrukturTeks: 'CH₃ — CH(CH₃) — CH(CH₃) — CH₃',
      langkah1_RantaiInduk: 'Rantai terpanjang terdiri dari 4 atom C → butana.',
      langkah2_Penomoran: 'Penomoran dari kiri atau kanan menghasilkan nomor cabang yang sama (2 dan 3).',
      langkah3_Cabang: 'Terdapat 2 gugus metil pada nomor 2 dan 3 → gunakan awalan di- menjadi 2,3-dimetil.',
      langkah4_NamaAkhir: 'Gabungkan: 2,3-dimetilbutana.'
    },
    {
      id: 'ex-3',
      golongan: 'alkana',
      namaIUPAC: '3-etil-2-metilpentana',
      rumusStrukturTeks: 'CH₃ — CH(CH₃) — CH(C₂H₅) — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai terpanjang terdiri dari 5 atom C → pentana.',
      langkah2_Penomoran: 'Penomoran dari ujung kiri memberikan cabang di nomor 2 dan 3 (jika dari kanan di nomor 3 dan 4) → nomor terkecil dari kiri.',
      langkah3_Cabang: 'Gugus etil di nomor 3 dan metil di nomor 2. Urutan penulisan secara alfabetis: "etil" ditulis sebelum "metil".',
      langkah4_NamaAkhir: 'Gabungkan: 3-etil-2-metilpentana.'
    },
    {
      id: 'ex-4',
      golongan: 'alkena',
      namaIUPAC: '2-pentena',
      rumusStrukturTeks: 'CH₃ — CH = CH — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai terpanjang mengandung ikatan rangkap dua terdiri dari 5 atom C → pentena.',
      langkah2_Penomoran: 'Penomoran dari kiri agar ikatan rangkap mendapat nomor terkecil (nomor 2). Jika dari kanan mendapat nomor 3.',
      langkah3_Cabang: 'Tidak memiliki cabang.',
      langkah4_NamaAkhir: 'Letak ikatan rangkap di C-2 → 2-pentena.'
    },
    {
      id: 'ex-5',
      golongan: 'alkena',
      namaIUPAC: '2-metil-1-butena',
      rumusStrukturTeks: 'CH₂ = C(CH₃) — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai induk mengandung ikatan rangkap dua terdiri dari 4 atom C → butena.',
      langkah2_Penomoran: 'Penomoran dari kiri karena ujung kiri terdekat dengan ikatan rangkap dua (di nomor 1).',
      langkah3_Cabang: 'Cabang metil berada pada atom C nomor 2 → 2-metil.',
      langkah4_NamaAkhir: 'Gabungkan: 2-metil-1-butena.'
    },
    {
      id: 'ex-6',
      golongan: 'alkena',
      namaIUPAC: '2,3-dimetil-2-pentena',
      rumusStrukturTeks: 'CH₃ — C(CH₃) = C(CH₃) — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai terpanjang mengandung ikatan rangkap dua terdiri dari 5 atom C → pentena.',
      langkah2_Penomoran: 'Penomoran dari kiri agar ikatan rangkap di nomor 2 (jika dari kanan di nomor 3).',
      langkah3_Cabang: 'Ada dua cabang metil di atom C nomor 2 dan 3 → 2,3-dimetil.',
      langkah4_NamaAkhir: 'Gabungkan: 2,3-dimetil-2-pentena.'
    },
    {
      id: 'ex-7',
      golongan: 'alkuna',
      namaIUPAC: '2-pentuna',
      rumusStrukturTeks: 'CH₃ — C ≡ C — CH₂ — CH₃',
      langkah1_RantaiInduk: 'Rantai induk mengandung ikatan rangkap tiga terdiri dari 5 atom C → pentuna.',
      langkah2_Penomoran: 'Penomoran dari kiri agar ikatan rangkap tiga berada di nomor 2.',
      langkah3_Cabang: 'Tidak memiliki rantai cabang.',
      langkah4_NamaAkhir: 'Gabungkan: 2-pentuna.'
    },
    {
      id: 'ex-8',
      golongan: 'alkuna',
      namaIUPAC: '3-metil-1-butuna',
      rumusStrukturTeks: 'CH ≡ C — CH(CH₃) — CH₃',
      langkah1_RantaiInduk: 'Rantai induk mengandung ikatan rangkap tiga terdiri dari 4 atom C → butuna.',
      langkah2_Penomoran: 'Penomoran WAJIB dari ujung kiri (ikatan rangkap tiga di nomor 1), BUKAN dari kanan meskipun cabang metil ada di kanan!',
      langkah3_Cabang: 'Cabang metil terletak pada atom C nomor 3 → 3-metil.',
      langkah4_NamaAkhir: 'Gabungkan: 3-metil-1-butuna.'
    },
    {
      id: 'ex-9',
      golongan: 'alkuna',
      namaIUPAC: '3,4-dimetil-1-pentuna',
      rumusStrukturTeks: 'CH ≡ C — CH(CH₃) — CH(CH₃) — CH₃',
      langkah1_RantaiInduk: 'Rantai induk mengandung ikatan rangkap tiga terdiri dari 5 atom C → pentuna.',
      langkah2_Penomoran: 'Penomoran dari kiri karena dekat dengan ikatan rangkap tiga (C-1).',
      langkah3_Cabang: 'Dua gugus metil berada pada C nomor 3 dan 4 → 3,4-dimetil.',
      langkah4_NamaAkhir: 'Gabungkan: 3,4-dimetil-1-pentuna.'
    }
  ] as ContohTataNama[],

  // 2.7 Latihan Penamaan Interaktif Step-by-Step
  latihanInteraktif: {
    judul: 'Latihan Menentukan Nama Senyawa',
    struktur: 'CH₃ — CH₂ — CH(CH₃) — CH = CH₂',
    rumusMolekul: 'C₆H₁₂',
    golongan: 'alkena',
    langkah1: {
      pertanyaan: 'Langkah 1: Berapakah jumlah atom C pada rantai induk yang mengandung ikatan rangkap dua?',
      opsi: ['4 atom C (butena)', '5 atom C (pentena)', '6 atom C (heksena)'],
      jawabanBenarIndex: 1,
      penjelasan: 'Rantai induk terpanjang yang mengandung ikatan rangkap dua memiliki 5 atom C, sehingga nama rantai induknya adalah pentena.'
    },
    langkah2: {
      pertanyaan: 'Langkah 2: Dari manakah penomoran atom C rantai induk harus dimulai?',
      opsi: [
        'Dari kiri (C terdekat dengan cabang metil)',
        'Dari kanan (C terdekat dengan ikatan rangkap dua)',
        'Bebas dari mana saja karena simetris'
      ],
      jawabanBenarIndex: 1,
      penjelasan: 'Pada alkena/alkuna, penomoran WAJIB dari ujung terdekat dengan ikatan rangkap (dalam hal ini ujung kanan: CH₂=CH—). Jadi ikatan rangkap di C-1.'
    },
    langkah3: {
      pertanyaan: 'Langkah 3: Di manakah posisi dan apakah nama cabang yang terikat?',
      opsi: [
        'Cabang metil di atom C nomor 3',
        'Cabang metil di atom C nomor 4',
        'Cabang etil di atom C nomor 2'
      ],
      jawabanBenarIndex: 0,
      penjelasan: 'Setelah diberi nomor dari kanan (C1 di =CH₂, C2 di —CH=, C3 di —CH(CH₃)—), cabang metil terikat pada atom C nomor 3.'
    },
    langkah4: {
      pertanyaan: 'Langkah 4: Tuliskan nama IUPAC lengkap dari senyawa tersebut:',
      opsi: [
        '4-metil-1-pentena',
        '3-metil-1-pentena',
        '2-etil-1-butena'
      ],
      jawabanBenarIndex: 1,
      penjelasan: 'Nama resmi IUPAC adalah 3-metil-1-pentena (cabang di nomor 3, ikatan rangkap di nomor 1, rantai induk 5 C).'
    }
  },

  // 2.8 Rangkuman Kegiatan 2
  rangkuman: [
    'Senyawa hidrokarbon alifatik dikelompokkan menjadi alkana, alkena, dan alkuna.',
    'Alkana tergolong hidrokarbon jenuh dengan ikatan kovalen tunggal. Alkena (ikatan rangkap dua) dan alkuna (ikatan rangkap tiga) tergolong hidrokarbon tak jenuh.',
    'Rumus umum: Alkana = CₙH₂ₙ₊₂, Alkena = CₙH₂ₙ, dan Alkuna = CₙH₂ₙ₋₂.',
    'Deret homolog adalah deret senyawa dengan rumus umum sama, di mana suku berurutan berselisih gugus —CH₂— dengan perbedaan massa molekul relatif (Mr) sebesar 14.',
    'Gugus alkil (—CₙH₂ₙ₊₁) adalah gugus cabang yang terbentuk dari alkana yang kehilangan 1 atom hidrogen (contoh: metil —CH₃, etil —C₂H₅).',
    'Tata nama IUPAC berlandaskan 4 tahapan: menentukan rantai induk terpanjang, penomoran rantai induk, penamaan cabang secara alfabetis, dan penggabungan nama secara utuh.',
    'Pada alkena dan alkuna, penomoran rantai induk berpedoman pada letak ikatan rangkap (harus mendapat nomor terkecil), BUKAN dari posisi cabang.'
  ],

  // Cek Pemahaman Kegiatan 2
  cekPemahaman: [
    {
      id: 1,
      pertanyaan: 'Suatu senyawa alkena memiliki 6 atom karbon (n = 6). Berdasarkan rumus umum alkena (CₙH₂ₙ), apakah rumus molekul senyawa tersebut?',
      pilihan: [
        { id: 'A', teks: 'C₆H₁₄' },
        { id: 'B', teks: 'C₆H₁₂' },
        { id: 'C', teks: 'C₆H₁₀' },
        { id: 'D', teks: 'C₆H₈' }
      ],
      kunci: 'B',
      pembahasan: 'Rumus umum alkena adalah CₙH₂ₙ. Untuk n = 6, jumlah atom H = 2(6) = 12, sehingga rumus molekulnya adalah C₆H₁₂ (heksena).'
    },
    {
      id: 2,
      pertanyaan: 'Pada penamaan senyawa alkena dan alkuna bercabang, dari manakah arah penomoran rantai induk harus dimulai?',
      pilihan: [
        { id: 'A', teks: 'Dari ujung yang paling dekat dengan cabang' },
        { id: 'B', teks: 'Dari ujung yang paling dekat dengan ikatan rangkap' },
        { id: 'C', teks: 'Selalu dari ujung sebelah kiri tanpa terkecuali' },
        { id: 'D', teks: 'Dari atom karbon dengan nomor massa terbesar' }
      ],
      kunci: 'B',
      pembahasan: 'Sesuai aturan IUPAC untuk alkena dan alkuna, prioritas penomoran utama adalah memberikan nomor sekecil mungkin pada ikatan rangkap, bukan pada cabang.'
    }
  ] as SoalCekPemahaman[]
};

// ----------------------------------------------------------------------------
// DATA KEGIATAN 3: Sifat Senyawa Hidrokarbon & Isomer (Halaman 28-31)
// ----------------------------------------------------------------------------

export interface ReaksiStepItem {
  id: string;
  nomor: string;
  judul: string;
  golongan: string;
  tipe: 'pembakaran' | 'substitusi' | 'eliminasi' | 'adisi' | 'markovnikov';
  persamaanReaksi: string;
  steps: {
    tahap: number;
    subJudul: string;
    keadaan: 'awal' | 'pemutusan' | 'hasil_akhir';
    visualFormula: string;
    deskripsiMekanisme: string;
  }[];
}

export interface IsomerItem {
  id: string;
  namaIUPAC: string;
  tipeIsomer: 'rangka' | 'posisi' | 'fungsi' | 'geometri';
  rumusStruktur: string;
  svgType: 'butana-lurus' | 'butana-cabang' | 'pentana-lurus' | 'pentana-iso' | 'pentana-neo' | '1-butena' | '2-butena' | '2-metilpropena' | '1-pentena' | '2-pentena' | '2-metil-1-butena' | '3-metil-1-butena' | '2-metil-2-butena';
  catatan?: string;
}

export interface KelompokIsomer {
  rumusMolekul: string;
  golongan: string;
  totalIsomerStruktur: number;
  catatanKhusus?: string;
  isomers: IsomerItem[];
  hasGeometri?: boolean;
}

export const KEGIATAN_3_DATA = {
  id: 'kegiatan-3',
  nomor: 3,
  judul: 'Sifat Senyawa Hidrokarbon & Isomer',
  deskripsi: 'Menganalisis sifat fisika kualitatif, mekanisme pemutusan ikatan reaksi kimia (pembakaran, substitusi, eliminasi, adisi, Markovnikov), serta eksplorasi isomer struktur dan geometri (KD 4.1).',

  subBabs: [
    { id: '3.1', judul: 'Sifat Fisika Hidrokarbon' },
    { id: '3.2', judul: 'Reaksi Kimia Hidrokarbon (Interaktif)' },
    { id: '3.3', judul: 'Aturan Markovnikov' },
    { id: '3.4', judul: 'Konsep & Penggolongan Isomer' },
    { id: '3.5', judul: 'Penjelajah Isomer KD 4.1' },
    { id: '3.6', judul: 'Rangkuman & Cek Pemahaman' }
  ],

  // 3.1 Sifat Fisika Kualitatif
  sifatFisika: {
    judul: 'Sifat Fisika Alkana, Alkena, dan Alkuna (Tren Kualitatif)',
    deskripsi: 'Sifat fisika senyawa hidrokarbon dipengaruhi oleh massa molekul relatif (Mr), panjang rantai atom karbon, dan kepolaran molekul.',
    poinTren: [
      {
        parameter: 'Titik Didih & Titik Leleh',
        tren: 'Meningkat seiring bertambahnya Mr (panjang rantai C)',
        penjelasan: 'Semakin panjang rantai atom karbon (Mr semakin besar), luas bidang kontak antarmolekul semakin luas sehingga gaya tarik Van der Waals (gaya dispersi London) semakin kuat. Akibatnya, diperlukan energi kalor yang lebih besar untuk memisahkan molekul saat meleleh atau mendidih.'
      },
      {
        parameter: 'Massa Jenis (Densitas)',
        tren: 'Meningkat seiring bertambahnya Mr',
        penjelasan: 'Massa jenis hidrokarbon bertambah secara teratur dengan bertambahnya jumlah atom karbon, namun secara umum massa jenis hidrokarbon lebih kecil dari massa jenis air (sehingga minyak mengapung di atas air).'
      },
      {
        parameter: 'Viskositas (Kekentalan)',
        tren: 'Semakin kental seiring bertambahnya panjang rantai C',
        penjelasan: 'Suku-suku rendah berwujud gas dan encer, sedangkan suku-suku menengah berwujud cair, dan suku-suku tinggi berwujud padat/kental seperti lilin parafin karena tarikan antarmolekul yang semakin rapat.'
      },
      {
        parameter: 'Kelarutan (Polaritas)',
        tren: 'Larut dalam pelarut nonpolar, sukar larut dalam air',
        penjelasan: 'Semua hidrokarbon bersifat nonpolar (atau memiliki momen dipol mendekati nol). Berdasarkan asas "like dissolves like", hidrokarbon mudah larut dalam pelarut nonpolar (seperti CCl₄, eter, kloroform, benzena), tetapi tidak dapat larut / tidak bercampur dengan pelarut polar seperti air (H₂O).'
      }
    ]
  },

  // 3.2 Reaksi-Reaksi Kimia (Langkah Interaktif)
  reaksiKimiaList: [
    {
      id: 'rx-pembakaran',
      nomor: 'A',
      judul: 'Pembakaran Sempurna (Oksidasi)',
      golongan: 'Alkana / Hidrokarbon',
      tipe: 'pembakaran',
      persamaanReaksi: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O + Energi (Kalor)',
      steps: [
        {
          tahap: 1,
          subJudul: 'Molekul Pereaksi (Reaktan)',
          keadaan: 'awal',
          visualFormula: 'CH₄ (gas metana) + 2 O₂ (gas oksigen)',
          deskripsiMekanisme: 'Gas metana bercampur dengan oksigen dari udara. Ikatan kovalen C—H pada metana dan ikatan kovalen O=O pada oksigen bersiap bereaksi pada temperatur nyala.'
        },
        {
          tahap: 2,
          subJudul: 'Pemutusan Ikatan & Oksidasi Cepat',
          keadaan: 'pemutusan',
          visualFormula: '[ 4 ikatan C—H putus ] + [ 2 ikatan O=O putus ]',
          deskripsiMekanisme: 'Energi aktivasi memutus 4 ikatan kovalen C—H pada molekul metana dan 2 ikatan rangkap O=O pada gas oksigen membentuk atom-atom bebas berenergi tinggi.'
        },
        {
          tahap: 3,
          subJudul: 'Pembentukan Produk Akhir & Pelepasan Kalor',
          keadaan: 'hasil_akhir',
          visualFormula: 'O=C=O (CO₂) + 2 H—O—H (H₂O) + Panas & Cahaya',
          deskripsiMekanisme: 'Atom C mengikat 2 atom O membentuk 2 ikatan rangkap C=O dalam CO₂, dan 4 atom H mengikat 2 atom O membentuk H₂O. Reaksi ini sangat eksoterm dan menghasilkan energi panas yang banyak digunakan sebagai bahan bakar.'
        }
      ]
    },
    {
      id: 'rx-substitusi',
      nomor: 'B',
      judul: 'Substitusi Alkana dengan Halogen',
      golongan: 'Alkana',
      tipe: 'substitusi',
      persamaanReaksi: 'CH₄ + Cl₂ → CH₃Cl + HCl (dengan bantuan sinar UV/cahaya)',
      steps: [
        {
          tahap: 1,
          subJudul: 'Molekul Pereaksi',
          keadaan: 'awal',
          visualFormula: 'H₃C—H (metana) + Cl—Cl (klorin)',
          deskripsiMekanisme: 'Alkana bersifat jenuh dan relatif stabil. Reaksi substitusi (penggantian) memerlukan energi cahaya ultraviolet (UV) atau panas tinggi.'
        },
        {
          tahap: 2,
          subJudul: 'Pemutusan Homolitik Ikatan Cl—Cl & C—H',
          keadaan: 'pemutusan',
          visualFormula: '[ H₃C • + • H ] + [ Cl • + • Cl ]',
          deskripsiMekanisme: 'Cahaya UV memutus ikatan kovalen Cl—Cl menghasilkan radikal bebas klorin. Radikal ini menyerang ikatan C—H pada metana, melepaskan 1 atom hidrogen.'
        },
        {
          tahap: 3,
          subJudul: 'Pembentukan Klorometana & Asam Klorida',
          keadaan: 'hasil_akhir',
          visualFormula: 'CH₃—Cl (klorometana / metil klorida) + H—Cl (asam klorida)',
          deskripsiMekanisme: 'Satu atom klorin menggantikan posisi atom hidrogen pada karbon membentuk CH₃Cl, sedangkan atom hidrogen yang terlepas berikatan dengan atom klorin lainnya membentuk gas HCl.'
        }
      ]
    },
    {
      id: 'rx-eliminasi',
      nomor: 'C',
      judul: 'Eliminasi / Perengkahan (Cracking)',
      golongan: 'Alkana',
      tipe: 'eliminasi',
      persamaanReaksi: 'CH₃—CH₂—CH₃ → CH₃—CH=CH₂ + H₂  atau  CH₂=CH₂ + CH₄',
      steps: [
        {
          tahap: 1,
          subJudul: 'Molekul Alkana Rantai Jenuh (Propana)',
          keadaan: 'awal',
          visualFormula: 'CH₃—CH₂—CH₃ (propana)',
          deskripsiMekanisme: 'Propana dipanaskan pada suhu tinggi dengan katalis industri (perengkahan termal / katalitik).'
        },
        {
          tahap: 2,
          subJudul: 'Pelepasan Molekul Kecil & Pembentukan Ikatan Rangkap',
          keadaan: 'pemutusan',
          visualFormula: 'Jalur 1: [ Pelepasan 2 atom H ]  |  Jalur 2: [ Pemutusan ikatan C—C ]',
          deskripsiMekanisme: 'Dua atom H pada dua atom C yang berdampingan tereliminasi (jalur dehidrogenasi), atau ikatan C—C mengalami pemutusan menghasilkan molekul berantai lebih pendek.'
        },
        {
          tahap: 3,
          subJudul: 'Hasil Akhir Alkena Tak Jenuh',
          keadaan: 'hasil_akhir',
          visualFormula: 'Jalur 1: Propena (CH₃—CH=CH₂) + Gas H₂   /   Jalur 2: Etena (CH₂=CH₂) + Metana (CH₄)',
          deskripsiMekanisme: 'Terbentuk ikatan rangkap dua (alkena yang lebih bernilai ekonomi untuk industri polimer plastik) disertai gas hidrogen atau alkana yang lebih kecil.'
        }
      ]
    },
    {
      id: 'rx-adisi-alkena',
      nomor: 'D',
      judul: 'Adisi Alkena (Penjenuhan Ikatan Rangkap Dua)',
      golongan: 'Alkena',
      tipe: 'adisi',
      persamaanReaksi: 'CH₂=CH₂ + H₂ → CH₃—CH₃   dan   CH₂=CH₂ + Cl₂ → CH₂Cl—CH₂Cl',
      steps: [
        {
          tahap: 1,
          subJudul: 'Molekul Alkena Tak Jenuh & Pereaksi Adisi',
          keadaan: 'awal',
          visualFormula: 'CH₂=CH₂ (etena) + H—H (gas hidrogen) atau Cl—Cl (klorin)',
          deskripsiMekanisme: 'Ikatan rangkap dua pada etena terdiri dari 1 ikatan kuat (sigma) dan 1 ikatan yang lebih mudah putus (pi). Ikatan pi rentan diserang oleh pereaksi adisi.'
        },
        {
          tahap: 2,
          subJudul: 'Pemutusan Ikatan Rangkap (Ikatan Pi Terbuka)',
          keadaan: 'pemutusan',
          visualFormula: '[ •CH₂ — CH₂• ] + [ H• + H• ]',
          deskripsiMekanisme: 'Ikatan pi pada ikatan rangkap C=C putus sehingga kedua atom C memiliki masing-masing 1 elektron bebas (valensi terbuka) untuk mengikat gugus baru.'
        },
        {
          tahap: 3,
          subJudul: 'Terbentuk Senyawa Jenuh Tunggal',
          keadaan: 'hasil_akhir',
          visualFormula: 'CH₃—CH₃ (etana)   atau   CH₂Cl—CH₂Cl (1,2-dikloroetana)',
          deskripsiMekanisme: 'Masing-masing atom H (atau Cl) masuk ke kedua atom C, mengubah ikatan rangkap dua tak jenuh menjadi ikatan kovalen tunggal jenuh.'
        }
      ]
    },
    {
      id: 'rx-adisi-alkuna',
      nomor: 'E',
      judul: 'Adisi Alkuna (Dua Tahap Berurutan)',
      golongan: 'Alkuna',
      tipe: 'adisi',
      persamaanReaksi: 'Tahap 1: CH≡CH + H₂ → CH₂=CH₂  →  Tahap 2: CH₂=CH₂ + H₂ → CH₃—CH₃',
      steps: [
        {
          tahap: 1,
          subJudul: 'Ikatan Rangkap Tiga (Alkuna)',
          keadaan: 'awal',
          visualFormula: 'CH≡CH (etuna) + 2 molekul H₂  atau  CH≡C—CH₃ (propuna) + 2 molekul HCl',
          deskripsiMekanisme: 'Alkuna memiliki ikatan rangkap tiga (1 ikatan sigma dan 2 ikatan pi). Karena memiliki 2 ikatan pi, alkuna dapat mengalami reaksi adisi sebanyak dua tahap berturut-turut.'
        },
        {
          tahap: 2,
          subJudul: 'Tahap 1: Pemutusan Ikatan Rangkap Tiga Menjadi Rangkap Dua',
          keadaan: 'pemutusan',
          visualFormula: 'CH≡CH + H₂ → CH₂=CH₂ (etena)  /  CH≡C—CH₃ + HCl → CH₂=CCl—CH₃ (2-kloropropena)',
          deskripsiMekanisme: 'Satu ikatan pi pertama putus. Pada propuna + HCl, H masuk ke C-1 dan Cl masuk ke C-2 sesuai Aturan Markovnikov menghasilkan 2-kloropropena.'
        },
        {
          tahap: 3,
          subJudul: 'Tahap 2: Pemutusan Ikatan Rangkap Dua Menjadi Ikatan Tunggal Jenuh',
          keadaan: 'hasil_akhir',
          visualFormula: 'CH₂=CH₂ + H₂ → CH₃—CH₃ (etana)  /  CH₂=CCl—CH₃ + HCl → CH₃—CCl₂—CH₃ (2,2-dikloropropana)',
          deskripsiMekanisme: 'Ikatan pi kedua putus setelah ditambah molekul kedua pereaksi. Pada adisi kedua dengan HCl, atom H kembali terikat pada C-1 dan atom Cl kedua terikat pada C-2 menghasilkan 2,2-dikloropropana.'
        }
      ]
    },
    {
      id: 'rx-markovnikov',
      nomor: 'F',
      judul: 'Aturan Markovnikov pada Alkena Asimetris',
      golongan: 'Alkena Tak Simetris',
      tipe: 'markovnikov',
      persamaanReaksi: 'CH₃—CH=CH₂ + HBr → CH₃—CH(Br)—CH₃ (2-bromopropana)',
      steps: [
        {
          tahap: 1,
          subJudul: 'Alkena Tak Simetris (Propena)',
          keadaan: 'awal',
          visualFormula: 'CH₃—CH=CH₂ + H—Br',
          deskripsiMekanisme: 'Perhatikan kedua atom C yang berikatan rangkap: atom C-1 (pada =CH₂) mengikat 2 atom H, sedangkan atom C-2 (pada —CH=) hanya mengikat 1 atom H. Jumlah atom H pada kedua C ikatan rangkap tidak sama (asimetris).'
        },
        {
          tahap: 2,
          subJudul: 'Penerapan Kaidah Markovnikov',
          keadaan: 'pemutusan',
          visualFormula: 'H⁺ masuk ke C-1 (yang mengikat 2 H)  →  Br⁻ masuk ke C-2 (yang mengikat 1 H)',
          deskripsiMekanisme: 'Aturan Markovnikov menyatakan: "Pada adisi hidrogen halida (HX) pada alkena tak simetris, atom H akan terikat pada atom C ikatan rangkap yang mengikat atom H lebih banyak (yang kaya H makin kaya H), sedangkan halogen (X) terikat pada atom C yang mengikat atom H lebih sedikit".'
        },
        {
          tahap: 3,
          subJudul: 'Hasil Reaksi Utama',
          keadaan: 'hasil_akhir',
          visualFormula: 'CH₃—CHBr—CH₃ (2-bromopropana sebagai produk utama ~95%)',
          deskripsiMekanisme: 'Atom H masuk ke C-1 sehingga berubah menjadi —CH₃, sedangkan Br terikat pada C-2 menghasilkan 2-bromopropana (bukan 1-bromopropana).'
        }
      ]
    }
  ] as ReaksiStepItem[],

  // 3.4 & 3.5 Penjelajah Isomer (KD 4.1)
  dataIsomer: {
    // 1. C4H10 (Alkana - 2 isomer)
    'C4H10': {
      rumusMolekul: 'C₄H₁₀',
      golongan: 'Alkana (CₙH₂ₙ₊₂)',
      totalIsomerStruktur: 2,
      catatanKhusus: 'Butana memiliki 2 isomer kerangka (rantai lurus vs rantai bercabang).',
      hasGeometri: false,
      isomers: [
        {
          id: 'c4h10-1',
          namaIUPAC: 'n-butana',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₃ — CH₂ — CH₂ — CH₃',
          svgType: 'butana-lurus',
          catatan: 'Rantai karbon lurus tanpa cabang (4 atom C).'
        },
        {
          id: 'c4h10-2',
          namaIUPAC: '2-metilpropana (isobutana)',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₃ — CH(CH₃) — CH₃',
          svgType: 'butana-cabang',
          catatan: 'Rantai utama 3 atom C (propana) dengan 1 cabang metil di atom C nomor 2.'
        }
      ]
    } as KelompokIsomer,

    // 2. C5H12 (Alkana - 3 isomer)
    'C5H12': {
      rumusMolekul: 'C₅H₁₂',
      golongan: 'Alkana (CₙH₂ₙ₊₂)',
      totalIsomerStruktur: 3,
      catatanKhusus: 'Pentana memiliki 3 isomer kerangka sesuai modul.',
      hasGeometri: false,
      isomers: [
        {
          id: 'c5h12-1',
          namaIUPAC: 'n-pentana',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₃ — CH₂ — CH₂ — CH₂ — CH₃',
          svgType: 'pentana-lurus',
          catatan: 'Rantai karbon lurus tanpa cabang (5 atom C).'
        },
        {
          id: 'c5h12-2',
          namaIUPAC: '2-metilbutana (isopentana)',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₃ — CH(CH₃) — CH₂ — CH₃',
          svgType: 'pentana-iso',
          catatan: 'Rantai utama 4 atom C (butana) dengan 1 cabang metil di atom C nomor 2.'
        },
        {
          id: 'c5h12-3',
          namaIUPAC: '2,2-dimetilpropana (neopentana)',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₃ — C(CH₃)₂ — CH₃',
          svgType: 'pentana-neo',
          catatan: 'Rantai utama 3 atom C (propana) dengan 2 cabang metil di atom C nomor 2.'
        }
      ]
    } as KelompokIsomer,

    // 3. C4H8 (Alkena - 3 isomer struktur + geometri cis-trans)
    'C4H8': {
      rumusMolekul: 'C₄H₈',
      golongan: 'Alkena (CₙH₂ₙ)',
      totalIsomerStruktur: 3,
      catatanKhusus: 'Jumlah 3 isomer pada C₄H₈ merupakan isomer struktur alkena (1-butena, 2-butena, 2-metilpropena). Senyawa 2-butena juga memiliki isomer ruang geometri cis-trans.',
      hasGeometri: true,
      isomers: [
        {
          id: 'c4h8-1',
          namaIUPAC: '1-butena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₂ = CH — CH₂ — CH₃',
          svgType: '1-butena',
          catatan: 'Ikatan rangkap dua berada di ujung rantai (antara atom C-1 dan C-2).'
        },
        {
          id: 'c4h8-2',
          namaIUPAC: '2-butena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₃ — CH = CH — CH₃',
          svgType: '2-butena',
          catatan: 'Ikatan rangkap dua berada di tengah (antara C-2 dan C-3). Memiliki isomer geometri cis dan trans!'
        },
        {
          id: 'c4h8-3',
          namaIUPAC: '2-metilpropena',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₂ = C(CH₃) — CH₃',
          svgType: '2-metilpropena',
          catatan: 'Rantai utama propena dengan cabang metil di atom C nomor 2.'
        }
      ]
    } as KelompokIsomer,

    // 4. C5H10 (Alkena - 5 isomer sesuai contoh modul)
    'C5H10': {
      rumusMolekul: 'C₅H₁₀',
      golongan: 'Alkena (CₙH₂ₙ)',
      totalIsomerStruktur: 5,
      catatanKhusus: 'Pentena memiliki 5 isomer struktur alkena alifatik.',
      hasGeometri: true,
      isomers: [
        {
          id: 'c5h10-1',
          namaIUPAC: '1-pentena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₂ = CH — CH₂ — CH₂ — CH₃',
          svgType: '1-pentena',
          catatan: 'Rantai lurus 5 atom C, ikatan rangkap dua di atom C nomor 1.'
        },
        {
          id: 'c5h10-2',
          namaIUPAC: '2-pentena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₃ — CH = CH — CH₂ — CH₃',
          svgType: '2-pentena',
          catatan: 'Rantai lurus 5 atom C, ikatan rangkap dua di atom C nomor 2 (juga memiliki bentuk cis/trans).'
        },
        {
          id: 'c5h10-3',
          namaIUPAC: '2-metil-1-butena',
          tipeIsomer: 'rangka',
          rumusStruktur: 'CH₂ = C(CH₃) — CH₂ — CH₃',
          svgType: '2-metil-1-butena',
          catatan: 'Rantai butena (ikatan rangkap di C-1) dengan cabang metil di C-2.'
        },
        {
          id: 'c5h10-4',
          namaIUPAC: '3-metil-1-butena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₂ = CH — CH(CH₃) — CH₃',
          svgType: '3-metil-1-butena',
          catatan: 'Rantai butena (ikatan rangkap di C-1) dengan cabang metil di C-3.'
        },
        {
          id: 'c5h10-5',
          namaIUPAC: '2-metil-2-butena',
          tipeIsomer: 'posisi',
          rumusStruktur: 'CH₃ — C(CH₃) = CH — CH₃',
          svgType: '2-metil-2-butena',
          catatan: 'Rantai butena dengan ikatan rangkap di C-2 dan cabang metil di C-2.'
        }
      ]
    } as KelompokIsomer
  },

  // 3.6 Rangkuman Kegiatan 3
  rangkuman: [
    'Sifat fisika hidrokarbon (titik didih, titik leleh, densitas, viskositas) meningkat teratur seiring bertambahnya massa molekul relatif (Mr) dan panjang rantai atom karbon.',
    'Hidrokarbon bersifat nonpolar sehingga mudah larut dalam pelarut organik nonpolar (seperti CCl₄, eter, benzena), namun sukar larut dalam air yang bersifat polar.',
    'Reaksi kimia hidrokarbon meliputi: (1) Pembakaran sempurna menghasilkan CO₂ dan H₂O serta energi, (2) Substitusi alkana dengan halogen menggantikan atom H menjadi alkil halida, (3) Eliminasi/perengkahan mengubah senyawa jenuh menjadi tak jenuh, (4) Adisi penjenuhan ikatan rangkap pada alkena dan alkuna.',
    'Pada adisi alkuna, reaksi berlangsung dalam dua tahap: tahap pertama mengubah ikatan rangkap tiga menjadi rangkap dua (alkena), dan tahap kedua mengubah ikatan rangkap dua menjadi ikatan tunggal (alkana).',
    'Aturan Markovnikov berlaku pada adisi alkena tak simetris dengan asam halida (HX), di mana atom H akan masuk ke atom C berikatan rangkap yang mengikat atom H lebih banyak ("yang kaya makin kaya").',
    'Isomer adalah senyawa dengan rumus molekul sama namun rumus struktur atau susunan ruang berbeda. Terbagi atas isomer struktur (rangka, posisi, gugus fungsi) dan isomer ruang/geometri (cis-trans pada alkena).'
  ],

  // Cek Pemahaman Kegiatan 3
  cekPemahaman: [
    {
      id: 1,
      pertanyaan: 'Ketika gas propena (CH₃—CH=CH₂) direaksikan dengan gas asam bromida (HBr), menurut Aturan Markovnikov produk utama yang akan dihasilkan adalah...',
      pilihan: [
        { id: 'A', teks: '1-bromopropana (CH₃—CH₂—CH₂Br)' },
        { id: 'B', teks: '2-bromopropana (CH₃—CHBr—CH₃)' },
        { id: 'C', teks: '1,2-dibromopropana (CH₃—CHBr—CH₂Br)' },
        { id: 'D', teks: 'Propil bromida rantai siklis' }
      ],
      kunci: 'B',
      pembahasan: 'Berdasarkan Aturan Markovnikov, pada alkena tak simetris atom H dari HBr terikat pada atom C ikatan rangkap yang mengikat H lebih banyak (C-1 dengan 2 H), sedangkan Br terikat pada C-2 (dengan 1 H). Hasil utamanya adalah 2-bromopropana.'
    },
    {
      id: 2,
      pertanyaan: 'Berapakah jumlah isomer struktur senyawa hidrokarbon alkana dengan rumus molekul C₄H₁₀ (butana)?',
      pilihan: [
        { id: 'A', teks: '1 isomer' },
        { id: 'B', teks: '2 isomer (n-butana dan 2-metilpropana)' },
        { id: 'C', teks: '3 isomer' },
        { id: 'D', teks: '4 isomer' }
      ],
      kunci: 'B',
      pembahasan: 'Senyawa C₄H₁₀ memiliki tepat 2 isomer rangka, yaitu n-butana (rantai lurus) dan 2-metilpropana atau isobutana (rantai bercabang).'
    }
  ] as SoalCekPemahaman[]
};
