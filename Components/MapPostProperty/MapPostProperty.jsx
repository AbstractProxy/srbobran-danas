import MapStyledPostProperty from "../MapStyledPostProperty/MapStyledPostProperty";
import MapInitialPostProperty from "../MapInitialPostProperty/MapInitialPostProperty";

export default function MapPostProperty({ data, isHomePage, styleType }) {
  const styleClasses = {
    postlist_1: "divide-y lg:px-4",
    postlist_2: "grid grid-cols-1 md:grid-cols-2 lg:px-4 gap-x-8",
    postlist_3:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-4",
    postlist_4:
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-4",
    postlist_12_44: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:px-4",
    postlist_34_34: "flex flex-wrap gap-4",
  };

  if (styleType === "postlist_12_44") {
    return (
      <MapStyledPostProperty
        data={data}
        isHomePage={isHomePage}
        styleType={"postlist_12_44"}
      />
    );
  }

  return (
    <MapInitialPostProperty
      data={data}
      styleClasses={styleClasses}
      styleType={styleType}
      isHomePage={isHomePage}
    />
  );
}
