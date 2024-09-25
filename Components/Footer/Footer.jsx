import { fetchFooterData } from "@/utills/queries/fetch_data";
import { NEW_FOOTER_QUERY } from "@/utills/queries/footer_query";
import FooterData from "@/Components/FooterData/FooterData";
import Error from "../Error/Error";

export default async function Footer() {
  try {
    const { footerArray, footerText } = await fetchFooterData(NEW_FOOTER_QUERY);

    if (!footerArray || !footerText) {
      throw new Error("Error! Footer data not found.");
    }

    return <FooterData footerArray={footerArray} footerText={footerText} />;
  } catch (error) {
    return <Error text={"footer data"} error={error} />;
  }
}
