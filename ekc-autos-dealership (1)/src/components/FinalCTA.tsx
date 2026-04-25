import { ArrowRight, PhoneCall, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="px-4 md:px-8 pb-12 w-full max-w-[1440px] mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[2.5rem] overflow-hidden bg-card"
      >
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Car Showcase" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay mapping the exact visual vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30"></div>
        
        <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 w-full text-center lg:text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium uppercase tracking-widest text-white/70 mb-6">
              Showroom Open
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-[7rem] uppercase tracking-normal leading-[0.9] text-white mb-6">
              Ready to Command<br />the Road?
            </h2>
            <p className="text-white/60 font-light text-lg max-w-lg mx-auto lg:mx-0 mb-10">
              Your next premium vehicle is waiting. Browse our exclusive inventory online or visit our Abuja showroom for a personalized experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/inventory" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                Browse Inventory
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" strokeWidth={1.5} />
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[400px] glass-panel bg-background/40 backdrop-blur-xl p-8 rounded-3xl border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
            <h3 className="font-display font-bold text-3xl tracking-normal text-white uppercase mb-2">Visit EKC Autos</h3>
            <p className="text-white/50 font-light text-sm mb-8">
              Experience our curated fleet in person.
            </p>
            
            <div className="space-y-6 text-sm text-white/80 font-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shadow-inner">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <strong className="block text-white font-medium mb-1">Our Showroom</strong>
                  Maitama,<br />Abuja, Nigeria
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shadow-inner">
                  <Clock className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <strong className="block text-white font-medium mb-1">Opening Hours</strong>
                  Mon-Sat: 9:00 AM - 6:00 PM<br />Sun: By Appointment
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
