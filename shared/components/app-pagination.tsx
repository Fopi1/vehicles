import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcn/components/ui/pagination";

interface Props {
  currentPage: number;
  lastPage: number;
  queryParams: Record<string, string>;
}

export const AppPagination = ({
  currentPage,
  lastPage,
  queryParams,
}: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: 2 }).map((_, i) => {
          const page = i + 1 + "";
          return (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                href={`?${new URLSearchParams({ ...queryParams, page }).toString()}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{lastPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
