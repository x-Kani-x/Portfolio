import React, { useState } from 'react';
import { personalInfo, careerInterests } from '../../data/portfolioData';
import { Mail, GraduationCap, Phone, MapPin, Send, Github, Linkedin, Copy, Check, Sparkles, Layers, Brain, BarChart3, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

const interestIcons = {
  Layers: Layers,
  BarChart3: BarChart3,
  Brain: Brain,
  ShieldCheck: ShieldCheck,
};

export default function ContactSlide() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        access_key: "5fc02bda-05ae-421a-acb0-d19a8b1c3ffe",
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `New Portfolio Contact Message from ${formData.name}`,
        message: formData.message,
        from_name: formData.name,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.message || "Unable to send message. Please try again or email directly.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please check your connection or reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
          <Mail className="w-3.5 h-3.5" />
          <span>Slide 08 • Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Career Interests & Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Interested in discussing an internship, project collaboration, or exciting engineering challenges? I'd love to hear from you.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start text-left">
        
        {/* Left Column: Career Interests & Contact Details */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Career Interests Card */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md space-y-3 relative overflow-hidden">
            {/* Corner ambient glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Target Engineering Domains</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {careerInterests.map((interest, idx) => {
                const IconComp = interestIcons[interest.icon] || Layers;
                return (
                  <div 
                    key={idx} 
                    className="p-3 sm:p-3.5 rounded-2xl bg-brand-100/70 hover:bg-brand-200/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/70 hover:border-brand-400 dark:hover:border-brand-600 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-2 text-xs font-bold text-brand-950 dark:text-white">
                      <div className="w-6 h-6 rounded-lg bg-brand-200/80 dark:bg-brand-900 flex items-center justify-center shrink-0">
                        <IconComp className="w-3.5 h-3.5 text-brand-700 dark:text-brand-400" />
                      </div>
                      <span className="truncate">{interest.title}</span>
                    </div>
                    <p className="text-[11px] text-brand-900/70 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct Contact Channels Card */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md space-y-3">
            <h3 className="font-black text-slate-900 dark:text-white text-sm">Direct Contact Channels</h3>

            <div className="space-y-2.5">
              {/* Personal Email */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/70 shadow-sm">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-brand-200/80 dark:bg-brand-900/80 text-brand-700 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brand-800/70 dark:text-slate-500">Personal Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-brand-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 break-all transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'personal')}
                  className="p-2.5 rounded-xl text-slate-500 dark:text-brand-300 hover:text-brand-700 dark:hover:text-white hover:bg-brand-200/80 dark:hover:bg-brand-900 transition-all active:scale-90 shrink-0 ml-2"
                  title="Copy personal email"
                >
                  {copiedKey === 'personal' ? <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* College / Institutional Email */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/70 shadow-sm">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-brand-200/80 dark:bg-brand-900/80 text-brand-700 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brand-800/70 dark:text-slate-500">College / Institutional Email</div>
                    <a
                      href={`mailto:${personalInfo.collegeEmail}`}
                      className="text-xs sm:text-sm font-bold text-brand-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 break-all transition-colors"
                    >
                      {personalInfo.collegeEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.collegeEmail, 'college')}
                  className="p-2.5 rounded-xl text-slate-500 dark:text-brand-300 hover:text-brand-700 dark:hover:text-white hover:bg-brand-200/80 dark:hover:bg-brand-900 transition-all active:scale-90 shrink-0 ml-2"
                  title="Copy college email"
                >
                  {copiedKey === 'college' ? <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Phone */}
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/70 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-brand-200/80 dark:bg-brand-900/80 text-brand-700 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brand-800/70 dark:text-slate-500">Phone Number</div>
                    <div className="text-xs sm:text-sm font-bold text-brand-950 dark:text-white truncate">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/70 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-brand-200/80 dark:bg-brand-900/80 text-brand-700 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brand-800/70 dark:text-slate-500">Current Base</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons in Brand Styling */}
            <div className="pt-2 flex items-center space-x-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-950 dark:hover:bg-brand-900 text-white text-xs font-bold border border-slate-700 dark:border-brand-800 shadow-md transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-3 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-600 hover:to-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/30 hover:shadow-brand-600/50 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Connect</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Interactive Contact Form with Web3Forms Integration */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-brand-200/80 dark:border-brand-800/80 shadow-xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400" />

            <div className="mb-4 pt-1">
              <h3 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">Send a Direct Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Have an inquiry or opportunity? Drop your message below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 mx-auto flex items-center justify-center border border-brand-200 dark:border-brand-800 shadow-lg shadow-brand-600/20">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white">Message Delivered!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your message has reached my email inbox and I will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setErrorMessage(''); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-md shadow-brand-600/30 transition-all active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                {/* Web3Forms Access Key */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="5fc02bda-05ae-421a-acb0-d19a8b1c3ffe" 
                />

                {/* Honeypot Spam Protection (Invisible to humans, catches bots) */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  style={{ display: "none" }} 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-300/80 dark:border-brand-800/90 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-brand-950 dark:text-white placeholder:text-brand-800/40 dark:placeholder:text-brand-400/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-300/80 dark:border-brand-800/90 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-brand-950 dark:text-white placeholder:text-brand-800/40 dark:placeholder:text-brand-400/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Internship opportunity / Project inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-300/80 dark:border-brand-800/90 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-brand-950 dark:text-white placeholder:text-brand-800/40 dark:placeholder:text-brand-400/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Hello Kanishka, I came across your portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-brand-100/70 dark:bg-brand-950/60 border border-brand-300/80 dark:border-brand-800/90 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-brand-950 dark:text-white placeholder:text-brand-800/40 dark:placeholder:text-brand-400/50 resize-none transition-all"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center space-x-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`shimmer-button w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-600 hover:to-brand-700 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-wait' : 'active:translate-y-0 hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
