import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-mesh overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]/80"></div>
      
      <div className="container relative mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[30px] opacity-40 animate-pulse"></div>
              <img 
                src={profileImg} 
                alt={portfolioData.basicInfo.fullName} 
                className="relative w-full h-full object-cover object-[40%_15%] rounded-full border-[4px] border-slate-800 shadow-2xl z-10"
              />
            </div>
          </motion.div>
          <h2 className="text-blue-400 font-medium tracking-wider uppercase mb-4">
            {portfolioData.basicInfo.title}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">{portfolioData.basicInfo.fullName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.basicInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all font-medium text-lg w-full sm:w-auto">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full glass hover:bg-slate-800/80 text-white transition-all font-medium text-lg w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
