import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import textimg1 from "../assets/text-img-1.jpg";
import textimg2 from "../assets/text-img-2.jpg";

const TextImg = () => {
  const ref = useRef(null);

  // Set up scroll tracking for the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  // Calculate maximum width based on screen size: smaller on mobile, larger on desktop (max 220px)
  // ফ্রেমার-মোশন মিডিয়া কোয়েরি হ্যান্ডেল করে না, তাই `220` এর পরিবর্তে একটি একক মান রাখা ভালো।
  // তবে যেহেতু Tailwind ক্লাসে টেক্সট ছোট হচ্ছে, 220px সাধারণত ঠিক থাকবে। 
  const width = useTransform(scrollYProgress, [0, 1], [0, 220]); 

  // Alternatively, you could use a static smaller width for a better fit on all screens:
  // const width = useTransform(scrollYProgress, [0, 1], [0, 150]); 

  return (
    // Responsive Text Sizing (text-3xl -> md:text-5xl -> lg:text-[59px]) 
    // Responsive Padding (px-4 -> sm:px-10 -> md:px-20 -> lg:px-[18%])
    <div
      ref={ref}
      className="relative text-primary bg-secondary font-bold 
                 text-3xl sm:text-4xl md:text-5xl lg:text-[59px] 
                 text-center py-10 sm:py-16 lg:py-20 
                 px-4 sm:px-10 md:px-20 lg:px-[18%] 
                 uppercase leading-snug"
    >
      Each step in our sophisticated{" "}
      
      {/* Animated Image 1 */}
      <motion.img
        src={textimg1}
        alt="img1"
        className="inline-block rounded align-middle"
        // Apply dynamic width for scroll effect
        style={{ width, height: "auto" }}
      />
      {" "}model determines the success of the next. We take every step{" "}
      
      {/* Animated Image 2 */}
      <motion.img
        src={textimg2}
        alt="img2"
        className="inline-block rounded align-middle"
        // Apply dynamic width for scroll effect
        style={{ width, height: "auto" }}
      />
      {" "}together. After all, you don’t create a home alone.
    </div>
  );
};

export default TextImg;