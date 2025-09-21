
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ brandName, BrandIcon, links , ctaText , ctaHref }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [isSticky , setIsSticky] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

        const { scrollY } = window;

        if(scrollY > 45){

            setIsSticky(true);
        }

        else{

            setIsSticky(false);
        }
    }

    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  } , []);


  return (
    <nav className={`w-full bg-gray-900 lg:bg-[transparent] text-white px-6 lg:px-12 py-4 lg:py-0 transition-all duration-300 z-50
            ${isSticky ? "fixed lg:bg-gray-900" : "absolute top-0"}
        `}
    
    >
      <div className="flex items-center justify-between">
        {/* Brand */}

        <a href="/" className="flex items-center space-x-2">
          <h1 className="text-primary text-[32px] lg:text-[40px] font-nunito font-extrabold flex items-center">
            <BrandIcon className="mr-4" /> {brandName}
          </h1>
        </a>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-white text-2xl cursor-pointer border border-white rounded p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}

        <div className="hidden lg:flex items-center">
          {links.map((desktopLink, index) => (
            <motion.a
              key={index}
              href={desktopLink.href}
              className={`relative ml-[25px] text-[15px] uppercase font-medium outline-none transition-all duration-500 hover:text-primary
                    ${ isSticky ? "py-5" : "py-[35px]" }
                `}
              style={{ color: "var(--light)" }}
              whileHover={{ color: "var(--primary)" }}
              transition={{
                duration: 0.3,
              }}
            >
              {desktopLink.label}
            </motion.a>
          ))}

          {/* DeskTop CTA Button */}

          <a
            href={ctaHref}
            className="relative overflow-hidden cta-button font-nunito font-medium ml-0 lg:ml-6 inline-block bg-primary text-transparent py-2 px-6 rounded-[2px] uppercase z-1"
            data-hover={ctaText}
          >
           {ctaText}
          </a>
        </div>

        {/* Mobile Nav */}

        <div
          className={`
            lg:hidden absolute left-0 top-full w-full bg-gray-900 
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-100" : "max-h-0"}
        `}
        >
          <div className="flex flex-col px-6 py-4 space-y-3">
            {links.map((mobileLink, index) => (
              <motion.a
                key={index}
                href={mobileLink.href}
                className="block py-2 lg:py-0 hover:text-primary uppercase"
                whileHover={{ color: "var(--primary)" }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
              >
                {mobileLink.label}
              </motion.a>
            ))}

            {/* Mobile CTA Button */}

            <a
              href={ctaHref}
              className="relative overflow-hidden cta-button font-nunito font-medium ml-0 lg:ml-6 w-max inline-block bg-primary text-transparent py-2 px-6 rounded-[2px] uppercase z-1"
              data-hover={ctaText}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
