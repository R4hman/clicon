import ProductModal from "@/components/ProductModal";
import { useSingleProduct } from "@/hooks/useProducts";
import { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";

const SingleProduct: FC = (): ReactElement => {
  const { id } = useParams();
  const { data: singleProduct, isLoading: isProductLoading } = useSingleProduct(
    `https://clicon.onrender.com/api/v1/products/${id}`
  );

  console.log("single product", singleProduct);
  if (isProductLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <ProductModal product={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProduct;
