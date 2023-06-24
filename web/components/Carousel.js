import Image from "next/image";
import PropTypes from "prop-types";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useResize from "../hooks/useResize";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({
  items = [],
  autoplay,
  delay,
  infinite,
  slidesPerView,
  spaceBetween,
}) => {
  return (
    <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetween}>
      {items.map((item, index) => (
        <SwiperSlide key={`swiper-slide-${index}`}>
          <Image
            alt={`image-${index}`}
            src={item}
            width={1152}
            height={1440}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Carousel.propTypes = {
  items: PropTypes.array,
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  infinite: PropTypes.bool,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};

export default Carousel;
