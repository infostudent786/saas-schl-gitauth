import React, { useState } from 'react';

const NOTICES = [
  { id: 1, date: "2024-10-25", title: "Winter Vacation Schedule 2024", cat: "Academic", body: "The school will remain closed for winter break from Dec 24th to Jan 5th." },
  { id: 2, date: "2024-10-20", title: "Class X Board Exam Pre-Boards", cat: "Exam", body: "The datesheet for first pre-board examinations for Class X and XII has been released." },
  { id: 3, date: "2024-10-15", title: "Annual Athletic Meet 2024", cat: "Event", body: "All students are encouraged to participate in the upcoming sports meet on Nov 10th." },
  { id: 4, date: "2024-10-01", title: "New Transport Routes Effective", cat: "Admin", body: "Revised bus routes for Sector 45 and nearby areas are now available in the office." },
];

const Notices = ({ config }) => {
  const [activeTab, setActiveTab] = useState('All');
  const cats = ['All', 'Academic', 'Exam', 'Event', 'Admin'];

  const filtered = activeTab === 'All' ? NOTICES : NOTICES.filter(n => n.cat === activeTab);

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Notice Board</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Stay updated with official announcements</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map(c => (
            <button 
              key={c}
              onClick={() => setActiveTab(c)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                activeTab === c 
                ? 'border-transparent text-white' 
                : 'border-slate-200 text-slate-500 hover:border-amber-400'
              }`}
              style={activeTab === c ? { backgroundColor: config.primaryColor } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-6">
          {filtered.map(n => (
            <div key={n.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 text-center bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[100px]">
                <div className="text-2xl font-black text-slate-900">{n.date.split('-')[2]}</div>
                <div className="text-[10px] font-black uppercase text-amber-600 tracking-widest">
                  {new Date(n.date).toLocaleString('default', { month: 'short' })}
                </div>
              </div>
              <div className="space-y-3">
                <span className="inline-block px-2 py-0.5 rounded-md bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest">
                  {n.cat}
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">{n.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{n.body}</p>
                <div className="pt-2">
                  <button className="text-[10px] font-black text-amber-600 uppercase tracking-widest hover:underline">Download PDF Attachment</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;