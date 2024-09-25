"use client";

import Link from "next/link";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

export default function YoutubeVideo({
  item,
  index,
  sourceUrl,
  videoUrlArray,
}) {
  const [toggler, setToggler] = useState(false);

  return (
    <figure key={index} className="w-full mt-2 mb-2.5">
      {item.prikaziImeIOpis === "yes" && (
        <h3 className="text-black dark:text-slate-200 font-bold mb-2">
          {item.naslov}
        </h3>
      )}

      {item.youtubeLink && (
        <Link href={""} rel="lightbox" className="block">
          <Image
            width={320}
            height={180}
            className="lazy loaded w-full rounded transition-opacity duration-300 opacity-100 hover:opacity-70 dark:border border-slate-600"
            decoding="async"
            src={`${sourceUrl}`}
            data-src={`${sourceUrl}`}
            alt="youtube-video-image"
            data-was-processed="true"
            onClick={() => {
              setToggler(!toggler);
            }}
          />
        </Link>
      )}
      <FsLightbox toggler={toggler} sources={videoUrlArray} />
      <h3
        className="text-black dark:text-slate-200  text-sm mt-2"
        dangerouslySetInnerHTML={{ __html: item.opis }}
      />
    </figure>
  );
}
