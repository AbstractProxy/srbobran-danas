import {
  checkAreCategoriesNull,
  checkCategories,
  checkCategoriesNameForQuery,
  checkPlaces,
  checkPlacesNameForQuery,
  checkPostsType,
} from "@/utills/checking_functions/checking_functions";
import HomePosts from "../HomePosts/HomePosts";
import { fetchHomePostsData } from "@/utills/queries/fetch_data";
import Error from "../Error/Error";

export default async function FetchAndRenderHomePosts({
  hasNextPage,
  categoriesForQuery,
  query,
  postsNumber,
  type,
  typeName,
  styleType,
}) {
  try {
    const postType = checkPostsType(type);

    const categories = checkCategories(postType);
    const places = checkPlaces(postType);

    const categoriesQueryName = checkCategoriesNameForQuery(type);
    const placesQueryName = checkPlacesNameForQuery(type);
    const categoriesArray = checkAreCategoriesNull(categoriesForQuery);

    const { data, total, hasPreviousPage } = await fetchHomePostsData(
      query,
      postsNumber,
      typeName,
      categoriesArray,
      categoriesQueryName,
      placesQueryName
    );

    if (!data || data.length <= 0) {
      throw new Error("Error! Home posts data not found.");
    }

    const paginationProps = {
      type: postType,
      totalPages: Math.ceil(total / 10),
      currentPage: 1,
      hasNextPage,
      hasPreviousPage,
      pagesToShow: 2,
    };

    const categoriesAndPlacesProps = {
      categories,
      places,
    };

    return (
      <HomePosts
        data={data}
        categories={categories}
        places={places}
        paginationProps={paginationProps}
        categoriesAndPlacesProps={categoriesAndPlacesProps}
        styleType={styleType}
      />
    );
  } catch (error) {
    return <Error text={"home posts data"} error={error} />;
  }
}
