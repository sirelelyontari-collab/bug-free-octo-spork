import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="p-2 sm:p-4 min-h-[620px] h-screen">
      <div className="relative w-full h-full rounded-2xl md:rounded-[24px] overflow-hidden hero-grain">
        {/* Background Image & Overlays */}
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop"
          alt="Luxury dark sports car"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/10 to-[#0a0a0a]/95 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent z-[1] w-[55%]" />

        {/* Navigation */}
        <Navbar />

        {/* Top meta row */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.7 }}
          className="absolute top-[80px] inset-x-0 flex justify-between items-start px-6 md:px-10 z-10 pointer-events-none"
        >
          <span className="text-[11px] font-light text-white/60 tracking-[0.05em]">
            Abuja, Nigeria
          </span>
          <span className="hidden md:block text-center text-[11px] font-light text-white/60 tracking-[0.04em] leading-[1.55]">
            Premium Collection by<br />EKC Autos!
          </span>
          <span className="hidden lg:block text-right text-[11px] font-light text-white/60 tracking-[0.03em] leading-[1.65] max-w-[240px]">
            Discover the finest selection of luxury and<br />reliable vehicles tailored for Nigerian roads.
          </span>
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-0 inset-x-0 flex flex-col lg:flex-row justify-between lg:items-end gap-6 px-6 md:px-10 pb-9 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} 
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-[3px] bg-[#CC1414] rounded-[2px]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#CC1414]">Premium Dealership</span>
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.93] tracking-[-0.01em] text-[clamp(50px,8vw,98px)] text-white">
              Find Your Dream Car,<br />Rule The Road
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }} 
            className="flex flex-row items-center gap-8 lg:border-l border-white/10 lg:pl-9 lg:pb-1 shrink-0"
          >
            <Link to="/inventory" className="inline-flex items-center gap-3 text-[15.5px] font-normal text-white cursor-pointer hover:opacity-75 transition-opacity group">
              <span>Browse Inventory</span>
              <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            </Link>
            <div className="w-[1px] h-8 bg-white/10 shrink-0" />
            <Link to="/contact" className="inline-flex items-center gap-3 text-[15.5px] font-normal text-white cursor-pointer hover:opacity-75 transition-opacity group">
              <span>Get in Touch</span>
              <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
