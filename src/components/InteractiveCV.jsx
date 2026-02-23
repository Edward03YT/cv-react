import React, { useState, useEffect } from 'react';
import { useIntersectionObserver, useScrollProgress } from '../hooks/useIntersectionObserver';
import { smoothScrollTo, animateProgressBar } from '../utils/animations';

import {
  Mail,
  Linkedin,
  Code,
  GraduationCap,
  Award,
  Globe,
  Car,
  Monitor,
  Database,
  Cpu,
  Users,
  Calendar,
  MapPin,
  Phone,
  Download,
  ChevronRight,
  Star,
  Zap,
  Github,
  Briefcase,
  ExternalLink,
  Bike
} from 'lucide-react';

export default function InteractiveCV() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fullText = "Student la Universitatea POLITEHNICA București";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }, []);

  const certificates = [
    { name: "Introducere în securitatea cibernetică", date: "19/03/2023", category: "Security", link: "https://drive.google.com/file/d/13Oags6UOb-3ccd3Xv40LJPEd9g1y9Cxf/view" },
    { name: "NDG LINUX ESSENTIALS", date: "09/07/2023", category: "Linux", link: "https://drive.google.com/file/d/1Fp8tJNlkJi6ZI1MS5409XMy10JDMBg51/view" },
    { name: "JavaScript Essentials 1", date: "24/06/2023", category: "Web", link: "https://drive.google.com/file/d/1ha4ZO4A0TMWI0nCJs8SOaW8Hn-MiS7IX/view" },
    { name: "Introduction to HTML", date: "22/06/2023", category: "Web", link: "https://drive.google.com/file/d/1TACJsHxL8x2JW5MUzHaWsLfYXDA-IVwB/view" },
    { name: "CPA: Programming Essentials in C++", date: "07/03/2023", category: "Programming", link: "https://drive.google.com/file/d/1PauK522jBcEBjAtBfmLGKXuyJ_8ebqjm/view" },
    { name: "Sololearn Certificate C#", date: "08/09/2022", category: "Programming", link: "https://drive.google.com/file/d/1E8myv6taPy0qdrkmwAqDtoqApL8e8eDf/view" },
    { name: "Sololearn Certificate C++", date: "07/09/2022", category: "Programming", link: "https://drive.google.com/file/d/1SoK8SwAnAVb20caWM2efKVnHLQkpmg7Y/view" },
    { name: "Sololearn Certificate Python", date: "09/09/2022", category: "Programming", link: "https://drive.google.com/file/d/1kMis9CaiYv6yGn4pNgI9T1LzRts_4Rlz/view" },
    { name: "Sololearn Certificate SQL", date: "09/09/2022", category: "Database", link: "https://drive.google.com/file/d/14QWA8u7xCuVnForRp4jx8bvzo2Ay1xYB/view" },
    { name: "Get Connected", date: "09/07/2023", category: "Networking", link: "https://drive.google.com/file/d/1AsECt0FyHv4uIUhL1i_Bz27r-nvbY1f4/view" }
  ];


  const skills = {
    programming: ["C++", "C", "C#", "Python", "Java"],
    web: ["HTML5", "CSS3", "JavaScript", "PHP", "Typescript", "React", "Next.js", "Vite", "JWT", "Figma"],
    database: ["SQL", "NoSQL"],
    tools: ["AutoCAD", "OrCAD Capture", "Autodesk Inventor", "Catia V5"],
    systems: ["Windows", "macOS", "Linux"],
    office: ["Word", "Excel", "PowerPoint"],
    networking: ["Router", "Switch", "Access Points", "VPN"]
  };

  const languages = [
    { lang: "Română", level: "Nativ", percentage: 100 },
    { lang: "Engleză", level: "B2", percentage: 80 },
    { lang: "Franceză", level: "A1", percentage: 25 }
  ];

  const drivingLicenses = ["AM", "A1", "A2", "A", "B1", "B"];

  const sections = [
    { id: 'about', name: 'Despre Mine', icon: Users },
    { id: 'projects', name: 'Proiecte', icon: Briefcase },
    { id: 'education', name: 'Educație', icon: GraduationCap },
    { id: 'certificates', name: 'Certificate', icon: Award },
    { id: 'skills', name: 'Competențe', icon: Code },
    { id: 'languages', name: 'Limbi', icon: Globe },
    { id: 'licenses', name: 'Permise', icon: Car }
  ];

  const CategoryBadge = ({ category }) => {
    const colors = {
      Security: 'bg-red-500',
      Linux: 'bg-yellow-500',
      Web: 'bg-blue-500',
      Programming: 'bg-green-500',
      Database: 'bg-purple-500'
    };
    return (
      <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[category] || 'bg-gray-500'}`}>
        {category}
      </span>
    );
  };

  const SkillBar = ({ skill, percentage }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">

        <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl border border-white/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/profil.jpg"
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Andrei-Eduard Crăciun
              </h1>
              <p className="text-xl text-gray-300 mb-4 h-8">
                {typedText}<span className="animate-pulse">|</span>
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>igame0303@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>29/10/2003</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>România</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/craciun-andrei-eduard-379334269/" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>


              <a href="https://github.com/Edward03YT" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://drive.google.com/file/d/1WD0mjFAqqFQk4Mx9-k4UNb3kT0-J41oe/view?usp=drive_link"
                download="CV_CraciunAndrei.pdf"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>


            </div>
          </div>
        </div>


        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 mb-8 shadow-xl border border-white/20">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${activeSection === section.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {section.name}
                </button>
              );
            })}
          </div>
        </div>


        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">


          {activeSection === 'about' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-400" />
                Despre Mine
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Profil Personal</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Sunt un student pasionat de tehnologie la Universitatea POLITEHNICA București, cu o puternică orientare către dezvoltarea software. Am experiență în multiple limbaje de programare și sunt mereu în căutarea de noi provocări tehnologice.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <strong className="text-purple-400">Vârstă:</strong>
                      <div className="text-gray-300">22 ani</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <strong className="text-purple-400">Cetățenie:</strong>
                      <div className="text-gray-300">Română</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <strong className="text-purple-400">Gen:</strong>
                      <div className="text-gray-300">Masculin</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <strong className="text-purple-400">Status:</strong>
                      <div className="text-gray-300">Student</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Obiective</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg border border-purple-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="font-semibold text-white">Dezvoltare Profesională</span>
                      </div>
                      <p className="text-gray-300 text-sm">Autoeducare continuă în domeniul programării prin cursuri, lectură și proiecte practice.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-white">Competențe Tehnice</span>
                      </div>
                      <p className="text-gray-300 text-sm">Îmbunătățirea continuă a cunoștințelor în programare și tehnologii moderne.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'projects' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-purple-400" />
                Proiecte Web
              </h2>
              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all duration-300 group flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-blue-500/30 to-purple-600/30 relative flex items-center justify-center p-6 border-b border-white/10">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <Monitor className="w-16 h-16 text-white/80 z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Chestionare Auto
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      Platformă web interactivă pentru pregătirea în vederea obținerii permisului de conducere. Oferă utilizatorilor posibilitatea de a rezolva chestionare auto într-un mediu intuitiv.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">React</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">Web</span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">Educație</span>
                    </div>
                    <a href="https://chestionare-auto.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg mt-auto">
                      Vezi Proiectul <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>


                <div className="bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all duration-300 group flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-green-500/30 to-teal-600/30 relative flex items-center justify-center p-6 border-b border-white/10">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <Database className="w-16 h-16 text-white/80 z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      Gestiune Școală Șoferi
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      Aplicație de management dedicată școlilor de șoferi. Permite administrarea eficientă a instructorilor, elevilor și programărilor, simplificând fluxul de lucru administrativ.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs border border-teal-500/30">Management</span>
                      <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs border border-teal-500/30">SaaS</span>
                      <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs border border-teal-500/30">Dashboard</span>
                    </div>
                    <a href="https://gestiune-scoala-soferi.vercel.app/login" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg mt-auto">
                      Vezi Proiectul <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'education' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                Educație și Formare
              </h2>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>


                <div className="relative bg-white/10 p-6 rounded-xl border-l-4 border-purple-500 ml-12 hover:bg-white/15 transition-all duration-300 mb-6">
                  <div className="absolute -left-16 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Universitatea POLITEHNICA București</h3>
                      <p className="text-purple-400 font-semibold">Student</p>
                      <p className="text-gray-300">www.upb.ro</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                        09/2022 - În curs
                      </span>
                      <p className="text-gray-400 text-sm mt-1">România</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Student la una dintre cele mai prestigioase universități tehnice din România,
                    dezvoltând competențe avansate în inginerie și tehnologie.
                  </p>
                </div>


                <div className="relative bg-white/10 p-6 rounded-xl border-l-4 border-blue-500 ml-12 hover:bg-white/15 transition-all duration-300">
                  <div className="absolute -left-16 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Practica - FRDS (Fondul Român de Dezvoltare Socială)</h3>
                      <p className="text-blue-400 font-semibold">Internship / Practică</p>
                      <p className="text-gray-300">www.frds.ro</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        06/2025 - 09/2025
                      </span>
                      <p className="text-gray-400 text-sm mt-1">România</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Dezvoltare și programare aplicație web în cadrul echipei FRDS, acumulând experiență practică în domeniul IT și management de proiect.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'certificates' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                Certificate și Licențe
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group block cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <CategoryBadge category={cert.category} />
                      <span className="text-xs text-gray-400">{cert.date}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Vezi certificat</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}


          {activeSection === 'skills' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-purple-400" />
                Competențe Digitale
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      Limbaje de Programare
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-400" />
                      Tehnologii Web
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.web.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-green-400" />
                      Baze de Date
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.database.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-yellow-400" />
                      Sisteme de Operare
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.systems.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Software Specializat</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Rețelistică</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.networking.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-500/30 hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'languages' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-purple-400" />
                Competențe Lingvistice
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Niveluri de Cunoaștere</h3>
                  <div className="space-y-6">
                    {languages.map((lang, index) => (
                      <div key={index} className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-white">{lang.lang}</span>
                          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                            {lang.level}
                          </span>
                        </div>
                        <SkillBar skill="" percentage={lang.percentage} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Detalii Competențe</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-4 rounded-xl border border-green-500/30">
                      <h4 className="font-semibold text-white mb-2">🇷🇴 Română - Nativ</h4>
                      <p className="text-gray-300 text-sm">Limbă maternă cu fluență completă în toate aspectele comunicării.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30">
                      <h4 className="font-semibold text-white mb-2">🇬🇧 Engleză - B2</h4>
                      <p className="text-gray-300 text-sm">Nivel intermediar-avansat în toate competențele: vorbire, scriere, citire și înțelegere.</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-4 rounded-xl border border-red-500/30">
                      <h4 className="font-semibold text-white mb-2">🇫🇷 Franceză - A1</h4>
                      <p className="text-gray-300 text-sm">Nivel de bază cu cunoștințe fundamentale de comunicare.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'licenses' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Car className="w-8 h-8 text-purple-400" />
                Permise de Conducere
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {drivingLicenses.map((license, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {license.includes('A') ? (
                        <Bike className="w-8 h-8 text-white" />
                      ) : (
                        <Car className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Categoria {license}</h3>
                    <p className="text-gray-300 text-sm">
                      {license.includes('A') ? 'Motocicletă' : 'Autoturism'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}