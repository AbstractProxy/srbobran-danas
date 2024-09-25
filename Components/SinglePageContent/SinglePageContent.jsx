import Details from "@/Components/Details/Details";
import { BlockRenderer } from "@/Components/BlockRenderer/BlockRenderer";
import RelevantPostsDecider from "@/Components/RelevantPostsDecider/RelevantPostsDecider";
import Gallery from "@/Components/Gallery/Gallery";
import SinglePostImage from "@/Components/SinglePostImage/SinglePostImage";
import SinglePostDate from "@/Components/SinglePostDate/SinglePostDate";
import SingleCategoriesAndPlaces from "@/Components/SingleCategoriesAndPlaces/SingleCategoriesAndPlaces";
import SinglePostTitle from "@/Components/SinglePostTitle/SinglePostTitle";
import SinglePostWrapper from "@/Components/SinglePostWrapper/SinglePostWrapper";
import SocialShareButtons from "@/Components/SocialShareButtons/SocialShareButtons";

export default async function SinglePageContent({
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
}) {
  return (
    <SinglePostWrapper>
      <SinglePostImage
        featuredImage={featuredImage}
        alt={title}
        imageUrl={imageUrl}
        imageClass={imageClass}
        width={width}
        height={height}
      />

      <SinglePostDate date={date} type={type} />
      <SingleCategoriesAndPlaces
        categories={categories}
        mesta={mesta}
        linkClass={linkClass}
      />
      <Details data={details} />
      <SinglePostTitle title={title} />
      <>
        <BlockRenderer blocks={blocks} photos={photos} />
        <Gallery data={gallery} />
        <SocialShareButtons />

        <RelevantPostsDecider
          type={type}
          postId={postId}
          categoryNames={categoryNames}
        />
      </>
    </SinglePostWrapper>
  );
}
