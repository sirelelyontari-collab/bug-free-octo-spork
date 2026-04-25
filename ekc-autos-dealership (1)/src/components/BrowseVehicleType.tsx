import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'motion/react';

const categories = [
  {
    title: 'All Vehicles',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SUV',
    image: 'https://images.unsplash.com/photo-1563720225384-98616716a51d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Truck',
    image: 'https://images.unsplash.com/photo-1559404221-aab1324708ed?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Luxury Coupe',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop',
  },
];

export function BrowseVehicleType() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Adjusted scroll amount to account for the newly reduced container sizes (80%) + gaps
      const scrollAmount = window.innerWidth > 768 ? 312 : 248;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              Vehicle Categories
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground">
            Browse by Vehicle Type
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors focus:outline-none"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors focus:outline-none"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        ref={scrollRef} 
        className="flex space-x-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:-mx-12 md:px-12"
      >
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            className="min-w-[224px] md:min-w-[288px] h-[320px] md:h-[384px] relative rounded-2xl overflow-hidden group cursor-pointer shrink-0 snap-start"
          >
            <img 
              src={category.image} 
              alt={category.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            {/* Dark gradient mapping exact hero spec */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-normal text-foreground transition-transform duration-500 group-hover:-translate-y-2">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
