import { FC, ReactElement } from "react";
import ReusableButton from "./reusable/ReusableButton";
import { FaArrowRight } from "react-icons/fa";

const SubscribeNewsletter: FC = (): ReactElement => {
  return (
    <div className="bg-secondary700 text-white py-[80px] flex items-center justify-center flex-col space-y-5">
      <div className="flex items-center justify-center px-5 flex-col space-y-5 w-[300px] sm:w-[600px] ">
        <h2 className=" font-semibold text-[28px] text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-base text-center">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <form>
          <div className="w-[300px] md:w-[600px] relative">
            <input
              type="text"
              placeholder="Email adress"
              className="rounded-[3px] p-5 w-full"
            />
            <ReusableButton
              style={{
                position: "absolute",
                right: "14px",
                top: "0.8rem",
                height: "40px",

                // background: "red",
                zIndex: 100,
              }}
              type="submit"
              size={150}
              bgColor="bg-primary500"
            >
              Subscribe <FaArrowRight />
            </ReusableButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
