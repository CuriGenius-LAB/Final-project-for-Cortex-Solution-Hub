import { motion } from "motion/react";
import styles from "../assets/css/Footer.module.css";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Fragment } from "react";

const Footer = ({ data , copyRight }) => {

    const { siteName , designer } = copyRight;

  return (
    <div className="bg-gray-900 text-gray-100 footer pt-12 mt-12">
      <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px] mx-auto py-12 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.map((section, index) => {
            return (
              <div key={index}>
                {/* Section Title */}
                {section.title && (
                  <h4 className="section-title text-primary font-pacifico font-normal mb-6 text-left">
                    {section.title}
                  </h4>
                )}

                {/* Links */}
                {section.links &&
                  section.links.map((link, i) => (
                    <motion.a
                      key={i}
                      className={`${styles["footer-link"]} block mb-[5px] p-0 text-left text-white text-[15px] font-nunito font-normal capitalize transition duration-300`}
                      href={link.href}
                      whileHover={{ letterSpacing: "1px", boxShadow: "none" }}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                {/* Contact Items */}
                {section.items &&
                  section.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <p key={i} className="mb-2 flex items-center">
                        <Icon className="mr-3" />
                        {item.text}
                      </p>
                    );
                  })}

                {/* Contact Social */}
                {section.social && (
                  <div className="flex pt-2 space-x-2">
                    {section.social.map((social, i) => {
                      const SocialIcon = social.icon;
                      return (
                        <motion.a
                          key={i}
                          className="border border-gray-100 rounded-full p-2"
                          href={social.href}
                          transition={{ duration: 0.3 }}
                          whileHover={{
                            color: "var(--primary)",
                            backgroundColor: "var(--light)",
                          }}
                        >
                          <SocialIcon />
                        </motion.a>
                      );
                    })}
                  </div>
                )}

                {/* Opening Hours */}
                {section.hours &&
                  section.hours.map((hour, i) => (
                    <Fragment key={i}>
                      <h5 className="text-gray-100 text-[20px] font-nunito font-medium mb-2">
                        {hour.day}
                      </h5>
                      <p className="mb-4">{hour.time}</p>
                    </Fragment>
                  ))}

                {/* Newsletter */}
                {section.content && (
                  <>
                    <p className="mb-4">{section.content}</p>
                    <div className="relative max-w-md mx-auto">
                      <input
                        className="block w-full py-4 pl-6 pr-8 text-gray-700 font-normal text-base bg-white border border-gray-300 rounded placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fea116] focus:border-[#fea116] transition duration-150"
                        type="text"
                        placeholder={section.placeholder}
                      />
                      <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary font-nunito font-medium text-white py-2 px-4 rounded uppercase cursor-pointer hover:bg-orange-400">
                        {section.buttonText}
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center border-t border-gray-700 pt-6 pb-6">
          <div className="text-center md:text-left mb-4 md:mb-0 text-gray-400">
            &copy;{" "}
            <motion.a className="border-b border-gray-400" href="#restoran"
                whileHover={{
                    color: "white",
                    borderColor: "white"
                }}
            >
              {siteName}
            </motion.a>
            , All Right Reserved. Designed By{" "}
            <motion.a
              className="border-b border-gray-400"
              href={designer.href}
              whileHover={{
                color: "white",
                borderColor: "white"
              }}
            >
              {designer.name}
            </motion.a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
