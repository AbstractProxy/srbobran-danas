import {
  extractVideoIdFromUrl,
  getImageUrl,
} from "@/utills/other_functions/media_operations";
import { fetchSidebarVideos } from "@/utills/queries/fetch_data";
import { SIDEBAR_VIDEOS_QUERY } from "@/utills/queries/sidebar_videos_query";
import Image from "next/image";
import Link from "next/link";
import Error from "../Error/Error";

export default async function YoutubeVideos() {
  try {
    const data = await fetchSidebarVideos(SIDEBAR_VIDEOS_QUERY);

    if (!data) {
      throw new Error("Error! Sidebar youtube videos not found.");
    }

    return (
      <div>
        {data.map((item, index) => {
          if (!item.youtubeLink) {
            return null;
          }

          const videoId = extractVideoIdFromUrl(item.youtubeLink.url);
          const sourceUrl = getImageUrl(videoId);

          return (
            <figure key={index} className="w-full mt-2 mb-5 hidden ">
              {item.prikaziImeIOpis === "yes" && (
                <h2 className="text-black font-bold text-center mb-2">
                  {item.naslov}
                </h2>
              )}

              {item.youtubeLink && (
                <Link
                  href={item.youtubeLink.url}
                  rel="lightbox"
                  className="block"
                >
                  <Image
                    width={320}
                    height={180}
                    className="lazy loaded w-full"
                    decoding="async"
                    src={`${sourceUrl}`}
                    data-src={`${sourceUrl}`}
                    alt="youtube-video-image"
                    data-was-processed="true"
                  />
                </Link>
              )}
            </figure>
          );
        })}
      </div>
    );
  } catch (error) {
    return <Error text={"youtube videos"} error={error} />;
  }
}
