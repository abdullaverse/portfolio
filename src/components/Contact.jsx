import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // TODO: Replace these with your actual EmailJS credentials
      // 1. Create an account at https://www.emailjs.com/
      // 2. Add a new Email Service and get the SERVICE_ID
      // 3. Create an Email Template and get the TEMPLATE_ID
      //    (Ensure your template variables match: {{from_name}}, {{from_email}}, {{subject}}, {{message}})
      // 4. Get your PUBLIC_KEY from the Account/API keys section
      
      const SERVICE_ID = 'service_l7z5xw6'; 
      const TEMPLATE_ID = 'template_ukifmig';
      const PUBLIC_KEY = 'LSXuDJyuKIo3fqd-V';

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      
      toast.success('Message sent successfully! I will get back to you soon.', {
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid #3b82f6',
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#fff',
        },
      });
      
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error(error.message || 'Failed to send message. Please try again later.', {
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid #ef4444',
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      {/* Decorative gradient blur and floating particles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[10%] w-4 h-4 bg-blue-400 rounded-full blur-[2px]"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[20%] w-6 h-6 bg-purple-400 rounded-full blur-[2px]"
      ></motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Send a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Message</span></h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-700/50 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Fill out the form and I will get back to you within 24 hours. Let's build something amazing together.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-300">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email Me</p>
                    <p className="text-slate-200 group-hover/item:text-blue-400 transition-colors break-all">{portfolioData.contact.email}</p>
                  </div>
                </a>

                <a href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700 group-hover/item:border-purple-500/50 group-hover/item:bg-purple-500/10 transition-all duration-300">
                    <FaPhoneAlt className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Call Me</p>
                    <p className="text-slate-200 group-hover/item:text-purple-400 transition-colors">{portfolioData.contact.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-wider">Follow Me</p>
                <div className="flex gap-4">
                  <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 border border-slate-700">
                    <FaGithub size={20} />
                  </a>
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0a66c2] hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 border border-slate-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-xl">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative group">
                    <label htmlFor="from_name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="from_name"
                        name="from_name" 
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-slate-900/50 border ${errors.from_name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.from_name ? 'focus:ring-red-500' : 'focus:ring-blue-500'} transition-all`}
                      />
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500 -z-10"></div>
                    </div>
                    {errors.from_name && <p className="text-red-400 text-xs ml-1">{errors.from_name}</p>}
                  </div>

                  <div className="space-y-2 relative group">
                    <label htmlFor="from_email" className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="from_email"
                        name="from_email" 
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-slate-900/50 border ${errors.from_email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.from_email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} transition-all`}
                      />
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500 -z-10"></div>
                    </div>
                    {errors.from_email && <p className="text-red-400 text-xs ml-1">{errors.from_email}</p>}
                  </div>
                </div>

                <div className="space-y-2 relative group">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className={`w-full bg-slate-900/50 border ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-purple-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-purple-500'} transition-all`}
                    />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500 -z-10"></div>
                  </div>
                  {errors.subject && <p className="text-red-400 text-xs ml-1">{errors.subject}</p>}
                </div>

                <div className="space-y-2 relative group">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-500'} transition-all resize-none`}
                    ></textarea>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500 -z-10"></div>
                  </div>
                  {errors.message && <p className="text-red-400 text-xs ml-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-xl bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-6 py-4 flex items-center justify-center gap-3 text-white font-medium text-lg">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-xl" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                  {/* Glowing edge effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 blur opacity-0 group-hover:opacity-30 transition duration-300 -z-10 rounded-xl"></div>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
