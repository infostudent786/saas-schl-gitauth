import React from 'react';

const About = ({ config }) => {
  return (
    <div className="animate-fadeIn">
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544717297-fa154daaf762?q=80&w=2070&auto=format&fit=crop" 
            className="rounded-[3rem] shadow-2xl relative z-10"
            alt="Learning"
          />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full -z-0" style={{ backgroundColor: config.secondaryColor }}></div>
        </div>
        <div className="space-y-8">
          <p className="text-amber-500 font-black text-xs uppercase tracking-widest">The Legacy</p>
          <h1 className="text-5xl font-black text-slate-900 leading-none tracking-tighter">
            Nurturing Young Minds <br/> Since 1998.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {config.schoolName} was established by visionaries who believed that true education should empower children to think for themselves while respecting their heritage. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Our Mission</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">To provide a stimulating environment where children can reach their potential as ethical global citizens.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Our Vision</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">To be a pioneer in educational innovation, setting benchmarks for quality schooling in India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
          <h2 className="text-3xl font-black uppercase tracking-widest">Core Philosophies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { i: "💡", t: "Integrity", d: "Upholding honesty in all facets of life." },
              { i: "🤝", t: "Collaboration", d: "Learning better by working together." },
              { i: "🚀", t: "Innovation", d: "Adapting to a fast-changing world." },
            ].map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl mb-6">{p.i}</div>
                <h4 className="text-lg font-black uppercase tracking-widest">{p.t}</h4>
                <p className="text-slate-400 text-sm font-medium">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;