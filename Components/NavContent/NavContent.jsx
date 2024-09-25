export default function NavContent({ children }) {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      {children}
    </nav>
  );
}
