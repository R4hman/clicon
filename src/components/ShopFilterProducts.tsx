import { useProductsFilter } from "@/hooks/useProductsFilter";
import React, { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/reusable/ProductCard";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuidv4 } from "uuid";
import { TFilterOptions } from "../types";
import CircularPageLoader from "./reusable/CircularPageLoader";
import PageLoader from "./reusable/PageLoader";

const sortData = [
  "Most popular",
  "Least popular",
  "Aşağı qiymət",
  "Yuxarı qiymət",
];

type TNameAZVersion = {
  [key: string]: string;
};
const nameAZVersion: TNameAZVersion = [
  { categoryId: "Kateqoriya" },
  { brandId: "Brend" },
  { min_price: "Minimal Qiymət" },
  { max_price: "Maksimal Qiymət" },
  { page: "Səhifə" },
  { name: "Ad" },
  { price: "Məhsulun populyarlığı" },
];

const findKeyByValueInArray = (array, targetValue) => {
  for (const obj of array) {
    const foundKey = Object.keys(obj).find((key) => obj[key] === targetValue);
    if (foundKey) {
      return foundKey;
    }
  }
  return null; // Return null if the value is not found in any object
};

type TShopFilterProps = {
  setFilterOptions: React.Dispatch<React.SetStateAction<TFilterOptions>>;
  filterOptions: TFilterOptions;
};

const ShopFilterProducts: React.FC<TShopFilterProps> = ({
  setFilterOptions,
  filterOptions,
}) => {
  const location = useLocation();
  const { data: products, isLoading: productsLoading } = useProductsFilter(
    location.search
  );
  const handleSelectChange = (val: string): void => {
    let key: string;
    if (val === "Aşağı qiymət" || val === "Yuxarı qiymət") {
      key = "price";
    } else if (val === "Most popular" || val === "Least popular") {
      key = "name";
    }

    console.log("key: " + key, val);

    setFilterOptions((prev) => ({
      ...prev,
      [`${key}`]: val,
    }));
  };

  const activeFilters: string[] = [
    ...new Set(
      Object.entries(filterOptions).map((option) => {
        if (Array.isArray(option[1]) ? option[1].length : option[1]) {
          return nameAZVersion.find((name) => name[option[0]])?.[option[0]];
        }
      })
    ),
  ];

  if (productsLoading) {
    return <CircularPageLoader />;
  }

  return (
    <div className="py-10 ">
      <header className="flex flex-col md:flex-row space-x-5 space-y-5 items-center w-full  justify-between">
        <div className="rounded-2xl md:w-[500px] w-[400px]  shadow-navbarUser relative">
          <input
            onChange={(e: ChangeEvent) =>
              setFilterOptions((prev) => ({
                ...prev,
                search: (e.target as HTMLInputElement).value,
              }))
            }
            placeholder="Search for anything"
            className="w-full py-3.5 px-5 border rounded-[3px] border-gray-200 outline-none"
            type="text"
          />
          <CiSearch className="w-5 h-5 text-gray900 absolute right-5 top-[14px] cursor-pointer" />
        </div>
        <div className="flex items-center justify-center md:justify-end   space-x-10 sm:space-x-4  w-full">
          <span>Sort by:</span>
          <Select
            value={
              filterOptions.name ? filterOptions.name : filterOptions.price
            }
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seç" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {sortData.map((item) => (
                <SelectItem key={uuidv4()} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>
      <div className="flex p-4 bg-gray-300 my-4 rounded-[3px] w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          Aktiv filterlər:
          {activeFilters.map((activeFilter) => (
            <div key={uuidv4()} className="flex items-center gap-x-1.5">
              {activeFilter && activeFilter}
              <span
                className="cursor-pointer  text-red-600 transition-all hover:scale-125"
                onClick={() =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    [`${findKeyByValueInArray(nameAZVersion, activeFilter)}`]:
                      "",
                  }))
                }
              >
                {activeFilter && `×`}
              </span>
            </div>
          ))}
          <div></div>
        </div>
        <div>{products?.totalProducts} nəticə tapıldı.</div>
      </div>

      {!productsLoading && (
        <div className="flex items-center justify-center md:justify-start gap-x-2 flex-wrap">
          {products.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopFilterProducts;
