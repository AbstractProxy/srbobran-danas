import Link from "next/link";

export default function DisplayCategoriesAndPlaces({ data, linkClass }) {
  return (
    <div className="flex mt-4  pr-4">
      {data.map((item, index) => {
        const trimmedUri = item.node.link || item.node.uri;
        const trimmedPath = trimmedUri.split("srbobrandanas.rs")[1];

        return (
          <Link key={index} href={trimmedPath} className={linkClass}>
            {item.node.name}
          </Link>
        );
      })}
    </div>
  );
}
