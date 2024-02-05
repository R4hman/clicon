import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData.ts";
import { TSlider } from "../types/index.ts";

type TUseSlider = {
  data: Record<string, TSlider[]>;
  isLoading: boolean;
};

export function useSliders(url: string): TUseSlider {
  const { data, isLoading } = useQuery({
    queryKey: ["sliders", url],
    queryFn: (url) => fetchData(url.queryKey[1]),
  });

  return { data, isLoading };
}
