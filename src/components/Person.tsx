import React, { useMemo } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GoPerson } from "react-icons/go";
import Login from "@/pages/Login";
import { getCookie } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/services/auth/apiLogin";
import { Link, useNavigate } from "react-router-dom";

const Person: React.FC = () => {
  const accessToken = useMemo(() => getCookie("accessToken"), []);
  const refreshToken = useMemo(() => getCookie("refreshToken"), []);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {accessToken && refreshToken ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GoPerson className="text-white w-6 sm:w-8 h-[32px] cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Popover>
          <PopoverTrigger>
            <GoPerson className="text-white w-6 sm:w-8 h-[32px] cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="bg-white w-[400px] rounded-[4px]">
            <Login />
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default Person;
