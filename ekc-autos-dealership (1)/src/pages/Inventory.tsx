import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Filter, Search, SlidersHorizontal, ChevronDown, Check, CarFront, LayoutGrid, List } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { INVENTORY } from '../data/inventory';

const BRANDS = ['All', 'Mercedes-Benz', 'Lexus', 'Toyota', 'Land Rover', 'BMW', 'Porsche', 'Audi'];
const TYPES = ['All', 'SUV', 'Sedan', 'Coupe', 'Hatchback'];

export function Inventory() {
  const [filterBrand, setFilterBrand] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  const filteredVehicles = INVENTORY.filter(vehicle => {
    const matchesBrand = filterBrand === 'All' || vehicle.brand === filterBrand;
    const matchesType = filterType === 'All' || vehicle.type === filterType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesType && matchesSearch;
  });

  return (
    <>
      {/* Reduced Hero Section for Inventory */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[#CC1414]/5 mix-blend-screen pointer-events-none"></div>
        <Navbar />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-[3px] bg-[#CC1414] rounded-[2px]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#CC1414]">Complete Collection</span>
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.93] tracking-[-0.01em] text-5xl md:text-7xl text-white mb-6">
              Inventory
            </h1>
            <p className="text-white/60 font-light max-w-2xl text-lg">
              Explore our curated selection of premium vehicles. Use the filters below to find the perfect match for your lifestyle.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-background border-t border-white/5 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-10">
          
          {/* Desktop Sidebar Filters */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar flex flex-col gap-8">
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-medium text-lg uppercase tracking-wider text-white">Filters</h3>
                  <button 
                    onClick={() => { setFilterBrand('All'); setFilterType('All'); setSearchQuery(''); }}
                    className="text-xs font-medium uppercase tracking-[0.1em] text-[#CC1414] hover:text-[#ff2a2a] transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="Search inventory..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#CC1414] transition-colors"
                  />
                </div>
              </div>

              {/* Body Type */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Body Type</h4>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {['SUV', 'Sedan', 'Coupe', 'Hatchback', 'Wagon'].map(type => (
                    <button 
                      key={type}
                      onClick={() => setFilterType(type === filterType ? 'All' : type)}
                      className={`flex flex-col items-center justify-center gap-2 p-3 border rounded-xl transition-all ${filterType === type || (filterType === 'All' && type === 'All') ? 'border-[#CC1414] bg-[#CC1414]/10 text-[#CC1414]' : 'border-white/10 bg-white/5 text-white hover:border-white/30'}`}
                    >
                      <CarFront className="w-5 h-5 mb-1 opacity-70" />
                      <span className="text-[10px] uppercase font-semibold tracking-wider">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Make / Brand */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Make</h4>
                <div className="flex flex-col gap-1">
                  {BRANDS.map(brand => {
                    if (brand === 'All') return null;
                    const isSelected = filterBrand === brand;
                    return (
                      <button 
                        key={brand}
                        onClick={() => setFilterBrand(brand)}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#CC1414] border-[#CC1414]' : 'border-white/20 group-hover:border-white/40'}`}>
                            {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-white/70'}`}>{brand}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range placeholder */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Price Range</h4>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full mt-6 mb-2 relative">
                  <div className="absolute left-[20%] right-[30%] h-full bg-[#CC1414] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-white/50 font-medium">
                  <span>₦40M</span>
                  <span>₦400M</span>
                </div>
              </div>

            </div>
          </aside>

          {/* Results Area */}
          <main className="flex-1 min-w-0 flex flex-col gap-6">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="text-sm text-white/60 font-light tracking-wide">
                Showing <strong className="text-white font-medium">{filteredVehicles.length}</strong> vehicles in stock
              </div>

              <div className="flex items-center gap-4">
                <select className="bg-transparent border border-white/10 rounded-full py-2 pl-4 pr-10 text-xs font-medium uppercase tracking-wider text-white appearance-none focus:outline-none focus:border-white/30 cursor-pointer">
                  <option className="bg-[#111111]">Best Match</option>
                  <option className="bg-[#111111]">Price: Low to High</option>
                  <option className="bg-[#111111]">Price: High to Low</option>
                  <option className="bg-[#111111]">Newest Arrivals</option>
                </select>

                <div className="flex items-center border border-white/10 rounded-full overflow-hidden p-0.5">
                  <button 
                    onClick={() => setViewType('grid')}
                    className={`p-1.5 rounded-full transition-colors ${viewType === 'grid' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewType('list')}
                    className={`p-1.5 rounded-full transition-colors ${viewType === 'list' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredVehicles.length > 0 ? (
              <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredVehicles.map((vehicle, i) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    onClick={() => navigate(`/inventory/${vehicle.id}`)}
                    className={`group glass-panel rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 cursor-pointer flex ${viewType === 'grid' ? 'flex-col' : 'flex-col sm:flex-row'}`}
                  >
                    <div className={`relative overflow-hidden bg-white/5 ${viewType === 'grid' ? 'w-full aspect-[4/3] sm:aspect-[16/10]' : 'w-full sm:w-[320px] shrink-0 h-48 sm:h-auto'}`}>
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        {vehicle.condition === 'Brand New' && (
                          <div className="bg-white/90 text-black px-2.5 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest leading-none">
                            New
                          </div>
                        )}
                        {vehicle.id % 4 === 0 && (
                          <div className="bg-[#CC1414] text-white px-2.5 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest leading-none">
                            Hot Deal
                          </div>
                        )}
                      </div>
                      
                      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all z-10 text-white/80">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </button>
                    </div>

                    <div className={`p-5 flex flex-col justify-between flex-1 ${viewType === 'grid' ? '' : 'sm:py-6 sm:pr-6'}`}>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50">
                            {vehicle.brand}
                          </span>
                        </div>
                        <h3 className="font-display font-medium text-2xl uppercase tracking-normal text-white mb-4 line-clamp-1 group-hover:text-[#CC1414] transition-colors">
                          {vehicle.name}
                        </h3>

                        <div className="flex gap-x-4 gap-y-2 flex-wrap mb-6 pb-5 border-b border-white/10">
                          {vehicle.specs.map(spec => (
                            <div key={spec} className="flex flex-col gap-0.5">
                              <span className="text-white font-medium text-sm leading-none">{spec}</span>
                              <span className="text-white/40 text-[9px] uppercase tracking-wider">Spec</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-end justify-between mt-auto">
                        <div>
                          <div className="text-white/40 text-xs font-light line-through mb-0.5">
                            {vehicle.id % 4 === 0 ? `₦ ${(parseInt(vehicle.price.replace(/\D/g,'')) * 1.05).toLocaleString()}` : ''}
                          </div>
                          <div className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
                            {vehicle.price}
                          </div>
                          <div className="text-white/50 text-[11px] mt-1.5">
                            or from <strong className="text-white/80 font-medium">₦ {(parseInt(vehicle.price.replace(/\D/g,'')) / 48).toLocaleString(undefined, {maximumFractionDigits:0})}</strong>/mo
                          </div>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#CC1414] group-hover:border-[#CC1414] transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 glass-panel rounded-2xl border-dashed">
                <h3 className="text-xl font-display font-medium uppercase tracking-widest text-white/60 mb-2">No matches found</h3>
                <p className="text-white/40 text-sm">Try adjusting your filters or search term to see more results.</p>
                <button 
                  onClick={() => { setFilterBrand('All'); setFilterType('All'); setSearchQuery(''); }}
                  className="mt-6 px-6 py-2 rounded-full border border-white/20 text-xs font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Custom Order Section */}
            <div className="mt-20 overflow-hidden rounded-3xl glass-panel border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent mix-blend-screen pointer-events-none"></div>
              <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-5 h-[3px] bg-[#CC1414] rounded-[2px]" />
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#CC1414]">Custom Order</span>
                  </div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-normal text-white mb-4">
                    Don't see what you're looking for?
                  </h2>
                  <p className="text-white/60 font-light text-lg">
                    Our network spans across continents. Let us source your dream car, perfectly specced to your exact desires.
                  </p>
                </div>
                
                <Link to="/contact" className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 group">
                  Request a Source
                  <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-black" strokeWidth={2} />
                  </div>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
