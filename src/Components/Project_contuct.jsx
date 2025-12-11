import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Project_contuct = () => {
  return (
    <div className="grid grid-cols-2 border-t border-b border-black">

      {/* LEFT SECTION */}
      <section className="relative group hover:text-primary-white hover:bg-primary duration-500 text-primary bg-secondary uppercase border-r border-black cursor-pointer p-20 overflow-hidden">

        {/* Hover Image */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-20
            duration-500
          "
          style={{
            backgroundImage: "url('/images/left-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10">
          <h4 className="text-[14px] uppercase">WORK</h4>
          <h1 className="text-[67px] font-bold">Discover our inclusive places</h1>
          <button className="mt-55 flex text-[14px] items-center gap-2 uppercase border bg-transparent px-5 py-1 rounded-full hover:border hover:text-primary hover:border-primary-white hover:bg-primary-white duration-500 font-bold cursor-pointer">
            View Projects
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="relative group hover:text-primary-white hover:bg-primary duration-500 text-primary bg-secondary uppercase border-r border-black cursor-pointer p-20 overflow-hidden">

        {/* Hover Image */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-20
            duration-500
          "
          style={{
            backgroundImage: "url('/images/right-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10">
          <h4 className="text-[14px]">get in touch</h4>
          <h1 className="text-[67px] font-bold">Let's connect</h1>
          <button className="mt-106 flex text-[14px] items-center gap-2 uppercase border bg-transparent px-5 py-1 rounded-full hover:border hover:text-primary hover:border-primary-white hover:bg-primary-white duration-500 font-bold cursor-pointer">
            Contact
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Project_contuct;
