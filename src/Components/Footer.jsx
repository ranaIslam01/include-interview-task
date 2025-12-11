import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';

const FOOTER_MENU = [
  "Projects",
  "Approach",
  "About Us",
  "Insights",
  "Contact",
];

const OFFICE_INFO = [
  "Boumaboulevard 659723 ZS Groningen",
  "The Netherlands",
  "welcome@includi.com",
  "+31 6 154 81 797",
];

const SOCIAL_ICONS = [
  { icon: FaLinkedinIn, key: "linkedin" },
  { icon: FaInstagram, key: "instagram" },
  { icon: FaYoutube, key: "youtube" },
  { icon: FaFacebookF, key: "facebook" },
];

const Footer = () => {
  return (
    <div className="bg-primary h-full lg:h-screen text-secondary py-16 px-6 md:px-16">
      
      <div className='flex justify-end'>
        <a href='/' className="flex items-center gap-2 uppercase border border-secondary text-secondary px-5 py-1 rounded-full hover:text-primary hover:bg-secondary duration-500 font-bold cursor-pointer mb-10">
          Scroll to top 
          <MdOutlineArrowOutward size={20} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div className="space-y-6">
          <h1 className="uppercase text-[40px] md:text-[52px] font-bold leading-[45px] md:leading-[55px]">
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

        <div className="flex justify-start md:justify-center">
          <ul className="uppercase text-[18px] md:text-[21px] font-bold space-y-4 text-left">
            {FOOTER_MENU.map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-[21px] font-bold">OFFICE</h1>

          <div className="text-[16px] space-y-1">
            {OFFICE_INFO.map((info) => (
                <p key={info} className='hover:underline cursor-pointer font-bold'>
                    {info}
                </p>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {SOCIAL_ICONS.map((social) => {
                const IconComponent = social.icon;
                return (
                    <div 
                        key={social.key} 
                        className="w-8 h-8 bg-secondary clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white"
                    >
                        <IconComponent className="text-black text-xl" />
                    </div>
                );
            })}
          </div>
        </div>
      </div>

      <hr className='mt-10 md:mt-32'/> 
      <div className='flex flex-col md:flex-row items-center justify-between text-[14px] mt-10 space-y-2 md:space-y-0'>
         <p>@ All right reserved</p>
         <h1 className='font-bold text-2xl'>Includi</h1>
         <p>privecy & cookies</p>
      </div>
    </div>
  );
};

export default Footer;