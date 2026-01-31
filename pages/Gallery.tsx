import React from 'react';

const Gallery = ({ config }) => {
  const images = Array.from({ length: 9 }).map((_, i) => ({
    url: `https://picsum.photos/seed/school${i + 20}/800/600`,
    title: `Event ${i + 1}`,
    cat: i % 2 === 0 ? "Campus Life" : "Sports Meet"
  }));

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Campus Gallery</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">A glimpse into life at {config.schoolName}</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all break-inside-avoid">
              <img src={img.url} alt={img.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">{img.cat}</span>
                <h4 className="text-white font-black text-lg">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;