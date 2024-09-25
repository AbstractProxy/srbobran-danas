import { AKTIVNOST_SLUG_QUERY } from "@/utills/queries/aktivnosti_slug_query";
import RenderSinglePage from "@/Components/RenderSinglePage/RenderSinglePage";
import { generateSinglePageSEOData } from "@/utills/other_functions/seo_functions";

export async function generateMetadata(props) {
  const { slug } = props.params;

  const seo = await generateSinglePageSEOData(slug, AKTIVNOST_SLUG_QUERY);
  return seo;
}

export default async function Page(props) {
  const { type = "aktivnosti", slug: slug } = props.params;

  const singlePageProps = {
    type,
    slug,
    query: AKTIVNOST_SLUG_QUERY,
  };

  return <RenderSinglePage {...singlePageProps} />;
}
