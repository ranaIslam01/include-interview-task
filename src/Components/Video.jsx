import React from 'react';

const Video = () => {
  return (
    // Full screen container, hides video overflow
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Element */}
      <video
        className="w-full h-full object-cover"
        src="/video/simple-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay and Text Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
        
        {/* Responsive Heading: text-4xl on mobile, up to 7xl on large screens */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center px-4 sm:px-8">
          This is how we make impact
        </h1>
      </div>
    </div>
  );
};

export default Video;