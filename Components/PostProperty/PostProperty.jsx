import PostArticle from "@/Components/PostArticle/PostArticle";
import PostDateAndCategories from "@/Components/PostDateAndCategories/PostDateAndCategories";
import PostText from "@/Components/PostText/PostText";
import PostTitle from "@/Components/PostTitle/PostTitle";
import PostExcerpt from "@/Components/PostExcerpt/PostExcerpt";
import PostPhoto from "@/Components/PostPhoto/PostPhoto";
import PostPlaces from "@/Components/PostPlaces/PostPlaces";
import PostContent from "../PostContent/PostContent";
import Link from "next/link";

export default function PostProperty({
  date,
  title,
  excerpt,
  featuredImage,
  size,
  uri,
  categories,
  places,
  isHomePage,
  styleType,
}) {
  const imageUrl = size?.sourceUrl;
  const width =
    styleType === "postlist_1"
      ? size?.width
      : styleType === "postlist_2"
      ? 250
      : styleType === "postlist_3"
      ? "150"
      : styleType === "postlist_12_44"
      ? 120
      : size?.width;

  const height = size?.height;

  const linkClass = `rounded-full bg-gray-200 dark:bg-slate-600 dark:hover:bg-slate-400 px-1 py-1  mx-0.5   font-medium text-sm text-gray-600 dark:text-slate-200 hover:bg-gray-100 lowercase`;

  return (
    <>
      <PostArticle styleType={styleType}>
        <PostContent>
          <PostDateAndCategories
            date={date}
            categories={categories}
            linkClass={linkClass}
          />

          <PostText>
            <PostTitle uri={uri} title={title} styleType={styleType} />
            <PostExcerpt excerpt={excerpt} styleType={styleType} />
          </PostText>

          <PostPlaces places={places} linkClass={linkClass} />
        </PostContent>

        <PostPhoto
          uri={uri}
          featuredImage={featuredImage}
          imageUrl={imageUrl}
          title={title}
          width={width}
          height={height}
          isHomePage={isHomePage}
          styleType={styleType}
        />
        {styleType === "postlist_12_44" && (
          <Link
            href={uri}
            className="text-gray-900 hover:text-gray-100 dark:text-slate-200 dark:hover:text-gray-600 font-bold mt-4"
          >
            Pogledaj objavu
          </Link>
        )}
      </PostArticle>
    </>
  );
}
