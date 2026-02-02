import React, { useEffect, useState } from "react";

type Resource = {
  title: string;
  type: "PDF" | "E-Book" | "Video";
  cat: string;
  link: string;
};

const Library = ({ config }: { config: any }) => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const loadResources = async () => {
      const modules = import.meta.glob("/content/library/*.json", { as: "json" });
      const data: Resource[] = [];
      for (const path in modules) {
        const res = await modules[path]();
        data.push(...res);
      }
      setResources(data);
    };
    loadResources();
  }, []);

  return (
    <div className="animate-fadeIn py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center lg:text-left">
          <p className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">E-Resources</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Digital <span className="text-amber-500">Library</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((res, idx) => (
            <div key={idx} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-400 hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:bg-amber-500 transition-colors">
                  {res.type === "Video" ? "🎥" : "📚"}
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
      </div>
    </div>
  );
};

export default Library;
