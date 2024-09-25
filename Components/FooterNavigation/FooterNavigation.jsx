export default function FooterNavigation({ children }) {
  return (
    <div className=" mt-16 grid grid-cols-2 gap-8  lg:grid lg:grid-cols-4 xl:col-span-2 xl:mt-0 lg:col-span-2">
      {children}
    </div>
  );
}
