import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import client from "@/client";
// import useResize from "../../hooks/useResize";

import "swiper/css";
import "swiper/css/navigation";

const builder = imageUrlBuilder(client);

const Carousel = ({ images, autoplay, delay, slidesPerView, spaceBetween }) => {
  return (
    <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetween}>
      {images.map((image) => {
        const { _key, alt } = image;
        return (
          <SwiperSlide key={_key}>
            <img src={builder.image(image)} alt={alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Carousel.propTypes = {
  items: PropTypes.array,
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};

export default Carousel;
