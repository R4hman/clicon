import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TCarousel, TSets, TSlider } from "@/types";

type TSwiperCarouselProps<T> = {
  dataToMap: T[];
  render: (item: T) => React.ReactNode;
  hasDots?: boolean;
  hasPrevNext?: boolean;
  slidesPerView?: number;
  size?: number;
};

const SwiperCarousel: React.FC<TSwiperCarouselProps<TSlider | TCarousel>> = ({
  render,
  dataToMap,
  hasDots,
  hasPrevNext,
  slidesPerView = 1,
}) => {
  return (
    <div>
      <Swiper
        // className="basis-1"
        style={{
          // width: "100%",
          height: "100%",
          overflow: "visible",
          overflowX: "clip",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        navigation={hasPrevNext}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
      >
        {dataToMap.map(render)}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
