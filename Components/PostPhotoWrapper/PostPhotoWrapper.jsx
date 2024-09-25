export default function PostPhotoWrapper({ children, isHomePage, styleType }) {
  return (
    <div
      className={` lg:shrink-0  ${
        isHomePage ? "" : styleType === "postlist_12_44" ? "" : "lg:w-1/4"
      }`}
    >
      {children}
    </div>
  );
}
