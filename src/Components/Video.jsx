const Video = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/video/simple-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-4xl md:text-6xl uppercase text-center px-4">
          This is how we make impact
        </h1>
      </div>
    </div>
  );
};

export default Video;
