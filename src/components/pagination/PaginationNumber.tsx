import Link from "next/link";

interface PaginationItemProps {
  number: number;
  href: string;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  href,
  isCurrent = false,
}: PaginationItemProps) {
  return (
    <Link
      href={href}
      className={`pagination-link ${
        isCurrent ? "is-current link-disabled" : ""
      }`}
      aria-label={`${isCurrent ? "Page " : "Go to page "} ${href}`}
      aria-current={isCurrent ? "page" : undefined}
    >
      {number}
    </Link>
  );
}
