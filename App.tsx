
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Page Components
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Academics from './pages/Academics.tsx';
import Admissions from './pages/Admissions.tsx';
import Notices from './pages/Notices.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import Exams from './pages/Exams.tsx';
import Library from './pages/Library.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fix: Use React.FC to properly handle standard React props like 'key' in list rendering
const NavLink: React.FC<{ item: any; isActive: boolean }> = ({ item, isActive }) => {
  return (
    <Link 
      to={item.path} 
      className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${
        isActive 
        ? 'text-white border-transparent shadow-lg shadow-blue-900/20 active:scale-95' 
        : 'text-slate-600 border-transparent hover:bg-slate-100 hover:text-slate-900'
      }`}
      style={isActive ? { backgroundColor: 'var(--primary)' } : {}}
    >
      {item.label}
    </Link>
  );
};

const AppContent = ({ siteConfig }: { siteConfig: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (siteConfig) {
      document.documentElement.style.setProperty('--primary', siteConfig.primaryColor);
      document.documentElement.style.setProperty('--secondary', siteConfig.secondaryColor);
    }
  }, [siteConfig]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Scrolling News Bar */}
      <div className="bg-slate-900 text-white py-2 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-black mr-4 shrink-0 animate-pulse">LATEST</span>
          <div className="text-xs font-bold whitespace-nowrap animate-scroll">
            Admission Open for 2025-26 Academic Year • 100% CBSE Result Excellence • Digital Library Now Open for All Students •
          </div>
        </div>
      </div>

      {/* Top Contact Bar */}
      <div className="hidden md:block bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-800">
          <div className="flex items-center gap-8">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <span className="text-sm">📞</span> {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <span className="text-sm">✉️</span> {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a key={name} href={url as string} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center gap-4 group shrink-0">
              <img 
                src={siteConfig.logoUrl} 
                alt={`${siteConfig.schoolName} Logo`} 
                className="h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="border-l border-slate-200 pl-4 hidden sm:block">
                <span className="block text-lg font-black leading-tight uppercase tracking-tight text-slate-900">
                  {siteConfig.schoolName}
                </span>
                <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1 p-1.5 bg-slate-50 rounded-full border border-slate-100">
              {siteConfig.navigation.map((item: any) => (
                <NavLink 
                  key={item.path} 
                  item={item} 
                  isActive={location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))} 
                />
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-3 rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute w-full bg-white border-b shadow-2xl animate-slideDown overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="p-6 space-y-2">
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-100">
                <a href={`tel:${siteConfig.contact.phone}`} className="flex flex-col items-center gap-1 p-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase text-slate-500">
                  <span className="text-xl">📞</span>
                  <span>Call</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex flex-col items-center gap-1 p-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase text-slate-500">
                  <span className="text-xl">✉️</span>
                  <span>Mail</span>
                </a>
              </div>
              <div className="space-y-3">
                {siteConfig.navigation.map((item: any) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 text-sm font-black rounded-full transition-all text-center uppercase tracking-widest border ${
                      location.pathname === item.path 
                      ? 'text-white border-transparent shadow-lg' 
                      : 'text-slate-800 border-slate-100 active:bg-slate-50'
                    }`}
                    style={location.pathname === item.path ? { backgroundColor: 'var(--primary)' } : {}}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home config={siteConfig} />} />
          <Route path="/about" element={<About config={siteConfig} />} />
          <Route path="/academics" element={<Academics config={siteConfig} />} />
          <Route path="/admissions" element={<Admissions config={siteConfig} />} />
          <Route path="/notices" element={<Notices config={siteConfig} />} />
          <Route path="/exams" element={<Exams config={siteConfig} />} />
          <Route path="/library" element={<Library config={siteConfig} />} />
          <Route path="/gallery" element={<Gallery config={siteConfig} />} />
          <Route path="/contact" element={<Contact config={siteConfig} />} />
        </Routes>
      </main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter" style={{ color: siteConfig.secondaryColor }}>
              {siteConfig.schoolName}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Established with a vision to provide world-class education that integrates global knowledge with traditional values.
            </p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a key={name} href={url as string} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <span className="sr-only">{name}</span>
                  <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item: any) => (
                <li key={item.path}><Link to={item.path} className="text-sm text-slate-400 hover:text-white transition-colors font-bold uppercase tracking-widest">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500 mb-8">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-widest">
              <li><Link to="/library" className="hover:text-white">Digital Library</Link></li>
              <li><Link to="/exams" className="hover:text-white">Exam Center</Link></li>
              <li><Link to="/notices" className="hover:text-white">Notice Board</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500 mb-8">Contact Info</h4>
            <div className="space-y-4 text-sm text-slate-400 font-medium">
              <p className="flex items-start gap-4">
                 <span className="w-5 h-5 bg-slate-800 rounded mt-1"></span>
                 {siteConfig.contact.address}
              </p>
              <p className="flex items-center gap-4">
                 <span className="w-5 h-5 bg-slate-800 rounded"></span>
                 {siteConfig.contact.phone}
              </p>
              <p className="flex items-center gap-4">
                 <span className="w-5 h-5 bg-slate-800 rounded"></span>
                 {siteConfig.contact.email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            © {new Date().getFullYear()} {siteConfig.schoolName} • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

const App = ({ config }: { config: any }) => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent siteConfig={config} />
    </Router>
  );
};

export default App;
