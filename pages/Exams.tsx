import React, { useEffect, useState } from "react";
import matter from "gray-matter";

type Result = {
  term: string;
  grade: string;
  session: string;
  status: "Published" | "Archive" | "Upcoming";
  link?: string;
};

type Schedule = {
  title: string;
  grades: string;
  startDate: string;
  type: string;
  file?: string;
};

const Exams = ({ config }: any) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const loadResults = async () => {
      const files = import.meta.glob("/content/results/*.md", { as: "raw" });
      const data: Result[] = [];

      for (const path in files) {
        const raw = await files[path]();
        const { data: fm } = matter(raw);
        data.push(fm as Result);
      }

      setResults(data);
    };

    const loadSchedules = async () => {
      const files = import.meta.glob("/content/datesheets/*.md", { as: "raw" });
      const data: Schedule[] = [];

      for (const path in files) {
        const raw = await files[path]();
        const { data: fm } = matter(raw);
        data.push(fm as Schedule);
      }

      setSchedules(data);
    };

    loadResults();
    loadSchedules();
  }, []);

  const filteredResults = results.filter(
    (r) =>
      r.term?.toLowerCase().includes(search.toLowerCase()) ||
      r.grade?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-20 text-center lg:text-left">
          <p className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
            Assessment Portal
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Exams & <br />
            <span className="text-amber-500">Academic Results</span>
          </h1>
          <div className="w-24 h-2 bg-slate-900 mx-auto lg:mx-0"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* Results Table */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Published Results
                  </h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Session 2024–25
                  </p>
                </div>

                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Search by Class or Exam..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      <th className="pb-6 px-4">Class / Grade</th>
                      <th className="pb-6 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredResults.map((res, i) => (
                      <tr key={i} className="group hover:bg-slate-50">
                        <td className="py-6 px-4">
                          <span className="block font-black text-slate-900">
                            {res.term}
                          </span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            {res.session}
                          </span>
                        </td>

                        <td className="py-6 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                              res.status === "Published"
                                ? "bg-green-100 text-green-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {res.grade}
                          </span>
                        </td>

                        <td className="py-6 px-4 text-center">
                          {res.status === "Published" && res.link ? (
                            <a
                              href={res.link}
                              target="_blank"
                              className="inline-block px-8 py-3 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl active:scale-95"
                              style={{ backgroundColor: config?.primaryColor }}
                            >
                              Get Marksheet
                            </a>
                          ) : (
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">
                              Awaiting Upload
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-8">
                Exam Protocol &{" "}
                <span className="text-amber-500">Instructions</span>
              </h3>
              <p className="text-sm text-slate-400">
                All students must follow school examination guidelines strictly.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Date Sheets
            </h3>

            {schedules.map((sch, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                    📅
                  </div>
                  <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    {sch.type}
                  </span>
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-1">
                  {sch.title}
                </h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Applicable to: {sch.grades}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      Commences On
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      {sch.startDate}
                    </p>
                  </div>

                  {sch.file && (
                    <a
                      href={sch.file}
                      target="_blank"
                      className="p-3 bg-slate-900 text-white rounded-xl hover:bg-amber-500 active:scale-95"
                    >
                      📥
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Admin CTA */}
            <div className="p-8 bg-amber-500 rounded-3xl">
              <h4 className="text-lg font-black mb-2">Admin Quick-Action</h4>
              <p className="text-xs font-bold mb-6">
                Upload results instantly via Admin CMS panel.
              </p>
              <a
                href="/admin"
                className="block w-full text-center py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full"
              >
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
