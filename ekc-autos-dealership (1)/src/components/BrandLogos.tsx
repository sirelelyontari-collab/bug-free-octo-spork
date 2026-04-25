import { ReactNode } from 'react';

/* ══ BRAND LOGO SVGs ═══ */

const LToyota = () => (
  <svg viewBox="0 0 200 130" fill="none" height="42" style={{width:'auto',display:'block'}}>
    <ellipse cx="100" cy="65" rx="97" ry="61" stroke="url(#sgs)" strokeWidth="6"/>
    <ellipse cx="100" cy="50" rx="71"  ry="23" stroke="url(#sgs)" strokeWidth="6"/>
    <ellipse cx="100" cy="65" rx="28"  ry="57" stroke="url(#sgs)" strokeWidth="6"/>
  </svg>
);

const LMercedes = () => (
  <svg viewBox="0 0 60 60" height="50" width="50" style={{display:'block'}}>
    <circle cx="30" cy="30" r="27" fill="none" stroke="url(#sgs)" strokeWidth="2.5"/>
    <path d="M30 4 L32.6 22.5 L30 30 L27.4 22.5 Z" fill="url(#sg)"/>
    <path d="M30 30 L51.3 43.5 L49.8 46.2 L30 30 Z" fill="url(#sg)"/>
    <path d="M30 30 L8.7 43.5 L10.2 46.2 L30 30 Z" fill="url(#sg)"/>
    <circle cx="30" cy="30" r="2" fill="url(#sg)"/>
  </svg>
);

const LBMW = () => (
  <svg viewBox="0 0 60 60" height="50" width="50" style={{display:'block'}}>
    <circle cx="30" cy="30" r="27.5" fill="none" stroke="url(#sgs)" strokeWidth="5.5"/>
    <path d="M30 10.5 A19.5 19.5 0 0 1 49.5 30 L30 30 Z" fill="url(#sg)"/>
    <path d="M30 49.5 A19.5 19.5 0 0 1 10.5 30 L30 30 Z" fill="url(#sg)"/>
    <circle cx="30" cy="30" r="19.5" fill="none" stroke="url(#sgs)" strokeWidth="1.8"/>
    <line x1="30" y1="10.5" x2="30" y2="49.5" stroke="url(#sgs)" strokeWidth="1.5"/>
    <line x1="10.5" y1="30" x2="49.5" y2="30" stroke="url(#sgs)" strokeWidth="1.5"/>
  </svg>
);

const LAudi = () => (
  <svg viewBox="0 0 220 64" fill="none" height="34" style={{width:'auto',display:'block'}}>
    <circle cx="28"  cy="32" r="26" stroke="url(#sgs)" strokeWidth="4.5"/>
    <circle cx="76"  cy="32" r="26" stroke="url(#sgs)" strokeWidth="4.5"/>
    <circle cx="124" cy="32" r="26" stroke="url(#sgs)" strokeWidth="4.5"/>
    <circle cx="172" cy="32" r="26" stroke="url(#sgs)" strokeWidth="4.5"/>
  </svg>
);

const LHonda = () => (
  <svg viewBox="0 0 58 66" height="50" style={{width:'auto',display:'block'}}>
    <path d="M3 4 L3 62 L16 62 L16 41 L42 41 L42 62 L55 62 L55 4 L42 4 L42 34 L16 34 L16 4 Z" fill="url(#sg)"/>
  </svg>
);

const LLexus = () => (
  <svg viewBox="0 0 90 58" height="44" style={{width:'auto',display:'block'}}>
    <ellipse cx="45" cy="29" rx="43" ry="26.5" fill="none" stroke="url(#sgs)" strokeWidth="2.8"/>
    <path d="M27 13 L27 44 L63 44 L63 38.5 L33.5 38.5 L33.5 13 Z" fill="url(#sg)"/>
  </svg>
);

const LVolkswagen = () => (
  <svg viewBox="0 0 60 60" height="50" width="50" style={{display:'block'}}>
    <circle cx="30" cy="30" r="27" fill="none" stroke="url(#sgs)" strokeWidth="2.5"/>
    <path d="M17 11 L30 32 L43 11 L39.5 11 L30 28 L20.5 11 Z" fill="url(#sg)"/>
    <path d="M10.5 24 L18.5 45 L30 30 L41.5 45 L49.5 24 L46 24 L41.5 39 L30 23 L18.5 39 L14 24 Z" fill="url(#sg)"/>
  </svg>
);

