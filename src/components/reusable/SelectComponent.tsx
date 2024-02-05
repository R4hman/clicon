import React from "react";

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
}) => {
  const handleSelectChange = (val: string): void => {
    setProductValues((prev) => ({
      [`${title}`]: val,
      ...prev,
    }));
  };
  return (
    <Select
      value={productValues[title] || ""}
      onValueChange={handleSelectChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
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
