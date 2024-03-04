import React from "react";
import { useBasket } from "./useBasket";
import { useAddBasket } from "./useAddBasket";
import { useDeleteBasket } from "./useDeleteBasket";

const CustomBasketHook = () => {
  const { data: basket, isLoading } = useBasket();
  const { mutate, isPending } = useAddBasket();
  const { mutate: deleteBasket, isPending: deletePending } = useDeleteBasket();

  const handleMutateBasket = (
    item: ItemType,
    key: "increment" | "decrement" | "remove"
  ): void => {
    switch (key) {
      case "increment":
        mutate({ productId: item.productId._id, count: item.count + 1 });
        break;

      case "decrement":
        if (item.count === 1) {
          deleteBasket(item._id);
        } else {
          mutate({ productId: item.productId._id, count: item.count - 1 });
        }
        break;
      case "remove":
        deleteBasket(item._id);
        break;
    }
  };
  return {
    basket,
    mutate,
    deleteBasket,
    handleMutateBasket,
  };
};

export default CustomBasketHook;
