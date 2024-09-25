import { fetchNavigationData } from "@/utills/queries/fetch_data";
import { NAVBAR_QUERY } from "@/utills/queries/navbar_query";
import NavData from "@/Components//NavData/NavData";
import Error from "../Error/Error";

export default async function Navbar() {
  try {
    const slug = "glavnimeni";
    const menuArray = await fetchNavigationData(slug, NAVBAR_QUERY);

    if (!menuArray) {
      throw new Error("Error! Navbar data not found.");
    }

    //? SVE OK
    return <NavData menuArray={menuArray} />;
  } catch (error) {
    return <Error text={"navbar data"} error={error} />;
  }
}
