"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function GalleryPhoto({
  index,
  imageUrl,
  imageUrlArray,
  altText,
}) {
  const [lightBoxController, setLightBoxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightBoxOnSlide(number) {
    setLightBoxController({
      toggler: !lightBoxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="p-1 basis-1/2 lg:basis-1/4">
      <img
        src={imageUrl}
        className="transition-opacity duration-300 opacity-100 hover:opacity-70 w-30 h-30 w-full sm:basis-1/2"
        alt={altText}
        onClick={() => {
          openLightBoxOnSlide(index + 1);
        }}
      />
      <FsLightbox
        toggler={lightBoxController.toggler}
        sources={imageUrlArray}
        slide={lightBoxController.slide}
      />
    </div>
  );
}
