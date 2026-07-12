import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";
import { portfolioData } from "../../data/portfolioData";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const Blog = () => {
  const { blogs } = portfolioData;

  return (
    <div className="content py-16 md:py-24 max-xxl:px-4" id="blog">
      <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
        <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
          TECHNICAL INSIGHTS
        </span>
        <p className="section-title pb-4">Engineering Blog & Notes</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-600 leading-relaxed">
          Read my technical breakdowns and case studies covering IoT Middleware development, Laravel performance optimization, and IT network infrastructure best practices.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogs?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
