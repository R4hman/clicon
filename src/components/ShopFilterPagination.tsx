import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import { TFilterOptions } from "@/types";

type TPaginationProps = {
  setFilterOptions: React.Dispatch<React.SetStateAction<TFilterOptions>>;
};

const ShopFilterPagination: React.FC<TPaginationProps> = ({
  setFilterOptions,
}) => {
  const { data, isLoading } = useProductsFilter(location.search);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem
            onClick={() =>
              setFilterOptions((prev) => ({
                ...prev,
                page:
                  +prev.page > 0 ? +prev.page - 1 + "" : +prev.page - 0 + "",
              }))
            }
          >
            <PaginationPrevious href="#" />
          </PaginationItem>
          {Array.from({ length: data?.totalPages }, (_, x) => x + 1).map(
            (page) => (
              <PaginationItem
                onClick={() =>
                  setFilterOptions((prev) => ({ ...prev, page: page + "" }))
                }
              >
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem
            onClick={() =>
              setFilterOptions((prev) => ({
                ...prev,
                page:
                  +prev.page < +data?.totalPages
                    ? +prev.page + 1 + ""
                    : +prev.page + 0 + "",
              }))
            }
          >
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ShopFilterPagination;
