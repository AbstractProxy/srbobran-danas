import PaginationWrapper from "@/Components/PaginationWrapper/PaginationWrapper";
import PreviousPageCategories from "@/Components/PreviousPageCategories/PreviousPageCategories";
import PaginationLinksCategories from "@/Components/PaginationLinksCategories/PaginationLinksCategories";
import NextPageCategories from "@/Components/NextPageCategories/NextPageCategories";

export const PaginationForCategories = ({
  type,
  slug,
  totalPages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  startPage,
  endPage,
}) => {
  return (
    <PaginationWrapper>
      <PreviousPageCategories
        hasPreviousPage={hasPreviousPage}
        currentPage={currentPage}
        type={type}
        slug={slug}
      />

      <PaginationLinksCategories
        type={type}
        slug={slug}
        totalPages={totalPages}
        currentPage={currentPage}
        startPage={startPage}
        endPage={endPage}
      />
      <NextPageCategories
        hasNextPage={hasNextPage}
        currentPage={currentPage}
        slug={slug}
      />
    </PaginationWrapper>
  );
};
