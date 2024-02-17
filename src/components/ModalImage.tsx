import { FC, ReactElement, useEffect, useState } from "react";
import SwiperCarousel from "./reusable/SwiperCarousel";
import { v4 as uuidv4 } from "uuid";

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

  useEffect(() => {
    if (images) {
      setProductImgs(images);
    }
  }, [images]);
  const mainImage = productImgs?.find((img) => img.imageStatus)?.imageUrl;
  return (
    <div className="flex flex-1 w-[300px]  flex-col gap-y-6 ">
      <img style={{ width: "600px" }} src={mainImage} alt="" />
      {/* <div className="h-[100px] bg-red-500 ">
        <SwiperCarousel
          dataToMap={images}
          render={(item) => (
            <img
              className="h-[70px] w-[70px]"
              src={item.imageUrl}
              alt="product img"
            />
          )}
        ></SwiperCarousel>
      </div> */}
      <div className="flex items-center gap-x-2">
        {productImgs?.map((item) => (
          <img
            key={uuidv4()}
            className="h-[70px] w-[70px]"
            src={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalImage;
