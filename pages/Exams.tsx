import React, { useState } from 'react';

const RESULTS = [
  { id: 1, term: "Half Yearly Examination", grade: "Grade X", session: "2024-25", status: "Published", link: "#" },
  { id: 2, term: "First Unit Assessment", grade: "Primary (1-5)", session: "2024-25", status: "Published", link: "#" },
  { id: 3, term: "Annual Finals", grade: "Grade XII", session: "2023-24", status: "Archive", link: "#" },
  { id: 4, term: "Mock Boards", grade: "Grade X & XII", session: "2024-25", status: "Upcoming", link: "#" },
];

const SCHEDULES = [
  { id: 1, title: "Final Term Date Sheet", grades: "VI - XII", startDate: "March 10, 2025", type: "Main" },
  { id: 2, title: "Practical Exams Schedule", grades: "IX - XII", startDate: "Feb 15, 2025", type: "Practical" },
];

const Exams = ({ config }) => {
  const [search, setSearch] = useState('');

  const filteredResults = RESULTS.filter(r => 
    r.grade.toLowerCase().includes(search.toLowerCase()) || 
    r.term.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center lg:text-left">
          <p className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Assessment Portal</p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Exams & <br/> <span className="text-amber-500">Academic Results</span>
          </h1>
          <div className="w-24 h-2 bg-slate-900 mx-auto lg:mx-0"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Search & Filter */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Published Results</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Session 2024-25</p>
                </div>
                <div className="relative w-full md:w-80">
                  <input 
                    type="text" 
                    placeholder="Search by Class or Exam..." 
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="absolute left-4 top-3.5 text-lg">🔍</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <th className="pb-6 px-4">Examination</th>
                      <th className="pb-6 px-4">Class/Grade</th>
                      <th className="pb-6 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredResults.map(res => (
                      <tr key={res.id} className="group hover:bg-slate-50 transition-colors">
                        <td className="py-6 px-4">
                          <span className="block font-black text-slate-900">{res.term}</span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{res.session}</span>
                        </td>
                        <td className="py-6 px-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            res.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {res.grade}
                          </span>
                        </td>
                        <td className="py-6 px-4 text-center">
                          {res.status === 'Published' ? (
                            <a 
                              href={res.link} 
                              className="inline-block px-8 py-3 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-blue-900/10 active:scale-95 whitespace-nowrap"
                              style={{ backgroundColor: config.primaryColor }}
                            >
                              Get Marksheet
                            </a>
                          ) : (
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Awaiting Upload</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* General Instructions */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-3xl font-black mb-8 relative z-10">Exam Protocol & <span className="text-amber-500">Instructions</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">Pre-Examination</h4>
                    <ul className="space-y-3 text-sm text-slate-400 font-medium">
                      <li className="flex gap-3"><span className="text-amber-500">01.</span> Collect Admit Card from Class Teacher 3 days prior.</li>
                      <li className="flex gap-3"><span className="text-amber-500">02.</span> Check your allocated room number on the board.</li>
                      <li className="flex gap-3"><span className="text-amber-500">03.</span> Reporting time is strictly 8:15 AM.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">During Examination</h4>
                    <ul className="space-y-3 text-sm text-slate-400 font-medium">
                      <li className="flex gap-3"><span className="text-amber-500">04.</span> Only transparent water bottles are allowed.</li>
                      <li className="flex gap-3"><span className="text-amber-500">05.</span> Mobile phones/smartwatches are strictly prohibited.</li>
                      <li className="flex gap-3"><span className="text-amber-500">06.</span> Standard stationery must be carried individually.</li>
                    </ul>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Date Sheets</h3>
            {SCHEDULES.map(sch => (
              <div key={sch.id} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">📅</div>
                  <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-widest">{sch.type}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-1">{sch.title}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Applicable to: {sch.grades}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Commences On</p>
                    <p className="text-sm font-black text-slate-900">{sch.startDate}</p>
                  </div>
                  <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-amber-500 transition-colors active:scale-95">
                    📥
                  </button>
                </div>
              </div>
            ))}

            {/* Quick Result Upload Info for Admins */}
            <div className="p-8 bg-amber-500 rounded-3xl text-slate-900">
              <h4 className="text-lg font-black mb-2 tracking-tight">Admin Quick-Action</h4>
              <p className="text-xs font-bold leading-relaxed mb-6 opacity-80">Schools can upload new results and instructions instantly via the Admin CMS panel.</p>
              <a href="/admin" className="block w-full text-center py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:brightness-110 transition-all active:scale-95">
                Login to CMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;