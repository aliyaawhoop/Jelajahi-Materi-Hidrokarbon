/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Aplikasi Utama "Jelajahi Dunia Hidrokarbon"
 * Media pembelajaran interaktif kimia SMA/MA Kelas XI
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { BerandaPage } from './components/pages/BerandaPage';
import { MateriPage } from './components/pages/MateriPage';
import { LatihanSoalPage } from './components/pages/LatihanSoalPage';
import { PenilaianDiriPage } from './components/pages/PenilaianDiriPage';
import { TentangPage } from './components/pages/TentangPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>(() => {
    try {
      const saved = localStorage.getItem('hidrokarbon_active_tab');
      if (saved && ['beranda', 'materi', 'latihan-soal', 'penilaian-diri', 'tentang'].includes(saved)) {
        return saved as NavTab;
      }
    } catch {
      // localStorage may fail in restricted iframes
    }
    return 'beranda';
  });

  // Persist active tab to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hidrokarbon_active_tab', currentTab);
    } catch {
      // Ignore
    }
  }, [currentTab]);

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubBab = (_subBabId: string) => {
    setCurrentTab('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="galaxy-bg min-h-screen flex flex-col text-[#EEEDFB] font-sans antialiased">
      {/* 1. Sticky Navigation */}
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />

      {/* 2. Main Content Viewport */}
      <main className="flex-1 w-full">
        {currentTab === 'beranda' && (
          <BerandaPage
            onNavigateTab={handleTabChange}
            onSelectSubBab={handleSelectSubBab}
          />
        )}

        {currentTab === 'materi' && (
          <MateriPage
            onBackToBeranda={() => handleTabChange('beranda')}
          />
        )}

        {currentTab === 'latihan-soal' && (
          <LatihanSoalPage
            onBackToBeranda={() => handleTabChange('beranda')}
            onNavigateTab={handleTabChange}
          />
        )}

        {currentTab === 'penilaian-diri' && (
          <PenilaianDiriPage
            onBackToBeranda={() => handleTabChange('beranda')}
            onNavigateTab={handleTabChange}
          />
        )}

        {currentTab === 'tentang' && (
          <TentangPage
            onBackToBeranda={() => handleTabChange('beranda')}
          />
        )}
      </main>

      {/* 3. Official Attribution Footer */}
      <Footer />
    </div>
  );
}
