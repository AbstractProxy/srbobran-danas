import { UniversalPagination } from "../UniversalPagination/UniversalPagination";

export function HomePagination({
  type,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  isHomePagination,
}) {
  return (
    <UniversalPagination
      type={type}
      currentPage={currentPage}
      hasNextPage={hasNextPage}
      hasPreviousPage={hasPreviousPage}
      isHomePagination={isHomePagination}
    />
  );
}
