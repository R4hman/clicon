import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/fetchData.ts";
import { addBasket } from "@/services/basket/addBasket.ts";
import { getAllBasket } from "@/services/basket/getAllBasket.ts";

// type TUseBrand = {
//   data: Record<"brands", TBrand[]>;
//   isLoading: boolean;
// };

export function useBasket() {
  const { data, isLoading } = useQuery({
    queryKey: ["baskets"],
    queryFn: () => getAllBasket(),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
}
