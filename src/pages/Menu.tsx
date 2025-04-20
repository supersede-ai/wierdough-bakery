import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/micro-interactions.css';
import { initAllAnimations } from '../lib/animations';

const Menu = () => {
  // Initialize animations on component mount
  useEffect(() => {
    initAllAnimations();
    
    // Cleanup on unmount
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-[#F4EFE9] text-[#514640]">
        {/* Hero section */}
        <div className="relative py-12 md:py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
                Our Menu
              </h1>
              <p className="text-center text-lg mb-4">
                Specialty coffee, fresh juices and modern brunch dishes with Asian influences
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white rounded-full shadow-sm text-sm">V - Vegetarian</span>
                <span className="px-3 py-1 bg-white rounded-full shadow-sm text-sm">VG - Vegan</span>
                <span className="px-3 py-1 bg-white rounded-full shadow-sm text-sm">GF - Gluten Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu content - simplified, clearer layout */}
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Drinks column */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold border-b-2 border-[#E3833B] pb-2 mb-6">Drinks</h2>
                
                {/* Coffee */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Coffee</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Espresso <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£2.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Americano <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£3 / £3.2 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Piccolo <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flat White <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cortado <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Macchiato <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cappuccino <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.6 / £4 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>House Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.8 / £4.2 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mocha <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4 / £4.4 iced</span>
                    </div>
                    <div className="text-sm text-[#514640]/70 pt-2 border-t border-[#514640]/20">
                      <p>Add oat milk / soy: £0.4</p>
                      <p>Add honey / syrup: £0.2</p>
                    </div>
                  </div>
                </div>

                {/* Specialty Drinks */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Specialty Drinks</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Kyoto Matcha Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4.5 / £5 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chai Tea Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£3.8 / £4.2 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hot Chocolate <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4 / £4.5 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Crème Brûlée Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rose Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4.5 / £5 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Caramel Cookie Latte <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4.5 / £5 iced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brown Sugar Bubble Latte / Tea <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£4.8 / £5.3 iced</span>
                    </div>
                  </div>
                </div>

                {/* Tea */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Tea</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>English Breakfast <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£3 cup / £5 pot</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Earl Grey <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£3 cup / £5 pot</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peppermint <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£3 cup / £5 pot</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mao Jian Green Tea <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£3 cup / £5 pot</span>
                    </div>
                    <div className="flex justify-between">
                      <span>House Milk Tea <span className="text-sm text-[#514640]/70">(V, VG option)</span></span>
                      <span className="font-medium">£5.5 pot</span>
                    </div>
                  </div>
                </div>

                {/* Fresh Juices */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Fresh Juices</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Orange | Red Apple | Carrot <span className="text-sm text-[#514640]/70">(VG, GF)</span></span>
                      <span className="font-medium">£6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pineapple <span className="text-sm text-[#514640]/70">(VG, GF)</span></span>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bugs Bunny <span className="text-xs text-[#514640]/70 block">(Carrot, Red Apple, Ginger)</span> <span className="text-sm text-[#514640]/70">(VG, GF)</span></span>
                      <span className="font-medium">£6.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunny Tweety <span className="text-xs text-[#514640]/70 block">(Pineapple, Orange)</span> <span className="text-sm text-[#514640]/70">(VG, GF)</span></span>
                      <span className="font-medium">£7.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Red Cheek <span className="text-xs text-[#514640]/70 block">(Beetroot, Red Apple, Ginger)</span> <span className="text-sm text-[#514640]/70">(VG, GF)</span></span>
                      <span className="font-medium">£6.8</span>
                    </div>
                  </div>
                </div>

                {/* Beer */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Beer</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Gipsy Hill IPA 4.6% <span className="text-xs text-[#514640]/70 block">(330ml Can)</span></span>
                      <span className="font-medium">£5.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gipsy Hill Lager 4.0% <span className="text-xs text-[#514640]/70 block">(330ml Can)</span></span>
                      <span className="font-medium">£5.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gipsy Hill Alc-Free IPA <span className="text-xs text-[#514640]/70 block">(330ml Can)</span></span>
                      <span className="font-medium">£4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food column */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold border-b-2 border-[#E3833B] pb-2 mb-6">Breakfast & Brunch</h2>
                
                {/* Porridge */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Porridge</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">California</span>
                        <p className="text-sm text-[#514640]/70">Topped with banana, apple, sunflower seeds, peanut butter cream</p>
                        <span className="text-sm text-[#514640]/70">(V, VG option)</span>
                      </div>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Istanbul</span>
                        <p className="text-sm text-[#514640]/70">Topped with mixed berries, roasted walnuts, honey</p>
                        <span className="text-sm text-[#514640]/70">(V)</span>
                      </div>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Seoul</span>
                        <p className="text-sm text-[#514640]/70">Topped with Korean kimchi, fried onion, garlic, fried egg</p>
                        <span className="text-sm text-[#514640]/70">(V option)</span>
                      </div>
                      <span className="font-medium">£7.8</span>
                    </div>
                  </div>
                </div>

                {/* Breakfast Yogurt */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Breakfast Yogurt</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Greek Yogurt Bowl</span>
                        <p className="text-sm text-[#514640]/70">Greek yogurt topped fresh strawberry, blueberry, roasted walnuts and honey</p>
                        <span className="text-sm text-[#514640]/70">(V, GF)</span>
                      </div>
                      <span className="font-medium">£4.5</span>
                    </div>
                  </div>
                </div>

                {/* On Toast */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">On Toast</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Eggs on Toast</span>
                        <p className="text-sm text-[#514640]/70">2 scrambled or sunny eggs on sourdough toast, fresh chives, salt, black pepper</p>
                        <span className="text-sm text-[#514640]/70">(V)</span>
                      </div>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Banana on Toast</span>
                        <p className="text-sm text-[#514640]/70">Caramalised banana, peanut butter cream, roasted oat and walnuts, fresh blueberry</p>
                        <span className="text-sm text-[#514640]/70">(V, VG option)</span>
                      </div>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Avocado on Toast</span>
                        <p className="text-sm text-[#514640]/70">Sliced avocado, rocket, sunflower seeds, feta cheese, evo, salt, black pepper</p>
                        <span className="text-sm text-[#514640]/70">(V, VG option)</span>
                      </div>
                      <span className="font-medium">£7.8</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Salmon on Toast</span>
                        <p className="text-sm text-[#514640]/70">Cream cheese, smoked salmon, capers, red onions, dill, fresh chives, evo, salt and black pepper</p>
                      </div>
                      <span className="font-medium">£7</span>
                    </div>
                    <div className="text-sm text-[#514640]/70 pt-2 border-t border-[#514640]/20">
                      <p className="font-medium mb-1">Extras:</p>
                      <p>Egg: £2, Scrambled £2.5 | Avocado: £3 | Salmon: £3</p>
                      <p>Cheese: £1.5 | Ham: £2.5 | Rocket salad: £2 | Tuno Mayo: £3</p>
                    </div>
                  </div>
                </div>

                {/* Rolls */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Rolls</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Spanich - Feta <span className="text-sm text-[#514640]/70">(V)</span></span>
                      <span className="font-medium">£5.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pork Sausage</span>
                      <span className="font-medium">£5.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vegan Sausage <span className="text-sm text-[#514640]/70">(VG)</span></span>
                      <span className="font-medium">£6</span>
                    </div>
                  </div>
                </div>

                {/* The Rug Croast */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">The Rug Croast</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Cheese Croast <span className="text-sm text-[#514640]/70">(V)</span></span>
                      <span className="font-medium">£4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Beef Tomatoes & Cheese <span className="text-sm text-[#514640]/70">(V)</span></span>
                      <span className="font-medium">£5.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Turkey & Cheese & Tomatoes</span>
                      <span className="font-medium">£6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ham & Cheese & Tomatoes</span>
                      <span className="font-medium">£6.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ham or Turkey & Cheese Omelet</span>
                      <span className="font-medium">£8.8</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span>Smash Avocado & Egg & Rocket & Feta <span className="text-sm text-[#514640]/70">(V)</span></span>
                      </div>
                      <span className="font-medium">£9.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <p className="text-lg font-medium mb-2">Hours</p>
            <p className="mb-1">Monday - Saturday: 8am - 6pm</p>
            <p className="mb-4">Sunday: 8am - 4pm</p>
            <p className="text-lg font-medium mb-2">Location</p>
            <p className="mb-1">309-311 Harrow Rd, London W9 3RG</p>
            <p className="text-sm text-[#514640]/70 mt-6">Prices may vary. Please ask your server for any allergen information.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
