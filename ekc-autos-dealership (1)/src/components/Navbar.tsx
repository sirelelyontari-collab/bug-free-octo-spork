import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.1, duration: 0.7 }}
        className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-8 pt-5 w-full"
      >
        <Link to="/" className="font-display font-semibold text-[20px] tracking-[0.06em] uppercase cursor-pointer">
          EKC AUTOS
        </Link>

        <div 
          onClick={() => setIsOpen(true)}
          className="glass-panel rounded-full w-10 h-10 flex flex-col justify-center items-center gap-[5px] cursor-pointer hover:bg-white/10 transition-colors z-50"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[16px] h-[1.5px] bg-white rounded-[2px]" />
          ))}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <Link onClick={() => setIsOpen(false)} to="/" className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white hover:text-[#CC1414] transition-colors relative group">
                Home
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#CC1414] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/inventory" className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white hover:text-[#CC1414] transition-colors relative group">
                Inventory
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#CC1414] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/contact" className="font-display text-4xl md:text-6xl uppercase tracking-widest text-white hover:text-[#CC1414] transition-colors relative group">
                Contact
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#CC1414] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            <div className="absolute bottom-10 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#CC1414] font-semibold">EKC Autos</span>
              <span className="text-white/60 text-sm">Abuja, Nigeria</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
