import Link from "next/link";
import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";

export default function NotificationPhoto({ url, imageUrl }) {
  return (
    <div className="flex-shrink-0 ml-4 w-82 h-55">
      <Link href={url}>
        <FeaturedImage
          alt={"active-image"}
          imageUrl={imageUrl}
          width={86}
          height={59}
          imageClass={
            "transition-opacity rounded duration-300 opacity-100 hover:opacity-70 dark:border border-slate-600"
          }
        />
      </Link>
    </div>
  );
}
