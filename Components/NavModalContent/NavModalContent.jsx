export default function NavModalContent({ children }) {
  return (
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      {children}
    </div>
  );
}
