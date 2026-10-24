import { Developer } from '../types/attendance';

export const DEVELOPERS_DATA: Developer[] = [
  {
    name: 'Chundru Gowtham Krishna',
    role: 'System Architect, Full-Stack Engineer, Mobile App Developer & UI/UX Designer',
    department: 'Dept. of CSIT • SRKR Engineering College',
    bio: 'Architected the core system architecture, multi-tier permission state engine, PostgreSQL database schema, WebAuthn passkey authentication, and backend REST APIs.',
    avatar: 'https://github.com/gowthamkrishna27.png',
    website: 'https://gowthamkrishnachundru.vercel.app/',
    github: 'https://github.com/gowthamkrishna27',
    linkedin: 'https://www.linkedin.com/in/gowtham-krishna-chundru-213950324',
    instagram: 'https://instagram.com/gowthamchowdary.27',
    email: 'gowthamkrishna18v@gmail.com',
    stack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Express', 'WebAuthn', 'Kotlin', 'Capacitor']
  },
  {
    name: 'Chandani Vivekananda',
    role: 'Full-Stack Developer & UI/UX Designer',
    department: 'Dept. of CSIT • SRKR Engineering College',
    bio: 'Built the multi-period attendance matrix (P1–P8), embedded student photo ExcelJS generator, WhatsApp export formatter, and responsive client-side workflows.',
    avatar: 'https://github.com/vivekanand77.png',
    website: 'https://gowthamkrishnachundru.vercel.app/',
    github: 'https://github.com/vivekanand77',
    linkedin: 'https://www.linkedin.com/in/vivekanandachandani',
    instagram: 'https://instagram.com/vivekkk_0_7_',
    email: 'chandanivivek770@gmail.com',
    stack: ['React 19', 'TypeScript', 'TailwindCSS', 'ExcelJS', 'Framer Motion', 'REST APIs']
  },
  {
    name: 'Pavan Ketha',
    role: 'Frontend Developer & UI Engineer',
    department: 'Dept. of CSIT • SRKR Engineering College',
    bio: 'Designed clean responsive user interfaces, streamlined student workflow components, and assisted in frontend state management and API integrations.',
    avatar: 'https://github.com/Pavanketha19.png',
    website: 'https://gowthamkrishnachundru.vercel.app/',
    github: 'https://github.com/Pavanketha19',
    linkedin: 'https://www.linkedin.com/in/pavan-ketha-5ab973383/',
    instagram: 'https://instagram.com/purnnaaaa_',
    email: 'pavanketha.palangi@gmail.com',
    stack: ['React 19', 'TypeScript', 'TailwindCSS', 'UI/UX Design', 'REST APIs']
  },
  {
    name: 'Kesanakurthi Manasa Satya',
    role: 'Frontend Developer & UI/UX Specialist',
    department: 'Dept. of CSIT • SRKR Engineering College',
    bio: 'Crafted accessible UI layouts, contributed to student modal views, form validations, and user experience enhancements across portals.',
    avatar: 'https://github.com/ManasaSatya26.png',
    website: 'https://gowthamkrishnachundru.vercel.app/',
    github: 'https://github.com/ManasaSatya26',
    linkedin: 'https://www.linkedin.com/in/manasa-satya-31835728a/',
    instagram: 'https://instagram.com/manasa_satya',
    email: 'manasa.satya26@gmail.com',
    stack: ['React 19', 'TypeScript', 'TailwindCSS', 'Form Validation', 'Accessibility']
  }
];

export const FAQS = [
  {
    question: 'How do students apply for duty-leave / permissions?',
    answer: "Students can log in to the Student Portal, click 'New Permission Request', select their date, time slot/periods, reason category, and upload proof documents. Once submitted, it forwards to their assigned Faculty Advisor."
  },
  {
    question: 'How does Faculty mark attendance?',
    answer: 'Faculty members log in, select the Year and Target Section (e.g. CSIT-B), select the specific period (P1 to P8), and tap student roll numbers to mark Present/Absent. Approved permissions automatically highlight in yellow.'
  },
  {
    question: 'What is the HOD Direct Exemption feature?',
    answer: 'HODs can grant bulk attendance exemptions to multiple students directly for academic events, hackathons, sports, or official college duties without requiring individual student submissions.'
  },
  {
    question: 'How can I export attendance to WhatsApp?',
    answer: "On any Section Attendance session, tap 'WhatsApp Report' to automatically format sorted presentees, absentees, and approved duty-leaves with Date and Time, ready to paste directly into official WhatsApp groups."
  }
];
