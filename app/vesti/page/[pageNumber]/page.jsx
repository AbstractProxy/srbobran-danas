import RenderSecondPage from "@/Components/RenderSecondPage/RenderSecondPage";
import { defaultPaginationProps } from "@/utills/props_context/props_context";

export default async function Page(props) {
  const { type = "vesti", pageNumber } = props.params;

  const paginationProps = {
    type,
    parsedPage: parseInt(pageNumber),
    ...defaultPaginationProps,
  };
  return <RenderSecondPage {...paginationProps} />;
}
