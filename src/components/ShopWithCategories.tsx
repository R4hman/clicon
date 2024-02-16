import React, { ReactElement, useEffect, useState } from "react";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import { useCategories } from "@/hooks/useCategories";

const ShopWithCategories: React.FC = (): ReactElement => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [slidesPerView, setslidesPerView] = useState(5);
  const { data, isLoading } = useCategories(
    "https://clicon.onrender.com/api/v1/categories"
  );

  const handleResize = (): void => {
    console.log("resized", window.innerWidth);
    setInnerWidth(window.innerWidth);

    // chrome restore down olanda
    if (window.innerWidth) {
      setslidesPerView(5);
    }
    if (window.innerWidth <= 600) {
      setslidesPerView(1);
    } else if (window.innerWidth > 600 && window.innerWidth <= 900) {
      setslidesPerView(3);
    } else if (window.innerWidth > 900 && window.innerWidth <= 1200) {
      setslidesPerView(5);
    }
  };
  console.log("screen width", screen.width);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-[72px] mb-10 px-5">
      <h3 className="text-[32px] font-semibold leading-10 text-gray900 text-center">
        Shop with Categorys {innerWidth}
      </h3>
      <div className="">
        <SwiperCarousel
          slidesPerView={slidesPerView}
          dataToMap={data.categories}
          hasPrevNext
          render={(item): React.ReactNode => (
            <SwiperSlide>
              <div
                key={item._id}
                className="px-3 py-6 rounded-[4px] border border-gray100"
              >
                <img src={item?.image} alt="" />
                <h3 className="text-center">{item?.name}</h3>
              </div>
            </SwiperSlide>
          )}
        />
      </div>
    </section>
  );
};

export default ShopWithCategories;
