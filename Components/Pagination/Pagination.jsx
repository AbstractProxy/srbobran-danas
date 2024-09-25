import { isKategorijeOrMesta } from "@/utills/url_config_functions/url_config_functions";
import { UniversalPagination } from "@/Components/UniversalPagination/UniversalPagination";
import { PaginationForCategories } from "@/Components/PaginationForCategories/PaginationForCategories";

export const Pagination = ({
  type,
  slug,
  totalPages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  pagesToShow,
}) => {
  let startPage = currentPage - pagesToShow;

  startPage = Math.max(startPage, 1);

  let endPage = currentPage + pagesToShow;
  endPage = Math.min(endPage, totalPages);

  const paginationProps = {
    type,
    slug,
    totalPages,
    currentPage,
    hasNextPage,
    hasPreviousPage,
    startPage,
    endPage,
  };

  if (isKategorijeOrMesta(type)) {
    return <PaginationForCategories {...paginationProps} />;
  }
  return <UniversalPagination {...paginationProps} />;
};
