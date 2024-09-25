import { format } from "date-fns";

export default function FormatDate({ date, isNotificationDate }) {
  const reverseAndReplace = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  if (isNotificationDate) {
    const reversedDate = reverseAndReplace(date);

    const formattedDate = format(reversedDate, "dd.MM.yyyy");
    return <div className="pt-0.5 float-right text-sm">{formattedDate} </div>;
  } else {
    const originalDate = new Date(date);

    const formattedDate = format(originalDate, "dd.MM.yyyy");

    return (
      <time
        dateTime={formattedDate}
        className="pt-4 text-gray-500 dark:text-slate-100"
      >
        {formattedDate}
      </time>
    );
  }
}
