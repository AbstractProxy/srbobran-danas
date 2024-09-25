import {
  checkCategories,
  checkPlaces,
  checkQuery,
} from "@/utills/checking_functions/checking_functions";
import Posts from "@/Components/Posts/Posts";
import { fetchData } from "@/utills/queries/fetch_data";
import Error from "../Error/Error";

export default async function RenderPosts({
  type,
  currentPage,
  pageSize,
  pagesToShow,
  isHomePage,
}) {
  try {
    const query = checkQuery(type);
    const categories = checkCategories(type);
    const places = checkPlaces(type);

    const { data, total, hasNextPage, hasPreviousPage } = await fetchData(
      query,
      currentPage,
      pageSize,
      type
    );

    if (!data || data.length <= 0) {
      throw new Error("Error! Data not found");
    }

    const postProps = {
      type,
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
    };

    return <Posts {...postProps} />;
  } catch (error) {
    return <Error text={"data"} error={error} />;
  }
}

//Optimized
