import CategoriesAndPlaces from "../CategoriesAndPlaces/CategoriesAndPlaces";
import { HomePagination } from "../HomePagination/HomePagination";
import MapPostProperty from "../MapPostProperty/MapPostProperty";

export default function HomePosts({
  data,
  categories,
  places,
  paginationProps,
  categoriesAndPlacesProps,
  styleType,
}) {
  return (
    <>
      <div>
        <h1 className="text-6xl italic text-yellow-400 font-bold">VESTI</h1>
      </div>
      {categories && places && (
        <CategoriesAndPlaces {...categoriesAndPlacesProps} />
      )}

      <MapPostProperty
        data={data.edges}
        isHomePage={true}
        styleType={styleType}
      />

      <div>
        {<HomePagination {...paginationProps} isHomePagination={true} />}
      </div>
    </>
  );
}
