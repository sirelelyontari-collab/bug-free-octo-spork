import { Search, ArrowRightLeft, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-6 h-6 relative z-10" strokeWidth={1.5} />,
      title: "Discover & Select",
      desc: "Browse our rigorously vetted inventory online or visit our Abuja showroom. Every car displayed is physically in stock and ready for immediate inspection.",
    },
    {
      num: "02",
      icon: <ArrowRightLeft className="w-6 h-6 relative z-10" strokeWidth={1.5} />,
      title: "Value & Swap",
      desc: "Opting for a trade-in? Our experts conduct a rapid 15-minute appraisal of your current vehicle to give you a definitive, fair-market swap value.",
    },
    {
      num: "03",
      icon: <KeyRound className="w-6 h-6 relative z-10" strokeWidth={1.5} />,
      title: "Drive Away",
      desc: "We process the payment and 100% verifiable customs documentation instantly. Take the keys and drive away securely within hours, not days.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 hidden md:block"></div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              Simple Process
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground">
            Your Upgrade in 3 Steps
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative"
          >
            {/* Connecting line on desktop */}
            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute top-[44px] left-[calc(100%-2rem)] w-[calc(100%+4rem)] h-[1px] bg-white/10 z-0"></div>
            )}
            
            <div className="glass-panel bg-card/60 p-8 rounded-[2rem] border-white/5 hover:border-accent/30 transition-colors relative z-10 group h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:text-white group-hover:bg-accent transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-5xl font-light text-white/5 group-hover:text-accent/20 transition-colors duration-300 font-serif">
                  {step.num}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-3xl uppercase tracking-normal text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-foreground/60 font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
