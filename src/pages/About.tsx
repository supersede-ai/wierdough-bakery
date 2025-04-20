import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { initAllAnimations } from '../lib/animations';

const About = () => {
  // Initialize animations on component mount
  useEffect(() => {
    // Add a small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      initAllAnimations();
    }, 100);
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      // Remove any event listeners if needed
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-[#F4EFE9] text-[#514640]">
        {/* Hero section with parallax effect */}
        <div className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{background: 'radial-gradient(ellipse at 60% 30%, #ffe6b8 0%, #F4EFE9 70%)'}} />
          {/* Animated shapes for visual interest */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E3833B]/10 rounded-full blur-3xl animate-pulse-slow z-0" />
          <div className="absolute bottom-32 right-24 w-64 h-64 bg-[#514640]/10 rounded-full blur-3xl animate-float z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-center opacity-0" style={{animation: 'fadeIn 1s forwards'}}>
              Our Story
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto opacity-0" style={{animation: 'fadeIn 1s forwards', animationDelay: '300ms'}}>
              A place to slow down, connect, and savor the moment
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Philosophy section with enhanced styling */}
            <section className="mb-20 scroll-trigger">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-8 leading-relaxed">
                  Amid the city's rhythm, <span className="font-semibold text-[#E3833B]">the rug</span> offers a sanctuary to eat, drink, and relax. 
                  We bring together modern brunch with Asian flavours and a welcoming coffeehouse experience.
                </p>
                
                <p className="text-xl mb-8 leading-relaxed">
                  We take pride in supporting small London producers, celebrating craft, and 
                  championing sustainability in everything we do.
                </p>
              </div>
            </section>

            {/* Image gallery section with multiple images */}
            <section className="mb-20 scroll-trigger">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img
                    src="https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram2-iIiUF6so0LREToo7xXkXjNNlfd0p5G.jpg"
                    alt="The Rug Café interior"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img
                    src="https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram8-c9MLDs8OvwKpIf7OaPDrS1jLW0A9Hl.jpg"
                    alt="Latte with latte art"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </section>

            {/* History section with decorative elements */}
            <section className="mb-20 scroll-trigger">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 relative">
                <span className="bg-[#E3833B]/10 px-4 py-1 rounded">A Little History</span>
              </h2>
              <div className="prose prose-lg max-w-none border-l-4 border-[#E3833B]/30 pl-6">
                <p className="text-lg mb-8 leading-relaxed">
                  The Windsor Castle opened in 1829 and, by the 1960s, had become a renowned 
                  music venue, hosting early gigs by The Rolling Stones and U2.
                </p>
                
                <p className="text-lg mb-8 leading-relaxed">
                  Then one day, the doors closed. For fifteen years, the building stood empty—until we moved in.
                </p>
                
                <p className="text-lg mb-8 leading-relaxed">
                  Driven by a vision to bring new life to this old pub, we started <span className="font-semibold text-[#E3833B]">the rug</span>—a place 
                  for the community once again. A little oasis on Harrow Road.
                </p>
              </div>
            </section>

            {/* Team section with enhanced cards */}
            <section className="mb-20 scroll-trigger">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Our Team</h2>
              <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
                The heart of <span className="font-semibold text-[#E3833B]">the rug</span> is our passionate team, committed to crafting exceptional 
                experiences and making every visitor feel welcome.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" 
                    alt="Samira Ahmed" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-[#F4EFE9]"
                  />
                  <h3 className="font-semibold text-2xl text-center mb-2">Samira Ahmed</h3>
                  <p className="text-center text-[#E3833B] font-medium mb-4">Founder & Head Chef</p>
                  <p className="text-center leading-relaxed">
                    With a culinary background spanning Asia and Europe, Samira brings her passion 
                    for flavor fusion and community building to every aspect of the rug.
                  </p>
                  <p className="text-center mt-4 text-sm italic">
                    "My favorite: Kimchi Cheese Toastie with our house-blend espresso"
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
                    alt="James Wilson" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-[#F4EFE9]"
                  />
                  <h3 className="font-semibold text-2xl text-center mb-2">James Wilson</h3>
                  <p className="text-center text-[#E3833B] font-medium mb-4">Head Barista</p>
                  <p className="text-center leading-relaxed">
                    James ensures every cup served at the rug meets our exacting standards, 
                    while continuously exploring new coffee trends and techniques.
                  </p>
                  <p className="text-center mt-4 text-sm italic">
                    "My favorite: Our signature Kyoto Matcha Latte with oat milk"
                  </p>
                </div>
              </div>
            </section>

            {/* Visit us section */}
            <section className="mb-16 scroll-trigger">
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h2 className="text-3xl font-playfair font-bold mb-6">Visit Us</h2>
                <p className="text-lg mb-2">309-311 Harrow Rd, London W9 3RG</p>
                <p className="mb-6">
                  <span className="font-medium">Mon-Sat:</span> 8am - 6pm | <span className="font-medium">Sun:</span> 8am - 4pm
                </p>
                <a 
                  href="https://maps.app.goo.gl/zEF6TvNTSSBNFnvZ9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#E3833B] text-white px-6 py-3 rounded-full 
                  hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105
                  font-medium shadow-md"
                >
                  Get Directions
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 