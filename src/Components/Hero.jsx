import React from 'react';
import heroimg from '../assets/hero1.jpg';

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <img 
        className="w-full h-[101vh] object-cover" 
        src={heroimg} 
        alt="hero img" 
      />

      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white max-w-3xl">
        <p className="text-sm md:text-base tracking-wide mb-3">
          Approach
        </p>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-5 uppercase">
          We vitalize<br />public spaces
        </h1>

        <p className="text-sm md:text-lg leading-relaxed">
          A vital society is dependent on the presence of inclusive public places. 
          To realize those places, we need to understand society. Get to know the 
          people. Explore their needs. Hear the heart beating. This is how we 
          create not just a place, but a home for everyone. Exactly what a society 
          needs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
