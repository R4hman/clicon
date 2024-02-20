import React, { FC, ReactElement } from "react";

const Settings: FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        <img src="" className="basis-1/3" alt="user img" />
        <div className="  ">
          <div className="flex items-center space-x-10">
            <div className="flex flex-col space-y-2">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <div className="flex flex-col space-y-2">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
