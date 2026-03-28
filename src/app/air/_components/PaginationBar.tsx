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
    <div>
      {Array(totalPage)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            type="submit"
            className="bg-black text-white px-2 items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => handlePageSubmit(index + 1)}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}
