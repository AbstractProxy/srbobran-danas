import PostProperty from "../PostProperty/PostProperty";

export default function MapStyledPostProperty({ data, isHomePage, styleType }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4 py-6">
      {data.length > 0 && (
        <div className=" col-span-3 row-span-2  justify-between h-full flex lg:items-center lg:justify-center">
          <PostProperty
            date={data[0].node?.date}
            title={data[0].node?.title}
            uri={data[0].node?.uri}
            excerpt={data[0].node?.excerpt}
            featuredImage={data[0].node?.featuredImage}
            size={data[0].node?.featuredImage?.node?.mediaDetails?.sizes[0]}
            imageAlt={data[0].node?.featuredImage?.node?.altText}
            categories={
              data[0].node.categories?.edges ||
              data[0].node?.desavanjaKategorije?.edges ||
              data[0].node?.poslovniAdresarKategorije?.edges
            }
            places={
              data[0].node.mesta?.edges ||
              data[0].node?.desavanjaMesta?.edges ||
              data[0].node?.poslovniAdresarMesta?.edges
            }
            isHomePage={isHomePage}
          />
        </div>
      )}

      {data.slice(1, 5).map((item, index) => (
        <div className="col-span-1 row-span-1 border-b border-gray-200">
          <PostProperty
            key={index}
            title={item?.node?.title}
            uri={item?.node?.uri}
            featuredImage={item?.node?.featuredImage}
            imageAlt={item.node?.featuredImage?.node?.altText}
            size={item?.node?.featuredImage?.node?.mediaDetails?.sizes[0]}
            date={item?.node?.date}
            styleType={styleType}
          />
        </div>
      ))}
    </div>
  );
}
