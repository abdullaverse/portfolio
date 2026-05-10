import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillCategory = ({ title, skills }) => (
  <div className="glass-card p-6">
    <h3 className="text-xl font-bold mb-4 text-white border-b border-slate-700 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const categories = [
    { title: "Core Areas", data: portfolioData.skills.coreAreas },
    { title: "Languages", data: portfolioData.skills.languages },
    { title: "Frontend", data: portfolioData.skills.frontend },
    { title: "Backend", data: portfolioData.skills.backend },
    { title: "Databases", data: portfolioData.skills.databases },
    { title: "AI & ML", data: portfolioData.skills.aiMl },
    { title: "Tools & Platforms", data: portfolioData.skills.tools }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-[#0a0f1c]">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <SkillCategory title={cat.title} skills={cat.data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
