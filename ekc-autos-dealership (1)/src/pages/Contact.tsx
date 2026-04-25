import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Car, Calendar, Send } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Contact() {
  const [formType, setFormType] = useState<'enquiry' | 'test-drive'>('enquiry');

  return (
    <>
      <div className="relative pt-32 pb-20 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 bg-[#CC1414]/5 mix-blend-screen pointer-events-none"></div>
        <Navbar />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-[3px] bg-[#CC1414] rounded-[2px]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#CC1414]">Get in Touch</span>
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.93] tracking-[-0.01em] text-5xl md:text-7xl text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/60 font-light max-w-xl text-lg">
              Whether you're looking for your dream car, want to book a test drive, or simply have a question, our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                <div>
                  <h3 className="font-display font-bold text-3xl uppercase tracking-normal text-white mb-8">
                    Dealership Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    
                    {/* Location */}
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[#CC1414]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-2">Location</h4>
                        <p className="text-white text-base leading-relaxed">
                          123 Auto Street<br />
                          Maitama, Abuja<br />
                          Nigeria
                        </p>
                        <a href="#" className="inline-block mt-3 text-sm text-[#CC1414] hover:text-[#ff2a2a] transition-colors border-b border-[#CC1414]/30 hover:border-[#ff2a2a]">
                          Get Directions
                        </a>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[#CC1414]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-2">Direct Lines</h4>
                        <div className="flex flex-col gap-1 text-white text-base">
                          <a href="tel:+2348000000000" className="hover:text-[#CC1414] transition-colors">+234 (0) 800 EKC AUTOS</a>
                          <a href="tel:+2348011111111" className="hover:text-[#CC1414] transition-colors">+234 (0) 801 111 1111</a>
                        </div>
                        <a href="mailto:sales@ekcautos.com" className="inline-flex items-center gap-2 mt-4 text-sm text-white/70 hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                          sales@ekcautos.com
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="h-px w-full bg-white/10"></div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[#CC1414]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">Operating Hours</h4>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 border border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Monday - Friday</span>
                      <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Saturday</span>
                      <span className="text-white font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#CC1414]">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC1414]/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <h3 className="font-display font-bold text-3xl uppercase tracking-normal text-white mb-8 relative z-10">
                  Send a Message
                </h3>

                {/* Form Type Toggle */}
                <div className="flex bg-white/5 p-1 rounded-xl mb-8 relative z-10">
                  <button 
                    onClick={() => setFormType('enquiry')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all
                      ${formType === 'enquiry' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}`}
                  >
                    <Mail className="w-4 h-4" />
                    General Enquiry
                  </button>
                  <button 
                    onClick={() => setFormType('test-drive')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all
                      ${formType === 'test-drive' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}`}
                  >
                    <Car className="w-4 h-4" />
                    Test Drive
                  </button>
                </div>

                <form className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-semibold px-2">First Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CC1414] transition-colors" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-semibold px-2">Last Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CC1414] transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-semibold px-2">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CC1414] transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-semibold px-2">Phone</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CC1414] transition-colors" placeholder="+234 xxx xxx xxxx" />
                    </div>
                  </div>

                  {formType === 'test-drive' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-[#CC1414]/5 rounded-xl border border-[#CC1414]/20 mb-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-[#CC1414]/80 uppercase tracking-widest font-semibold px-2">Select Vehicle</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CC1414] transition-colors appearance-none cursor-pointer">
                          <option value="none">I'm not sure yet</option>
                          <option value="x5">2024 BMW X5 xDrive40i</option>
                          <option value="g63">2023 Mercedes-Benz G63 AMG</option>
                          <option value="lx600">2022 Lexus LX 600</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-[#CC1414]/80 uppercase tracking-widest font-semibold px-2">Preferred Date</label>
                        <div className="relative">
                          <input type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CC1414] transition-colors appearance-none cursor-pointer [color-scheme:dark]" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-[10px] text-white/50 uppercase tracking-widest font-semibold px-2">Message</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CC1414] transition-colors min-h-[120px] resize-y" 
                      placeholder={formType === 'test-drive' ? "Any specific requirements or questions about your test drive?" : "How can we help you today?"}
                    ></textarea>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-4 mt-4 rounded-full bg-[#CC1414] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#ff2a2a] transition-colors flex items-center justify-center gap-2 group"
                  >
                    {formType === 'test-drive' ? 'Request Test Drive' : 'Send Message'}
                    <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-[10px] text-white/40 text-center uppercase tracking-widest font-semibold mt-4">
                    Your data is secure. We do not share your information.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
