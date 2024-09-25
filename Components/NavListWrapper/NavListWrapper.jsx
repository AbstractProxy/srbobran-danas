export default function NavListWrapper({ children }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12 items-center">{children}</div>
  );
}
