import Link from "next/link";

import { PaginationEllipsis } from "@/components/pagination/PaginationEllipsis";
import { PaginationItem } from "@/components/pagination/PaginationNumber";
import { paginate } from "@/utils/paginationHandler";

interface PaginationContainerProps {
  pathname: string;
  itemsPerPage: number;
  currentPage: number;
  totalItemCount: number;
}

export function PaginationContainer({
  pathname,
  itemsPerPage,
  currentPage,
  totalItemCount,
}: PaginationContainerProps) {
  const totalPageCount = Math.ceil(totalItemCount / itemsPerPage);

  const { current, prev, next, items } = paginate(currentPage, totalPageCount);

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      {/* previous page button */}
      <Link
        href={`${pathname}?page=${prev}`}
        className={`pagination-previous ${
          prev ? "" : "is-disabled link-disabled"
        }`}
        aria-label="Go to previous page"
      >
        Previous page
      </Link>

      {/* next page button */}

      <Link
        href={`${pathname}?page=${next}`}
        className={`pagination-next ${next ? "" : "is-disabled link-disabled"}`}
        aria-label="Go to next page"
      >
        Next page
      </Link>

      <ul className="pagination-list">
        {items.map((item, index) => (
          <li key={index}>
            {item === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationItem
                number={item}
                href={`${pathname}?page=${item}`}
                isCurrent={item === current}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
