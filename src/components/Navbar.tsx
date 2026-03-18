import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Menú', href: '#menu' },
    { name: 'Viandas', href: '#viandas' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Reservas', href: '#reserva' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[999] bg-[#FAF5ED]/95 backdrop-blur-md border-b-2 border-[#E8906A] shadow-sm px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <svg className="w-11 h-11" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,42 82,42 82,85 18,85 18,42 10,42" fill="#E8906A" stroke="#C06030" strokeWidth="2.5" strokeLinejoin="round"/>
          <polygon points="50,12 88,43 12,43" fill="#C06030"/>
          <rect x="39" y="62" width="22" height="23" rx="11" fill="#8B3A1A"/>
          <ellipse cx="50" cy="66" rx="14" ry="5" fill="#C06030"/>
          <rect x="36" y="56" width="28" height="11" rx="3" fill="#8B3A1A"/>
          <ellipse cx="50" cy="56" rx="14" ry="4" fill="#C06030"/>
          <path d="M47 55 Q44 47 50 42 Q53 47 56 43 Q58 50 54 55" fill="#E8906A" opacity=".9"/>
          <path d="M49 54 Q47 49 51 45 Q53 49 55 46 Q56 51 52 54" fill="#FAF5ED" opacity=".6"/>
          <path d="M62 35 Q60 25 64 20" stroke="#4A6741" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="64" cy="20" rx="5" ry="7" fill="#4A6741" transform="rotate(-20 64 20)"/>
          <path d="M66 33 Q68 24 72 21" stroke="#4A6741" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="72" cy="21" rx="4" ry="6" fill="#6B8F5E" transform="rotate(15 72 21)"/>
        </svg>
        <div className="font-serif text-lg text-[#8B3A1A] leading-tight">
          Sabores de Hogar
          <span className="block text-[0.55rem] tracking-[0.18em] text-[#4A6741] font-sans font-bold uppercase">Cocina Artesanal</span>
        </div>
      </div>

      <ul className={`
        md:flex gap-6 items-center list-none
        ${isOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-[#FAF5ED] p-4 border-b-2 border-[#E8906A]' : 'hidden'}
      `}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-[#5C3317] font-bold text-[0.82rem] tracking-wider uppercase hover:text-[#C06030] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button 
            onClick={(e) => { e.preventDefault(); onOpenAdmin(); setIsOpen(false); }}
            className="bg-[#C06030] text-white px-4 py-1.5 rounded-full text-[0.82rem] font-bold hover:bg-[#8B3A1A] transition-colors flex items-center gap-2"
          >
            <Settings size={14} /> Admin
          </button>
        </li>
      </ul>

      <button className="md:hidden text-[#8B3A1A]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;