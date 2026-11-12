import React, { useState } from 'react';
import { personalInfo, careerInterests } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, Sparkles, Layers, Brain, BarChart3, ShieldCheck } from 'lucide-react';

const interestIcons = {
  Layers: Layers,
  BarChart3: BarChart3,
  Brain: Brain,
  ShieldCheck: ShieldCheck,
};

export default function ContactSlide() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    // In production, integrate EmailJS, Formspree or mailto
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
          <Mail className="w-3.5 h-3.5" />
          <span>Slide 08 • Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Career Interests & Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
          Interested in discussing an internship, project collaboration, or exciting engineering challenges? I'd love to hear from you.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
        
        {/* Left Column: Career Interests & Contact Details */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Career Interests Card */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Target Engineering Domains</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {careerInterests.map((interest, idx) => {
                const IconComp = interestIcons[interest.icon] || Layers;
                return (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors">
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                      <IconComp className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{interest.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct Contact Channels Card */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Direct Contact Channels</h3>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 break-all">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-200 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-400">Phone Number</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-400">Current Base</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center space-x-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Connect</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
            
            <div className="mb-4">
              <h3 className="font-bold text-slate-900 text-base">Send a Direct Message</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Have an inquiry or opportunity? Drop your message below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will get back to your email at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Internship opportunity / Project inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Kanishka, I came across your portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/25 hover:shadow-brand-600/40 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
