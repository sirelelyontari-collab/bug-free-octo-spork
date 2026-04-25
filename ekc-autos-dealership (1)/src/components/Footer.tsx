import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 select-none md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tighter text-foreground mb-4 uppercase">EKC AUTOS</h3>
            <p className="text-foreground/50 font-light text-sm leading-relaxed max-w-xs">
              Nigeria's trusted destination for premium and luxury vehicles. We deliver transparency, reliability, and peace of mind with every sale.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Inventory</h4>
            <ul className="space-y-4">
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">All Vehicles</Link></li>
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">SUVs</Link></li>
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">Sedans</Link></li>
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">Luxury Collection</Link></li>
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">Home</Link></li>
              <li><Link to="/inventory" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">Inventory</Link></li>
              <li><Link to="/contact" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="text-foreground/50 font-light text-sm">Maitama, Abuja</li>
              <li><a href="tel:+2340000000000" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">+234 (0) 800 EKC AUTOS</a></li>
              <li><a href="mailto:sales@ekcautos.com" className="text-foreground/50 hover:text-accent font-light text-sm transition-colors">sales@ekcautos.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-foreground/40 font-light">
          <p>© {new Date().getFullYear()} EKC Autos Nigeria. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
