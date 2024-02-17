import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TBrand } from "../types/index.ts";

type TUseBrand = {
  data: Record<"brands", TBrand[]>;
  isLoading: boolean;
};

export function useBrands(url: string): TUseBrand {
  const { data, isLoading } = useQuery({
    queryKey: ["brands", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
}
