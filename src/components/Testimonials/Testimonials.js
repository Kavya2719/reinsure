import { useState, useRef } from "react";
import ClientTrustUsImg from "../../assests/images/ClientTrustUs.png";
import RightBlueImg from "../../assests/images/rightBlue.png";
import GetQuote from "../GetQuote/GetQuote";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import TestimonialData from "../../assests/data/TestimonialsData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const Testimonials = ({ screenSize }) => {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);

  const active = "bg-white w-[40px]";
  const inactive = "bg-light-white-2 w-5";

  const handleChange = (e) => {
    const index = parseInt(e.target.value)
    setCurrent(index)
    swiperRef.current.swiper.slideTo(index);
  }

  return (
    <div className="py-20 flex flex-col gap-[40px] bg-blue items-center lg:py-[40px] lg:gap-[30px]">
      <img
        src={ClientTrustUsImg}
        alt="Client Trust Us"
        className="h-[68px] lg:h-[36px]"
      />

      <div className="flex flex-col gap-4 items-center">
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper) => {
            setCurrent(swiper.activeIndex);
          }}
          className="w-[815px] lg:w-[535px] sm:w-[356px]"
          modules={[Autoplay]}
          slidesPerView={1}
          loopedSlides={true}
          autoplay={true}
        >
          {
            TestimonialData.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    {...testimonial}
                  />
                </SwiperSlide>
              );
            })
          }
        </Swiper>

        <div className="flex flex-row gap-2">
          <button
            value="0"
            className={`h-1 ${current === 0 ? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="1"
            className={`h-1 ${current === 1 ? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="2"
            className={`h-1 ${current === 2? active : inactive}`}
            onClick={handleChange}
          />
          <button
            value="3"
            className={`h-1 ${current === 3? active : inactive}`}
            onClick={handleChange}
          />
        </div>
      </div>

      <GetQuote
        buttonSize={screenSize > 1022 ? "large" : "small"}
        color={"blue"}
        backgroundColor={"white"}
        image={RightBlueImg}
      />
    </div>
  );
};

export default Testimonials;
