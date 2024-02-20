import ShopFilterProducts from "@/components/ShopFilterProducts";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TFilterOptions } from "../types";
import ShopFilterPagination from "@/components/ShopFilterPagination";

function Shop() {
  const [filterOptions, setFilterOptions] = useState<TFilterOptions>({
    categoryId: "",
    brandId: [],
    min_price: "",
    max_price: "",
    page: "1",
    page_size: "8",
    name: "",
    price: "",
    search: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const updatedSearchParams: Record<string, string> = {};
    Object.entries(filterOptions).forEach((option) => {
      if (option[1] !== "") {
        if (!Array.isArray(option[1])) {
          updatedSearchParams[option[0]] = option[1];
        } else if (option[1].length) {
          updatedSearchParams[option[0]] = option[1].join(",");
        }
      }
    });
    setSearchParams(updatedSearchParams);
    // setSearchParams(JSON.stringify({ test: updatedSearchParams }));
  }, [filterOptions, setSearchParams]);

  return (
    <main className="container lg:px-2 lg:py-2 space-x-4 mx-auto mb-10 flex flex-col lg:flex-row ">
      <section className="basis-1/4">
        <Category
          setFilterOptions={setFilterOptions}
          filterOptions={filterOptions}
        />
      </section>
      <section className="flex flex-col w-full lg:w-[85%]">
        <ShopFilterProducts
          setFilterOptions={setFilterOptions}
          filterOptions={filterOptions}
        />
        <div className="flex flex-col  h-full items-center justify-center  sm:self-end ">
          <ShopFilterPagination setFilterOptions={setFilterOptions} />
        </div>
      </section>
    </main>
  );
}

export default Shop;
