export default function FooterWrapper({ children }) {
  return (
    <footer
      className="bg-white dark:bg-gray-900 "
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto  px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 ">
        {children}
      </div>
    </footer>
  );
}
