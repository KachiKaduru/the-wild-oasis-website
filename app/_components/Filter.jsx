"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterData = [
  {
    title: "All cabins",
    filterType: "all",
  },
  {
    title: "1 - 3 guests",
    filterType: "small",
  },
  {
    title: "4 - 7 guests",
    filterType: "medium",
  },
  {
    title: "8 - 12 guests",
    filterType: "large",
  },
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filterData.map(({ title, filterType }, index) => (
        <FilterButton
          key={index}
          title={title}
          filterType={filterType}
          filterFunction={handleFilter}
          activeFilter={activeFilter}
        />
      ))}
    </div>
  );
}

function FilterButton({ title, filterType, filterFunction, activeFilter }) {
  return (
    <button
      className={`px-3 py-1 sm:px-5 sm:py-2 hover:bg-primary-600 ${
        filterType === activeFilter && "bg-primary-700 text-primary-50"
      }`}
      onClick={() => filterFunction(filterType)}
    >
      {title}
    </button>
  );
}
