import Link from "next/link";
import GalleryWrapper from "@/Components/GalleryWrapper/GalleryWrapper";
export default function PictureGallery({ data }) {
  return (
    <GalleryWrapper isSeoGallery={true}>
      {data.map((item) => (
        <div key={item.node.id} className="w-1/3 p-2">
          <Link
            href={"https://srbobrandanas.rs/wp-content/uploads" + item.node.uri}
          >
            <img
              src={item.node.sourceUrl}
              alt={item.node.altText}
              className="w-full transition-opacity duration-300 opacity-100 hover:opacity-70"
            />
          </Link>
        </div>
      ))}
    </GalleryWrapper>
  );
}
