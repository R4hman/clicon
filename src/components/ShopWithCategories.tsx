import React from "react";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import { useCategories } from "@/hooks/useCategories";

const ShopWithCategories: React.FC = () => {
  const { data, isLoading } = useCategories(
    "https://clicon.onrender.com/api/v1/categories"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-[72px] mb-10">
      <h3 className="text-[32px] font-semibold leading-10 text-gray900 text-center">
        Shop with Categorys
      </h3>
      <div className="">
        <SwiperCarousel
          slidesPerView={5}
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
