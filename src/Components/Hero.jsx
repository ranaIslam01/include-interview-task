import React from 'react';
import heroimg from '../assets/hero1.jpg';

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <img 
        // Responsive image height
        className="w-full h-screen lg:h-[101vh] object-cover" 
        src={heroimg} 
        alt="hero img" 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content Container */}
      {/* Position and responsive padding */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-5 sm:p-10 md:p-20">
        
        {/* Max width for text readability */}
        <div className="max-w-xl lg:max-w-3xl"> 
          
          <p className="text-sm sm:text-base tracking-wide mb-3">
            Approach
          </p>

          {/* Main Title (Responsive) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-5 uppercase">
            We vitalize<br />public spaces
          </h1>

          <p className="text-xs sm:text-base lg:text-lg leading-relaxed">
            A vital society is dependent on the presence of inclusive public places. 
            To realize those places, we need to understand society. Get to know the 
            people. Explore their needs. Hear the heart beating. This is how we 
            create not just a place, but a home for everyone. Exactly what a society 
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;