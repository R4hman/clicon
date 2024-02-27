import React, { FC, ReactElement } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TProduct } from "@/types";

import ModalContent from "./reusable/ModalContent";

type TProductModal = {
  product: TProduct;
};

const ProductModal: FC<TProductModal> = ({ product }): ReactElement => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <span className="z-20 text-black bg-white group hover:bg-primary500 w-8 h-8 flex items-center justify-center transition-all rounded-full">
          <MdOutlineRemoveRedEye className="text-black group-hover:text-white w-4 h-4" />
        </span>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-[4px]  max-w-[62.5rem] p-10 flex  gap-x-14">
        <ModalContent product={product} isModal />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
