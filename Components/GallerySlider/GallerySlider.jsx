import GalleryWrapper from "@/Components/GalleryWrapper/GalleryWrapper";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";

export default function GallerySlider({ data }) {
  const imageUrlArray = data.map((item) => item.node.sourceUrl);

  return (
    <GalleryWrapper isSeoGallery={false}>
      {data.map((item, index) => (
        <GalleryPhoto
          key={item.node.id}
          imageUrl={item.node.mediaDetails.sizes[0].sourceUrl}
          index={index}
          imageUrlArray={imageUrlArray}
          altText={item.node.altText}
        />
      ))}
    </GalleryWrapper>
  );
}
