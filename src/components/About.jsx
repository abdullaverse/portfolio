import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>{portfolioData.basicInfo.bio}</p>
              <p>
                <strong className="text-white font-semibold">Goal:</strong> {portfolioData.basicInfo.goal}
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Specializations</h3>
              <ul className="space-y-4">
                {portfolioData.basicInfo.specialization.map((spec, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-slate-200">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
