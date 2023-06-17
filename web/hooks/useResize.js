import { useState, useEffect } from "react";

const getDevice = (width) => {
  if (width <= 600) {
    return "mobile";
  } else if (width > 600 && width <= 900) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useResize = () => {
  const [size, setSetsize] = useState({ height: 0, width: 0, device: "" });
  useEffect(() => {
    const handleResize = (e) => {
      setSetsize({
        height: window.innerHeight,
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useResize;
