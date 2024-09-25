import Link from "next/link";

export default function DisplayAllCategoriesAndPlaces({ data }) {
  return (
    <div className="flex sm:flex flex-wrap  py-3">
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.node.link || item.node.uri}
          className="px-2 py-1 my-1  relative  rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-slate-600 dark:hover:bg-slate-400 lowercase font-medium text-gray-600 dark:text-slate-200  sm:px-1  mr-1 sm:py-2 lg:px-2 lg:mx-1"
        >
          {item.node.name}
        </Link>
      ))}
    </div>
  );
}
