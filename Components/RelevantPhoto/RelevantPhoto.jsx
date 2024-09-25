import Link from "next/link";
import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";

export default function RelevantPhoto({ uri, imageUrl, width, height }) {
  return (
    <div className="relative w-full">
      <Link href={uri}>
        <FeaturedImage
          alt={"relevant-image"}
          imageUrl={imageUrl}
          width={width}
          height={height}
          imageClass={
            "aspect-[16/9] w-full rounded bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-opacity duration-300 opacity-100 hover:opacity-70 dark:border border-slate-500"
          }
        />
      </Link>
    </div>
  );
}
