import PropTypes from "prop-types";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useResize from "../hooks/useResize";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ items, autoplay, delay }) => {
  return <div>Carousel</div>;
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
};

export default Carousel;
