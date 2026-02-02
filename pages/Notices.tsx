import React, { useState, useEffect, useMemo } from "react";
import matter from "gray-matter";

type Notice = {
  id: number;
  title: string;
  date: string;
  cat: "Academic" | "Exam" | "Event" | "Admin";
  body: string;
  pdf?: string;
};

const CATEGORIES = ["All", "Academic", "Exam", "Event", "Admin"];

const Notices = ({ config }: { config: any }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [notices, setNotices] = useState<Notice[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadNotices = async () => {
      const files = import.meta.glob("/content/notices/*.md", { as: "raw" });
      const data: Notice[] = [];

      let idCounter = 1;
      for (const path in files) {
        const raw = await files[path]();
        const { data: fm } = matter(raw);
        data.push({ id: idCounter++, ...fm } as Notice);
      }

      // sort by date descending
      data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setNotices(data);
    };

    loadNotices();
  }, []);

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchCat = activeTab === "All" || n.cat === activeTab;
      const matchText =
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.body.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchText;
    });
  }, [activeTab, query, notices]);

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Notice Board
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Stay updated with official announcements
          </p>
        </header>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveTab(c)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                  activeTab === c
                    ? "border-transparent text-white"
                    : "border-slate-200 text-slate-500 hover:border-amber-400"
                }`}
                style={activeTab === c ? { backgroundColor: config.primaryColor } : {}}
              >
                {c}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search notices..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-64 px-5 py-3 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2"
            style={{ focusRingColor: config.primaryColor }}
          />
        </div>

        {/* Notices */}
        <div className="space-y-6">
          {filtered.length === 0 && (
            <div className="text-center text-slate-500 font-semibold py-20">
              No notices found.
            </div>
          )}

          {filtered.map((n) => {
            const d = new Date(n.date);
            return (
              <div
                key={n.id}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 text-center bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[100px]">
                  <div className="text-2xl font-black text-slate-900">{d.getDate()}</div>
                  <div className="text-[10px] font-black uppercase text-amber-600 tracking-widest">
                    {d.toLocaleString("default", { month: "short" })}
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest">
                    {n.cat}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{n.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{n.body}</p>
                  {n.pdf && (
                    <a
                      href={n.pdf}
                      target="_blank"
                      className="inline-block text-[10px] font-black text-amber-600 uppercase tracking-widest hover:underline pt-2"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notices;
