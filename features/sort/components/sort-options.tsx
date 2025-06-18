"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/shadcn/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  queryParams: Record<string, string>;
}

export const SortOptions = ({ isOpen, queryParams }: Props) => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const orderArrows = {
    asc: "▲",
    desc: "▼",
  };
  useEffect(() => {
    const page = queryParams["page"];
    const order = "desc";
    if (page === "2") {
      const params = new URLSearchParams({
        ...queryParams,
        sort: "price",
        order,
      });
      router.push(`?${params.toString()}`);

      setIsSelected(true);
      setOrder(order);
    }
  }, [queryParams["page"]]);
  useEffect(() => {
    const sort = queryParams["sort"];
    const orderParam = queryParams["order"];
    const page = queryParams["page"];

    if (sort === "price") {
      setIsSelected(true);
      if (orderParam === "asc" || (orderParam === "desc" && page !== "2")) {
        setOrder(orderParam);
      }
    }
  }, []);

  const handleClick = () => {
    const newOrder = isSelected ? (order === "asc" ? "desc" : "asc") : "asc";
    const params = new URLSearchParams({
      ...queryParams,
      sort: "price",
      order: newOrder,
    });
    router.push(`?${params.toString()}`);

    setIsSelected(true);
    setOrder(newOrder);
  };
  return (
    <section
      className={`transition-all duration-300 ease-in-out transform origin-top
    ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
  `}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem
            className={`cursor-pointer select-none px-2 py-1 rounded-md 
              ${isSelected ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:underline"}
            `}
            onClick={handleClick}
          >
            Price {isSelected && orderArrows[order]}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};
