import FormatDate from "@/Components/FormatDate/FormatDate";

export default function NotificationDate({
  datumOd,
  datumDo,
  isNotificationDate,
}) {
  return (
    <div className="flex items-center  gap-x-3 text-xs mb-6">
      <time
        dateTime=""
        className="text-gray-500 font-bold dark:text-slate-200  "
      >
        <FormatDate date={datumOd} isNotificationDate={isNotificationDate} />

        {/* <FormatDate date={datumDo} isNotificationDate={isNotificationDate} /> */}
      </time>
    </div>
  );
}
