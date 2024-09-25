import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";

export default function SinglePostImage({
  featuredImage,
  alt,
  imageUrl,
  imageClass,
  width,
  height,
}) {
  return (
    featuredImage && (
      <figure className="mt-10">
        <FeaturedImage
          alt={alt}
          imageUrl={imageUrl}
          width={width}
          height={height}
          imageClass={imageClass}
        />
      </figure>
    )
  );
}
