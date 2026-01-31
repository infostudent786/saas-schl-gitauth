import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ config }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={config.heroImageUrl || "https://images.unsplash.com/photo-1523050335392-9bc5ad06fe33?q=80&w=2070&auto=format&fit=crop"} 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em]">
              Established 1998 • Excellence in Education
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Inspiring the <br/>
              <span style={{ color: config.secondaryColor }}>Leaders of Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-lg">
              Providing a holistic learning environment where academic excellence meets character building.
            </p>
            <div className="flex pt-4">
              <Link 
                to="/about" 
                className="px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest text-white shadow-2xl transition-all hover:brightness-110 active:scale-95 text-center"
                style={{ backgroundColor: config.primaryColor }}
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border-b-8 border-amber-500 grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {[
            { n: "25+", l: "Years Legacy" },
            { n: "100%", l: "CBSE Result" },
            { n: "2000+", l: "Happy Students" },
            { n: "15:1", l: "Student Ratio" },
          ].map((s, i) => (
            <div key={i} className="p-10 text-center border-r border-slate-50 last:border-0">
              <div className="text-4xl font-black text-slate-900 mb-1">{s.n}</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all"></div>
            <img 
              src={config.principalImageUrl || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"} 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl" 
              alt="Principal" 
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border-l-8 border-amber-500 shadow-xl">
              <p className="font-black text-xl text-slate-900">Dr. Sunita Kapoor</p>
              <p className="text-xs text-amber-600 font-black uppercase tracking-widest">Principal & Director</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="w-12 h-1 bg-amber-500"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A Message from <br/> <span className="text-amber-500">the Principal</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
              "At {config.schoolName}, we believe education is not merely the acquisition of facts, but the training of the mind to think."
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Welcome to a community dedicated to nurturing young minds. Our focus extends beyond textbooks to encompass emotional intelligence, creativity, and physical well-being. We prepare our students to be global citizens who remain deeply rooted in Indian ethics.
            </p>
            <div className="pt-6">
              <Link to="/about" className="group flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-xs">
                Read Full Message
                <span className="w-8 h-[2px] bg-amber-500 group-hover:w-12 transition-all"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Why Choose Us?</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">The Excellence Advantage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Smart Classrooms", d: "Equipped with the latest interactive tech for immersive learning experiences.", i: "🖥️" },
              { t: "Olympic Sports", d: "State-of-the-art facilities for cricket, swimming, and indoor sports coaching.", i: "🏆" },
              { t: "Global Curriculum", d: "A balanced CBSE framework with international pedagogical best practices.", i: "🌍" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.i}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;