import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    q: "Are the customs duties fully cleared on all vehicles?",
    a: "Absolutely. 100% of our imported vehicles come with fully paid, verifiable Nigerian Custom Service duties. We provide all original documentation for your absolute peace of mind, ensuring no harassment on the roads."
  },
  {
    q: "How does the car swap/trade-in process work?",
    a: "It's simple: bring your current vehicle to our Abuja showroom. Our experts will run a quick 15-minute diagnostic and physical appraisal to give you a fair market valuation. That value is directly deducted from the price of your new vehicle, and you drive away with your upgrade."
  },
  {
    q: "Do you deliver cars outside of Abuja?",
    a: "Yes, we offer fully insured, flatbed delivery to Lagos, Port Harcourt, and most major cities across Nigeria. Your vehicle is protected from our showroom floor directly to your driveway."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept direct bank transfers (Naira or foreign currency equivalents based on agreed rates). For security and compliance reasons, we do not accept cash payments for vehicle purchases."
  },
  {
    q: "Can you assist with vehicle registration and insurance?",
    a: "Yes. We offer an end-to-end concierge service. We can handle your number plate registration, vehicle license, road worthiness certificate, and comprehensive insurance, delivering a fully legal, ready-to-drive car."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 lg:sticky lg:top-24 bg-background z-10 py-4 lg:py-0"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              FAQs
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground leading-[1] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed mb-8">
            Clear answers to the most common questions our clients ask us before purchasing their luxury vehicle in Nigeria.
          </p>
          <a href="#" className="inline-flex px-6 py-3 rounded-full bg-white/5 text-foreground font-medium hover:bg-white/10 transition-colors border border-white/10">
            Ask Another Question
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col pt-2"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-white/10 last:border-none"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent/80'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-white/5 text-foreground group-hover:bg-white/10'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-foreground/60 font-light leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
