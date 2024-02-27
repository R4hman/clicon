import ProductInfo from "@/components/ProductInfo";
import ModalContent from "@/components/reusable/ModalContent";
import ProductCard from "@/components/reusable/ProductCard";
import { useSingleProduct } from "@/hooks/useProducts";
import { FC, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct: FC = (): ReactElement => {
  const { id } = useParams();
  const { data: singleProduct, isLoading: isProductLoading } = useSingleProduct(
    `https://clicon.onrender.com/api/v1/products/${id}`
  );
  const navigate = useNavigate();
  console.log("single product", singleProduct?.relatedProducts);
  if (isProductLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="my-8  w-full ">
        <ModalContent product={singleProduct?.product} isModal={false} />
        <ProductInfo />
        <div className="flex items-center space-x-2 mt-6">
          {singleProduct?.relatedProducts.slice(0, 6).map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
        <div onClick={() => navigate("/shop", { state: { input: "dell" } })}>
          test
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
