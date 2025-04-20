
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedBookingForm from '../components/EnhancedBookingForm';
import '../styles/micro-interactions.css';
import { initAllAnimations, addGrainTexture, initFormValidation } from '../lib/animations';

const Book = () => {
  // Initialize animations on component mount
  useEffect(() => {
    initAllAnimations();
    addGrainTexture();
    initFormValidation();
    
    // Cleanup on unmount
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4EFE9] text-[#514640] font-inter">
      <header className="py-6 px-4 border-b border-[#514640]/10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="w-24">
            <img 
              src="/logo_new.webp" 
              alt="The Rug Cafe Logo" 
              className="w-full h-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-[#E3833B] transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-[#E3833B] transition-colors">Menu</Link>
            <Link to="/book" className="bg-[#E3833B] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Book a Table
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">Book Your Visit</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-lg mb-8">
            Join us for a coffee, brunch, or special event. We recommend booking in advance, especially for weekends.
          </p>
          
          <div className="animate-zoom-in">
            <EnhancedBookingForm />
          </div>
        </div>
      </div>
      
      <footer className="bg-[#514640] text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img 
                src="/logo_new.webp" 
                alt="The Rug Cafe Logo" 
                className="w-32 h-auto mb-4 mx-auto md:mx-0 invert"
              />
              <p className="text-center md:text-left">309-311 Harrow Rd, London W9 3RG</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="mb-2">Mon-Sat: 08:00-18:00 | Sun: 08:00-16:00</p>
              <button className="bg-[#E3833B] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                +44 (0)20-1234-5678
              </button>
              
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-[#E3833B] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#E3833B] transition-colors">TikTok</a>
                <a href="#" className="hover:text-[#E3833B] transition-colors">Spotify</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Book;
