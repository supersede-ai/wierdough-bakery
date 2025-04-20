
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logo-animations.css';

type LayoutProps = {
  children: React.ReactNode;
  transparentHeader?: boolean;
};

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F4EFE9] text-[#514640] font-inter flex flex-col">
      <header className={`py-6 px-4 sticky top-0 z-50 bg-[#F4EFE9]/95 backdrop-blur border-b border-[#514640]/10 shadow-md transition-shadow`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="w-24">
            <img 
              src="https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/Logo-THJYQlFkccpv4bJXjsOHucdIpZS6lP.jpg" 
              alt="The Rug Cafe Logo" 
              className="w-full h-auto transition-transform duration-500 ease-out opacity-0 translate-y-[-16px] animate-logo-fade-in hover:scale-110 hover:shadow-2xl hover:z-10 focus:outline-none"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            />
          </Link>
          <nav className="hidden md:flex space-x-10 items-center">
            <Link to="/" className="hover:text-[#E3833B] transition-colors text-lg font-medium px-2 py-1">Home</Link>
            <Link to="/menu" className="hover:text-[#E3833B] transition-colors text-lg font-medium px-2 py-1">Menu</Link>
            <a href="#about" className="hover:text-[#E3833B] transition-colors text-lg font-medium px-2 py-1">About</a>
            <Link to="/book" className="bg-[#E3833B] text-white px-7 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold">
              Book a Table
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => {
              const menu = document.getElementById('mobileNav');
              if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Mobile nav dropdown */}
          <div
            id="mobileNav"
            className="md:hidden absolute top-20 right-4 bg-white rounded-xl shadow-lg py-4 px-8 flex flex-col space-y-4 z-50 border border-[#F4EFE9]"
            style={{display: 'none'}}
            tabIndex={-1}
            aria-label="Mobile navigation menu"
          >
            <Link to="/" className="hover:text-[#E3833B] transition-colors" onClick={() => {document.getElementById('mobileNav').style.display = 'none';}}>Home</Link>
            <Link to="/menu" className="hover:text-[#E3833B] transition-colors" onClick={() => {document.getElementById('mobileNav').style.display = 'none';}}>Menu</Link>
            <a href="#about" className="hover:text-[#E3833B] transition-colors" onClick={() => {document.getElementById('mobileNav').style.display = 'none';}}>About</a>
            <Link to="/book" className="bg-[#E3833B] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-semibold" onClick={() => {document.getElementById('mobileNav').style.display = 'none';}}>
              Book a Table
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-[#514640] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
  <img 
    src="https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/Logo-THJYQlFkccpv4bJXjsOHucdIpZS6lP.jpg" 
    alt="The Rug Cafe Logo" 
    className="w-32 h-auto mb-4 mx-auto md:mx-0 transition-transform duration-500 ease-out opacity-0 translate-y-[-16px] animate-logo-fade-in hover:scale-110 hover:shadow-2xl hover:z-10 focus:outline-none"
    style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
  />
  <p className="text-center md:text-left font-semibold mb-2">309-311 Harrow Rd, London W9 3RG</p>
  <div className="w-full max-w-xs md:max-w-[300px] rounded-lg shadow-lg overflow-hidden mb-2">
    <iframe
      title="The Rug Cafe Map"
      src="https://www.google.com/maps?q=309-311+Harrow+Rd,+London+W9+3RG&output=embed"
      width="100%"
      height="180"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <a
    href="https://maps.google.com/?q=309-311+Harrow+Rd,+London+W9+3RG"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#E3833B] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-semibold mb-2"
  >
    Get Directions
  </a>
</div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="mb-2 font-semibold">Mon-Sat: 08:00-18:00 | Sun: 08:00-16:00</p>
              <button className="bg-[#E3833B] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-semibold">
  +44 (0)20-1234-5678
</button>
              
              <div className="flex space-x-4 mt-4">
  <a href="https://www.instagram.com/therug_london/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#E3833B] transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="22" height="22" className="mr-1"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
    Instagram
  </a>
</div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-white/70">
  <p>© {new Date().getFullYear()} The Rug Café. All rights reserved.</p>
</div>
        </div>
      </footer>
    {/* Scroll-to-top button */}
    <button
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="fixed bottom-8 right-8 z-50 bg-[#E3833B] text-white rounded-full p-4 shadow-lg hover:bg-[#d97706] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Scroll to top"
      style={{display: 'none'}}
      id="scrollToTopBtn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
    </button>
  </div>
  );
};

export default Layout;
