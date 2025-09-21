import FAQAccordion from "./FAQAccordian";
import FoodImageCard from "./FoodImageCard";
import { foodItems, faqData } from "../data/Restoran-Data";

const FoodAndFAQGrid = () => {
  return (
    <div className="bg-gray-800 py-12">
      <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-6 lg:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h5 className="section-title text-primary font-pacifico font-normal text-xl mb-2 text-left">
            Our Restaurant
          </h5>
          <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-nunito font-extrabold text-white">
            Popular Dishes & FAQs
          </h1>
        </div>

        {/* Equal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Food Images Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {foodItems.map((item, index) => (
                <FoodImageCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  emoji={item.emoji}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center nunito-font text-white">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FoodAndFAQGrid;
