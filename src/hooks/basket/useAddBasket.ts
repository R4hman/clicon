import { addBasket } from "@/services/basket/addBasket";
import { useMutation } from "@tanstack/react-query";

export const useAddBasket = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => addBasket(data),
    onSuccess: (data) => {
      console.log("add basket data", data);
    },
    onError: (err) => {
      console.log("error", err);
    },
  });

  return {
    mutate,
    isPending,
  };
};
