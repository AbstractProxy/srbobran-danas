import RenderSecondPage from "@/Components/RenderSecondPage/RenderSecondPage";
import { defaultPaginationProps } from "@/utills/props_context/props_context";

export default async function Page(props) {
  const { type = "kategorija-desavanja", category, pageNumber } = props.params;

  const paginationProps = {
    type,
    slug: category,
    parsedPage: parseInt(pageNumber),
    ...defaultPaginationProps,
  };

  return <RenderSecondPage {...paginationProps} />;
}
