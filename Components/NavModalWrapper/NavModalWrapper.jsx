export default function NavModalWrapper({ children }) {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {children}
    </div>
  );
}
