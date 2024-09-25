import PostProperty from "../PostProperty/PostProperty";

export default function MapInitialPostProperty({
  data,
  styleClasses,
  styleType,
  isHomePage,
}) {
  return (
    <div className={`${styleClasses[styleType]}`}>
      {data.map((item, index) => (
        <PostProperty
          key={index}
          date={item.node?.date}
          title={item.node?.title}
          uri={item?.node?.uri}
          excerpt={item?.node?.excerpt}
          featuredImage={item.node?.featuredImage}
          size={item?.node?.featuredImage?.node?.mediaDetails?.sizes[0]}
          imageAlt={item?.node?.featuredImage?.node?.altText}
          categories={
            item.node.categories?.edges ||
            item.node?.desavanjaKategorije?.edges ||
            item.node?.poslovniAdresarKategorije?.edges
          }
          places={
            item.node.mesta?.edges ||
            item.node?.desavanjaMesta?.edges ||
            item.node?.poslovniAdresarMesta?.edges
          }
          isHomePage={isHomePage}
          styleType={styleType}
        />
      ))}
    </div>
  );
}
