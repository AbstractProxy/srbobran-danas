import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PreviousPageCategories({
  hasPreviousPage,
  currentPage,
  type,
  slug,
}) {
  return (
    <div className="-mt-px flex w-0 flex-1">
      {hasPreviousPage && (
        <Link
          href={
            currentPage === 1
              ? `${type}/page/${currentPage - 1}`
              : currentPage === 2
              ? `/${type}/${slug}`
              : `${currentPage - 1}`
          }
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Prethodna
        </Link>
      )}
    </div>
  );
}
