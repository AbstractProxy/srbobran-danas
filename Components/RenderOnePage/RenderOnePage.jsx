import { fetchOtherSinglePost } from "@/utills/queries/fetch_data";
import SinglePageContent from "@/Components/SinglePageContent/SinglePageContent";
import Error from "../Error/Error";

export default async function RenderOnePage({ url, query }) {
  try {
    const {
      title,
      blocksJSON,
      postImages,
      gallery,
      featuredImage,
      imageUrl,
      width,
      height,
    } = await fetchOtherSinglePost(url, query);

    const blocks = JSON.parse(blocksJSON);

    if (!blocks) {
      throw new Error("Error! JSON blocks not found.");
    }

    const photos = postImages;

    const otherPageProps = {
      url,
      title,
      blocks,
      photos,
      gallery,
      featuredImage,
      imageUrl,
      width,
      height,
    };

    return <SinglePageContent {...otherPageProps} />;
  } catch (error) {
    return <Error text={"single page data"} error={error} />;
  }
}
