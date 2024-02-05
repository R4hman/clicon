import React from "react";
import { Skeleton } from "../ui/skeleton";

const SpesificProductSkeleton: React.FC = (): React.ReactNode => {
  return;
  <div className="flex items-center gap-x-4">
    <div className="flex w-[570px] bg-white flex-col  gap-y-4">
      <div className="px-4 space-y-4">
        <Skeleton className="h-12 w-full rounded-md  bg-slate-100" />
        <Skeleton className="h-16 w-full rounded-md  bg-slate-100" />
        <Skeleton className="h-8 w-full rounded-md bg-slate-100" />
      </div>
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-8 w-full rounded-sm bg-slate-100" />
        <Skeleton className="h-12 w-full rounded-sm bg-slate-100" />
      </div>
      <div className="px-8">
        <Skeleton className="h-14 w-full rounded-md bg-slate-100 " />
      </div>
      <Skeleton className="h-[300px] w-full rounded-md bg-slate-100" />
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-[250px] bg-slate-100 rounded-lg" />
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-8 w-[70px] rounded-md bg-slate-100" />
          <Skeleton className="h-8 w-[70px] rounded-md bg-slate-100" />
          <Skeleton className="h-8 w-[70px] rounded-md bg-slate-100" />
          <Skeleton className="h-8 w-[70px] rounded-md bg-slate-100" />
          <Skeleton className="h-8 w-[70px] rounded-md bg-slate-100" />
        </div>
      </div>
      <div className="flex flex-wrap mt-6  gap-4 items-center">
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
        <div>
          <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-100" />
          <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-100" />
          <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-100" />
        </div>
      </div>
    </div>
  </div>;
};

export default SpesificProductSkeleton;
