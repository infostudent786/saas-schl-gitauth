import React from 'react';

const Admissions = ({ config }) => {
  return (
    <div className="animate-fadeIn py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <p className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Enrolment 2025-26</p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Your Future Starts <br/> Here at {config.schoolName}
          </h1>
          <div className="w-24 h-2 bg-slate-900"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We welcome applications from students of all backgrounds who are eager to learn and grow in a supportive, challenging environment.
            </p>

            <div className="space-y-12">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest">The Process</h3>
              {[
                { s: "01", t: "Submit Inquiry", d: "Fill out the online form or visit our campus for an initial inquiry brochure." },
                { s: "02", t: "Campus Tour", d: "Schedule a guided tour to see our facilities and meet with the educators." },
                { s: "03", t: "Entrance Eval", d: "Students undergo a baseline assessment appropriate for their grade level." },
                { s: "04", t: "Interview", d: "A friendly conversation with the Principal to align educational goals." },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-4xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors">{step.s}</div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{step.t}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-2xl sticky top-32">
              <h3 className="text-2xl font-black mb-8">Admission Inquiry</h3>
              <form action={config.formActionUrl} method="POST" className="space-y-6">
                {/* Hidden field for Formspree to show school name */}
                <input type="hidden" name="_subject" value={`Admission Inquiry for ${config.schoolName}`} />

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Student Name</label>
                  <input required name="student_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parent Phone</label>
                  <input required name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Grade Interested</label>
                  <select required name="grade_interested" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="" className="bg-slate-900">Select Grade</option>
                    <option value="Pre-Primary" className="bg-slate-900">Pre-Primary</option>
                    <option value="Primary (1-5)" className="bg-slate-900">Primary (1-5)</option>
                    <option value="Middle (6-8)" className="bg-slate-900">Middle (6-8)</option>
                    <option value="Secondary (9-12)" className="bg-slate-900">Secondary (9-12)</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-full text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-900/10 hover:brightness-110 active:scale-95 transition-all"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  Send Inquiry
                </button>
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold mt-4">
                  Our team will contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;