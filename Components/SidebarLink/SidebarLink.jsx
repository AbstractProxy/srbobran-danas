import Link from "next/link";
import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";

export default function SidebarLink({ item, sourceUrl }) {
  return (
    <Link href={item.link.url} target={sourceUrl ? "" : "_blank"}>
      <FeaturedImage
        alt={"sidebar-link-image"}
        imageUrl={item.slikaLinka.node.sourceUrl}
        width={320}
        height={90}
        imageClass={
          "transition-opacity duration-300 opacity-100 hover:opacity-70"
        }
      />

      <span
        className="text-black dark:text-slate-200"
        dangerouslySetInnerHTML={{ __html: item.textLinka }}
      />
    </Link>
  );
}
