import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const vehicles = [
  {
    id: 1,
    name: 'Range Rover Velar',
    brand: 'Land Rover',
    year: 2024,
    condition: 'Pre-owned',
    price: '₦85,000,000',
    monthly: 'or from ₦1,200,000/mo',
    image: 'https://images.unsplash.com/photo-1563720225384-98616716a51d?q=80&w=800&auto=format&fit=crop',
    specs: ['Petrol', '12,500 km', 'Automatic'],
    badge: { text: 'Featured', color: 'bg-accent text-white' },
  },
  {
    id: 2,
    name: 'Mercedes-Benz GLE 450',
    brand: 'Mercedes-Benz',
    year: 2023,
    condition: 'Pre-owned',
    price: '₦110,000,000',
    monthly: 'or from ₦1,550,000/mo',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop',
    specs: ['Hybrid', '8,200 km', 'Automatic'],
    badge: { text: 'Hot', color: 'bg-red-500 text-white' },
  },
  {
    id: 3,
    name: 'Lexus LX 600',
    brand: 'Lexus',
    year: 2024,
    condition: 'New In',
    price: '₦145,000,000',
    monthly: 'or from ₦2,100,000/mo',
    image: 'https://images.unsplash.com/photo-1627454819213-f56f46b50c66?q=80&w=800&auto=format&fit=crop',
    specs: ['Petrol', '1,500 km', 'Automatic'],
    badge: { text: 'New In', color: 'bg-blue-500 text-white' },
  },
  {
    id: 4,
    name: 'Toyota Land Cruiser Prado',
    brand: 'Toyota',
    year: 2022,
    condition: 'Pre-owned',
    price: '₦72,000,000',
    monthly: 'or from ₦980,000/mo',
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=800&auto=format&fit=crop',
    specs: ['Diesel', '34,000 km', 'Automatic'],
  },
  {
    id: 5,
    name: 'BMW X7 xDrive40i',
    brand: 'BMW',
    year: 2023,
    condition: 'Pre-owned',
    price: '₦125,000,000',
    monthly: 'or from ₦1,750,000/mo',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop',
    specs: ['Petrol', '15,000 km', 'Automatic'],
    badge: { text: 'Premium', color: 'bg-purple-500 text-white' },
  },
  {
    id: 6,
    name: 'Hyundai Palisade Calligraphy',
    brand: 'Hyundai',
    year: 2024,
    condition: 'Pre-owned',
    price: '₦68,000,000',
    monthly: 'or from ₦920,000/mo',
    image: 'https://images.unsplash.com/photo-1632242332152-4a0b22a0808a?q=80&w=800&auto=format&fit=crop',
    specs: ['Petrol', '10,200 km', 'Automatic'],
  },
];

export function FeaturedVehicles() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-5 h-1 rounded-full bg-accent"></div>
            <span className="text-accent uppercase text-xs tracking-wider font-normal">
              Highlighted
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-normal text-foreground">
            Featured Vehicles
          </h2>
        </motion.div>

        <Link 
          to="/inventory"
          className="group flex items-center space-x-3 text-sm font-light hover:text-accent transition-colors pb-2 border-b border-foreground/10 hover:border-accent w-fit"
        >
          <span>View Inventory</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle, idx) => (
          <Link
            to={`/inventory`}
            key={vehicle.id}
            className="group glass-panel rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5">
              <img 
                src={vehicle.image} 
                alt={vehicle.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <button 
                onClick={(e) => toggleWishlist(e, vehicle.id)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-background/80 transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart 
                  className={`w-4 h-4 transition-colors ${wishlist.includes(vehicle.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`} 
                />
              </button>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-light text-foreground/50 mb-2">
                <span>{vehicle.year}</span>
                <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
                <span>{vehicle.brand}</span>
                <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
                <span>{vehicle.condition}</span>
              </div>
              
              <h3 className="font-display font-bold text-3xl uppercase tracking-normal text-foreground mb-4">
                {vehicle.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {vehicle.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-foreground/70">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-end justify-between">
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-foreground mb-1">
                    {vehicle.price}
                  </div>
                  <div className="text-xs font-light text-foreground/50">
                    {vehicle.monthly}
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium hover:bg-accent hover:text-white transition-colors">
                  View Car
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <button className="px-8 py-3 rounded-full border border-foreground/20 hover:border-accent hover:text-accent font-light transition-colors inline-flex items-center gap-2 group">
          View All Vehicles
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
}
