import React from 'react';

const Academics = ({ config }) => {
  return (
    <div className="animate-fadeIn py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="max-w-3xl mb-24">
          <p className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4">Academic Framework</p>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">Curriculum that <br/> Ignites Curiosity.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Our curriculum is a blend of academic rigor and practical application. We follow the national standards while integrating global best practices to ensure our students are ready for the world.
          </p>
        </header>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="p-12 bg-slate-900 rounded-[3rem] text-white">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight" style={{ color: config.secondaryColor }}>Pedagogical Approach</h3>
            <ul className="space-y-4 font-medium text-slate-400">
              <li className="flex gap-4"><span className="text-amber-500">✔</span> Inquiry-Based Learning to foster critical thinking.</li>
              <li className="flex gap-4"><span className="text-amber-500">✔</span> Collaborative Projects for social skill development.</li>
              <li className="flex gap-4"><span className="text-amber-500">✔</span> Digital Integration in every classroom.</li>
              <li className="flex gap-4"><span className="text-amber-500">✔</span> Holistic Assessment focusing on continuous progress.</li>
            </ul>
          </div>
          <div className="p-12 bg-amber-50 rounded-[3rem] border border-amber-100">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-slate-900">Life Skills Integration</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Beyond textbooks, we focus on Emotional Intelligence, Financial Literacy, and Environmental Ethics. Our weekly "Future-Ready" sessions prepare students for real-world challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { t: "Pre-Primary Wing", d: "Joyful learning through play, music, and social interaction.", l: "Nursery - KG" },
            { t: "Primary Section", d: "Building strong foundations in Literacy, Numeracy, and Science.", l: "Grades 1-5" },
            { t: "Middle School", d: "Exploring complex concepts through experiments and field work.", l: "Grades 6-8" },
            { t: "Secondary Level", d: "Intensive academic training with focus on career orientation.", l: "Grades 9-10" },
            { t: "Senior Secondary", d: "Specialized focus on professional streams with lab practice.", l: "Grades 11-12" },
            { t: "Beyond Classrooms", d: "Art, Robotics, Swimming, and Competitive Sports for all.", l: "K-12 Electives" },
          ].map((item, idx) => (
            <div key={idx} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs mb-8 group-hover:bg-amber-500 transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{item.t}</h3>
              <div className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-4">{item.l}</div>
              <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;