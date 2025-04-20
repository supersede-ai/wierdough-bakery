import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/micro-interactions.css';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  permalink: string;
}

interface InstagramFeedProps {
  postCount?: number;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ postCount = 6 }) => {
  // In a real implementation, you would fetch this data from Instagram API
  // For demo purposes, we'll use mock data
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    
    // Mock Instagram data
    const mockPosts: InstagramPost[] = [
      {
        id: '1',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram2-iIiUF6so0LREToo7xXkXjNNlfd0p5G.jpg',
        caption: 'Start your day right with our signature matcha latte ☕ #RugCafe #MorningVibes',
        likes: 124,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '2',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram5-ziW9iStMXLMjkqjAA2uZoKGhVVEGrz.jpg',
        caption: 'Our banana oatmeal bowl is the perfect healthy breakfast option 🍌 #HealthyEating #BreakfastGoals',
        likes: 98,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '3',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram8-c9MLDs8OvwKpIf7OaPDrS1jLW0A9Hl.jpg',
        caption: 'Latte art is our passion ❤️ #CoffeeArt #BaristaMagic',
        likes: 156,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '4',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram6-g8B6wiehtr6aIDLcE1hlKYkLZTMKqF.jpg',
        caption: 'Our Korean-inspired breakfast is a customer favorite! #FusionFood #BrunchTime',
        likes: 132,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '5',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram3-ssSeDlHnRMhdbnKrA2WkFtpANoIPl2.jpg',
        caption: 'Sweet treats to brighten your day 🍓 #Desserts #SweetTooth',
        likes: 87,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '6',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram11-9ukr9L9k9n8qWWBx8bXPhWfJTmTadm.jpg',
        caption: 'Cool down with our refreshing iced matcha 🍵 #SummerVibes #Matcha',
        likes: 109,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '7',
        imageUrl: 'https://2r66v53nwmfsqes8.public.blob.vercel-storage.com/photosFromInstagram9-Ogm8xP3xXSub3Pul9cofPQnyDE7qyz.jpg',
        caption: 'Behind the scenes with our barista team! #TeamWork #CoffeeLovers',
        likes: 76,
        permalink: 'https://www.instagram.com/therug_london/'
      },
      {
        id: '8',
        imageUrl: 'https://images.unsplash.com/photo-1579494376913-9af0c980e4a7',
        caption: 'Weekend vibes at The Rug Café ✨ #WeekendBrunch #CafeLife',
        likes: 143,
        permalink: 'https://www.instagram.com/therug_london/'
      }
    ];
    
    setTimeout(() => {
      setPosts(mockPosts.slice(0, postCount));
      setIsLoading(false);
    }, 1000);
  }, [postCount]);

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Instagram</h2>
        <p className="text-lg text-[#514640]/80 max-w-2xl mx-auto">
          Follow us <a href="https://www.instagram.com/therug_london/" target="_blank" rel="noopener noreferrer" className="text-[#E3833B] hover:underline">@therug_london</a> for daily inspiration and behind-the-scenes moments
        </p>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E3833B]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg img-hover-zoom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={post.imageUrl} 
                alt={post.caption}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="text-white p-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm line-clamp-3">{post.caption}</p>
                  <div className="flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
      
      <div className="text-center mt-10">
        <a
          href="https://www.instagram.com/therug_london/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#E3833B] to-[#FFB347] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
          </svg>
          <span>View More on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
