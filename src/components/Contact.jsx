import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiCopy, 
  FiCheck, 
  FiAlertCircle,
  FiCheckCircle
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import SectionTitle from './UI/SectionTitle';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0E1422]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Work Together"
          subtitle="Have a project, opportunity, or idea? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Get In Touch
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                I am actively seeking software engineering roles, full-stack development projects, and Odoo ERP customization opportunities. Feel free to contact me via email, phone, or the contact form.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3.5">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-between group hover:border-indigo-500/30 transition-colors shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Email Address</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <FiCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <FiCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-between group hover:border-indigo-500/30 transition-colors shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Direct Phone</div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors truncate block font-mono"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <FiCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <FiCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links and CV Download */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Connect &amp; Social Links
              </div>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/[0.2] hover:bg-[#1A253C] transition-all shadow-sm"
                  title="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#38BDF8] hover:border-sky-500/30 hover:bg-[#1A253C] transition-all shadow-sm"
                  title="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>

                {/* Telegram */}
                <a
                  href={personalInfo.socials.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#131C2E] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#38BDF8] hover:border-sky-500/30 hover:bg-[#1A253C] transition-all shadow-sm"
                  title="Telegram"
                >
                  <FaTelegramPlane className="w-5 h-5" />
                </a>

                {/* Download CV */}
                <a
                  href={personalInfo.cvUrl}
                  download="Dandi_Takilu_CV.pdf"
                  className="ml-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-sm border border-indigo-400/25"
                  title="Download Official CV"
                >
                  <FiDownload className="w-4 h-4 text-indigo-200" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131C2E] border border-white/[0.08] shadow-xl">
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-[#0D261C] border border-emerald-500/30 text-emerald-200 flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold block">Message sent successfully!</span>
                    Thank you for reaching out. Dandi will review your message and reply promptly.
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-[#281318] border border-rose-500/30 text-rose-200 flex items-start gap-3">
                  <FiAlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold block">Submission failed.</span>
                    Please check the fields or contact directly via <a href={`mailto:${personalInfo.email}`} className="underline font-medium">{personalInfo.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0E1524] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/[0.08] focus:border-indigo-400 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <FiAlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0E1524] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/[0.08] focus:border-indigo-400 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <FiAlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0E1524] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-white/[0.08] focus:border-indigo-400 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <FiAlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role, requirements, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0E1524] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-white/[0.08] focus:border-indigo-400 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <FiAlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 shadow-md shadow-indigo-900/30 border border-indigo-400/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4 text-indigo-200" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
