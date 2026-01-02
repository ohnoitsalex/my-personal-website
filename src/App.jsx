import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, Linkedin, ExternalLink, Code, BookOpen, Briefcase, Wrench, Menu, X, Award, Camera } from 'lucide-react';

export default function AlexanderOnofrei() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'experience', 'expertise', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 8);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 8) % 8);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        {/* Subtle grey gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-black opacity-60"></div>
        <div className="absolute inset-0 opacity-25" style={{ transform: `translateY(${scrollY * 0.3}px)`, top: '-450%', height: '1000%' }}>
          {/* Center blobs */}
          <div className="absolute top-[10%] left-1/4 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-[10%] right-1/4 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-[80%] left-1/3 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-[40%] left-1/2 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
          <div className="absolute top-[65%] right-1/3 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
          <div className="absolute top-[25%] right-1/2 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5000"></div>

          {/* Additional center blobs */}
          <div className="absolute top-[15%] left-[35%] w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-800"></div>
          <div className="absolute top-[30%] right-[40%] w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1800"></div>
          <div className="absolute top-[45%] left-[45%] w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2800"></div>
          <div className="absolute top-[60%] right-[25%] w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3800"></div>
          <div className="absolute top-[72%] left-[28%] w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4200"></div>
          <div className="absolute top-[85%] right-[35%] w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4800"></div>

          {/* Left edge blobs */}
          <div className="absolute top-[20%] left-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1500"></div>
          <div className="absolute top-[55%] left-0 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3500"></div>
          <div className="absolute top-[35%] left-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2200"></div>
          <div className="absolute top-[70%] left-0 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

          {/* Right edge blobs */}
          <div className="absolute top-[50%] right-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2500"></div>
          <div className="absolute top-[75%] right-0 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4500"></div>
          <div className="absolute top-[15%] right-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1200"></div>
          <div className="absolute top-[38%] right-0 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2800"></div>
          <div className="absolute top-[62%] right-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3600"></div>
          <div className="absolute top-[88%] right-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5200"></div>
        </div>
      </div>

      {/* Grain texture overlay */}
      <div className="fixed inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#hero" className="relative group">
              <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AO
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-sage-600 to-sage-700 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'expertise', label: 'Expertise' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 py-4 bg-black/90 backdrop-blur-2xl border-t border-white/5">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden z-20">
        {/* Full-page background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/willian-justen-de-vasconcellos-lDtPi8I-6TE-unsplash.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <div className="text-center max-w-4xl relative z-10 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-sage-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-gradient bg-[length:200%_auto]">
              Solutions Architect
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
            <p className="text-2xl md:text-3xl font-light text-sage-100">M.Sc & B.Eng</p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl font-light text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
           Trilingual software engineer focused on cybersecurity, distributed and full-stack systems, and the design of scalable, mission-critical software. Equally driven by building reliable systems and pushing limits outdoors through running, climbing, and endurance sports.
           </p>

          <div className="flex gap-4 justify-center">
            {[
              { Icon: Mail, href: 'mailto:alexonofrei@hotmail.com', label: 'Email', external: false },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/alexander-onofrei-60885b179', label: 'LinkedIn', external: true }
            ].map(({ Icon, href, label, external }, idx) => (
              <a
                key={idx}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group relative p-4 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-white/20 hover:border-sage-400/50 shadow-lg hover:shadow-sage-500/50"
              >
                <Icon size={24} className="text-white group-hover:text-sage-300 transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 text-white/80 hover:text-white transition-all duration-500 hover:scale-125 animate-bounce group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-sage-500/30 blur-xl rounded-full group-hover:bg-sage-500/50 transition-all duration-300"></div>
            <ArrowDown size={32} className="relative" />
          </div>
        </button>

        {/* Elegant separator at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-px z-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-400/60 to-transparent blur-sm"></div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section id="about" className="py-16 px-8 relative overflow-hidden z-20">
        {/* Background elements - dark blue tones */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#113F7C]/70 to-[#113F7C]/50 rounded-2xl shadow-lg shadow-[#113F7C]/30 animate-float">
              <Wrench className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
          <div className="space-y-8">
            {[
              { title: 'Languages', items: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'SQL'] },
              { title: 'Frameworks & Tools', items: ['Spring Integration', 'Django', 'Angular', 'React', 'Node.js', 'Docker', 'Kubernetes', 'Git', 'Maven'] }
            ].map((category, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-slate-700/50 rounded-xl text-sm font-medium text-slate-200 hover:bg-gradient-to-br hover:from-[#113F7C]/90 hover:to-[#113F7C]/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#113F7C]/50 border border-slate-600/40 hover:border-[#113F7C]/60 cursor-pointer backdrop-blur-sm"
                      style={{animationDelay: `${i * 50}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Specializations</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {[
                  "Software Architecture Design",
                  "Systems Requirements",
                  "Security Risk Assessments (OWASP, GDPR, ISO/IEC 27001)",
                  "Cryptography Protocols (SSL/TLS, SSH, X.509, PQC)",
                  "Distributed Systems Architecture",
                  "Network Protocols (TCP/IP, UDP, HTTPS, SIP)",
                  "Cloud Deployment (Azure DevOps, Kubernetes, Docker)",
                  "Web Services (REST, SOAP, JSON, XML)"
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#113F7C]/10 hover:to-[#113F7C]/5 transition-all duration-300 group/item border border-transparent hover:border-[#113F7C]/30">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#113F7C]/50 transition-all duration-300"></div>
                    <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors duration-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-16 px-8 relative overflow-hidden z-20">
        {/* Decorative elements - red-brown tones */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#8A3428]/70 to-[#8A3428]/50 rounded-2xl shadow-lg shadow-[#8A3428]/30 animate-float" style={{animationDelay: '0.5s'}}>
              <Briefcase className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Building impactful solutions across cybersecurity and mission-critical systems
          </p>
          <div className="space-y-8">
            {[
              {
                title: "Solutions Architect", company: "Nav Canada", period: "Apr 2025 - Present", location: "Ottawa, ON",
                points: ["Architect and design scalable air traffic management solutions within the CAATS project", "Collaborate with cross-functional teams to define system requirements for mission-critical aviation systems", "Act as liaison between engineering teams and stakeholders", "Implement Agile Scrum development methodologies"]
              },
              {
                title: "Lead Engineer & Stakeholder", company: "Rezify", period: "Jan 2025 - Present", location: "Remote",
                points: ["Designed, implemented, and tested a production-grade web application and customer-facing landing page using JavaScript (React, Node.js)", "Built and integrated backend services with MongoDB for data persistence and application state management", "Deployed, hosted, and maintained the platform using Vercel (frontend) and Heroku (backend services)", "Defined, managed, and validated system and software requirements across the full development lifecycle", "Led a small team of software engineers, coordinating architecture decisions, task planning, and code reviews", "Gathered and managed client requirements, translating business needs into technical solutions in a fast-paced startup environment"]
              },
              {
                title: "Software Developer & Security System Engineer", company: "MDA Space", period: "Sept 2023 - Mar 2025", location: "Ottawa, ON",
                points: ["Designed secure software systems with security architecture aligned with OWASP, GDPR, and NIST standards", "Managed client requirements and collaborated with DevOps teams", "Developed software components for commercial satellite imagery systems (CSIAPS) using Java (Springboot)", "Deployed and managed Tomcat, Wildfly and GitLab servers"]
              },
              {
                title: "Software Engineer", company: "Motorola Solutions", period: "Jan 2021 - Aug 2022", location: "Gatineau, QC",
                points: ["Designed SMS prototype for next-generation 911 communication with SIP, SDP, and MSRP protocols", "Built full-stack cloud simulators for distributed systems", "Containerized and deployed applications using Azure DevOps, Kubernetes, and Docker"]
              },
              {
                title: "Software Engineer – Research Assistant", company: "3IT", period: "Sept 2021 - Dec 2021", location: "Sherbrooke, QC",
                points: ["Designed Python applications to collect data from solar panel sensors", "Built and managed PostgreSQL databases and Docker containers for Big Data"]
              },
              {
                title: "Support Technician", company: "Shared Services Canada", period: "May 2020 - Aug 2020", location: "Ottawa, ON",
                points: ["Provided technical support for the development, integration, deployment, and maintenance of IT infrastructure components", "Processed large text files and extracted critical data using AWK and UNIX shell scripting", "Performed hardware and software inventory and kept records up to date", "Updated backup and recovery processes and procedures", "Assessed impact of hardware and software changes on the IT environment", "Supported IT asset acquisition and lifecycle management"]
              }
            ].map((job, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#8A3428]/25 hover:border-[#8A3428]/40 hover:bg-[#8A3428]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8A3428]/15">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8A3428]/80 to-[#8A3428]/60 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/90 transition-all duration-300">{job.title}</h3>
                    <p className="text-lg text-slate-300 font-semibold mt-1 flex items-center gap-2">
                      {job.company}
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 rounded-full shadow-lg shadow-[#8A3428]/50"></span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm font-medium text-white px-4 py-2 bg-[#8A3428]/10 rounded-xl border border-[#8A3428]/30">{job.period}</span>
                    <span className="text-xs text-slate-400">{job.location}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#8A3428]/50 transition-all duration-300 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="expertise" className="py-16 px-8 relative overflow-hidden z-20">
        {/* Background elements - dark blue tones */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#113F7C]/70 to-[#113F7C]/50 rounded-2xl shadow-lg shadow-[#113F7C]/30 animate-float" style={{animationDelay: '1s'}}>
              <BookOpen className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Research contributions in cryptography and software testing
          </p>
          <div className="space-y-8">
            <div className="group relative bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#113F7C] to-[#113F7C]/80 rounded-l-3xl"></div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-[#113F7C]/20 text-white rounded-full text-xs font-semibold border border-[#113F7C]/30">
                Master's Thesis
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white pr-32 group-hover:text-white/90 transition-colors duration-300">
                Cryptographic Agility in TLS Implementations
              </h3>
              <p className="text-slate-300 mb-4">
                <span className="font-semibold text-white">Alexander Onofrei</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="px-4 py-2 bg-white/5 border border-[#113F7C]/30 rounded-xl font-medium text-white">University of Sherbrooke</span>
                <span className="text-slate-400">December 1, 2024</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Research on automated testing methodologies for TLS implementations with focus on cryptographic agility and post-quantum readiness.
              </p>
              <a
                href="https://usherbrooke.scholaris.ca/items/00b84bd3-31f2-411b-b660-be57a10b6b4d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 text-white font-semibold rounded-xl hover:gap-4 hover:shadow-lg hover:shadow-[#113F7C]/50 transition-all duration-300"
              >
                Read Thesis <ExternalLink size={16} />
              </a>
            </div>

            <div className="group relative bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-[#113F7C]/25 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#113F7C]/80 to-[#113F7C] rounded-l-3xl"></div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-[#113F7C]/20 text-white rounded-full text-xs font-semibold border border-[#113F7C]/30">
                Conference Paper
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white pr-32 group-hover:text-white/90 transition-colors duration-300">
                Model-Based Testing of Non-Deterministic Systems
              </h3>
              <p className="text-slate-300 mb-4">
                <span className="font-semibold text-white">Alexander Onofrei</span>, Marc Frappier, Émilie Bernard
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="px-4 py-2 bg-white/5 border border-[#113F7C]/30 rounded-xl font-medium text-white">ABZ Conference</span>
                <span className="text-slate-400">Düsseldorf, Germany</span>
                <span className="text-slate-400">June 2025</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Automated approach to generate non-deterministic tests using model-based methodologies for identifying flaws in TLS implementations.
              </p>
              <a
                href="https://dl.acm.org/doi/10.1007/978-3-031-94533-5_21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#113F7C]/80 to-[#113F7C] text-white font-semibold rounded-xl hover:gap-4 hover:shadow-lg hover:shadow-[#113F7C]/50 transition-all duration-300"
              >
                Read Paper <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="mt-32">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#8A3428]/70 to-[#8A3428]/50 rounded-2xl shadow-lg shadow-[#8A3428]/30 animate-float" style={{animationDelay: '1.2s'}}>
                <Award className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="space-y-6">
              {[
                { degree: "Master of Science", field: "Software Engineering & Cybersecurity", school: "University of Sherbrooke, Sherbrooke, QC" },
                { degree: "Bachelor of Engineering", field: "Computer Engineering - COOP Program", school: "University of Ottawa, Ottawa, ON", honors: "Magna Cum Laude • Dean's List Honouree" },
                { degree: "Google Cybersecurity Certificate", field: "Google - Online" }
              ].map((edu, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-slate-800/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border-l-4 border-[#8A3428] hover:bg-[#8A3428]/20 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-300 mt-2 font-medium">{edu.field}</p>
                  {edu.school && <p className="text-slate-400 text-sm mt-2">{edu.school}</p>}
                  {edu.honors && (
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <Award size={16} className="text-yellow-400" />
                      <p className="text-slate-300 font-semibold text-sm">{edu.honors}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-8 relative overflow-hidden z-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#113F7C]/70 to-[#113F7C]/50 rounded-2xl shadow-lg shadow-[#113F7C]/30 animate-float" style={{animationDelay: '1.5s'}}>
              <Code className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Innovative solutions in cryptography, embedded systems, and beyond
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="group relative bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-[#113F7C]/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#113F7C]/10 to-[#113F7C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-bold mb-4 border border-[#113F7C]/30">
                  HACKATHON CHALLENGE DESIGN
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors duration-300">
                  UOttawaHack 2026 - Nav Canada Challenge
                </h3>
                <p className="text-sm text-white mb-4 font-semibold">University of Ottawa Hackathon 2026</p>
                <p className="text-slate-400 mb-6 text-base leading-relaxed">
                  Partnered with Nav Canada to design and deliver the main hackathon challenge for UOttawaHack 2026. Crafted a real-world aviation systems problem that challenged participants to develop innovative solutions for air traffic management. Defined comprehensive technical requirements, evaluation criteria, and constraints that balanced complexity with accessibility for diverse skill levels. Provided technical mentorship and guidance to hackathon teams throughout the event, offering insights into aviation systems, distributed architectures, and industry best practices. 
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Challenge Design", "Aviation Systems", "Mentorship", "Nav Canada Partnership", "Technical Leadership"].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white border border-[#113F7C]/20 hover:bg-gradient-to-br hover:from-[#113F7C] hover:to-[#113F7C]/80 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      style={{animationDelay: `${i * 100}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#113F7C]/20 via-[#113F7C]/25 to-[#113F7C]/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#113F7C]/10 to-[#113F7C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-bold mb-4 border border-[#113F7C]/30">
                  FULL-STACK WEB APPLICATION
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors duration-300">
                  Rezify - Property Management Platform
                </h3>
                <p className="text-sm text-white mb-4 font-semibold">
                  <a href="https://rezify.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#113F7C] transition-colors duration-300 inline-flex items-center gap-2">
                    rezify.ca <ExternalLink size={14} />
                  </a>
                </p>
                <p className="text-slate-400 mb-6 text-base leading-relaxed">
                  Production-grade property management web application featuring tenant onboarding, lease management, and maintenance tracking. Designed and implemented a modern full-stack architecture with React frontend and Node.js backend, integrated with MongoDB for scalable data persistence. Deployed using industry-standard cloud infrastructure: Vercel for frontend hosting with automatic deployments, and Heroku for backend services. Led end-to-end development including requirements gathering, system design, implementation, testing, and deployment. Managed a small engineering team, coordinating sprint planning, code reviews, and architectural decisions in a fast-paced startup environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Vercel", "Heroku", "Full-Stack Development"].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white border border-[#113F7C]/20 hover:bg-gradient-to-br hover:from-[#113F7C]/80 hover:to-[#113F7C] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      style={{animationDelay: `${i * 100}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#113F7C]/10 to-[#113F7C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-bold mb-4 border border-[#113F7C]/30">
                  CYBERSECURITY
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
                  TLS Protocol Testing Framework
                </h3>
                <p className="text-slate-400 mb-6 text-base leading-relaxed">
                  Automated Java application using model-based methodologies to generate non-deterministic tests for TLS implementations. Reverse engineered OpenSSL to evaluate crypto-agility and identify design patterns for protocol resilience. Collaborated with Entrust, the Canadian National Quantum-Readiness Group, and the Canadian Forum for Digital Infrastructure Resilience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Cryptography", "OpenSSL", "Model-Based Testing", "Post-Quantum Cryptography"].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white border border-[#113F7C]/20 hover:bg-gradient-to-br hover:from-[#113F7C] hover:to-[#113F7C]/80 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      style={{animationDelay: `${i * 100}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#113F7C]/20 via-[#113F7C]/25 to-[#113F7C]/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#113F7C]/10 to-[#113F7C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-bold mb-4 border border-[#113F7C]/30">
                  EMBEDDED SYSTEMS
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors duration-300">
                  Drone-Mountable Cellular Frequency Scanner
                </h3>
                <p className="text-sm text-white mb-4 font-semibold">University of Ottawa – Capstone Project</p>
                <p className="text-slate-400 mb-6 text-base leading-relaxed">
                  Designed, implemented, and tested a drone-mountable cellular frequency scanner capable of operating in remote environments to detect and localize ping signals emitted by mobile phones. Developed the system to support search and rescue operations in areas without cellular network coverage, improving victim localization capabilities. Designed and implemented a server-side application to collect telemetry and detection data from the drone-mounted scanner and dispatch actionable information to ground-based rescue teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Arduino", "Spring Boot", "React", "Embedded Systems", "RF Detection", "Search & Rescue"].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white border border-[#113F7C]/20 hover:bg-gradient-to-br hover:from-[#113F7C]/80 hover:to-[#113F7C] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      style={{animationDelay: `${i * 100}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section id="photography" className="py-16 px-8 relative overflow-hidden z-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#113F7C]/70 to-[#113F7C]/50 rounded-2xl shadow-lg shadow-[#113F7C]/30 animate-float" style={{animationDelay: '2s'}}>
              <Camera className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
              Photography
            </span>
          </h2>

          {/* Magazine Layout with varied sizes */}
          <div className="space-y-6">
            {/* Row 1: Large featured + vertical */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox("/images/photography/_DSC2608.JPG")}>
                <img src="/images/photography/_DSC2608.JPG" alt="Photography" className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              </div>
              <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox("/images/photography/_DSC2213.JPG")}>
                <img src="/images/photography/_DSC2213.JPG" alt="Photography" className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              </div>
            </div>

            {/* Row 2: Three equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "/images/photography/_DSC2271.JPG",
                "/images/photography/_DSC2368.JPG",
                "/images/photography/_DSC2844.JPG"
              ].map((photo, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photo)}>
                  <img src={photo} alt="Photography" className="w-full h-96 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
                </div>
              ))}
            </div>

            {/* Row 3: Asymmetric layout */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-5 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox("/images/photography/_DSC2039.JPG")}>
                <img src="/images/photography/_DSC2039.JPG" alt="Photography" className="w-full h-[500px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              </div>
              <div className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox("/images/photography/DSC01439.jpeg")}>
                <img src="/images/photography/DSC01439.jpeg" alt="Photography" className="w-full h-[500px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              </div>
            </div>

            {/* Row 4: Small squares grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "/images/photography/DSC01448.jpeg",
                "/images/photography/DSC01455.jpeg",
                "/images/photography/DSC01485.jpeg",
                "/images/photography/DSC01306.jpg"
              ].map((photo, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-500 hover:scale-110 hover:z-10 hover:rotate-2 border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photo)}>
                  <img src={photo} alt="Photography" className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-125" />
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Carousel */}
          <div className="relative max-w-5xl mx-auto mt-20">
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 cursor-pointer" onClick={() => openLightbox(["/images/photography/caroussel/DSC01369.jpeg","/images/photography/caroussel/DSC01479.jpeg","/images/photography/caroussel/DSC02584.jpg","/images/photography/caroussel/DSC02593.jpg","/images/photography/caroussel/_DSC2132.JPG","/images/photography/caroussel/_DSC2339.JPG","/images/photography/caroussel/_DSC2503.JPG","/images/photography/caroussel/_DSC2511.JPG"][currentSlide])}>
              <img src={["/images/photography/caroussel/DSC01369.jpeg","/images/photography/caroussel/DSC01479.jpeg","/images/photography/caroussel/DSC02584.jpg","/images/photography/caroussel/DSC02593.jpg","/images/photography/caroussel/_DSC2132.JPG","/images/photography/caroussel/_DSC2339.JPG","/images/photography/caroussel/_DSC2503.JPG","/images/photography/caroussel/_DSC2511.JPG"][currentSlide]} alt="Slide" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 opacity-0 group-hover:opacity-100 border border-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 opacity-0 group-hover:opacity-100 border border-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="flex gap-3 mt-8 justify-center overflow-x-auto pb-4 px-4">
              {[0,1,2,3,4,5,6,7].map((idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-500 border ${currentSlide === idx ? 'ring-4 ring-[#113F7C] scale-110 shadow-2xl border-[#113F7C]/40' : 'opacity-50 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0 border-[#113F7C]/20'}`}>
                  <img src={["/images/photography/caroussel/DSC01369.jpeg","/images/photography/caroussel/DSC01479.jpeg","/images/photography/caroussel/DSC02584.jpg","/images/photography/caroussel/DSC02593.jpg","/images/photography/caroussel/_DSC2132.JPG","/images/photography/caroussel/_DSC2339.JPG","/images/photography/caroussel/_DSC2503.JPG","/images/photography/caroussel/_DSC2511.JPG"][idx]} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[#113F7C] transition-colors duration-300 z-[101]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-[95vw] max-h-[95vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Full size" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" />
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-16 px-8 relative overflow-hidden z-20">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-[#8A3428]/30">
            <div className="w-2 h-2 bg-[#8A3428] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">Available for opportunities</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          {/* <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Interested in collaborating on <span className="text-[#8A3428] font-semibold">cybersecurity</span>, <span className="text-[#8A3428]/80 font-semibold">distributed systems</span>, or <span className="text-[#8A3428]/60 font-semibold">mission-critical solutions</span>
          </p> */}

          <a
            href="mailto:hello@alexanderonofrei.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8A3428]/80 to-[#8A3428] text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#8A3428]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-[#8A3428]/40"
          >
            <Mail size={24} />
            <span>Get in Touch</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      <footer className="py-12 px-8 bg-black border-t border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2026 <span className="text-white font-semibold">Alexander Onofrei</span>. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-600 rounded-full animate-pulse"></div>
              <span className="text-slate-400 text-sm">Available for opportunities</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
