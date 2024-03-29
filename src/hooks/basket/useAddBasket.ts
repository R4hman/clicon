// import { addBasket } from "@/services/basket/addBasket";
// import { useMutation } from "@tanstack/react-query";

// export const useAddBasket = () => {
//   const { mutate, isPending } = useMutation({
//     mutationFn: (data) => {
//       console.log("mutation data", data);
//       addBasket(data);
//     },
//     onSuccess: (data) => {
//       console.log("add basket data", data);
//     },
//     onError: (err) => {
//       console.log("error", err);
//     },
//   });

//   return {
//     mutate,
//     isPending,
//   };
// };

import { addBasket } from "@/services/basket/addBasket";
import { useMutation, useQueryClient } from "@tanstack/react-query";
type TAddBasket = {
  productId: string;
  count: number;
};
export const useAddBasket = () => {
  const queryClient = useQueryClient();

  const { mutate, isIdle, isPending, isError, error } = useMutation({
    mutationFn: addBasket,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["baskets"] });
    },
  });

  return {
    mutate,
    isIdle,
    isPending,
    isError,
    error,
  };
};
