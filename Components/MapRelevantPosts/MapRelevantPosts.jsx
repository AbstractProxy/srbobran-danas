import RelevantPostProperty from "@/Components/RelevantPostProperty/RelevantPostProperty";

export default function MapRelevantPosts({ data }) {
  const linkClass = `relative z-10 rounded-full bg-gray-50 dark:bg-slate-600 dark:hover:bg-slate-400 px-3 py-1.5   font-medium text-gray-600 hover:bg-gray-100 dark:text-slate-200 capitalize `;
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {data.map((item, index) => (
        <RelevantPostProperty
          key={index}
          date={item?.node?.date}
          title={item?.node?.title}
          uri={item?.node?.uri}
          excerpt={item?.node?.excerpt}
          categories={item?.node?.categories?.edges}
          imageUrl={item?.node?.featuredImage?.node?.mediaItemUrl}
          width={item?.node?.featuredImage?.node?.mediaDetails?.width}
          height={item?.node?.featuredImage?.node?.mediaDetails?.height}
          linkClass={linkClass}
        />
      ))}
    </div>
  );
}
