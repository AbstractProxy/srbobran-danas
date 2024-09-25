import ActiveNotification from "@/Components/ActiveNotification/ActiveNotification";
import NotificationContainer from "@/Components/NotificationContainer/NotificationContainer";

export default function MapActiveNotifications({ data }) {
  return (
    <NotificationContainer>
      {data.map((item, index) => (
        <ActiveNotification
          key={index}
          url={item.url}
          title={item.title}
          imageUrl={item.img}
          excerpt={item.excerpt}
          datumOd={item.od}
          datumDo={item.do}
        />
      ))}
    </NotificationContainer>
  );
}
