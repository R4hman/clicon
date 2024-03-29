import React, { ReactElement } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuidv4 } from "uuid";

type TSelectComponent = {
  data: string[];
  title: string;
  setProductValues: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  productValues: Record<string, string>;
};

const SelectComponent: React.FC<TSelectComponent> = ({
  data,
  title,
  setProductValues,
  productValues,
}): ReactElement => {
  const handleSelectChange = (val: string): void => {
    console.log("value: " + title, val);
    const newObj = productValues;
    console.log("newObj title: " + newObj[title]);
    newObj[title] = val;
    console.log("newObj: " + Object.keys(newObj));
    setProductValues(newObj);
    setProductValues((prev) => ({
      ...prev,
      [title]: val,
    }));
  };
  return (
    <Select
      value={productValues[title] || ""}
      onValueChange={handleSelectChange}
    >
      <SelectTrigger className="w-full sm:w-[250px] md:w-full lg:w-[250px] ">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent className="bg-white  ">
        {data.map((item) => (
          <SelectItem key={uuidv4()} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    // <div>
    //   {/* <label htmlFor={title}>{title} </label> */}
    //   <select
    //     name={title}
    //     value={productValues[title] || ""}
    //     onChange={handleSelectChange}
    //   >
    //     <option value="">{title}</option>
    //     {data.map((item) => (
    //       <option key={uuidv4()} value={item}>
    //         {item}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default SelectComponent;
