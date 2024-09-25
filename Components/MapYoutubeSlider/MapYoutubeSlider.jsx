import YoutubeVideo from "@/Components/YoutubeVideo/YoutubeVideo";
import SidebarLink from "@/Components/SidebarLink/SidebarLink";
import SidebarSecondLink from "@/Components/SidebarSecondLink/SidebarSecondLink";
import {
  checkIsLinkOnSite,
  extractVideoIdFromUrl,
  getImageUrl,
} from "../../utills/other_functions/media_operations";

export default function MapYoutubeSlider({ data }) {
  return (
    <>
      {data.map((item, index) => {
        if (!item.youtubeLink) {
          if (item.slikaLinka) {
            const sourceUrl = checkIsLinkOnSite(item.link.url);
            return (
              <SidebarLink key={index} item={item} sourceUrl={sourceUrl} />
            );
          } else {
            const sourceUrl = checkIsLinkOnSite(item.link.url);

            return (
              <SidebarSecondLink
                key={index}
                item={item}
                sourceUrl={sourceUrl}
              />
            );
          }
        } else {
          const videoId = extractVideoIdFromUrl(item.youtubeLink.url);
          const sourceUrl = getImageUrl(videoId);
          let videoUrlArray = [];
          videoUrlArray.push(item.youtubeLink.url);
          return (
            <YoutubeVideo
              item={item}
              index={index}
              sourceUrl={sourceUrl}
              videoUrlArray={videoUrlArray}
            />
          );
        }
      })}
    </>
  );
}
