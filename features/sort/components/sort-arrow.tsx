"use client";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const SortArrow = ({ isOpen, toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className="w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <span
        className={`transition-transform duration-300 origin-center text-2xl ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      >
        &gt;
      </span>
    </button>
  );
};
