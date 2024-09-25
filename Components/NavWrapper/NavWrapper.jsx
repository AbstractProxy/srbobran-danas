export default function NavWrapper({ children }) {
  return (
    <header className="bg-white dark:bg-gray-900 border-gray-100 dark:border-slate-400 border-b-2">
      {children}
    </header>
  );
}
