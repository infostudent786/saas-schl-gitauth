import React from 'react';

const RESOURCES = [
  { id: 1, title: "Class 10 Math NCERT", type: "E-Book", cat: "Textbooks", link: "#" },
  { id: 2, title: "Modern Indian History", type: "PDF", cat: "Reference", link: "#" },
  { id: 3, title: "Quantum Physics Intro", type: "Video", cat: "Lectures", link: "#" },
  { id: 4, title: "Grammar Workbook", type: "PDF", cat: "English", link: "#" },
  { id: 5, title: "Civics & Politics", type: "E-Book", cat: "Social Studies", link: "#" },
  { id: 6, title: "Environmental Ethics", type: "Video", cat: "Lectures", link: "#" },
];

const Library = ({ config }) => {
  return (
    <div className="animate-fadeIn py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center lg:text-left">
          <p className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">E-Resources</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Digital <span className="text-amber-500">Library</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-500 font-medium leading-relaxed">
            Access a vast collection of text books, reference materials, and interactive video lectures from anywhere, anytime. Empowering students with the tools of the future.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RESOURCES.map(res => (
            <div key={res.id} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-400 hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:bg-amber-500 transition-colors">
                  {res.type === 'Video' ? '🎥' : '📚'}
                </div>
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">
                  {res.type}
                </span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{res.cat}</p>
              <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight">{res.title}</h3>
              <a 
                href={res.link} 
                className="inline-block px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-xl shadow-blue-900/10 active:scale-95"
                style={{ backgroundColor: config.primaryColor }}
              >
                Access Resource
              </a>
            </div>
          ))}
        </div>

        {/* Featured Resource Section */}
        <div className="mt-32 p-16 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Can't find what you're <span className="text-amber-500">looking for?</span></h2>
              <p className="text-slate-400 text-lg font-medium">Request specific e-books or research papers through our librarian portal. We update our repository every week.</p>
              <button className="px-10 py-5 bg-amber-500 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full hover:brightness-110 transition-all active:scale-95 shadow-2xl">
                Request Resource
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl mb-4">📈</span>
                <span className="text-xl font-black">5000+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">E-Books</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-8 translate-y-12">
                <span className="text-4xl mb-4">🎧</span>
                <span className="text-xl font-black">1200+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">Lectures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;