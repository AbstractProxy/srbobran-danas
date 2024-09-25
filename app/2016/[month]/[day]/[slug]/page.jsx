import { POST_SLUG_QUERY } from "@/utills/queries/post_slug_query";
import RenderSinglePage from "@/Components/RenderSinglePage/RenderSinglePage";
import { generateSinglePageSEOData } from "@/utills/other_functions/seo_functions";

export async function generateMetadata(props) {
  const { slug } = props.params;

  const seo = await generateSinglePageSEOData(slug, POST_SLUG_QUERY);
  return seo;
}

export default async function Page(props) {
  const { slug } = props.params;

  const singlePageProps = {
    slug: slug,
    query: POST_SLUG_QUERY,
  };

  return <RenderSinglePage {...singlePageProps} />;
}
