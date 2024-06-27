"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }: {count: number}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || '1';

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 10;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", String(parseInt(page) - 1))
      : params.set("page", String(parseInt(page) + 1));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="p-1.5 flex justify-between mt-5">
      <button
        className="py-1.5 px-2.5 cursor-pointer disabled:cursor-not-allowed bg-color-action-2 disabled:bg-color-secondary-hover"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="py-1.5 px-2.5 cursor-pointer disabled:cursor-not-allowed bg-color-action-2 disabled:bg-color-secondary-hover"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;