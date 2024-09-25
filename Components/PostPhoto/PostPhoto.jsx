import Link from "next/link";
import PostPhotoWrapper from "@/Components/PostPhotoWrapper/PostPhotoWrapper";
import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";

export default function PostPhoto({
  uri,
  featuredImage,
  imageUrl,
  title,
  width,
  height,
  isHomePage,
  styleType,
}) {
  return (
    <>
      {featuredImage && (
        <PostPhotoWrapper isHomePage={isHomePage} styleType={styleType}>
          <Link href={uri}>
            <FeaturedImage
              alt={title}
              imageUrl={imageUrl}
              width={width}
              height={height}
              imageClass={
                "rounded bg-gray-50 object-cover transition-opacity duration-300 opacity-100 hover:opacity-70 w-full dark:border border-slate-600"
              }
            />
          </Link>
        </PostPhotoWrapper>
      )}
    </>
  );
}

// rounded bg-gray-50 object-cover transition-opacity duration-300 opacity-100 hover:opacity-70 w-full dark:border border-slate-600
