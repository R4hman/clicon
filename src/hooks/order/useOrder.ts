import { useMutation } from "@tanstack/react-query";
import { TOrder } from "@/types";
import { order } from "@/services/order/order";

export const useOrder = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: order,
    onSuccess: (data: TOrder) => {},
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isPending,
  };
};
