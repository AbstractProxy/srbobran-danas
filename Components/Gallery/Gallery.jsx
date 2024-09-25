import GallerySlider from "@/Components/GallerySlider/GallerySlider";
import PictureGallery from "@/Components/PictureGallery/PictureGallery";

export default function Gallery({ data }) {
  return (
    <>
      {data ? (
        <>
          <PictureGallery data={data} />
          <GallerySlider data={data} />
        </>
      ) : null}
    </>
  );
}
