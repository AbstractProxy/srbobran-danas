import RenderPage from "@/Components/RenderPage/RenderPage";
import { defaultPaginationProps } from "@/utills/props_context/props_context";

export default async function Page(props) {
  const { type = "mesto", place, pageNumber = 1 } = props.params;

  const paginationProps = {
    type,
    slug: place,
    currentPage: pageNumber,
    ...defaultPaginationProps,
  };

  return <RenderPage {...paginationProps} />;
}
