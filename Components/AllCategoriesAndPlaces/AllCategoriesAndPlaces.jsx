import { fetchAllCategoriesAndPlaces } from "@/utills/queries/fetch_data";
import DisplayAllCategoriesAndPlaces from "@/Components/DisplayAllCategoriesAndPlaces/DisplayAllCategoriesAndPlaces";
import Error from "../Error/Error";

export default async function AllCategoriesAndPlaces({ query }) {
  try {
    const { data } = await fetchAllCategoriesAndPlaces(query);

    return <DisplayAllCategoriesAndPlaces data={data.edges} />;
  } catch (error) {
    return <Error text={"categories"} error={error} />;
  }
}
