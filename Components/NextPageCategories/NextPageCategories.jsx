import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function NextPageCategories({ hasNextPage, currentPage, slug }) {
  return (
    <div className="-mt-px flex w-0 flex-1 justify-end">
      {hasNextPage && (
        <Link
          href={
            currentPage === 1
              ? `${slug}/page/${currentPage + 1}`
              : `${currentPage + 1}`
          }
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Sledeca
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
}
