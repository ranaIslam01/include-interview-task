import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-primary h-screen text-secondary py-16 px-16">

         <div className='flex justify-end'>
            <button className="flex items-center gap-2 uppercase border border-secondary text-secondary px-5 py-1 rounded-full hover:text-primary hover:bg-secondary duration-500 font-bold cursor-pointer mb-10">
            Scroll to top 
            <MdOutlineArrowOutward size={20} />
          </button>
         </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* SECTION 1 */}
        <div className="space-y-6">
          <h1 className="uppercase text-[52px] font-bold leading-[55px]">
            Fueling inclusivity
          </h1>

          <p className="text-[16px]">
            Sign up for our newsletter full of valuable stories, tips, links, 
            the latest updates and inspiration.
          </p>

          <div>
            <input
              type="text"
              className="w-full border-b border-secondary bg-transparent pb-3 outline-none pl-2"
              placeholder="E-mailadres"
            />
          </div>

          <button className="flex items-center gap-2 uppercase border border-secondary text-secondary px-5 py-1 rounded-full hover:text-primary hover:bg-secondary duration-500 font-bold cursor-pointer">
            Keep me informed 
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>

        {/* SECTION 2 */}
        <div className="flex justify-center">
          <ul className="uppercase text-[21px] font-bold space-y-4 text-center">
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Approach</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Insights</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="space-y-4">
          <h1 className="text-[21px] font-bold">OFFICE</h1>

          <div className="text-[16px] space-y-1">
            <p className='hover:underline cursor-pointer font-bold'>Boumaboulevard 659723 ZS Groningen</p>
            <p className='hover:underline cursor-pointer font-bold'>The Netherlands</p>
            <p className='hover:underline cursor-pointer font-bold'>welcome@includi.com</p>
            <p className='hover:underline cursor-pointer font-bold'>+31 6 154 81 797</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">

            <div className="w-10 h-10 bg-secondary clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white">
              <FaLinkedinIn  className="text-black text-xl" />
            </div>

            <div className="w-10 h-10 bg-secondary clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white">
              <FaInstagram  className="text-black text-xl" />
            </div>

            <div className="w-10 h-10 bg-secondary clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white">
              <FaYoutube className="text-black text-xl" />
            </div>

            <div className="w-10 h-10 bg-secondary clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white">
              <FaFacebookF  className="text-black text-xl" />
            </div>

          </div>
        </div>
      </div>

      {/* All right reserved */}
      <hr className='mt-30'/>
      <div className='flex items-center justify-between text-[14px] mt-10'>
         <p>@ All right reserved</p>
         <h1 className='font-bold text-2xl'>Includi</h1>
         <p>privecy & cookies</p>
      </div>



    </div>
  );
};

export default Footer;
