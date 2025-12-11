import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// ডেটা অ্যারে: ডেস্কটপ মেনু আইটেম
const DESKTOP_MENU_ITEMS = [
  "APPROACH",
  "PROJECTS",
  "INSIGHTS",
  "ABOUT US",
];

// ডেটা অ্যারে: মেগা মেনু আইটেম
const MEGA_MENU_ITEMS = [
  "PROJECTS",
  "APPROACH",
  "ABOUT US",
  "INSIGHTS",
  "CONTACT",
];

// ডেটা অ্যারে: সোশ্যাল আইকন
const SOCIAL_ICONS = [
  { icon: FaLinkedinIn, key: "linkedin" },
  { icon: FaInstagram, key: "instagram" },
  { icon: FaYoutube, key: "youtube" },
  { icon: FaFacebookF, key: "facebook" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mega menu open state
  const [visible, setVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  
  const toggleMenu = () => setOpen(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (open) return; // Mega Menu খোলা থাকলে স্ক্রল লজিক বন্ধ থাকবে

      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        // স্ক্রল নিচে হলে নেভিগেশন হাইড
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } 
        // স্ক্রল উপরে হলে নেভিগেশন শো
        else if (currentScrollY < lastScrollY) {
          setVisible(true);
        }
      } else {
        // একদম উপরে থাকলে সবসময় দেখাবে
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, open]); 

  // Navbar এর জন্য Tailwind CSS ক্লাস (ট্রানজিশন এবং স্লাইড ইন/আউট)
  const navbarClasses = `
    w-full flex justify-between items-center px-6 lg:px-20 py-4 
    bg-yellow-500 text-black fixed top-0 left-0 z-40
    transition-transform duration-300 ease-in-out
    ${visible ? 'translate-y-0' : '-translate-y-full'} 
  `;

  return (
    <>
      {/* NAVBAR */}
      <nav className={navbarClasses}>
        
        {/* Logo */}
        <h1 className="font-bold text-[28px] lg:text-[32px]">includi</h1>

        {/* Desktop/Tablet Menu Container */}
        <div className="flex items-center md:space-x-6 lg:space-x-8 text-[16px] lg:text-[18px] font-semibold">
          
          {/* Desktop Menu Items */}
          <ul className="hidden md:flex md:space-x-6 lg:space-x-8">
            {DESKTOP_MENU_ITEMS.map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          
          {/* EN ▼ Button */}
          <li className="list-none hidden md:block border rounded-full border-black px-3 py-1 cursor-pointer hover:bg-black hover:text-white duration-200">
            EN ▼
          </li>

          {/* Menu Icon (Mobile) */}
          <button
            onClick={toggleMenu}
            className="text-black hover:opacity-70 duration-200 md:hidden"
          >
            <HiMenuAlt4 size={32} />
          </button>
          
          {/* Custom Menu Button (Image এর মতো Hexagon Background সহ) */}
          <div 
            onClick={toggleMenu}
            // w-10 h-10 থেকে w-12 h-12 করা হয়েছে যাতে আইকনটি বড় দেখায়
            className="w-12 h-10 bg-black clip-hex flex items-center justify-center -mr-10 cursor-pointer hidden md:flex" 
          >
             {/* HiMenuAlt4 আইকনটি ব্যবহার করা হয়েছে যা একটি হ্যামবার্গার মেনু আইকন */}
             <HiMenuAlt4 size={24} className="text-yellow-500" />
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MEGA MENU */}
      <div
        className={`fixed inset-0 bg-black text-white transition-all duration-500 z-50 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 lg:top-8 lg:right-10 text-yellow-400 border border-yellow-400 p-2 rounded-lg hover:bg-yellow-400 hover:text-black duration-300"
        >
          <IoClose size={30} />
        </button>

        {/* Menu Layout */}
        <div className="w-full h-full flex flex-col md:flex-row justify-start md:justify-center items-start gap-10 md:gap-32 px-10 pt-20 md:px-16 md:pt-32">
          
          {/* LEFT SIDE MAIN MENU */}
          <ul className="text-[36px] lg:text-[42px] font-bold space-y-4 md:space-y-6">
            {MEGA_MENU_ITEMS.map((item) => (
              <li key={item} className="hover:text-yellow-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE SUB MENU */}
          <div className="text-[20px] lg:text-[22px] font-semibold space-y-3 pt-8 md:pt-0"> 
            <div className="flex items-center gap-3">
              JOBS{" "}
              <span className="bg-yellow-400 text-black px-2 rounded-full text-[14px] font-bold">
                1
              </span>
            </div>
            <p className="cursor-pointer hover:text-yellow-400 duration-200">KEYNOTES</p>
            <p className="cursor-pointer hover:text-yellow-400 duration-200">TEAM</p>
            <p className="cursor-pointer hover:text-yellow-400 duration-200">WE WORK FOR</p>
            <p className="cursor-pointer hover:text-yellow-400 duration-200">AWARDS</p>
            <p className="cursor-pointer hover:text-yellow-400 duration-200">PRESSROOM</p>

            <div className="pt-6">
              <h3 className="font-bold">SHOP</h3>
              <div className="flex gap-4 pt-2 text-[18px]">
                <p className="cursor-pointer hover:text-yellow-400 duration-200">Books</p>
                <p className="cursor-pointer hover:text-yellow-400 duration-200">Card Games</p>
                <p className="cursor-pointer hover:text-yellow-400 duration-200">Fans</p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS BOTTOM */}
        <div className="absolute bottom-6 w-full flex justify-center gap-6 md:gap-10 text-[24px] md:text-[26px]">
          {SOCIAL_ICONS.map((social) => {
            const IconComponent = social.icon; 
            return (
              <div 
                key={social.key} 
                className="w-8 h-8 bg-yellow-400 clip-hex flex items-center justify-center cursor-pointer duration-300 hover:bg-white"
              >
                <IconComponent className="text-black text-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;