export default function PaginationWrapper({ children }) {
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      {children}
    </nav>
  );
}
