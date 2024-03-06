import SmallProductCard from "@/components/SmallProductCard";
import ReusableButton from "@/components/reusable/ReusableButton";
import { useBasket } from "@/hooks/basket/useBasket";
import { useOrder } from "@/hooks/order/useOrder";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { z } from "zod";

const checkOutSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  text: z.string().optional(),
});

type TCheckOutSchema = z.infer<typeof checkOutSchema>;
const Checkout: FC = (): ReactElement => {
  const { data: basket, isLoading } = useBasket();
  const { mutate, isPending } = useOrder();
  const location = useLocation();

  console.log("location", location.state);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
    getValues,
  } = useForm<TCheckOutSchema>({
    resolver: zodResolver(checkOutSchema),
  });

  const onSubmit: SubmitHandler<TCheckOutSchema> = (data: TCheckOutSchema) => {
    console.log("data", data);
    mutate(data).then((res) => {
      console.log("res", res);
      // if (res.msg) {
      //   navigate("/login");
      // }
    });
    // reset();
  };
  return (
    <section className="container mx-auto">
      <div className="my-10 flex   space-x-5 ">
        <div className="basis-2/3">
          <header className="text-[20px] mb-10 font-semibold">
            Billing information
          </header>
          <div className="flex flex-col gap-y-4">
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    {...register("lastName")}
                    id="lastName"
                    type="text"
                    className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 mb-4">
                <label className="" htmlFor="address">
                  Address
                </label>
                <input
                  {...register("address")}
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[500px]"
                  type="text"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="text"
                    className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h3>Additional Information</h3>
                <h4>
                  Order notes <span>(Optional)</span>
                </h4>
                <textarea
                  {...register("text")}
                  //   cols={1}
                  rows={4}
                  className="border-[2px] w-[500px] border-gray-200 rounded-[3px]"
                ></textarea>
              </div>
              <ReusableButton
                style={{ width: "197px", marginTop: "1rem" }}
                textColor="text-white"
                bgColor={"bg-primary500"}
                type="submit"
              >
                CHANGE PASSWORD
              </ReusableButton>
            </form>
          </div>
        </div>
        <div className="border-[2px] h- basis-1/3 border-gray-200 rounded-[3px] p-5">
          <h4 className="mb-5">Order Summary</h4>
          <div>
            {!isLoading &&
              basket?.basketItems?.map((product: TProduct) => (
                <SmallProductCard
                  checkout
                  key={product._id}
                  product={product}
                />
              ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="flex items-center justify-between">
              Sub-total <span>₼{location.state?.subTotal}</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Shipping <span>Free</span>
            </h4>
            {/* <h4 className="flex items-center justify-between">
              Discount <span>₼30</span>
            </h4> */}
            <h4 className="flex items-center justify-between">
              Tax <span>₼{location.state?.tax}</span>
            </h4>
          </div>
          <div className="w-full h-[1.5px] bg-gray-200 my-5"></div>
          <h4 className="flex items-center justify-between mb-5">
            Total <span>₼{location.state?.total}</span>
          </h4>
          <ReusableButton
            // bgColor={isSubmitting ? "bg-gray-500" : "bg-primary500"}
            bgColor={"bg-primary500"}
            // disabled={isSubmitting}
            textColor="text-white"
          >
            PLACE ORDER <FaArrowRight />
          </ReusableButton>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
