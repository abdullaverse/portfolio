import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0f1c]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="h-[1px] bg-slate-700 flex-grow"></div>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {portfolioData.education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-blue-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-white">{item.degree}</h4>
                      <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">{item.year}</span>
                    </div>
                    <div className="text-slate-300 font-medium mb-2">{item.school}</div>
                    <div className="text-slate-400 text-sm">{item.score}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements List */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold">Achievements</h2>
              <div className="h-[1px] bg-slate-700 flex-grow"></div>
            </div>
            
            <div className="space-y-4">
              {portfolioData.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 flex gap-4 items-start"
                >
                  <div className="mt-1 text-yellow-400 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {typeof achievement === 'string' ? (
                      achievement
                    ) : (
                      achievement.link ? (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-blue-400 transition-colors cursor-pointer inline-flex items-center gap-1 group/link"
                        >
                          {achievement.text}
                          <svg className="w-4 h-4 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        achievement.text
                      )
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
