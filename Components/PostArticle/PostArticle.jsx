export default function PostArticle({ children, styleType }) {
  const styleGap =
    styleType === "postlist_2"
      ? "lg:gap-10"
      : styleType === "postlist_3"
      ? ""
      : "lg-gap-20";

  const flexRowOrColumn =
    styleType === "postlist_3"
      ? "lg:flex-col gap-y-6"
      : styleType === "postlist_12_44"
      ? "lg:flex-col"
      : styleType === "postlist_1"
      ? "lg:flex-row"
      : "";

  const spacesAndPaddings =
    styleType === "postlist_12_44"
      ? "py-2"
      : "space-y-6 py-6 lg:space-y-20 lg:py-6";

  return (
    <article
      className={`bg-white dark:bg-gray-900 max-w-7xl lg:max-w-full ${spacesAndPaddings}`}
    >
      <div
        className={`relative isolate flex  ${styleGap} ${flexRowOrColumn}  lg:items-center lg:justify-center`}
      >
        {children}
      </div>
    </article>
  );
}
