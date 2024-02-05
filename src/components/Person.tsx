import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GoPerson } from "react-icons/go";
import Login from "@/pages/Login";

const Person: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <GoPerson className="text-white w-6 sm:w-8 h-[32px] cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-[400px] rounded-[4px]">
        <Login />
      </PopoverContent>
    </Popover>
  );
};

export default Person;
