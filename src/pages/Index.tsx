import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ShoppingCart, Plus, Send, MapPin, Instagram, Facebook, Phone, Clock } from 'lucide-react';

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF5ED] text-[#3A2210] font-sans">
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-8 relative overflow-hidden bg-gradient-to-br from-[#FAF5ED] via-[#F0E8D8] to-[#e8d8c0]">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-[#C06030] font-bold text-xs tracking-[0.2em] uppercase mb-2">🌿 Cocina Artesanal · Uruguay</p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#8B3A1A] leading-tight mb-4">
              El sabor de <em className="text-[#4A6741] not-italic">casa</em>,<br />en tu mesa
            </h1>
            <p className="text-[#5C3317] text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              Preparamos cada plato con ingredientes frescos, recetas tradicionales y el amor de siempre. Viandas diarias, platos especiales y mucho más.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#menu" className="bg-[#C06030] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8B3A1A] transition-all shadow-lg shadow-[#C06030]/30">
                🍽 Ver el Menú
              </a>
              <button className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1da851] transition-all shadow-lg shadow-[#25D366]/30 flex items-center gap-2">
                <Phone size={18} /> Pedir por WhatsApp
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              {['🏠 Casero', '🌿 Ingredientes frescos', '🇺🇾 Hecho en Uruguay', '❤ Con amor'].map(badge => (
                <span key={badge} className="bg-[#F0E8D8] border border-[#E8906A] rounded-full px-3 py-1 text-xs font-bold text-[#8B3A1A]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center animate-float">
            <svg className="w-full max-w-[340px] drop-shadow-2xl" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="105" r="90" fill="#F0E8D8" stroke="#E8906A" strokeWidth="3"/>
              <polygon points="100,25 175,78 158,78 158,175 42,175 42,78 25,78" fill="#E8906A" stroke="#C06030" strokeWidth="3" strokeLinejoin="round"/>
              <polygon points="100,27 173,79 27,79" fill="#C06030"/>
              <rect x="82" y="135" width="36" height="40" rx="18" fill="#8B3A1A"/>
              <text x="100" y="198" textAnchor="middle" fontFamily="Georgia,serif" fontSize="15" fill="#8B3A1A" fontWeight="bold">Sabores de Hogar</text>
              <text x="100" y="213" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#4A6741" letterSpacing="3" fontWeight="bold">COCINA ARTESANAL</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Menu Section Placeholder */}
      <section id="menu" className="py-20 px-8 bg-[#F0E8D8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C06030] font-bold text-xs tracking-[0.2em] uppercase mb-2">🍴 Lo que preparamos</p>
          <h2 className="font-serif text-3xl text-[#8B3A1A] mb-4">Nuestro Menú</h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#C06030] to-[#4A6741] rounded-full mb-6"></div>
          <p className="text-[#5C3317] mb-12 max-w-xl">Platos caseros preparados a diario con ingredientes frescos.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Menu items will go here */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4 text-center">
              <p className="text-gray-400 italic">Cargando platos deliciosos...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C3317] text-white/80 text-center py-8 px-4">
        <p className="font-bold">Sabores de Hogar – Cocina Artesanal · Montevideo, Uruguay</p>
        <small className="block mt-2 opacity-60">© 2025 Sabores de Hogar · Hecho con ❤ en Uruguay</small>
      </footer>

      {/* Cart FAB */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 bg-[#C06030] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[998]"
      >
        <ShoppingCart size={24} />
        <span className="absolute -top-1 -right-1 bg-[#4A6741] text-white text-[0.7rem] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">0</span>
      </button>
    </div>
  );
};

export default Index;