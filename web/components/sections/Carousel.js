import PropTypes from "prop-types";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "@/lib/api";
import Section from "../Section";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ images, autoplay, delay, slidesPerView, spaceBetween }) => {
  return (
    <Section>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation
      >
        {images.map((image) => {
          const { _key, alt } = image;
          return (
            <SwiperSlide key={_key}>
              <img src={urlFor(image)} alt={alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(0, 0, 0, 0.75);
          height: 65px;
          width: 35px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          color: rgb(var(--accent-rgb));
        }

        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
      `}</style>
    </Section>
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
