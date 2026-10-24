import React, { useState } from 'react';
import {
  X,
  GraduationCap,
  Briefcase,
  Building,
  Shield,
  KeyRound,
  Fingerprint,
  CheckCircle2,
  Lock,
  User,
  AlertCircle
} from 'lucide-react';

interface LoginModalProps {
  initialRole?: 'student' | 'faculty' | 'hod' | 'admin';
  onClose: () => void;
  onLoginSuccess: (role: string, name: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  initialRole = 'student',
  onClose,
  onLoginSuccess,
}) => {
  const [role, setRole] = useState<'student' | 'faculty' | 'hod' | 'admin'>(initialRole);
  const [authMethod, setAuthMethod] = useState<'password' | 'pin' | 'passkey'>('pin');
  const [identifier, setIdentifier] = useState('23B91A3301');
  const [secret, setSecret] = useState('2026');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError('Please provide your ID / Roll Number');
      return;
    }
    setError('');
    setSuccess(true);
    setTimeout(() => {
      onLoginSuccess(role, identifier);
      onClose();
    }, 1200);
  };

  const handlePasskeyAuth = () => {
    setError('');
    setSuccess(true);
    setTimeout(() => {
      onLoginSuccess(role, identifier || 'Registered Passkey User');
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-[#1A101C] border border-white/10 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[#B8ACB8] hover:text-white rounded-lg hover:bg-white/10 transition-colors z-10"
          aria-label="Close Login Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Banner */}
        <div className="p-6 bg-[#140B16] border-b border-white/10 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="AttendEase"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <div>
            <h3 id="login-modal-title" className="text-lg font-bold text-white">
              AttendEase Portal Login
            </h3>
            <p className="text-xs text-[#B8ACB8]">
              SRKR Engineering College (Autonomous)
            </p>
          </div>
        </div>

        {/* 4 Role Tabs */}
        <div className="grid grid-cols-4 border-b border-white/10 bg-[#160D18] text-center text-xs">
          {[
            { id: 'student', label: 'Student', icon: GraduationCap },
            { id: 'faculty', label: 'Faculty', icon: Briefcase },
            { id: 'hod', label: 'HOD', icon: Building },
            { id: 'admin', label: 'Admin', icon: Shield },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = role === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setRole(item.id as any);
                  if (item.id === 'student') setIdentifier('23B91A3301');
                  else if (item.id === 'faculty') setIdentifier('FAC-CSIT-014');
                  else if (item.id === 'hod') setIdentifier('HOD-CSIT');
                  else setIdentifier('ADMIN-SRKR');
                  setError('');
                }}
                className={`py-3 flex flex-col items-center justify-center gap-1 font-semibold transition-colors cursor-pointer border-b-2 ${
                  isActive
                    ? 'border-[#FF702E] text-white bg-[#1A101C]'
                    : 'border-transparent text-[#B8ACB8] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF702E]' : 'text-[#B8ACB8]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                Authentication Successful
              </h4>
              <p className="text-xs text-[#B8ACB8]">
                Entering {role.toUpperCase()} Workspace...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Method Switcher */}
              <div className="flex items-center p-1 bg-[#211722] border border-white/10 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setAuthMethod('pin')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    authMethod === 'pin' ? 'bg-[#FF702E] text-white shadow-sm' : 'text-[#B8ACB8] hover:text-white'
                  }`}
                >
                  4-Digit PIN
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('password')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    authMethod === 'password' ? 'bg-[#FF702E] text-white shadow-sm' : 'text-[#B8ACB8] hover:text-white'
                  }`}
                >
                  Password
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('passkey')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    authMethod === 'passkey' ? 'bg-[#FF702E] text-white shadow-sm' : 'text-[#B8ACB8] hover:text-white'
                  }`}
                >
                  Passkey
                </button>
              </div>

              {/* ID Input */}
              <div>
                <label className="block text-xs font-semibold text-[#B8ACB8] mb-1.5">
                  {role === 'student' ? 'Student Roll Number' : 'Institutional ID / Staff Code'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#B8ACB8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. 23B91A3301"
                    className="w-full bg-[#211722] text-white text-xs pl-10 pr-4 py-2.5 rounded-xl border border-white/10 font-mono focus:outline-none focus:ring-2 focus:ring-[#FF702E]"
                  />
                </div>
              </div>

              {/* Secret or Passkey */}
              {authMethod === 'passkey' ? (
                <div className="p-4 rounded-xl bg-[#211722] border border-white/10 text-center space-y-3">
                  <Fingerprint className="w-10 h-10 text-[#FF702E] mx-auto animate-pulse" />
                  <p className="text-xs text-[#B8ACB8]">
                    Verify with registered biometric passkey (Touch ID, Face ID, or Windows Hello).
                  </p>
                  <button
                    type="button"
                    onClick={handlePasskeyAuth}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF702E] to-[#FF914D] shadow-md cursor-pointer"
                  >
                    Authenticate with Biometrics
                  </button>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-[#B8ACB8] mb-1.5">
                    {authMethod === 'pin' ? '4-Digit PIN Code' : 'Portal Password'}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#B8ACB8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={authMethod === 'pin' ? 'password' : 'password'}
                      maxLength={authMethod === 'pin' ? 4 : 32}
                      required
                      value={secret}
                      onChange={(e) => setSecret(e.target.value)}
                      placeholder={authMethod === 'pin' ? '••••' : 'Enter password'}
                      className="w-full bg-[#211722] text-white text-xs pl-10 pr-4 py-2.5 rounded-xl border border-white/10 font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-[#FF702E]"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {authMethod !== 'passkey' && (
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF702E] to-[#FF914D] hover:opacity-95 shadow-md shadow-[#FF702E]/25 transition-all cursor-pointer text-sm"
                >
                  Sign In to {role.toUpperCase()}
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
