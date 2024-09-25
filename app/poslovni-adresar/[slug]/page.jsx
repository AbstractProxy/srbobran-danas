import { JOB_SLUG_QUERY } from "@/utills/queries/job_slug_query";
import RenderSinglePage from "@/Components/RenderSinglePage/RenderSinglePage";
import { generateSinglePageSEOData } from "@/utills/other_functions/seo_functions";

export async function generateMetadata(props) {
  const { slug } = props.params;

  const seo = await generateSinglePageSEOData(slug, JOB_SLUG_QUERY);
  return seo;
}

export default async function Page(props) {
  const { type = "poslovni-adresar", slug: slug } = props.params;

  const singlePageProps = {
    type,
    slug,
    query: JOB_SLUG_QUERY,
  };

  return <RenderSinglePage {...singlePageProps} />;
}
