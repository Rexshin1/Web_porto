import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";
import { portfolioData } from "../../data/portfolioData";

const Testimonial = () => {
  const { testimonials } = portfolioData;

  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25 pt-10">
      <div className="w-full h-full cursor-grab">
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
            VERIFIED CREDENTIALS & REVIEWS
          </span>
          <p className="section-title text-center">Official Certificates & Supervisor Reviews</p>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto pt-3 font-normal">
            Geser (swipe) untuk melihat kartu verifikasi sertifikat resmi Kemnaker RI, PT Pertamina EP, dan ulasan langsung dari pembimbing lapangan.
          </p>
        </div>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
