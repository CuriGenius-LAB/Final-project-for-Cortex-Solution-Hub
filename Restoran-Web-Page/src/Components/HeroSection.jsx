import styles from "../assets/css/Hero.module.css";
import heroImage from "../assets/images/hero.png";
import { motion } from "motion/react";

const HeroSection = ({ title , subtitle , buttonText , buttonRef }) => {

  return (
    <div
      className={` ${styles["hero-header"]} max-w-[1320px] mx-auto py-12 bg-gray-900 mb-12`}
    >
      <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto my-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="col-span-1 text-center lg:text-left px-6 lg:px-0">
            <motion.h1 
              
              className="font-nunito text-[40px] md:text-[50px] lg:text-[64px] font-extrabold leading-[1.2] mb-2 text-white"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}   
            
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mb-6 pb-2 font-normal text-white"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}   
            
            >
              {subtitle}
            </motion.p>
            <motion.a
              href={buttonRef}
              className="relative hero-cta overflow-hidden bg-primary font-nunito font-semibold text-white px-3 py-[6px]  md:px-12 md:py-4  rounded inline-block uppercase cursor-pointer z-1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}   
              whileHover={{
                color: "var(--primary)",
              }}
            >
              {buttonText}
            </motion.a>
          </div>

          {/* Right Image */}
          <div className="col-span-1 text-center lg:text-right overflow-hidden px-6">
            <motion.img
              src={heroImage}
              alt="Hero"
              className="w-full w-max-md"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,      
                repeatType: "loop",    
                duration: 50,          
                ease: "linear",        
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
