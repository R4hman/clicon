import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TCategory } from "../types/index.ts";

type TUseCategory = {
  data: Record<"categories", TCategory[]>;
  isLoading: boolean;
};

export function useCategories(url: string): TUseCategory {
  const { data, isLoading } = useQuery({
    queryKey: ["categories", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
}
