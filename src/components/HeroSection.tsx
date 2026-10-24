import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

interface HeroSectionProps {
  onSignIn: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSignIn,
}) => {
  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden text-center">
      {/* Background radial glow */}
      <div 
        className="pointer-events-none absolute inset-x-0 -top-24 h-[550px] w-full"
        style={{
          background: 'radial-gradient(circle 500px at 50% 120px, rgba(255, 112, 46, 0.18), transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* AttendEase Official Emblem */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#FF702E]/20 to-transparent p-1.5 border border-[#FF702E]/30 mb-6 shadow-xl shadow-[#FF702E]/10 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="AttendEase Official Emblem"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Small badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A101C] border border-white/10 text-xs font-semibold tracking-wider text-[#FF914D] mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF702E] animate-pulse" />
          <span>Designed for Modern Classrooms</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
          Attend Ease.
          <br />
          <span className="bg-gradient-to-r from-[#FF702E] via-[#FF8542] to-[#FF914D] bg-clip-text text-transparent">
            Smart Attendance System.
          </span>
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg md:text-xl text-[#B8ACB8] max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 text-balance">
          A modern attendance & permission management system built for SRKR Engineering College. Track, manage, and export attendance effortlessly.
        </p>

        {/* Action CTAs matching the live site */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-xl mx-auto">
          {/* Primary: Sign In to Portal */}
          <button
            onClick={onSignIn}
            className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF702E] to-[#FF914D] hover:opacity-95 shadow-lg shadow-[#FF702E]/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Sign In to Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Download Android App */}
          <a
            href="https://github.com/gowthamkrishna27/AttendEase/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl font-semibold text-[#B8ACB8] hover:text-white bg-[#211722] hover:bg-[#281c29] border border-white/10 hover:border-white/20 transition-all text-sm flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-[#FF702E]" />
            <span>Download Android App</span>
          </a>
        </div>
      </div>
    </section>
  );
};
