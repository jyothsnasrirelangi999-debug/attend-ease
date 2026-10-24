/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveWorkflow } from './components/InteractiveWorkflow';
import { KeyFeatures } from './components/KeyFeatures';
import { FAQSection } from './components/FAQSection';
import { DevelopersView } from './components/DevelopersView';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { AIChatDrawer } from './components/AIChatDrawer';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'developers'>('home');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'student' | 'faculty' | 'hod' | 'admin'>('student');
  const [userNotification, setUserNotification] = useState<string | null>(null);

  const handleNavigate = (view: 'home' | 'developers', sectionId?: string) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLoginSuccess = (role: string, name: string) => {
    setUserNotification(`Logged in as ${name} (${role.toUpperCase()})`);
    setTimeout(() => setUserNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#100812] text-white flex flex-col selection:bg-[#FF702E] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onSignIn={() => {
                setLoginRole('student');
                setLoginModalOpen(true);
              }}
            />

            {/* Redesigned Interactive Workflow Section */}
            <InteractiveWorkflow
              onOpenLogin={(role) => {
                setLoginRole(role);
                setLoginModalOpen(true);
              }}
            />

            {/* Key Features */}
            <KeyFeatures />

            {/* Frequently Asked Questions */}
            <FAQSection />
          </>
        )}

        {activeView === 'developers' && (
          <DevelopersView onBack={() => handleNavigate('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLogin={() => {
          setLoginRole('student');
          setLoginModalOpen(true);
        }}
      />

      {/* Floating AI Support Assistant */}
      <AIChatDrawer />

      {/* Login Modal */}
      {loginModalOpen && (
        <LoginModal
          initialRole={loginRole}
          onClose={() => setLoginModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Toast Notification */}
      {userNotification && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#211722] text-white px-4 py-3 rounded-xl border border-emerald-500/50 shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in fade-in duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{userNotification}</span>
        </div>
      )}
    </div>
  );
}
