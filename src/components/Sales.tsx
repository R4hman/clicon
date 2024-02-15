import React from "react";
import ShopNowBtn from "./reusable/ShopNowBtn";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { TCarousel, TSlider } from "@/types";
import { SwiperSlide } from "swiper/react";
import { useSliders } from "../hooks/useSliders";
import ReusableBestDealsProduct from "./reusable/ReusableBestDealsProduct";

const Sales: React.FC = () => {
  const { data, isLoading } = useSliders(
    "https://clicon.onrender.com/api/v1/sliders"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-8 flex-col  md:flex-row gap-y-4 w-full gap-x-4 py-6">
      {/* left part of sales */}
      <div className="bg-gray100   overflow-hidden p-8 w-[100%] h-fit sm:h-[520px]  md:w-[55%] xl:w-[70%]">
        {/* Swiper */}
        <SwiperCarousel
          dataToMap={data.sliders}
          hasDots={false}
          hasPrevNext={false}
          render={(item: TSlider | TCarousel): React.ReactNode => (
            <SwiperSlide className="w-fit" key={item._id}>
              <div className="flex flex-col justify-center md:flex-row ">
                <div className="flex flex-col basis-1/2 ">
                  <span className="mb-1.5 text-xs sm:text-sm font-semibold text-secondary600">
                    {item?.headTitle && item.headTitle}
                  </span>
                  <h3 className="text-gray900 text-[28px] sm:text-[48px] mb-4 font-semibold leading-20 sm:leading-[56px]">
                    {item?.title}
                  </h3>

                  <p className="text-gray700 mb-6 font-normal text-xs  sm:text-[18px]  leading-6">
                    {item?.description}
                  </p>
                  <ShopNowBtn />
                </div>
                <div className=" basis-1/2  relative">
                  <img className="w-full h-[300px] " src={item?.image} alt="" />
                  <span className="bg-secondary500 absolute top-0 right-0 hidden lg:flex rounded-full w-[100px] text-white text-[22px] font-semibold items-center justify-center flex-shrink-0 h-[100px]">
                    {item?.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          )}
        />
      </div>

      {/* Right part of Sales */}
      <div className="basis-1/3 flex  flex-col h-full gap-y-6">
        <ReusableBestDealsProduct style={{}}>
          <ReusableBestDealsProduct.ReusableBestDealsContent
            slider={data.sliders.filter((slider) => !slider.status)[0]}
          />
          <ReusableBestDealsProduct.ReusableBestDealsImg
            slider={data.sliders.filter((slider) => !slider.status)[0]}
          />
        </ReusableBestDealsProduct>
        <ReusableBestDealsProduct bgColor="bg-gray-200">
          <ReusableBestDealsProduct.ReusableBestDealsImg
            slider={data.sliders.filter((slider) => !slider.status)[1]}
          />
          <ReusableBestDealsProduct.ReusableBestDealsContent
            color="text-black"
            slider={data.sliders.filter((slider) => !slider.status)[1]}
          />
        </ReusableBestDealsProduct>

        {/* Top part */}
        {/* <div className="bg-gray900 flex  rounded-[3px] pl-6 pt-6 overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <span className="text-warning500 text-sm font-medium">
              Summer sales
            </span>
            <h6 className="text-[24px] font-semibold text-white ">
              New Google Pixel 6 Pro
            </h6>
            <ShopNowBtn />
          </div>
          <img src="public/image 5.png" alt="" />
        </div> */}
        {/* Bottom part  */}
        {/* <div className="bg-gray900 flex  rounded-[3px] pl-6 pt-6 overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <span className="text-warning500 text-sm font-medium">
              Summer sales
            </span>
            <h6 className="text-[24px] font-semibold text-white ">
              New Google Pixel 6 Pro
            </h6>
            <ShopNowBtn />
          </div>
          <img src="public/image 5.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Sales;
