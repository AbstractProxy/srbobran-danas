import { HOME_POSTS_QUERY } from "@/utills/queries/home_posts_query";
import FetchAndRenderHomePosts from "../FetchAndRenderHomePosts/FetchAndRenderHomePosts";

export default async function HomePostsDecider({
  type,
  postsNumber,
  hasNextPage,
  categoriesForQuery,
  styleType,
}) {
  //?CONDITIONS:
  if (type === "post" && hasNextPage === "yes") {
    return (
      <FetchAndRenderHomePosts
        hasNextPage={hasNextPage}
        categoriesForQuery={categoriesForQuery}
        query={HOME_POSTS_QUERY}
        postsNumber={10}
        type={type}
        typeName={"posts"}
        styleType={styleType}
      />
    );
  } else if (type === "post" && hasNextPage === "no") {
    return (
      <FetchAndRenderHomePosts
        hasNextPage={hasNextPage}
        categoriesForQuery={categoriesForQuery}
        query={HOME_POSTS_QUERY}
        postsNumber={postsNumber}
        type={type}
        typeName={"posts"}
        styleType={styleType}
      />
    );
  }
}
