"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function PaginationBar({
  currentPage,
  total,
}: {
  currentPage: number;
  total: number;
}) {
  const totalPage = Math.ceil(total / 10);
  if (totalPage === 1) {
    return <></>;
  }

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handlePageSubmit = (page: number) => {
    if (currentPage === page) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex flex-row gap-2 pt-2">
      {Array(totalPage)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            type="submit"
            className={`px-2 items-center text-center rounded-full cursor-pointer transition-all duration-300 ${index + 1 !== currentPage ? "bg-gray-500 text-white hover:scale-110" : "bg-black text-white scale-120"}`}
            onClick={() => handlePageSubmit(index + 1)}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}
