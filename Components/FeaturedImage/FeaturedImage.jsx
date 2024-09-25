import Image from "next/image";

export default function FeaturedImage({
  alt,
  imageUrl,
  width,
  height,
  imageClass,
}) {
  return (
    <Image
      alt={alt}
      src={imageUrl}
      width={width}
      height={height}
      className={`${imageClass}`}
    />
  );
}
