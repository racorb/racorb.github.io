import React from "react";
import { clientData } from "../constants/ClientsData";
import SectionTitle from "../parts/SectionTitle";

// Import Swiper React components
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <SectionTitle title="Clients" subtitle="They trusted us" />

        <div className="clients-slider swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView="auto"
            loop={true}
            speed={400}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 120,
              },
            }}
          >
            {clientData.map((clientsItem, index) => {
              return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <img src={clientsItem.image} className="img-fluid" alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
