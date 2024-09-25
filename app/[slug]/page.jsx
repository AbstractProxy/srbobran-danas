import RenderOnePage from "@/Components/RenderOnePage/RenderOnePage";
import { ONE_PAGE_QUERY } from "@/utills/queries/one_page_query";

export default async function Page(props) {
  const { slug } = props.params;

  const pageProps = {
    url: slug,
    query: ONE_PAGE_QUERY,
  };

  return <RenderOnePage {...pageProps} />;
}
