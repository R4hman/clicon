import { FC, ReactElement, useEffect, useState } from "react";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { v4 as uuidv4 } from "uuid";
import { SwiperSlide } from "swiper/react";

type TProductImages = {
  imageStatus: boolean;
  imageUrl: string;
  _id: string;
};

type TModalImageProps = {
  images: TProductImages[];
};

const ModalImage: FC<TModalImageProps> = ({ images }): ReactElement => {
  const [productImgs, setProductImgs] = useState(null);
  const [src, setSrc] = useState();

  useEffect(() => {
    if (images) {
      setProductImgs(images);
      const mainImage = productImgs?.find((img) => img.imageStatus)?.imageUrl;
      setSrc(mainImage);
    }
  }, [images, productImgs]);
  return (
    <div className="flex flex-1 w-[300px]  flex-col gap-y-6 ">
      <img style={{ width: "600px" }} src={src} alt="" />
      <div className="h-[100px] ">
        <SwiperCarousel
          dataToMap={images}
          slidesPerView={images.length - 2}
          render={(item) => (
            <SwiperSlide>
              <img
                onClick={() => setSrc(item.imageUrl)}
                className="h-[70px] w-[70px] hover:scale-125 cursor-pointer transition-all"
                src={item.imageUrl}
                alt="product img"
              />
            </SwiperSlide>
          )}
        />
      </div>
      {/* <div className="flex items-center gap-x-2">
        {productImgs?.map((item) => (
          <img
            key={uuidv4()}
            className="h-[70px] w-[70px]"
            src={item.imageUrl}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ModalImage;
