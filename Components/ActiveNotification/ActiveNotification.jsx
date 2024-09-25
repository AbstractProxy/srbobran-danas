"use client";
import ActiveNotificationWrapper from "@/Components/ActiveNotificationWrapper/ActiveNotificationWrapper";
import NotificationArticle from "@/Components/NotificationArticle/NotificationArticle";
import NotificationTitleAndPhoto from "@/Components/NotificationTitleAndPhoto/NotificationTitleAndPhoto";
import NotificationTitle from "@/Components/NotificationTitle/NotificationTitle";
import NotificationPhoto from "@/Components/NotificationPhoto/NotificationPhoto";
import NotificationExcerpt from "@/Components/NotificationExcerpt/NotificationExcerpt";
import NotificationDate from "@/Components/NotificationDate/NotificationDate";

export default function ActiveNotification({
  url,
  title,
  imageUrl,
  excerpt,
  datumOd,
  datumDo,
}) {
  return (
    <ActiveNotificationWrapper>
      <NotificationArticle>
        <NotificationTitleAndPhoto>
          <NotificationTitle url={url} title={title} />
          <NotificationPhoto url={url} imageUrl={imageUrl} />
        </NotificationTitleAndPhoto>

        <NotificationExcerpt excerpt={excerpt} />
        <NotificationDate
          datumOd={datumOd}
          datumDo={datumDo}
          isNotificationDate={true}
        />
      </NotificationArticle>
    </ActiveNotificationWrapper>
  );
}
