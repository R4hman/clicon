import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TProduct } from "../types/index.ts";

type TUseProduct = {
  data: Record<string, TProduct[]>;
  isLoading: boolean;
};

export function useProducts(url: string): TUseProduct {
  const { data, isLoading } = useQuery({
    queryKey: ["products", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
  });

  return { data, isLoading };
}
