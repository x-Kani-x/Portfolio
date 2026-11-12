import React, { useState } from 'react';
import { certificationsList } from '../../data/portfolioData';
import { Award, Database, Cloud, Bot, Sparkles, Server, Terminal, LineChart, CheckCircle, ExternalLink } from 'lucide-react';

const certIcons = {
  Database: Database,
  Cloud: Cloud,
  Bot: Bot,
  Sparkles: Sparkles,
  Server: Server,
  Terminal: Terminal,
  LineChart: LineChart,
};

export default function CertificationsSlide() {
  const [filter, setFilter] = useState('All');
  const issuers = ['All', 'Oracle University', 'Google Cloud', 'DataCamp', 'Cisco Networking Academy', 'WorldQuant University'];

  const filtered = filter === 'All'
    ? certificationsList
    : certificationsList.filter(c => c.issuer === filter);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 text-left">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>Slide 06 • Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Cloud Badges ({certificationsList.length})
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Verified technical credentials and skill badges spanning Cloud AI, Database Architecture, Generative AI, and Data Science.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-0">
          {issuers.map((issuer, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(issuer)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === issuer
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {issuer.replace(' Networking Academy', '').replace(' University', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-h-[58vh] overflow-y-auto pr-1 text-left">
        {filtered.map((cert, idx) => {
          const IconComp = certIcons[cert.icon] || Award;

          return (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-brand-500/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <div className="mt-2 text-xs font-semibold text-slate-700">
                  {cert.issuer}
                </div>

                <div className="text-[11px] text-slate-400 mt-1">
                  Issued: {cert.date}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-500">
                  {cert.category}
                </span>
                <span className="inline-flex items-center text-brand-600 font-semibold text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  Verified
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
