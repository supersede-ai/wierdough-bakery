
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import EnhancedMenu from '../components/EnhancedMenu';
import ImageGallery from '../components/ImageGallery';
import '../styles/micro-interactions.css';
import { initAllAnimations, addGrainTexture } from '../lib/animations';

const Menu = () => {
  // Initialize animations on component mount
  useEffect(() => {
    initAllAnimations();
    addGrainTexture();
    
    // Cleanup on unmount
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  const menuSections = [
    {
      name: "Breakfast & Brunch",
      description: "Served until 3pm daily",
      items: [
        {
          name: "Classic Avocado Toast",
          description: "Sourdough bread topped with smashed avocado, poached eggs, chili flakes and microgreens",
          price: "£11.50",
          dietary: ["V", "GF option"]
        },
        {
          name: "Kimchi Cheese Toastie",
          description: "House-made kimchi with mature cheddar and mozzarella on our artisan sourdough",
          price: "£8.90",
          dietary: ["V"]
        },
        {
          name: "Matcha Pancakes",
          description: "Fluffy Japanese-style pancakes with ceremonial grade matcha, served with maple syrup and seasonal fruits",
          price: "£12.80",
          dietary: ["V"]
        }
      ]
    },
    {
      name: "Coffee & Tea",
      description: "Specialty grade coffee and premium loose leaf teas",
      items: [
        {
          name: "The Rug's Signature Latte",
          description: "Our house blend with hints of chocolate and caramel, available with dairy or plant-based milks",
          price: "£4.20",
          dietary: ["VG option"]
        },
        {
          name: "Seasonal Pour Over",
          description: "Single-origin coffee brewed to perfection. Ask your server for this month's selection",
          price: "£5.50",
          dietary: ["VG"]
        }
      ]
    }
  ];

  // Food gallery images
  const galleryImages = [
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram2-iIiUF6so0LREToo7xXkXjNNlfd0p5G.jpg',
      alt: 'Matcha Latte Art',
      title: 'Matcha Latte',
      description: 'Our signature matcha latte with house-made almond milk'
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram5-ziW9iStMXLMjkqjAA2uZoKGhVVEGrz.jpg',
      alt: 'Banana Oatmeal Bowl',
      title: 'Banana Oatmeal Bowl',
      description: 'Organic oats with caramelized banana and seasonal berries'
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram6-g8B6wiehtr6aIDLcE1hlKYkLZTMKqF.jpg',
      alt: 'Korean-Inspired Breakfast',
      title: 'Korean Breakfast Bowl',
      description: 'Rice bowl with kimchi, soft egg and sesame spinach'
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram3-ssSeDlHnRMhdbnKrA2WkFtpANoIPl2.jpg',
      alt: 'Banana Toast with Blueberries',
      title: 'Banana Toast',
      description: 'Sourdough toast with banana, blueberries and honey'
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram8-c9MLDs8OvwKpIf7OaPDrS1jLW0A9Hl.jpg',
      alt: 'Latte with Heart Art',
      title: 'Signature Latte',
      description: 'Our house blend espresso with velvety microfoam'
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram11-9ukr9L9k9n8qWWBx8bXPhWfJTmTadm.jpg',
      alt: 'Iced Matcha Beverage',
      title: 'Iced Matcha',
      description: 'Ceremonial grade matcha over ice with oat milk'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#F4EFE9] text-[#514640] texture-grain">
        {/* Hero section with parallax effect */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 parallax" data-speed="0.05" style={{background: 'radial-gradient(ellipse at 60% 30%, #ffe6b8 0%, #F4EFE9 70%)'}} />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E3833B]/10 rounded-full blur-3xl animate-pulse-slow z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center animate-blur-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                Our Menu
              </h1>
              
              <div className="mb-12">
                <p className="text-center text-lg mb-8 animate-fade-in [animation-delay:400ms] [animation-fill-mode:forwards] opacity-0">
                  We offer a carefully curated selection of specialty coffees and modern brunch dishes with Asian influences, 
                  using seasonal ingredients from local suppliers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Food gallery section */}
        <div className="container mx-auto px-4 py-16 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Our Creations</h2>
          <div className="max-w-6xl mx-auto">
            <ImageGallery images={galleryImages} columns={3} />
          </div>
        </div>
        
        {/* Enhanced menu section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-8 text-center animate-fade-in">
              Menu Selection
            </h2>
            
            <EnhancedMenu menuSections={menuSections} />
          </div>
        </div>

        {/* Chef's note section */}
        <div className="container mx-auto px-4 py-16 mb-16">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md hover-lift">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-[#E3833B]">A Note from Our Chef</h3>
            <p className="text-[#514640]/80 mb-6 italic">
              "Our menu changes with the seasons, always featuring the freshest ingredients from our trusted local suppliers. 
              We believe in creating dishes that not only taste incredible but also tell a story – connecting traditional Asian 
              flavors with modern London sensibilities. Every plate that leaves our kitchen is crafted with care and passion."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" 
                alt="Chef Samira" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <p className="font-semibold">Samira Ahmed</p>
                <p className="text-sm text-[#514640]/70">Head Chef & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
