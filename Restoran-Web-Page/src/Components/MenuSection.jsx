import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Menu = ({ menuData, tabs }) => {
  const [activeTab, setActiveTab] = useState("Breakfast");

  return (
    <div className="max-w-[1320px] py-12">
      <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-6 lg:px-0">
        {/* Section Title */}
        <div className="text-center">
          <h5 className="section-title text-primary font-pacifico font-normal text-xl mb-2">
            Food Menu
          </h5>
          <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-nunito font-extrabold mb-12">
            Most Popular Items
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center mx-3 pb-3 cursor-pointer  ${
                  activeTab === tab.label
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500"
                }`}
              >
                <TabIcon
                  className={`${
                    tab.label === "Breakfast" ? "text-[40px]" : "text-[32px]"
                  } mr-3`}
                />
                <div className="text-left">
                  <small className="block text-[14px] text-[#666565]">
                    {tab.subtitle}
                  </small>
                  <h6 className="-mt-1 text-sm text-[16px] font-nunito font-extrabold text-black">
                    {tab.label}
                  </h6>
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0,  }}
            transition={{
              duration: 0.3,
            }}
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[var(--primary)] p-4 rounded-lg relative"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1) , 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  scale: 1.05,
                }}
              >
                <span className="bg-orange-100 border border-[var(--primary)] rounded-full text-orange-500 text-sm font-medium poppins px-4 py-1 inline-block mb-4">
                  {item.type}
                </span>
                <motion.img
                  className="w-64 mx-auto transform"
                  src={item.img}
                  alt={item.name}
                  transition={{
                    duration: 0.3,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 font-nunito font-extrabold text-[20px]">
                    {item.name}
                  </h1>
                  <p className="text-gray-500 poppins text-sm text-center text-[16px]">
                    {item.desc.slice(0, 50)}
                  </p>
                  <h2 className="text-orange-500 poppins text-2xl font-extrabold">
                    {item.price}
                  </h2>
                  <motion.button
                    className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-2 transform"
                    transition={{
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
