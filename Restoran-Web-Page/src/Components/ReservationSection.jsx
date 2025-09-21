
 import { useState } from "react";
 import ReservationForm from "./ReservationForm";
 import styles from "../assets/css/Reservation.module.css";

const ReservationSection = ({ title = "Reservation", subtitle = "Book A Table Online", videoUrl }) => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <section className="max-w-[1320px] mx-auto py-12 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Video Side */}
          <div className={`${styles.video} relative h-full min-h-[500px]  bg-center bg-no-repeat bg-cover`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className={`${styles["btn-play"]} flex items-center justify-center absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-0 outline-none [box-sizing:content-box]`}
            >
              <span className="block relative z-[3] w-0 h-0 border-l-[32px] border-l-[var(--dark)] border-t-[22px] border-t-transparent border-b-[22px] border-b-transparent"></span>
            </button>
          </div>

          {/* Form Side */}
          <div className="bg-gray-900 text-white flex items-center">
            <div className="p-12 w-full space-y-5">
              <h5 className="section-title text-primary text-xl font-pacifico mb-2 text-left">
                {title}
              </h5>
              <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-nunito font-extrabold">{subtitle}</h1>

              <ReservationForm  />
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-gray-900 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-4">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-white text-lg">Youtube Video</h5>
                <button
                  className="text-white text-3xl font-bold cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title="Youtube Video"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    );
};


export default ReservationSection;
