import PostDecider from "@/Components/PostDecider/PostDecider";

export default function RenderPage({
  type,
  slug,
  currentPage,
  pageSize,
  pagesToShow,
  isHomePage,
}) {
  const pageProps = {
    type,
    slug,
    currentPage,
    pageSize,
    pagesToShow,
    isHomePage,
  };

  return <PostDecider type={type} pageProps={pageProps} />;
}
