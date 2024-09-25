export default function LayoutBodyContent({ children }) {
  return (
    <div className="w-full mx-auto  lg:flex max-w-screen-2xl lg:px-8">
      {children}
    </div>
  );
}
