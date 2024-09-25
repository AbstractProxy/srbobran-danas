import { ACTIVE_NOTIFICATIONS_QUERY } from "@/utills/queries/active_notifications_query";
import {
  fetchActiveNotificationsData,
  fetchSidebarVideos,
} from "@/utills/queries/fetch_data";
import MapActiveNotifications from "@/Components/MapActiveNotifications/MapActiveNotifications";
import YoutubeVideos from "@/Components/YoutubeVideos/YoutubeVideos";
import YoutubeVideosSlider from "@/Components/YoutubeVideosSlider/YoutubeVideosSlider";
import { SIDEBAR_VIDEOS_QUERY } from "@/utills/queries/sidebar_videos_query";
import YoutubeSubscribe from "@/Components/YoutubeSubscribe/YoutubeSubscribe";
import FacebookLikeAndShare from "@/Components/FacebookLikeAndShare/FacebookLikeAndShare";
import Error from "../Error/Error";

export default async function Sidebar() {
  try {
    const { data } = await fetchActiveNotificationsData(
      ACTIVE_NOTIFICATIONS_QUERY
    );

    const youtubeVideosData = await fetchSidebarVideos(SIDEBAR_VIDEOS_QUERY);

    // if (!data || data.length <= 0) {
    //   throw new Error("Error! Sidebar data not found.");
    // }

    return (
      <>
        <MapActiveNotifications data={data} />
        <FacebookLikeAndShare />
        <YoutubeSubscribe />
        <YoutubeVideos />
        <YoutubeVideosSlider data={youtubeVideosData} />
      </>
    );
  } catch (error) {
    return <Error text={"sidebar data"} error={error} />;
  }
}
