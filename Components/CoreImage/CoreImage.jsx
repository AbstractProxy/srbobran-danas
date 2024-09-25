import Image from "next/image";
export default function CoreImage({ imageUrl, width, height, description }) {
  return (
    <figure className="mt-16 relative">
      <Image
        src={imageUrl}
        width={width}
        height={height}
        className="rounded  bg-gray-50 dark:border border-slate-500"
        alt={"post-image"}
        loading="lazy"
      />
      {description && (
        <div className="absolute bottom-0 left-0 p-2 bg-gray-900 bg-opacity-50 text-white font-bold italic">
          {description}
        </div>
      )}
    </figure>
  );
}
