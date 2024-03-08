import ProductInfo from "@/components/ProductInfo";
import ModalContent from "@/components/reusable/ModalContent";
import PageLoader from "@/components/reusable/PageLoader";
import ProductCard from "@/components/reusable/ProductCard";
import { useSingleProduct } from "@/hooks/useProducts";
import { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";

const SingleProduct: FC = (): ReactElement => {
  const { id } = useParams();
  const { data: singleProduct, isLoading: isProductLoading } = useSingleProduct(
    `https://clicon.onrender.com/api/v1/products/${id}`
  );

  if (isProductLoading) {
    return <PageLoader />;
  }
  return (
    <div className="container mx-auto">
      <div className="my-8  w-full ">
        <ModalContent product={singleProduct?.product} isModal={false} />
        <ProductInfo />
        <div className="flex flex-col space-y-2 md:flex-row flex-wrap md:space-y-0 items-center space-x-2 mt-6">
          {singleProduct?.relatedProducts.slice(0, 5).map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
