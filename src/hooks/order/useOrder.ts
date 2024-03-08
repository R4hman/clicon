import { useMutation } from "@tanstack/react-query";
import { TOrder } from "@/types";
import { order } from "@/services/order/order";
import { setUserOrder } from "@/app/features/orderSlice";
import { useNavigate } from "react-router-dom";

export const useOrder = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: order,
    onSuccess: (data: TOrder) => {
      console.log("data", data);
      // setUserOrder
      navigate("/payment-completed");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isPending,
  };
};
