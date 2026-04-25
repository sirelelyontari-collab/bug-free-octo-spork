import { FileCheck, Gauge, Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Differentiators() {
  const points = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "100% Customs Cleared",
      desc: "We completely eliminate customs anxiety. Every vehicle we sell comes with fully verifiable duty payments and authentic Nigerian Custom Service documentation. No shortcuts, no future embarrassments.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Unaltered Genuine Mileage",
      desc: "Odometer rollbacks are unfortunately common. We provide original port pictures, Carfax/AutoCheck reports, and full diagnostic scans to prove our mileage is exactly as advertised.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Inter-State Delivery",
      desc: "Outside Abuja? No problem. We offer fully insured, flatbed delivery to Lagos, Port Harcourt, and major cities across Nigeria. Your vehicle arrives in pristine condition.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Registration Assistance",
      desc: "Skip the licensing queues. Our administrative team handles your number plates, vehicle license, road worthiness, and comprehensive insurance seamlessly before delivery.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              Why EKC Autos
            </span>
            <div className="w-5 h-1 rounded-full bg-accent"></div>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground max-w-2xl mt-4">
            The New Standard in Nigerian Auto Sales
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {points.map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] flex flex-col sm:flex-row gap-6 group hover:border-accent/30 transition-colors"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              {point.icon}
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl uppercase tracking-normal text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
