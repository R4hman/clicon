import { FC, ReactElement } from "react";

const Checkout: FC = (): ReactElement => {
  return (
    <section className="container mx-auto">
      <div className="my-10 flex   space-x-5 ">
        <div className="basis-2/3">
          <header className="text-[20px] mb-10 font-semibold">
            Billing information
          </header>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-2">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="address">
                Address
              </label>
              <input
                className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[500px]"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-2">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[250px]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h3>Additional Information</h3>
              <h4>
                Order notes <span>(Optional)</span>
              </h4>
              <textarea
                //   cols={1}
                rows={4}
                className="border-[2px] w-[500px] border-gray-200 rounded-[3px]"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="border-[2px] basis-1/3 border-gray-200 rounded-[3px] p-5">
          <h4 className="mb-5">Order Summary</h4>
          <div className="flex flex-col space-y-3">
            <h4 className="flex items-center justify-between">
              Sub-total <span>320</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Sub-total <span>320</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Sub-total <span>320</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Sub-total <span>320</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Sub-total <span>320</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
