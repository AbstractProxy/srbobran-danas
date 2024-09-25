import Link from "next/link";

export default function SidebarSecondLink({ item, sourceUrl }) {
  return (
    <Link
      href={item.link.url}
      dangerouslySetInnerHTML={{ __html: item.textLinka }}
      className="text-black dark:text-slate-200 text-md"
      target={sourceUrl ? "" : "_blank"}
    ></Link>
  );
}
