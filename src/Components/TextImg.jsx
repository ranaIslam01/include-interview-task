import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import textimg1 from "../assets/text-img-1.jpg";
import textimg2 from "../assets/text-img-2.jpg";

const TextImg = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const width = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div
      ref={ref}
      className="relative text-primary bg-secondary font-bold text-[59px] text-center px-[18%] py-20 uppercase leading-snug"
    >
      Each step in our sophisticated{" "}
      <motion.img
        src={textimg1}
        alt="img1"
        className="inline-block rounded align-middle"
        style={{ width, height: "auto" }}
      />
      {" "}model determines the success of the next. We take every step{" "}
      <motion.img
        src={textimg2}
        alt="img2"
        className="inline-block rounded align-middle"
        style={{ width, height: "auto" }}
      />
      {" "}together. After all, you don’t create a home alone.
    </div>
  );
};

export default TextImg;
