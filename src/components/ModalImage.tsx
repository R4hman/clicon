import { FC, ReactElement, useEffect, useState } from "react";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import ReactImageMagnify from "react-image-magnify";

type TProductImages = {
  imageStatus: boolean;
  imageUrl: string;
  _id: string;
};

type TModalImageProps = {
  images: TProductImages[];
  isModal?: boolean;
};

const ModalImage: FC<TModalImageProps> = ({
  images,
  isModal,
}): ReactElement => {
  const [productImgs, setProductImgs] = useState<unknown[] | null>(null);
  const [src, setSrc] = useState();

  useEffect(() => {
    if (images) {
      setProductImgs(images);
      const mainImage = productImgs?.find((img) => img.imageStatus)?.imageUrl;

      setSrc(mainImage);
    }
  }, [images, productImgs]);

  if (!src) {
    return <div>loading...</div>;
  }
  return (
    <div className={`flex flex-1  md:w-[400px]   flex-col gap-y-6 `}>
      <div className={`${isModal ? "w-[300px]" : "w-full"} `}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: src && src,
            },
            largeImage: {
              src: src && src,
              width: 1900,
              height: 1800,
            },
          }}
          isHintEnabled
        />
      </div>
      <div className={`${isModal ? "hidden sm:block" : ""} h-[100px]  `}>
        <SwiperCarousel
          dataToMap={images}
          slidesPerView={images?.length - 2}
          render={(item) => (
            <SwiperSlide>
              <img
                onClick={() => setSrc(item?.imageUrl)}
                className="h-[70px] w-[70px] hover:scale-125 cursor-pointer transition-all"
                src={item?.imageUrl}
                alt="product img"
              />
            </SwiperSlide>
          )}
        />
      </div>
    </div>
  );
};

export default ModalImage;
