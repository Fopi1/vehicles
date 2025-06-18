"use client";

import { useState } from "react";
import { SortArrow } from "./sort-arrow";
import { SortOptions } from "./sort-options";

interface Props{
	queryParams:Record<string,string>
}
export const Sort = ({queryParams}:Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <section className="flex items-center px-3">
      <p>Sort by price:</p>
      <SortArrow isOpen={isOpen} toggle={toggleIsOpen} />
      <SortOptions isOpen={isOpen} queryParams={queryParams} />
    </section>
  );
};
