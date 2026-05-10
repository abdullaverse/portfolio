import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0f1c] py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-400 font-medium text-center md:text-left">
          &copy; {currentYear} {portfolioData.basicInfo.fullName}. All rights reserved.
        </div>
        <div className="text-slate-500 text-sm">
          Designed with React, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
}
