import {
  IsYear,
  isKategorijeOrMesta,
} from "@/utills/url_config_functions/url_config_functions";
import RenderPostsByYear from "@/Components/RenderPostsByYear/RenderPostsByYear";
import { YEAR_QUERY } from "@/utills/queries/year_query";
import { POSTS_KATEGORIJE } from "@/utills/queries/posts_kategorije";
import { POSTS_MESTA } from "@/utills/queries/posts_mesta";
import RenderPosts from "@/Components/RenderPosts/RenderPosts";
import FilteredPosts from "@/Components/FilteredPosts/FilteredPosts";

export default function PostDecider({ type, pageProps }) {
  if (IsYear(type)) {
    return (
      <RenderPostsByYear
        {...pageProps}
        yearQuery={YEAR_QUERY}
        categories={POSTS_KATEGORIJE}
        places={POSTS_MESTA}
      />
    );
  } else if (isKategorijeOrMesta(type)) {
    return <FilteredPosts {...pageProps} />;
  }
  return <RenderPosts {...pageProps} />;
}
