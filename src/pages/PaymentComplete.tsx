import { PDFDownloadLink } from "@react-pdf/renderer";
import { FC, ReactElement } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { RootState } from "../app/store.ts";

import Invoice from "@/features/order/invoice/Invoice";
import ReusableButton from "@/components/reusable/ReusableButton";
import { useSelector } from "react-redux";

const PaymentComplete: FC = (): ReactElement => {
  const { order, user } = useSelector((state: RootState) => state.order);

  return (
    <div className="container mx-auto flex items-center justify-center h-[524px]">
      <div className="flex flex-col space-y-3  items-center w-[400px]">
        <MdOutlineDoneOutline className="size-[70px] text-green-500" />
        <h2 className="text-[20px] font-bold">
          Sifarişiniz uğurla həyata keçirildi
        </h2>
        <p className="text-center">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum
          risus. Donec volutpat mollis nulla non facilisis.
        </p>
        <div className="flex items-center space-x-5 ">
          <Link
            className="border border-primary500  rounded-[3px] text-primary500 p-3 flex items-center space-x-4"
            to="/profile/my-orders"
          >
            GO TO DASHBOARD <FaArrowRight className="ml-2" />
          </Link>
          <Link
            className="bg-primary500 flex items-center space-x-2 p-3 text-white rounded-[3px]"
            to="/profile/shopping-card"
          >
            VIEW ORDER
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <PDFDownloadLink
          document={<Invoice user={user} order={order} />}
          fileName="invoice.pdf"
        >
          {({ loading }) =>
            loading ? (
              <div>loading...</div>
            ) : (
              <ReusableButton className="cursor-pointer text-blue-400 underline">
                Download invoice
              </ReusableButton>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PaymentComplete;
