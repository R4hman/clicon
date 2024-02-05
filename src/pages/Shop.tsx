import ShopFilterProducts from "@/components/ShopFilterProducts";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TFilterOptions } from "../types";
import ShopFilterPagination from "@/components/ShopFilterPagination";

function Shop() {
  const [filterOptions, setFilterOptions] = useState<TFilterOptions>({
    categoryId: "",
    brandId: "",
    min_price: "",
    max_price: "",
    page: "1",
    page_size: "4",
    name: "",
    price: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const updatedSearchParams: Record<string, string> = {};
    Object.entries(filterOptions).forEach((option) => {
      if (option[1] !== "") {
        updatedSearchParams[option[0]] = option[1];
      }
    });
    setSearchParams(updatedSearchParams);
  }, [filterOptions, setSearchParams]);
  return (
    <main className="container mx-auto flex ">
      <section className="basis-1/4">
        <Category
          setFilterOptions={setFilterOptions}
          filterOptions={filterOptions}
        />
      </section>
      <section className="flex flex-col w-full">
        <ShopFilterProducts
          setFilterOptions={setFilterOptions}
          filterOptions={filterOptions}
        />
        <div className="flex items-center justify-center">
          <ShopFilterPagination setFilterOptions={setFilterOptions} />
        </div>
      </section>
    </main>
  );
}

export default Shop;
