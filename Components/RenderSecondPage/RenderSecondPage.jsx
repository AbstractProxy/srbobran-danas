import PostDecider from "@/Components/PostDecider/PostDecider";

export default function RenderSecondPage({
  type,
  slug,
  parsedPage,
  pageSize,
  pagesToShow,
}) {
  const currentPage = parsedPage;

  const pageProps = {
    type,
    slug,
    currentPage,
    pageSize,
    pagesToShow,
  };
  return <PostDecider type={type} pageProps={pageProps} />;
}
