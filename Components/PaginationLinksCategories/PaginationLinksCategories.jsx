import Link from "next/link";

export default function PaginationLinksCategories({
  type,
  slug,
  totalPages,
  currentPage,
  startPage,
  endPage,
}) {
  return (
    <div className="hidden md:-mt-px md:flex">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNumber = i + 1;

        if (pageNumber >= startPage && pageNumber <= endPage) {
          return (
            <Link
              key={i}
              href={
                currentPage === 1
                  ? `${slug}/page/${pageNumber}`
                  : currentPage >= 2 && pageNumber == 1
                  ? `/${type}/${slug}`
                  : `${pageNumber}`
              }
              className={`${
                pageNumber == currentPage
                  ? `border-indigo-500 text-indigo-600  border-t-2 px-4 pt-4 font-bold `
                  : `inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:pointer-events-none`
              }`}
            >
              {pageNumber}
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
}
