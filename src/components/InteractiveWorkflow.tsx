import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Building,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  Copy,
  Check,
  Fingerprint,
  Calendar,
  AlertTriangle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

type UserRole = 'student' | 'faculty' | 'hod';

interface StepInfo {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  actionLabel: string;
}

export const InteractiveWorkflow: React.FC<{
  onOpenLogin: (role: 'student' | 'faculty' | 'hod') => void;
}> = ({ onOpenLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Mini simulation state for step 3
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>(['P3', 'P4', 'P5']);
  const [facultyPermissions, setFacultyPermissions] = useState<
    Array<{ roll: string; name: string; request: string; status: 'approved' | 'pending' }>
  >([
    { roll: '23B91A3301', name: 'A. Sai Vardhan', request: 'SIH Hackathon Finals', status: 'approved' },
    { roll: '23B91A3302', name: 'B. Hemanth Kumar', request: 'Inter-College Sports Meet', status: 'approved' },
    { roll: '23B91A3303', name: 'Ch. Gowtham Krishna', request: 'Technical Paper Presentation', status: 'pending' },
    { roll: '23B91A3304', name: 'Ch. Vivekananda', request: 'Department Project Expo', status: 'pending' },
  ]);

  const roles = [
    {
      id: 'student' as UserRole,
      name: 'Student',
      icon: GraduationCap,
      description: 'View attendance records, track eligibility, and request duty-leave permissions.',
      roleBadge: 'Student Portal',
    },
    {
      id: 'faculty' as UserRole,
      name: 'Faculty Advisor',
      icon: Briefcase,
      description: 'Review student duty-leave requests, verify documentation, and designate approved or pending permissions.',
      roleBadge: 'Faculty Advisor Engine',
    },
    {
      id: 'hod' as UserRole,
      name: 'Department Head',
      icon: Building,
      description: 'Monitor department-wide analytics, manage faculty, and grant bulk approvals.',
      roleBadge: 'HOD Executive Hub',
    },
  ];

  const studentSteps: StepInfo[] = [
    {
      number: '01',
      title: 'Access the Student Portal',
      subtitle: 'Passkey & PIN Authentication',
      description: 'Students log in securely using biometric passkeys, institutional Google accounts, or a quick 4-digit PIN for rapid authentication on mobile and desktop.',
      highlights: [
        'Instant biometric fingerprint & PIN login',
        'Direct link to SRKR student credentials',
        'Zero session timeouts during class hours'
      ],
      actionLabel: 'Sign In as Student'
    },
    {
      number: '02',
      title: 'Open the Relevant Dashboard',
      subtitle: 'Attendance Overview & Status',
      description: 'Review your personalized student profile with registered roll number, department, current semester, aggregate attendance percentage, and real-time eligibility warnings.',
      highlights: [
        'Live percentage gauge with 75% threshold safety margin',
        'Subject-wise breakdown across lectures and lab practicals',
        'Recent permission request history and approval status'
      ],
      actionLabel: 'Launch Student Dashboard'
    },
    {
      number: '03',
      title: 'Complete the Required Action',
      subtitle: 'Apply for Duty-Leave Permission',
      description: 'Select the target date, pick the exact lecture periods (P1 to P8), attach relevant invitation or proof documents, and submit your duty-leave request with automatic advisor routing.',
      highlights: [
        'Granular period selector (P1–P8) matching college timetable',
        'Instant routing to respective section faculty advisors',
        'Cloud storage for certificates and event invitations'
      ],
      actionLabel: 'File Permission Request'
    },
    {
      number: '04',
      title: 'Review the Result',
      subtitle: 'Automated Yellow Roster Sync',
      description: 'Once approved by your faculty advisor or department head, the permission syncs in yellow on the faculty attendance roster, ensuring your attendance percentage remains completely protected.',
      highlights: [
        'Approved hours automatically marked as On-Duty',
        'Transparent status audit trail visible to students and parents',
        'Guaranteed eligibility safeguard for semester end examinations'
      ],
      actionLabel: 'View Attendance Ledger'
    }
  ];

  const facultySteps: StepInfo[] = [
    {
      number: '01',
      title: 'Access the Faculty Portal',
      subtitle: 'Faculty Workstation Authentication',
      description: 'Faculty members sign in with official institutional email credentials to immediately access assigned department sections, scheduled timetables, and student permission requests.',
      highlights: [
        'Verified faculty single sign-on access',
        'Automated allocation of assigned course sections',
        'Fast mobile-optimized interface for lecture hall use'
      ],
      actionLabel: 'Sign In as Faculty'
    },
    {
      number: '02',
      title: 'Open the Relevant Dashboard',
      subtitle: 'Section & Permission Overview',
      description: 'Access the faculty workstation overview showing section rosters, incoming student duty-leave applications, verification queues, and status breakdowns.',
      highlights: [
        'Real-time count of pending student permission requests',
        'Section-wise filtering across CSIT and CSD',
        'Quick access to student verification documentation'
      ],
      actionLabel: 'Open Faculty Dashboard'
    },
    {
      number: '03',
      title: 'Complete the Required Action',
      subtitle: 'Review & Verify Student Permissions',
      description: 'Review submitted duty-leave requests from students in your section and designate each permission directly as either Approved or Pending with one tap.',
      highlights: [
        'One-tap toggle between Approved and Pending status',
        'Clear green and amber indicators for verified requests',
        'Automated notification dispatch upon status change'
      ],
      actionLabel: 'Review Permissions'
    },
    {
      number: '04',
      title: 'Review the Result',
      subtitle: 'Permission Verification Summary',
      description: 'View the finalized permission verification summary showing all approved and pending requests, ready to export or transmit directly to the department.',
      highlights: [
        'Immediate summary of Approved vs Pending requests',
        'Clear roll-number list for authorized college activities',
        'One-click copy of verified permission record'
      ],
      actionLabel: 'View Permission Summary'
    }
  ];

  const hodSteps: StepInfo[] = [
    {
      number: '01',
      title: 'Access the Administrative Portal',
      subtitle: 'Department Executive Sign-In',
      description: 'Heads of Department authenticate into high-privilege administrative controls to oversee entire academic departments, faculty allocations, and institutional compliance.',
      highlights: [
        'High-security administrative authorization',
        'Department-wide scope across CSD and CSIT programs',
        'Comprehensive activity and audit event logging'
      ],
      actionLabel: 'Sign In as HOD'
    },
    {
      number: '02',
      title: 'Open the Relevant Dashboard',
      subtitle: 'Departmental Attendance Health Matrix',
      description: 'Inspect real-time aggregate statistics across all sections, compare attendance trends between CSIT and CSD, and monitor pending inter-departmental permission requests.',
      highlights: [
        'Real-time overview of total faculty submissions',
        'Pending permission queue requiring departmental approval',
        'Department health gauges with at-risk student flags'
      ],
      actionLabel: 'Open HOD Console'
    },
    {
      number: '03',
      title: 'Complete the Required Action',
      subtitle: 'Grant Bulk Attendance Exemptions',
      description: 'Authorize collective duty-leave exemptions for entire teams representing SRKR Engineering College at national hackathons, sports tournaments, and technical conferences.',
      highlights: [
        'Mass approval for hackathon and sports delegations',
        'Single-click synchronization across all subject faculties',
        'Automatic academic dispensation documentation'
      ],
      actionLabel: 'Authorize Bulk Exemptions'
    },
    {
      number: '04',
      title: 'Review the Result',
      subtitle: 'Institutional Compliance Ledger',
      description: 'Access the permanent academic audit trail, ensuring complete transparency and compliance with university examination regulations and accreditation criteria.',
      highlights: [
        'Immutable digital records for university inspection',
        'Comprehensive semester attendance regularization sheets',
        'Verified zero-paperwork audit compliance'
      ],
      actionLabel: 'Access Compliance Ledger'
    }
  ];

  const currentSteps =
    selectedRole === 'student'
      ? studentSteps
      : selectedRole === 'faculty'
      ? facultySteps
      : hodSteps;

  const currentStep = currentSteps[activeStep] || currentSteps[0];

  const togglePeriod = (p: string) => {
    setSelectedPeriods((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p].sort()
    );
  };

  const togglePermissionStatus = (roll: string) => {
    setFacultyPermissions((prev) =>
      prev.map((s) => {
        if (s.roll !== roll) return s;
        return {
          ...s,
          status: s.status === 'approved' ? 'pending' : 'approved',
        };
      })
    );
  };

  const handleCopyPermissions = () => {
    const approvedList = facultyPermissions
      .filter((p) => p.status === 'approved')
      .map((p) => `${p.roll} (${p.name})`)
      .join(', ') || 'None';
    const pendingList = facultyPermissions
      .filter((p) => p.status === 'pending')
      .map((p) => `${p.roll} (${p.name})`)
      .join(', ') || 'None';
    const text = `*SRKR ENGINEERING COLLEGE*\n*Faculty Advisor Permission Record*\nSection: CSIT - B\n--------------------------------\n✅ APPROVED PERMISSIONS:\n${approvedList}\n\n⏳ PENDING PERMISSIONS:\n${pendingList}\n--------------------------------\n_Verified via AttendEase_`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  return (
    <section id="workflow" className="py-20 md:py-28 relative overflow-hidden bg-[#100812]">
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle 800px at 50% 20%, rgba(255, 112, 46, 0.08), transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[12px] font-extrabold text-[#FF702E] tracking-widest uppercase block mb-2.5">
            HOW ATTENDEASE WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Attendance Workflow, Simplified.
          </h2>
          <p className="text-sm sm:text-base text-[#B8ACB8] leading-relaxed text-balance">
            Explore how students, faculty, and administrators use AttendEase to manage attendance and related requests.
          </p>
        </div>

        {/* Step 1 — Choose a User Role */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#FF702E]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Step 1 — Choose a User Role
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((r) => {
              const isSelected = selectedRole === r.id;
              const Icon = r.icon;

              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setSelectedRole(r.id);
                    setActiveStep(0);
                  }}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border relative flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#211722] border-[#FF702E] shadow-[0_10px_35px_rgba(255,112,46,0.18)] ring-1 ring-[#FF702E]'
                      : 'bg-[#1A101C] border-white/10 hover:border-white/20 hover:bg-[#211722]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#FF702E] to-[#FF914D] text-white shadow-md shadow-[#FF702E]/30 scale-105'
                            : 'bg-[#211722] text-[#B8ACB8] border border-white/5 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {isSelected ? (
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FF702E]/20 text-[#FF914D] border border-[#FF702E]/30 animate-in fade-in">
                          Selected
                        </span>
                      ) : (
                        <span className="text-xs text-[#B8ACB8] group-hover:text-white transition-colors">
                          Select Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF914D] transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-xs text-[#B8ACB8] leading-relaxed">
                      {r.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? 'text-[#FF702E]' : 'text-[#B8ACB8]'}>
                      {r.roleBadge}
                    </span>
                    <div className="flex items-center gap-1 text-[#FF702E]">
                      <span className="text-[11px]">View Workflow</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — Explore the Workflow */}
        <div className="rounded-3xl bg-[#1A101C] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Top orange gradient hairline */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF702E] to-transparent opacity-80" />

          {/* Step Sequence Bar */}
          <div className="p-4 sm:p-6 bg-[#140B16] border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF702E] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Step 2 — Explore the {selectedRole === 'student' ? 'Student' : selectedRole === 'faculty' ? 'Faculty Advisor' : 'Department Head'} Workflow
                </span>
              </div>
              <span className="text-xs font-mono text-[#B8ACB8]">
                Step <strong className="text-white">{activeStep + 1}</strong> of {currentSteps.length}
              </span>
            </div>

            {/* Step tabs (01, 02, 03, 04) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer relative flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#211722] border-[#FF702E] shadow-md shadow-[#FF702E]/20 ring-1 ring-[#FF702E]/40'
                        : isPast
                        ? 'bg-[#1A101C]/80 border-white/10 text-white/90'
                        : 'bg-[#1A101C]/40 border-white/5 text-[#B8ACB8] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-[#FF702E] text-white'
                            : isPast
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-white/5 text-[#B8ACB8]'
                        }`}
                      >
                        {step.number}
                      </span>
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <span className="text-[10px] font-bold text-[#FF702E] uppercase">Active</span>
                      ) : (
                        <span className="text-[10px] text-[#B8ACB8]/60 uppercase">Step</span>
                      )}
                    </div>
                    <div>
                      <div className={`text-xs font-bold leading-snug truncate ${isActive ? 'text-white' : 'text-[#B8ACB8]'}`}>
                        {step.title}
                      </div>
                      <div className="text-[10px] text-[#B8ACB8]/70 mt-0.5 truncate">
                        {step.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Stage Content: Two Columns (Step Details + Sleek Mobile Device Mockup) */}
          <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Step Info & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#211722] border border-white/10 text-[11px] font-bold text-[#FF914D] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF702E]" />
                  <span>Step {currentStep.number} · {currentStep.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {currentStep.title}
                </h3>

                <p className="text-sm text-[#B8ACB8] leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 p-4 rounded-2xl bg-[#211722]/80 border border-white/10">
                  {currentStep.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FF702E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Step Navigation */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onOpenLogin(selectedRole)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white text-xs font-bold shadow-lg shadow-[#FF702E]/25 hover:shadow-[#FF702E]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{currentStep.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
                      activeStep === 0
                        ? 'opacity-40 border-white/5 text-[#B8ACB8] cursor-not-allowed'
                        : 'border-white/10 bg-[#211722] text-white hover:border-white/20 hover:bg-[#211722]/80 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  <button
                    type="button"
                    disabled={activeStep === currentSteps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(currentSteps.length - 1, prev + 1))}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
                      activeStep === currentSteps.length - 1
                        ? 'opacity-40 border-white/5 text-[#B8ACB8] cursor-not-allowed'
                        : 'border-[#FF702E]/40 bg-[#FF702E]/10 text-white hover:bg-[#FF702E]/20 cursor-pointer'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Mobile Device Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[340px] relative">
                {/* Device Glow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-[#FF702E]/20 to-transparent rounded-[44px] blur-xl opacity-60 pointer-events-none" />

                {/* Smartphone Container */}
                <div className="relative rounded-[40px] bg-[#0c060d] border-[5px] border-[#2d2030] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                  {/* Speaker & Camera Notch Bar */}
                  <div className="h-6 bg-[#0c060d] flex items-center justify-center relative px-6 z-20">
                    <div className="w-16 h-4 bg-[#1A101C] rounded-b-xl flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-black/80 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#FF702E]/70" />
                      </div>
                    </div>
                  </div>

                  {/* Phone Screen Area */}
                  <div className="bg-[#100812] min-h-[500px] flex flex-col justify-between text-white relative">
                    {/* Screen Status Header */}
                    <div className="px-4 py-2 flex items-center justify-between text-[11px] text-[#B8ACB8] border-b border-white/5 bg-[#140B16]">
                      <span className="font-semibold text-white">09:41</span>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span>5G</span>
                        <span className="w-4 h-2 border border-white/60 rounded-xs inline-block relative">
                          <span className="absolute inset-0.5 bg-emerald-400 rounded-xs" />
                        </span>
                      </div>
                    </div>

                    {/* Step-Specific Screen View */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      {/* STEP 01 VIEW: Login Gateway */}
                      {activeStep === 0 && (
                        <div className="space-y-4 py-2 animate-in fade-in duration-300">
                          <div className="flex items-center gap-2 mb-3">
                            <img src="/logo.png" alt="AttendEase" className="w-7 h-7 object-contain" />
                            <div>
                              <div className="text-xs font-bold text-white">SRKR Engineering</div>
                              <div className="text-[10px] text-[#B8ACB8]">CSD & CSIT Departments</div>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#1A101C] border border-white/10 text-center">
                            <div className="w-12 h-12 rounded-xl bg-[#FF702E]/20 text-[#FF702E] mx-auto flex items-center justify-center mb-3">
                              <Fingerprint className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">
                              {selectedRole === 'student' ? 'Student Sign-In' : selectedRole === 'faculty' ? 'Faculty Sign-In' : 'Administrative Console'}
                            </h4>
                            <p className="text-[11px] text-[#B8ACB8] mb-4">
                              Use your biometric passkey or institutional PIN.
                            </p>

                            <div className="space-y-2">
                              <div className="h-9 px-3 rounded-lg bg-[#211722] border border-white/10 flex items-center justify-between text-xs text-[#B8ACB8]">
                                <span>{selectedRole === 'student' ? '24B91A1287' : selectedRole === 'faculty' ? 'faculty@srkr.edu.in' : 'csdhod@srkr.edu.in'}</span>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              </div>
                              <button
                                type="button"
                                onClick={() => onOpenLogin(selectedRole)}
                                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white text-xs font-bold shadow-md cursor-pointer"
                              >
                                Authenticate Passkey
                              </button>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 shrink-0" />
                            <span>Encrypted Institutional Token Verified</span>
                          </div>
                        </div>
                      )}

                      {/* STEP 02 VIEW: Real High-Res Screenshot Mockup */}
                      {activeStep === 1 && (
                        <div className="space-y-3 animate-in fade-in duration-300">
                          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#1A101C]">
                            <img
                              src={
                                selectedRole === 'student'
                                  ? '/mockups/student-portal.png'
                                  : selectedRole === 'faculty'
                                  ? '/mockups/faculty-attendance.png'
                                  : '/mockups/hod-dashboard.png'
                              }
                              alt="AttendEase App Dashboard Screenshot"
                              className="w-full h-[380px] object-cover object-top"
                            />
                          </div>
                          <div className="text-center text-[11px] text-[#B8ACB8]">
                            Authentic AttendEase {selectedRole.toUpperCase()} Interface
                          </div>
                        </div>
                      )}

                      {/* STEP 03 VIEW: Complete the Required Action */}
                      {activeStep === 2 && (
                        <div className="space-y-3 animate-in fade-in duration-300">
                          {selectedRole === 'student' && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-[#1A101C] border border-white/10">
                                <div className="text-xs font-bold text-white mb-1">Select Lecture Periods</div>
                                <div className="text-[10px] text-[#B8ACB8] mb-2.5">Tap periods requiring duty-leave:</div>
                                <div className="grid grid-cols-4 gap-1.5">
                                  {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'].map((p) => {
                                    const isSel = selectedPeriods.includes(p);
                                    return (
                                      <button
                                        key={p}
                                        type="button"
                                        onClick={() => togglePeriod(p)}
                                        className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                                          isSel
                                            ? 'bg-[#FF702E] border-[#FF702E] text-white shadow-sm'
                                            : 'bg-[#211722] border-white/10 text-[#B8ACB8] hover:text-white'
                                        }`}
                                      >
                                        {p}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="p-3 rounded-xl bg-[#1A101C] border border-white/10 space-y-2">
                                <div className="text-[11px] font-bold text-white">Event / Duty Reason</div>
                                <div className="text-xs text-[#FF914D] font-semibold bg-[#211722] p-2 rounded-lg border border-white/5">
                                  Smart India Hackathon 2026 Finals
                                </div>
                                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                                  <Check className="w-3 h-3" />
                                  <span>Invitation Letter Uploaded (PDF)</span>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => onOpenLogin('student')}
                                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white text-xs font-bold cursor-pointer shadow-md"
                              >
                                Submit for Advisor Approval
                              </button>
                            </div>
                          )}

                          {selectedRole === 'faculty' && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-[#1A101C] border border-white/10">
                                <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                                  <span>Section CSIT-B</span>
                                  <span className="text-[10px] text-[#FF702E]">Permission Queue</span>
                                </div>
                                <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                                  {facultyPermissions.map((item) => (
                                    <div
                                      key={item.roll}
                                      onClick={() => togglePermissionStatus(item.roll)}
                                      className={`p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${
                                        item.status === 'approved'
                                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                          : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                                      }`}
                                    >
                                      <div>
                                        <div className="font-mono text-[11px] font-bold text-white">{item.roll}</div>
                                        <div className="text-[10px] text-[#B8ACB8]">{item.name}</div>
                                        <div className="text-[9px] text-white/60 truncate max-w-[130px]">{item.request}</div>
                                      </div>
                                      <div>
                                        {item.status === 'approved' ? (
                                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                            APPROVED
                                          </span>
                                        ) : (
                                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                            PENDING
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="text-[10px] text-[#B8ACB8] text-center">
                                Tap any student request to toggle between Approved and Pending.
                              </div>
                            </div>
                          )}

                          {selectedRole === 'hod' && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-[#1A101C] border border-white/10 space-y-2">
                                <div className="text-xs font-bold text-white">Bulk Exemption Authorization</div>
                                <div className="p-2 rounded-lg bg-[#211722] border border-white/5 space-y-1">
                                  <div className="text-[11px] text-[#FF914D] font-bold">Smart India Hackathon Contingent</div>
                                  <div className="text-[10px] text-[#B8ACB8]">12 Students · CSIT & CSD Sections</div>
                                </div>
                                <div className="p-2 rounded-lg bg-[#211722] border border-white/5 space-y-1">
                                  <div className="text-[11px] text-white font-semibold">Duration: 3 Working Days</div>
                                  <div className="text-[10px] text-[#B8ACB8]">Automated period dispensation</div>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => onOpenLogin('hod')}
                                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white text-xs font-bold cursor-pointer shadow-md"
                              >
                                One-Click Grant Exemption
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* STEP 04 VIEW: Review the Result */}
                      {activeStep === 3 && (
                        <div className="space-y-3 animate-in fade-in duration-300">
                          {selectedRole === 'student' && (
                            <div className="p-4 rounded-2xl bg-[#1A101C] border border-emerald-500/30 space-y-3">
                              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Duty-Leave Approved</span>
                              </div>
                              <div className="p-3 rounded-xl bg-[#211722] border border-white/10 space-y-1">
                                <div className="text-xs font-bold text-white">Attendance Status: 82.4%</div>
                                <div className="text-[10px] text-emerald-400">Exemption safeguarded examination eligibility</div>
                              </div>
                              <div className="text-[10px] text-[#B8ACB8]">
                                Synchronized with official SRKR academic records.
                              </div>
                            </div>
                          )}

                          {selectedRole === 'faculty' && (
                            <div className="p-4 rounded-2xl bg-[#1A101C] border border-white/10 space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                  <ShieldCheck className="w-4 h-4 text-[#FF702E]" />
                                  <span>Permission Status</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleCopyPermissions}
                                  className="px-2 py-1 rounded bg-[#FF702E]/20 text-[#FF914D] text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                                >
                                  {copiedWhatsApp ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-white/70" />}
                                  <span>{copiedWhatsApp ? 'Copied' : 'Copy'}</span>
                                </button>
                              </div>
                              <div className="space-y-2">
                                <div className="p-2.5 rounded-lg bg-[#211722] border border-white/5 space-y-1">
                                  <div className="flex items-center justify-between text-[11px]">
                                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                      Approved ({facultyPermissions.filter((p) => p.status === 'approved').length})
                                    </span>
                                    <span className="text-[10px] text-white/50">Verified</span>
                                  </div>
                                  <div className="text-[10px] font-mono text-white/80">
                                    {facultyPermissions
                                      .filter((p) => p.status === 'approved')
                                      .map((p) => p.roll.slice(-2))
                                      .join(', ') || 'None'}
                                  </div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-[#211722] border border-white/5 space-y-1">
                                  <div className="flex items-center justify-between text-[11px]">
                                    <span className="text-amber-400 font-bold flex items-center gap-1">
                                      <Clock className="w-3.5 h-3.5" />
                                      Pending ({facultyPermissions.filter((p) => p.status === 'pending').length})
                                    </span>
                                    <span className="text-[10px] text-white/50">Awaiting Review</span>
                                  </div>
                                  <div className="text-[10px] font-mono text-white/80">
                                    {facultyPermissions
                                      .filter((p) => p.status === 'pending')
                                      .map((p) => p.roll.slice(-2))
                                      .join(', ') || 'None'}
                                  </div>
                                </div>
                              </div>
                              <div className="text-[10px] text-[#B8ACB8] text-center">
                                Verified permissions sync with official records.
                              </div>
                            </div>
                          )}

                          {selectedRole === 'hod' && (
                            <div className="p-4 rounded-2xl bg-[#1A101C] border border-white/10 space-y-3">
                              <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <ShieldCheck className="w-4 h-4 text-[#FF702E]" />
                                <span>Academic Audit Record</span>
                              </div>
                              <div className="p-3 rounded-xl bg-[#211722] border border-white/10 text-[10px] space-y-1.5 text-[#B8ACB8]">
                                <div className="flex justify-between text-white font-semibold">
                                  <span>Department Audit:</span>
                                  <span className="text-emerald-400">Verified</span>
                                </div>
                                <div>Ledger Hash: 0x82f..9c21</div>
                                <div>University Regulation: Fully Compliant</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Phone Bar */}
                    <div className="p-3 bg-[#140B16] border-t border-white/5 flex items-center justify-center">
                      <div className="w-24 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
