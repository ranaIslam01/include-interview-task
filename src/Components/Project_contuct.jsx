import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Project_contuct = () => {
  return (
    // Added h-screen to the container
    // Responsive grid: Single column on small screens, two columns from medium screens (md)
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-black h-screen">

      {/* LEFT SECTION (WORK) */}
      <section 
        // Adjusted padding and responsiveness
        className="relative group hover:text-primary-white hover:bg-primary duration-500 text-primary bg-secondary uppercase border-b md:border-b-0 md:border-r border-black cursor-pointer p-10 md:p-14 lg:p-20 overflow-hidden"
      >

        {/* Hover Image Background */}
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

        {/* Content wrapper with Flexbox to ensure vertical alignment of content */}
        <div className="relative z-10 flex flex-col h-full justify-between"> 
          <div> {/* Top part: h4 and h1 */}
            <h4 className="text-sm uppercase">WORK</h4>
            
            {/* Responsive Heading Size */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[67px] font-bold mt-2">Discover our inclusive places</h1>
          </div>

          {/* Bottom part: Button */}
          <button className="flex text-sm items-center gap-2 uppercase border bg-transparent px-5 py-1 rounded-full hover:border hover:text-primary hover:border-primary-white hover:bg-primary-white duration-500 font-bold cursor-pointer self-start">
            View Projects
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </section>

      {/* RIGHT SECTION (CONTACT) */}
      <section 
        // Adjusted padding and responsiveness
        className="relative group hover:text-primary-white hover:bg-primary duration-500 text-primary bg-secondary uppercase cursor-pointer p-10 md:p-14 lg:p-20 overflow-hidden"
      >

        {/* Hover Image Background */}
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

        {/* Content wrapper with Flexbox to ensure vertical alignment of content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div> {/* Top part: h4 and h1 */}
            <h4 className="text-sm">get in touch</h4>
            
            {/* Responsive Heading Size */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[67px] font-bold mt-2">Let's connect</h1>
          </div>
          
          {/* Bottom part: Button */}
          <button className="flex text-sm items-center gap-2 uppercase border bg-transparent px-5 py-1 rounded-full hover:border hover:text-primary hover:border-primary-white hover:bg-primary-white duration-500 font-bold cursor-pointer self-start">
            Contact
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Project_contuct;