export default function GalleryWrapper({ children, isSeoGallery }) {
  return (
    <div
      className={`flex-wrap mt-8 ${
        isSeoGallery
          ? "hidden"
          : "flex w-full sm:justify-start lg:items-center justify-center lg:mt-8"
      }`}
    >
      {children}
    </div>
  );
}
