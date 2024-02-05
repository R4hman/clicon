import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TProduct } from "../types/index.ts";

type TUseProductFilter = {
  data: Record<string, TProduct[]>;
  isLoading: boolean;
};

export function useProductsFilter(url: string): TUseProductFilter {
  const { data, isLoading } = useQuery({
    queryKey: ["products", url],
    queryFn: () =>
      fetchData(
        `https://clicon.onrender.com/api/v1/products/shop/filter-sort${url}`
      ),
  });

  return { data, isLoading };
}
