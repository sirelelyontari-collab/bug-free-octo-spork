import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Car, Filter, Info, Fuel, Gauge, Calendar, Check, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { INVENTORY } from '../data/inventory';

export function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  const vehicle = INVENTORY.find(v => v.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display uppercase tracking-widest mb-4">Vehicle Not Found</h1>
        <p className="text-white/60 mb-8">The vehicle you are looking for does not exist or has been removed.</p>
        <Link to="/inventory" className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-white/90 transition-colors">
          Return to Inventory
        </Link>
      </div>
    );
  }

  // Parse price to number for calculations
  const numericPrice = parseInt(vehicle.price.replace(/[^0-9]/g, '')) || 0;
  const estimatedMonthly = Math.round(numericPrice / 48).toLocaleString();

  return (
    <>
      <div className="bg-[#0a0a0a] min-h-screen">
        <Navbar />
        
        {/* Navigation Bar Spacing */}
        <div className="pt-32 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto">
          <Link to="/inventory" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
            
            {/* Left Column: Images & Details */}
            <div className="flex flex-col gap-10">
              
              {/* Image Gallery */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden glass-panel p-2">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white text-black px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest">
                    {vehicle.condition}
                  </span>
                  <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {vehicle.type}
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
                  <Calendar className="w-6 h-6 text-[#CC1414] mb-2 opacity-80" />
                  <span className="text-white font-medium text-lg">2023</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Year</span>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
                  <Gauge className="w-6 h-6 text-[#CC1414] mb-2 opacity-80" />
                  <span className="text-white font-medium text-lg">Auto</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Transmission</span>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
                  <Fuel className="w-6 h-6 text-[#CC1414] mb-2 opacity-80" />
                  <span className="text-white font-medium text-lg">Petrol</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Fuel Type</span>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
                  <Car className="w-6 h-6 text-[#CC1414] mb-2 opacity-80" />
                  <span className="text-white font-medium text-lg">AWD</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Drivetrain</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-white/10 pt-10">
                <div className="flex gap-8 border-b border-white/10 mb-8">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'overview' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                  >
                    Overview
                    {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1414]" />}
                  </button>
                  <button 
                    onClick={() => setActiveTab('features')}
                    className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'features' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                  >
                    Key Features
                    {activeTab === 'features' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1414]" />}
                  </button>
                </div>

                {activeTab === 'overview' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Make</span>
                      <span className="text-white font-medium text-sm">{vehicle.brand}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Model</span>
                      <span className="text-white font-medium text-sm">{vehicle.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Body Type</span>
                      <span className="text-white font-medium text-sm">{vehicle.type}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Engine</span>
                      <span className="text-white font-medium text-sm">{vehicle.specs[0] || 'V8'}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Power</span>
                      <span className="text-white font-medium text-sm">{vehicle.specs[1] || '400 hp'}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-white/50 text-sm">Condition</span>
                      <span className="text-white font-medium text-sm">{vehicle.condition}</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Premium Leather Interior', 'Panoramic Sunroof', 'Advanced Driver Assistance', 'Premium Audio System', 'Apple CarPlay & Android Auto', 'Adaptive Cruise Control', 'Heated & Ventilated Seats', '360-Degree Camera'].map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#CC1414]/10 flex items-center justify-center text-[#CC1414] shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Details & Purchase Pane */}
            <div className="lg:mt-0 relative">
              <div className="sticky top-32 flex flex-col gap-6">
                
                {/* Pricing Box */}
                <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#CC1414]/10 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
                      {vehicle.brand}
                    </span>
                  </div>
                  <h1 className="font-display text-4xl mb-8 uppercase text-white tracking-wide">
                    {vehicle.name}
                  </h1>

                  <div className="pb-8 border-b border-white/10 mb-8">
                    <div className="flex flex-col gap-1 inline-block">
                      <span className="text-5xl font-bold tracking-tight text-white mb-2">
                        {vehicle.price}
                      </span>
                      <span className="text-white/50 text-xs font-medium uppercase tracking-widest">
                        Or from ₦ {estimatedMonthly} / month
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full py-4 rounded-full bg-[#CC1414] text-white font-semibold text-xs tracking-widest uppercase hover:bg-[#ff2a2a] transition-all hover:shadow-[0_0_20px_rgba(204,20,20,0.3)] flex items-center justify-center gap-2"
                    >
                      Book Test Drive
                    </button>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full py-4 rounded-full bg-white/5 text-white font-semibold text-xs tracking-widest uppercase border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                    >
                      Contact Sales
                    </button>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#CC1414]" />
                      <span className="text-white/60 text-xs tracking-wide">150-Point Quality Inspection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#CC1414]" />
                      <span className="text-white/60 text-xs tracking-wide">Secure Global Sourcing Options</span>
                    </div>
                  </div>
                </div>

                {/* Dealership Info */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-2">Direct Contact</h3>
                  <p className="text-sm text-white/80">Call our sales specialists directly for immediate assistance regarding this {vehicle.brand}.</p>
                  <a href="tel:+2348000000000" className="text-[#CC1414] font-medium hover:text-[#ff2a2a] transition-colors">
                    +234 (0) 800 EKC AUTOS
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Similar Vehicles Suggestion */}
      <div className="bg-[#0f0f0f] py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl text-white uppercase tracking-wide">Similar Vehicles</h2>
            <Link to="/inventory" className="text-white/50 text-xs font-semibold uppercase tracking-widest hover:text-[#CC1414] transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVENTORY.filter(v => v.id !== vehicle.id && v.type === vehicle.type).slice(0,3).map(sim => (
              <Link to={`/inventory/${sim.id}`} key={sim.id} className="group glass-panel rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <img src={sim.image} alt={sim.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 mb-1.5 block">{sim.brand}</span>
                  <h3 className="font-display font-medium text-xl uppercase tracking-normal text-white mb-4 line-clamp-1 group-hover:text-[#CC1414] transition-colors">{sim.name}</h3>
                  <div className="text-xl font-bold tracking-tight text-white leading-none">{sim.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
