import MapPostProperty from "@/Components/MapPostProperty/MapPostProperty";
import { Pagination } from "@/Components/Pagination/Pagination";
import CategoriesAndPlaces from "@/Components/CategoriesAndPlaces/CategoriesAndPlaces";

export default async function Posts({
  type,
  slug,
  data,
  currentPage,
  total,
  pagesToShow,
  hasNextPage,
  hasPreviousPage,
  pageSize,
  categories,
  places,
  isHomePage,
}) {
  const categoriesAndPlacesProps = {
    categories,
    places,
  };

  const paginationProps = {
    type,
    slug,
    totalPages: Math.ceil(total / pageSize),
    currentPage,
    hasNextPage,
    hasPreviousPage,
    pagesToShow,
  };

  return (
    <>
      {categories && places && (
        <CategoriesAndPlaces {...categoriesAndPlacesProps} />
      )}

      <MapPostProperty data={data.edges} isHomePage={isHomePage} />

      <div>{<Pagination {...paginationProps} />}</div>
    </>
  );
}
