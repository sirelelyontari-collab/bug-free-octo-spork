import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Chinedu O.",
    location: "Abuja",
    quote: "Traded in my old SUV for a 2023 Mercedes GLE. The valuation was fair, and the sheer transparency regarding customs papers was refreshing. Finally, a dealership you can trust.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Amina M.",
    location: "Abuja",
    quote: "I was skeptical about buying pre-owned in Nigeria, but their 150-point inspection is no joke. The Land Cruiser I bought drives like it just rolled out of the factory.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1ebabb?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Oluwaseun F.",
    location: "Port Harcourt",
    quote: "Absolutely stellar service. Drove in with my old car, got an instant swap valuation, and drove out in my new Lexus under 2 hours. Professionalism at its absolute peak.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              Client Experiences
            </span>
            <div className="w-5 h-1 rounded-full bg-accent"></div>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground mb-4">
            Stories of Seamless Upgrades
          </h2>
          <p className="text-foreground/60 font-light max-w-2xl mx-auto">
            Don't just take our word for it. Hear from clients across Nigeria who have experienced the premium standard of EKC Autos.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-panel bg-card/40 rounded-3xl p-8 border-white/5 relative group hover:border-white/10 transition-colors flex flex-col"
          >
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors">
              "
            </div>
            
            <div className="flex items-center gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-foreground/80 font-light text-sm leading-relaxed mb-8 flex-1 relative z-10">
              "{review.quote}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20">
                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-sm tracking-tight text-foreground">
                  {review.name}
                </h4>
                <span className="text-xs text-foreground/50 font-light uppercase tracking-wider">
                  {review.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
