import { fetchSinglePageData } from "@/utills/queries/fetch_data";
import SinglePageContent from "@/Components/SinglePageContent/SinglePageContent";
import Error from "../Error/Error";

export default async function RenderSinglePage({ type, slug, query }) {
  try {
    const imageClass = "rounded  bg-gray-50 dark:border border-slate-600";
    const linkClass = `rounded-full bg-gray-200 dark:bg-slate-600 dark:hover:bg-slate-400 px-2.5 py-1 mx-1  font-medium text-gray-600 dark:text-slate-200 lowercase`;
    const {
      details,
      postId,
      blocksJSON,
      title,
      date,
      featuredImage,
      imageUrl,
      width,
      height,
      postImages,
      gallery,
      categories,
      mesta,
    } = await fetchSinglePageData(slug, query);

    const blocks = JSON.parse(blocksJSON);
    const photos = JSON.parse(postImages);

    if (!blocks) {
      throw new Error("Error! JSON blocks not found");
    }

    const categoryNames = categories.map((category) => category.node.name);

    const slugPageProps = {
      details,
      type,
      postId,
      blocks,
      title,
      date,
      featuredImage,
      imageClass,
      linkClass,
      imageUrl,
      width,
      height,
      photos,
      gallery,
      categories,
      categoryNames,
      mesta,
    };

    return <SinglePageContent {...slugPageProps} />;
  } catch (error) {
    return <Error text={"single page data"} error={error} />;
  }
}
