export default function PostExcerpt({ excerpt, styleType }) {
  const fontSize = styleType === "postlist_12_44" ? "text-xs" : "text-sm";

  return (
    <h4
      className={`mt-5 ${fontSize} leading-6 text-gray-600 dark:text-slate-200`}
      dangerouslySetInnerHTML={{ __html: excerpt || "" }}
    ></h4>
  );
}
