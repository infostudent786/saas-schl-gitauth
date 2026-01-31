import React from 'react';

const Contact = ({ config }) => {
  return (
    <div className="animate-fadeIn py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">Contact Us</h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              We're here to answer any questions you may have about our curriculum, admissions, or campus life.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl">📍</div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Our Address</h4>
                <p className="text-slate-500 font-medium">{config.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl">📞</div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Call Us</h4>
                <p className="text-slate-500 font-medium">{config.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl">✉️</div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Email Us</h4>
                <p className="text-slate-500 font-medium">{config.contact.email}</p>
              </div>
            </div>
          </div>

          <div className="h-[300px] rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner grayscale">
             <iframe 
                src={config.contact.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
              ></iframe>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl">
          <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Send a Message</h3>
          <form action={config.formActionUrl} method="POST" className="space-y-6">
            {/* Hidden field for Formspree to show the school name in the email subject */}
            <input type="hidden" name="_subject" value={`New Contact Inquiry from ${config.schoolName}`} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                <input required name="first_name" type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</label>
                <input required name="email" type="email" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subject</label>
              <input required name="subject" type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
              <textarea required name="message" rows={6} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-5 rounded-full text-white font-black uppercase tracking-widest text-sm shadow-2xl transition-all active:scale-95"
              style={{ backgroundColor: config.primaryColor }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;