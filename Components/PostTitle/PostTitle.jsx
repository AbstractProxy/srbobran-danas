import Link from "next/link";

export default function PostTitle({ uri, title, styleType }) {
  const fontSize =
    styleType === "postlist_3" || styleType === "postlist_4"
      ? "text-xs"
      : styleType === "postlist_1"
      ? "text-lg"
      : "";

  return (
    <h3
      className={`${fontSize} font-semibold leading-6 text-gray-900 group-hover:text-gray-400 dark:text-slate-200  dark:group-hover:text-gray-600`}
    >
      {uri ? <Link href={uri}>{title}</Link> : title}
    </h3>
  );
}
