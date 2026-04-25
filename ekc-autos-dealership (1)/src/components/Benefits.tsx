import { RefreshCcw, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Benefits() {
  const valueProps = [
    {
      icon: <RefreshCcw className="w-6 h-6" strokeWidth={1.5} />,
      title: "Instant Vehicle Swaps",
      description: "Bypass the hassle of selling privately. Bring in your current vehicle, get an instant competitive valuation, and seamlessly swap it for any premium car in our showroom. Drive in with your old car, drive out with your upgrade.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
      title: "Bulletproof Reliability",
      description: "Nigerian roads demand resilience. Every EKC vehicle undergoes a brutal 150-point mechanical and electrical audit by certified diagnostics experts. If it isn't perfect, it never makes it to our showroom.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" strokeWidth={1.5} />,
      title: "Absolute Transparency",
      description: "No 'customs clearing' excuses. No unexpected agency fees. Our pricing is 100% transparent and all importation documentation is flawlessly handled upfront, guaranteeing your absolute peace of mind.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Pain Point & Dream Outcome Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-28">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              The EKC Difference
            </span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-normal leading-[1] mb-8 text-foreground">
            Buying a luxury vehicle shouldn't feel like a gamble.
          </h2>
          
          <div className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed">
            <p>
              In a market saturated with "accident-free" promises, hidden mechanical faults, and exhausting negotiations, upgrading your lifestyle often brings more anxiety than joy. 
            </p>
            <p className="text-foreground font-normal">
              EKC Autos changes everything. We deliver a meticulously curated fleet of premium vehicles with uncompromising transparency. Walk into our showroom with confidence, bypass the typical dealership stress, and drive out with absolute peace of mind.
            </p>
          </div>

          <Link 
            to="/inventory"
            className="inline-flex items-center space-x-4 mt-10 group transition-transform hover:translate-x-1"
          >
            <span className="text-lg font-light text-foreground group-hover:text-accent transition-colors">
              Experience the Difference
            </span>
            <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative w-full"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden relative glass-panel p-2">
            <img 
              src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Car Interior" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>
          
          {/* Floating Trust Badge */}
          <div className="absolute -bottom-8 -left-8 md:-left-12 glass-panel bg-card/80 backdrop-blur-xl p-6 rounded-2xl border-white/10 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-medium tracking-tight text-foreground">100%</span>
                <span className="text-xs uppercase tracking-wider text-foreground/50">Verified History</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Value Propositions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valueProps.map((prop, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-panel bg-card/40 hover:bg-card/80 rounded-[2rem] p-8 md:p-10 border-white/5 hover:border-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              {prop.icon}
            </div>
            <h3 className="font-display font-bold text-3xl uppercase tracking-normal mb-4 text-foreground">
              {prop.title}
            </h3>
            <p className="text-foreground/60 font-light text-sm leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
