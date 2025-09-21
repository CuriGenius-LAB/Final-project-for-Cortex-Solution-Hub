import { FaUtensils } from "react-icons/fa";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import {
  navLinks,
  menuData,
  footerData,
  copyRightData,
  tabs,
  formFields,

} from "../data/Restoran-Data";
import Menu from "./MenuSection";
import ReservationSection from "./ReservationSection";
import FoodAndFAQGrid from "./FoodAndFAQGrid";

const RestoranLanding = () => {

  return (
    <div className="max-w-screen-2xl relative p-0">
      {/* navbar starts */}

      <Navbar
        brandName="Restoran"
        BrandIcon={FaUtensils}
        links={navLinks}
        ctaText="Book A Table"
        ctaHref="#book-a-table"
      />

      {/* navbar end  */}

      {/* herobanner starts  */}

      <HeroSection
        title={
          <>
            Enjoy our <br /> Delicious Meal
          </>
        }
        subtitle="Welcome to our dining place of flavor and delight. Every dish is
                    prepared fresh with love and care to satisfy your taste. From
                    starters to desserts, enjoy a menu filled with joy and warmth,
                    making every visit memorable with passion and comfort for you
                    always."
        buttonText="reserve now"
        buttonRef="#reserve-now"
      />

      {/* herobanner ends  */}

      {/* Menu starts */}

        <Menu menuData={menuData} tabs={tabs} />

      {/* Menu end */}

      {/* Reservation Starts  */}

        <ReservationSection
            title="Reservation"
            subtitle="Book A Table Online"
            videoUrl="https://www.youtube.com/embed/DWRcNpR6Kdc"
            formFields={formFields} 
        />

       {/* Reservation Ends  */}

       {/* Food And FAQ Starts  */}

            <FoodAndFAQGrid />

        {/* Food And FAQ Ends   */}
     
      {/* footer starts */}

      <Footer data={footerData} copyRight={copyRightData} />

      {/* footer end */}
    </div>
  );
};

export default RestoranLanding;
