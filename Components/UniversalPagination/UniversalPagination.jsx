import PaginationWrapper from "@/Components/PaginationWrapper/PaginationWrapper";
import PreviousPage from "@/Components/PreviousPage/PreviousPage";
import PaginationLinks from "@/Components/PaginationLinks/PaginationLinks";
import NextPage from "@/Components/NextPage/NextPage";
import HomeNextPage from "../HomeNextPage/HomeNextPage";

export const UniversalPagination = ({
  type,
  totalPages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  startPage,
  endPage,
  isHomePagination,
}) => {
  return (
    <PaginationWrapper>
      <PreviousPage
        hasPreviousPage={hasPreviousPage}
        currentPage={currentPage}
        type={type}
      />

      <PaginationLinks
        type={type}
        totalPages={totalPages}
        currentPage={currentPage}
        startPage={startPage}
        endPage={endPage}
      />

      {isHomePagination ? (
        <HomeNextPage
          hasNextPage={hasNextPage}
          currentPage={currentPage}
          type={type}
        />
      ) : (
        <NextPage
          hasNextPage={hasNextPage}
          currentPage={currentPage}
          type={type}
        />
      )}
    </PaginationWrapper>
  );
};