const LFord = () => (
  <svg viewBox="0 0 130 58" height="44" style={{width:'auto',display:'block'}}>
    <ellipse cx="65" cy="29" rx="63" ry="27" fill="none" stroke="url(#sgs)" strokeWidth="2.8"/>
    <text x="65" y="38" textAnchor="middle"
      fill="url(#sg)" fontSize="28" fontStyle="italic" fontWeight="600"
      fontFamily="'Barlow',sans-serif" letterSpacing="-1">
      Ford
    </text>
  </svg>
);

const LLandRover = () => (
  <svg viewBox="0 0 190 50" height="40" style={{width:'auto',display:'block'}}>
    <rect x="2" y="2" width="186" height="46" rx="6" fill="none" stroke="url(#sgs)" strokeWidth="2.5"/>
    <text x="95" y="32" textAnchor="middle"
      fill="url(#sg)" fontSize="12" fontWeight="600"
      fontFamily="'Barlow',sans-serif" letterSpacing="3.5">
      LAND ROVER
    </text>
  </svg>
);

const LHyundai = () => (
  <svg viewBox="0 0 80 58" height="46" style={{width:'auto',display:'block'}}>
    <ellipse cx="40" cy="29" rx="38" ry="26.5" fill="none" stroke="url(#sgs)" strokeWidth="2.5"/>
    <text x="40" y="40" textAnchor="middle"
      fill="url(#sg)" fontSize="32" fontWeight="700" fontStyle="italic"
      fontFamily="'Barlow',sans-serif">
      H
    </text>
  </svg>
);

const LKia = () => (
  <svg viewBox="0 0 100 44" height="36" style={{width:'auto',display:'block'}}>
    <path d="M3 4 L3 40 L11 40 L11 26 L26 40 L35 40 L18 22 L33 4 L24 4 L11 19 L11 4 Z" fill="url(#sg)"/>
    <rect x="40" y="4" width="7" height="36" rx="1" fill="url(#sg)"/>
    <path d="M56 40 L68 4 L80 40 L73 40 L68 22 L63 40 Z M61 28 L75 28 L75 33 L61 33 Z" fill="url(#sg)"/>
  </svg>
);

const LNissan = () => (
  <svg viewBox="0 0 130 58" height="44" style={{width:'auto',display:'block'}}>
    <ellipse cx="65" cy="29" rx="63" ry="26" fill="none" stroke="url(#sgs)" strokeWidth="2.8"/>
    <path d="M2 21 L128 21 L128 37 L2 37 Z" fill="url(#sg)"/>
    <text x="65" y="33" textAnchor="middle"
      fill="#0a0a0a" fontSize="10.5" fontWeight="700"
      fontFamily="'Barlow',sans-serif" letterSpacing="3">
      NISSAN
    </text>
  </svg>
);

const LPorsche = () => (
  <svg viewBox="0 0 160 44" height="36" style={{width:'auto',display:'block'}}>
    <text x="80" y="34" textAnchor="middle"
      fill="url(#sg)" fontSize="30" fontWeight="700"
      fontFamily="'Barlow Condensed',sans-serif" letterSpacing="4">
      PORSCHE
    </text>
  </svg>
);

const LPeugeot = () => (
  <svg viewBox="0 0 110 60" height="48" style={{width:'auto',display:'block'}}>
    <path d="M55 3 C55 3 84 3 91 9 C98 15 98 37 91 47 C84 55 55 58 55 58 C55 58 26 55 19 47 C12 37 12 15 19 9 C26 3 55 3 Z"
      fill="none" stroke="url(#sgs)" strokeWidth="2.5"/>
    <text x="55" y="37" textAnchor="middle"
      fill="url(#sg)" fontSize="11" fontWeight="600"
      fontFamily="'Barlow',sans-serif" letterSpacing="2.2">
      PEUGEOT
    </text>
  </svg>
);

