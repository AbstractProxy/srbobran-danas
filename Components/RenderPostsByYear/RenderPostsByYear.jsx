import Posts from "@/Components/Posts/Posts";
import { fetchDataByYear } from "@/utills/queries/fetch_data";
import Error from "../Error/Error";

export default async function RenderPostsByYear({
  type,
  yearQuery,
  currentPage,
  pageSize,
  pagesToShow,
  categories,
  places,
}) {
  try {
    //Ako je type samo godina vraca objave filtrirane po godini:
    const { data, total, hasNextPage, hasPreviousPage } = await fetchDataByYear(
      type,
      yearQuery,
      currentPage,
      pageSize
    );

    if (!data || data.length <= 0) {
      throw new Error("Error! Data by year not found");
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
    };

    return <Posts {...postProps} />;
  } catch (error) {
    return <Error text={"data by year"} error={error} />;
  }
}
