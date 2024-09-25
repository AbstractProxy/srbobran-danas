import { DESAVANJE_SLUG_QUERY } from "@/utills/queries/desavanje_slug_query";
import RenderSinglePage from "@/Components/RenderSinglePage/RenderSinglePage";
import { generateSinglePageSEOData } from "@/utills/other_functions/seo_functions";

export async function generateMetadata(props) {
  const { slug } = props.params;

  const seo = await generateSinglePageSEOData(slug, DESAVANJE_SLUG_QUERY);
  return seo;
}

export default async function Page(props) {
  const { type = "desavanja", slug } = props.params;

  const singlePageProps = {
    type,
    slug,
    query: DESAVANJE_SLUG_QUERY,
  };

  return <RenderSinglePage {...singlePageProps} />;
}
