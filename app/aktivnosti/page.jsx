import RenderPage from "@/Components/RenderPage/RenderPage";
import { defaultPaginationProps } from "@/utills/props_context/props_context";

export default async function Page(props) {
  const { type = "aktivnosti", pageNumber = 1 } = props.params;

  const paginationProps = {
    type,
    currentPage: pageNumber,
    ...defaultPaginationProps,
  };
  return <RenderPage {...paginationProps} />;
}
