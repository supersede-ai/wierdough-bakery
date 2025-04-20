
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/extra-animations.css';
import '../styles/micro-interactions.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import FloatingBookButton from '../components/FloatingBookButton';
import ImageGallery from '../components/ImageGallery';
import TeamSection from '../components/TeamSection';
import InstagramFeed from '../components/InstagramFeed';
import EventsCalendar from '../components/EventsCalendar';
import NewsletterSignup from '../components/NewsletterSignup';
import { initAllAnimations, addGrainTexture } from '../lib/animations';

const Index = () => {
  // Initialize animations on component mount
  useEffect(() => {
    initAllAnimations();
    addGrainTexture();
    
    // Cleanup on unmount
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  const featuredImages = [
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram2-iIiUF6so0LREToo7xXkXjNNlfd0p5G.jpg',
      alt: 'Matcha Latte Art',
      title: 'Specialty Drinks',
      description: 'Handcrafted with care, from classic espresso to signature matcha',
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram5-ziW9iStMXLMjkqjAA2uZoKGhVVEGrz.jpg',
      alt: 'Banana Oatmeal Bowl',
      title: 'House Specialties',
      description: 'Fresh-baked delights featuring our house-made espresso butter',
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram8-c9MLDs8OvwKpIf7OaPDrS1jLW0A9Hl.jpg',
      alt: 'Latte with Heart Art',
      title: 'Artisanal Coffee',
      description: 'Every cup tells a story, garnished with seasonal flowers',
    }
  ];

  const menuHighlights = [
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram6-g8B6wiehtr6aIDLcE1hlKYkLZTMKqF.jpg',
      alt: 'Korean-Inspired Breakfast',
      title: 'Asian Fusion Breakfast',
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram3-ssSeDlHnRMhdbnKrA2WkFtpANoIPl2.jpg',
      alt: 'Banana Toast with Blueberries',
      title: 'Sweet Treats',
    },
    {
      src: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram11-9ukr9L9k9n8qWWBx8bXPhWfJTmTadm.jpg',
      alt: 'Iced Matcha Beverage',
      title: 'Signature Drinks',
    }
  ];

  return (
    <>
    <Layout transparentHeader>
      {/* Hero Section with enhanced animations */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden texture-grain">
        {/* Parallax/animated background overlay */}
        <div className="absolute inset-0 z-0 parallax" data-speed="0.05" style={{background: 'radial-gradient(ellipse at 60% 30%, #ffe6b8 0%, #F4EFE9 70%)'}} />
        
        {/* Animated shapes for depth and visual interest */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E3833B]/10 rounded-full blur-3xl animate-pulse-slow z-0" />
        <div className="absolute bottom-32 right-24 w-64 h-64 bg-[#514640]/10 rounded-full blur-3xl animate-float z-0" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#FFB347]/10 rounded-full blur-3xl animate-pulse-slow z-0" style={{animationDelay: '2s'}} />
      
        {/* Background image with parallax effect */}
        <div 
          className="absolute inset-0 opacity-10 parallax"
          data-speed="0.1"
          style={{
            backgroundImage: "url('https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram9-Ogm8xP3xXSub3Pul9cofPQnyDE7qyz.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}
        />
        
        <div className="container mx-auto px-4 pt-16 md:pt-28 pb-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Text reveal animation for main heading */}
            <h1 className="text-reveal text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 animate-blur-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              Slow down. Sip. Savour.
            </h1>
            
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Specialty coffee & modern brunch with Asian touches in a historic London pub
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              <Link 
                to="/book" 
                className="bg-[#E3833B] text-white px-10 py-4 rounded-full 
                  hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105
                  font-semibold text-lg shadow-lg btn-hover-effect ripple-effect"
              >
                Book a Table
              </Link>
              
              <Link 
                to="/menu" 
                className="border-2 border-[#514640] text-[#514640] px-10 py-4 
                  rounded-full hover:bg-[#514640] hover:text-white transition-all duration-300 
                  transform hover:scale-105 font-semibold text-lg ripple-effect"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center text-[#514640]/80">
            <span className="text-base mb-3 font-medium">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 animate-float">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* About/Our Story Section */}
      <section id="about" className="container mx-auto my-20 px-4 animate-fade-in-up opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&q=80" alt="Founder portrait" className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 md:mb-0" />
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-4">The Rug Café was born from a love of great coffee, community, and the vibrant flavors of London. Founded by <strong>Samira & the team</strong>, our mission is to create a welcoming space where everyone can slow down, sip, and savour the moment. Whether you're here for a quick espresso or a long brunch with friends, we hope you feel at home.</p>
            <blockquote className="italic text-[#E3833B]">“We believe every cup tells a story. Thank you for being part of ours.”</blockquote>
          </div>
        </div>
      </section>

      {/* Featured Carousel with hover effects */}
      <div className="mt-16 md:mt-24 container animate-fade-in-up opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">


      {/* Instagram Callout Section */}
      <div className="my-16 flex flex-col items-center justify-center animate-fade-in opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]">
        <a
          href="https://www.instagram.com/therug_london/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E3833B] to-[#FFB347] text-white font-bold text-xl shadow-lg hover:scale-105 hover:from-[#d97706] hover:to-[#fbbf24] transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
          <span>Follow us on Instagram</span>
        </a>
        <p className="mt-4 text-[#514640] text-lg text-center max-w-xl">See our latest creations, behind-the-scenes, and community moments!</p>
      </div>

        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center animate-fade-in">
          Featured Delights
        </h2>
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {featuredImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none">
                  <CardContent className="p-2">
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-center px-4">
                          <h3 className="text-white font-semibold text-xl mb-2">{image.title}</h3>
                          <p className="text-white text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* Instagram Callout Section */}
      <div className="my-16 flex flex-col items-center justify-center animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
        <a
          href="https://www.instagram.com/therug_london/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E3833B] to-[#FFB347] text-white font-bold text-xl shadow-lg hover:scale-105 hover:from-[#d97706] hover:to-[#fbbf24] transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
          <span>Follow us on Instagram</span>
        </a>
        <p className="mt-4 text-[#514640] text-lg text-center max-w-xl">See our latest creations, behind-the-scenes, and community moments!</p>
      </div>

      {/* Testimonials Section */}
      <section className="container mx-auto my-20 px-4 animate-fade-in-up opacity-0 [animation-delay:1100ms] [animation-fill-mode:forwards]">
        <h2 className="text-3xl font-playfair font-bold mb-10 text-center">What Our Guests Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-[#fff7ed] rounded-xl shadow-lg p-6 max-w-sm flex flex-col items-center hover-lift">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Happy customer" className="w-16 h-16 rounded-full mb-2" />
            <p className="italic mb-2">"The best brunch spot in London! The matcha latte and kimchi toastie are a must."</p>
            <span className="font-semibold">— Priya K.</span>
          </div>
          <div className="bg-[#fff7ed] rounded-xl shadow-lg p-6 max-w-sm flex flex-col items-center hover-lift">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Happy customer" className="w-16 h-16 rounded-full mb-2" />
            <p className="italic mb-2">"Cosy vibe, friendly staff, and delicious food. I always bring my friends here."</p>
            <span className="font-semibold">— Alex M.</span>
          </div>
          <div className="bg-[#fff7ed] rounded-xl shadow-lg p-6 max-w-sm flex flex-col items-center hover-lift">
            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Happy customer" className="w-16 h-16 rounded-full mb-2" />
            <p className="italic mb-2">"A hidden gem! The atmosphere is so relaxing and the pastries are divine."</p>
            <span className="font-semibold">— Fatima S.</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto my-24 px-4 scroll-trigger">
        <TeamSection teamMembers={[
          {
            name: "Samira Ahmed",
            role: "Founder & Head Chef",
            bio: "With over 15 years of culinary experience across Asia and Europe, Samira founded The Rug Café to blend her passion for specialty coffee with innovative Asian-inspired cuisine. Her commitment to quality and community has made the café a beloved local institution.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
            favoriteItem: "Kimchi Cheese Toastie with our house-blend espresso"
          },
          {
            name: "James Wilson",
            role: "Head Barista",
            bio: "A certified Q-grader with a background in specialty coffee shops across London, James brings his technical expertise and passion for perfect extraction to every cup. He's constantly experimenting with new brewing methods and seasonal beans.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
            favoriteItem: "Our seasonal single-origin pour-over"
          },
          {
            name: "Mei Lin",
            role: "Pastry Chef",
            bio: "Trained in both French and Japanese pastry techniques, Mei creates our signature baked goods that perfectly balance sweetness with complex flavors. Her matcha-infused pastries have developed a cult following among our regulars.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
            favoriteItem: "Black sesame and white chocolate cookies"
          }
        ]} />
      </section>

      {/* Events Calendar Section */}
      <section className="container mx-auto my-24 px-4 bg-[#F4EFE9]/50 py-16 rounded-3xl scroll-trigger">
        <EventsCalendar events={[
          {
            id: "1",
            title: "Coffee Brewing Masterclass",
            description: "Join our head barista James for an interactive workshop on brewing methods. Learn the secrets behind the perfect pour-over, French press, and AeroPress techniques. All participants will receive a bag of our house-blend coffee beans to take home.",
            date: new Date(new Date().setDate(new Date().getDate() + 5)),
            time: "18:30 - 20:00",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
            ticketLink: "#"
          },
          {
            id: "2",
            title: "Asian Fusion Dinner Night",
            description: "A special evening featuring a six-course tasting menu that showcases our chef's innovative approach to Asian fusion cuisine. Each course is paired with either specialty tea, coffee, or natural wine. Limited seating available.",
            date: new Date(new Date().setDate(new Date().getDate() + 12)),
            time: "19:00 - 22:00",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80",
            ticketLink: "#"
          },
          {
            id: "3",
            title: "Latte Art Workshop",
            description: "Learn the basics of latte art from our expert baristas. This hands-on workshop will teach you how to create hearts, rosettas, and tulips in your coffee. Perfect for beginners and intermediate coffee enthusiasts.",
            date: new Date(new Date().setDate(new Date().getDate() + 19)),
            time: "10:30 - 12:00",
            image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
            ticketLink: "#"
          }
        ]} />
      </section>

      {/* Instagram Feed Section */}
      <section className="container mx-auto my-24 px-4 scroll-trigger">
        <InstagramFeed postCount={6} />
      </section>

      {/* Menu Preview with scroll animations */}
      <section className="py-20 bg-white animate-fade-in-up opacity-0 [animation-delay:1300ms] [animation-fill-mode:forwards]">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">Current Favorites</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuHighlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                    <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Discover our seasonal selection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section with parallax effect */}
      <section className="py-20 bg-[#F4EFE9]/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="animate-fade-in">
                The Café brings new life to the historic Windsor Castle pub (est. 1829), 
                combining London's pub heritage with modern specialty coffee culture.
              </p>
              <p className="animate-fade-in [animation-delay:200ms]">
                We focus on sustainability, working with local suppliers and creating a 
                welcoming neighborhood space where everyone can slow down and savor the moment.
              </p>
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-0 opacity-5 transform -skew-y-6 scale-125"
          style={{
            backgroundImage: "url('https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram9-Ogm8xP3xXSub3Pul9cofPQnyDE7qyz.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </section>
    </Layout>

    {/* Floating Book Button */}
    <FloatingBookButton />
    
    {/* Newsletter Signup */}
    <NewsletterSignup delay={8000} />
    </>
  );
};

export default Index;
