import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TProduct } from "../types/index.ts";

type TUseProduct = {
  data: Record<string, TProduct[]>;
  isLoading: boolean;
};

export function useProducts(url: string, enabled: boolean = true): TUseProduct {
  console.log("enabled", enabled);
  const { data, isLoading } = useQuery({
    queryKey: ["products", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
    enabled,
  });

  return { data, isLoading };
}
export function useSingleProduct(url: string): TUseProduct {
  const { data, isLoading } = useQuery({
    queryKey: ["singleProduct", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
  });
  console.log("singleProduct ise dusdu", data);

  return { data, isLoading };
}

// product modaldan gelen data
export function useProductByModal(
  str: string,
  enabled: boolean = false
): TUseProduct {
  console.log("enabled", enabled, str);
  const { data, isLoading } = useQuery({
    queryKey: ["productByModal", str, enabled],
    queryFn: () =>
      fetchData(`https://clicon.onrender.com/api/v1/products/detail/${str}`),
    enabled,
  });

  console.log("productByModal ise dusdu", data);

  return { data, isLoading };
}
