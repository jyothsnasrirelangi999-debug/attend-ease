import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Instagram,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { DEVELOPERS_DATA } from '../data/coursesData';

interface DevelopersViewProps {
  onBack: () => void;
}

export const DevelopersView: React.FC<DevelopersViewProps> = ({ onBack }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between mb-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A101C] hover:bg-[#211722] border border-white/10 text-xs font-semibold text-[#B8ACB8] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF702E]" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs font-mono text-[#B8ACB8]">
          SRKR Engineering College · CSIT & CSD
        </span>
      </div>

      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <p className="text-[11px] font-mono font-semibold tracking-widest text-[#FF702E] uppercase mb-2">
          Engineering & Design
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Meet The Developers
        </h1>
        <p className="text-sm sm:text-base text-[#B8ACB8] leading-relaxed">
          The team behind AttendEase — built to streamline attendance, multi-period rosters, and digital duty-leave permission workflows for SRKR Engineering College.
        </p>

        {/* Recruitment Banner */}
        <div className="mt-5">
          <a
            href="https://github.com/gowthamkrishna27/AttendEase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#211722] border border-[#FF702E]/30 text-white hover:border-[#FF702E] text-xs font-semibold transition-all group"
          >
            <Sparkles className="w-4 h-4 text-[#FF702E]" />
            <span>🚀 AttendEase is recruiting new student developers & contributors!</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B8ACB8] group-hover:text-white" />
          </a>
        </div>
      </header>

      {/* Developers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {DEVELOPERS_DATA.map((dev, idx) => (
          <div
            key={idx}
            className="bg-[#211722] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF702E]/40 hover:bg-[#281c29] transition-all duration-300 shadow-xl shadow-black/40 group"
          >
            <div>
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="w-16 h-16 rounded-2xl object-cover bg-slate-900 border border-white/10 shrink-0 shadow-md"
                  onError={(e) => {
                    // Fallback to initial avatar
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF914D] transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF702E] mt-0.5 leading-snug">
                    {dev.role}
                  </p>
                  <p className="text-[11px] text-[#B8ACB8] mt-1 font-mono">
                    {dev.department}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#B8ACB8] leading-relaxed mb-5">
                {dev.bio}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dev.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1A101C] text-[#B8ACB8] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1A101C] hover:bg-white/10 text-[#B8ACB8] hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1A101C] hover:bg-white/10 text-[#B8ACB8] hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {dev.website && (
                  <a
                    href={dev.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1A101C] hover:bg-white/10 text-[#B8ACB8] hover:text-white transition-colors"
                    title="Personal Portfolio"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={() => handleCopyEmail(dev.email)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A101C] hover:bg-white/10 text-xs font-mono text-[#B8ACB8] hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail === dev.email ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#FF702E]" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