const LMitsubishi = () => (
  <svg viewBox="0 0 68 62" height="50" style={{width:'auto',display:'block'}}>
    <polygon points="34,2 46,19 34,36 22,19" fill="url(#sg)"/>
    <polygon points="47,28 59,45 47,62 35,45" fill="url(#sg)" opacity="0.82"/>
    <polygon points="21,28 33,45 21,62 9,45"  fill="url(#sg)" opacity="0.82"/>
  </svg>
);

const LInfiniti = () => (
  <svg viewBox="0 0 90 54" height="42" style={{width:'auto',display:'block'}}>
    <ellipse cx="45" cy="40" rx="42" ry="12.5" fill="none" stroke="url(#sgs)" strokeWidth="3"/>
    <path d="M45 6 C30 12 12 27 3 40"  fill="none" stroke="url(#sgs)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M45 6 C60 12 78 27 87 40" fill="none" stroke="url(#sgs)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export function BrandLogos() {
  const brands: { name: string; logo: ReactNode }[] = [
    { name: 'Toyota',        logo: <LToyota/> },
    { name: 'Mercedes-Benz', logo: <LMercedes/> },
    { name: 'BMW',           logo: <LBMW/> },
    { name: 'Audi',          logo: <LAudi/> },
    { name: 'Honda',         logo: <LHonda/> },
    { name: 'Lexus',         logo: <LLexus/> },
    { name: 'Volkswagen',    logo: <LVolkswagen/> },
    { name: 'Ford',          logo: <LFord/> },
    { name: 'Land Rover',    logo: <LLandRover/> },
    { name: 'Hyundai',       logo: <LHyundai/> },
    { name: 'Kia',           logo: <LKia/> },
    { name: 'Nissan',        logo: <LNissan/> },
    { name: 'Porsche',       logo: <LPorsche/> },
    { name: 'Peugeot',       logo: <LPeugeot/> },
    { name: 'Mitsubishi',    logo: <LMitsubishi/> },
    { name: 'Infiniti',      logo: <LInfiniti/> },
  ];

  const track = [...brands, ...brands]; /* duplicate for seamless loop */

  return (
    <section className="pt-12 pb-14 border-t border-[#1c1c1c] overflow-hidden relative w-full bg-background">
      {/* Section label */}
      <div className="text-center mb-10 flex items-center justify-center gap-4">
        <div className="w-6 h-[1.5px] bg-[#CC1414]/65 rounded-sm" />
        <span className="text-[10.5px] font-medium tracking-[0.14em] uppercase text-[#CC1414]/80">
          Brands In Our Inventory
        </span>
        <div className="w-6 h-[1.5px] bg-[#CC1414]/65 rounded-sm" />
      </div>

      {/* Edge fades */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Global SVG gradient defs */}
      <svg width="0" height="0" className="absolute overflow-hidden pointer-events-none">
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%"   stopColor="#f8f8f8"/>
            <stop offset="14%"  stopColor="#ffffff"/>
            <stop offset="34%"  stopColor="#d2d2d2"/>
            <stop offset="56%"  stopColor="#878787"/>
            <stop offset="76%"  stopColor="#c6c6c6"/>
            <stop offset="92%"  stopColor="#f0f0f0"/>
            <stop offset="100%" stopColor="#dedede"/>
          </linearGradient>
          <linearGradient id="sgs" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%"   stopColor="#ffffff"/>
            <stop offset="20%"  stopColor="#ececec"/>
            <stop offset="50%"  stopColor="#aeaeae"/>
            <stop offset="80%"  stopColor="#e4e4e4"/>
            <stop offset="100%" stopColor="#f4f4f4"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Scrolling track */}
      <div className="flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] w-max">
        {track.map((b, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-2.5 mx-12 shrink-0">
            {/* Logo at fixed height */}
            <div className="h-[54px] flex items-center justify-center opacity-90">
              {b.logo}
            </div>
            {/* Silver gradient brand name */}
            <span className="text-[9.5px] font-medium tracking-[0.14em] uppercase bg-gradient-to-br from-[#f8f8f8] via-[#878787] to-[#dedede] text-transparent bg-clip-text">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
