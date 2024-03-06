import { useCategories } from "@/hooks/useCategories";
import React, { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

import { TCategory } from "@/types";
import { useBrands } from "@/hooks/useBrands";
import { TFilterOptions } from "../types";
import PageLoader from "./reusable/PageLoader";

const priceRanges = [
  { min: 0, max: 20 },
  { min: 25, max: 100 },
  { min: 100, max: 300 },
  { min: 300, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 10000 },
];

type TCategoryProps = {
  setFilterOptions: React.Dispatch<React.SetStateAction<TFilterOptions>>;
  filterOptions: TFilterOptions;
};

const Category: React.FC<TCategoryProps> = ({
  setFilterOptions,
  filterOptions,
}) => {
  const { data, isLoading } = useCategories(
    "https://clicon.onrender.com/api/v1/categories"
  );
  const { data: brands, isLoading: brandsLoading } = useBrands(
    "https://clicon.onrender.com/api/v1/brands"
  );

  const handleBrandId = (e: ChangeEvent<HTMLInputElement>) => {
    const isInBrandId = filterOptions.brandId.includes(e.target.value);
    if (isInBrandId) {
      const brandId = filterOptions.brandId.filter(
        (item) => item !== e.target.value
      );
      setFilterOptions((prev) => ({
        ...prev,
        brandId,
      }));
    } else {
      setFilterOptions((prev) => ({
        ...prev,
        brandId: [...prev.brandId, e.target.value],
      }));
    }
  };

  if (isLoading || brandsLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }
  return (
    <section className="py-10">
      <div>
        <header className="mb-4">
          <h2 className="text-gray900 text-base  font-medium">CATEGORY</h2>
        </header>
        <RadioGroup
          onValueChange={(val) =>
            setFilterOptions((prev) => ({
              ...prev,
              categoryId: val !== "Electronic devices" ? val : "",
            }))
          }
          defaultValue="Electronic Devices"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Electronic devices" id="electronic-d" />
            <Label htmlFor="electronic-d">Electronic devices</Label>
          </div>

          {data.categories.map((item: TCategory) => (
            <div key={item._id} className="flex items-center space-x-2">
              <RadioGroupItem value={item._id} id={item._id} />
              <Label htmlFor={item._id}>{item.name}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="w-full bg-gray-200 my-6 h-[1px]"></div>
      <div>
        <header className="mb-4">Price Range</header>
        <div>
          <Slider
            onValueChange={(val) =>
              setFilterOptions((prev) => ({
                ...prev,
                min_price: "0",
                max_price: val[0] + "",
              }))
            }
            defaultValue={[33]}
            max={500}
            // min={50}
            step={5}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 my-6">
        <input
          className="px-4 py-2 border rounded-[4px] border-gray-200 w-[150px]"
          type="text"
          disabled
          placeholder={filterOptions.min_price || "Min price"}
        />
        <input
          type="text"
          disabled
          placeholder={filterOptions.max_price || "Max price"}
          className="px-4 py-2 border rounded-[4px] border-gray-200 w-[150px]"
        />
      </div>
      <div>
        <RadioGroup
          onValueChange={(val) =>
            setFilterOptions((prev) => ({
              ...prev,
              min_price: val !== "Bütün qiymətlər" ? val.split("-")[0] : "",
              max_price: val !== "Bütün qiymətlər" ? val.split("-")[1] : "",
            }))
          }
          defaultValue="Bütün qiymətlər"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Bütün qiymətlər" id="electronic-d" />
            <Label htmlFor="electronic-d">Bütün qiymətlər</Label>
          </div>

          {priceRanges.map((item) => (
            <div
              key={item.min + "" + item.max}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem
                value={`${item.min}-${item.max}`}
                id={item.min + "" + item.max}
              />
              <Label
                htmlFor={item.min + "" + item.max}
              >{`${item.min}₼ -dan ${item.max}₼ -dək`}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="w-full bg-gray-200 my-6 h-[1px]"></div>
      <div className=" w-full">
        <header>Popular brendlər</header>
        <div className="flex flex-wrap mt-4">
          {brands.brands.map((brand) => (
            <div key={brand._id} className="w-[50%]">
              <input
                onChange={handleBrandId}
                className="accent-primary500 w-4 h-4 mr-1"
                type="checkbox"
                value={brand._id}
                id={brand._id}
              />
              <label htmlFor={brand._id}>{brand.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
