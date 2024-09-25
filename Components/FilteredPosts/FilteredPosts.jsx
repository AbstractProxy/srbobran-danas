import { fetchFilteredData } from "@/utills/queries/fetch_data";
import Posts from "@/Components/Posts/Posts";

import {
  checkCategories,
  checkPlaces,
  checkQuery,
  checkTaxonomy,
} from "../../utills/checking_functions/checking_functions";
import Error from "../Error/Error";

export default async function FilteredPosts({
  type,
  slug,
  currentPage,
  pageSize,
  pagesToShow,
}) {
  try {
    const taxonomyName = checkTaxonomy(type);

    const categories = checkCategories(type);
    const places = checkPlaces(type);
    const query = checkQuery(type);

    const { data, total, hasNextPage, hasPreviousPage } =
      await fetchFilteredData(slug, query, currentPage, pageSize, taxonomyName);

    if (!data || data.length <= 0) {
      throw new Error("Error! Filtered data not found.");
    }

    const postProps = {
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
    };

    return <Posts {...postProps} />;
  } catch (error) {
    return <Error text={"filtered data"} error={error} />;
  }
}
