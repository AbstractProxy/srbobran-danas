import { isJobs } from "@/utills/url_config_functions/url_config_functions";
import FormatDate from "@/Components/FormatDate/FormatDate";

export default function SinglePostDate({ date, type }) {
  if (!isJobs(type) && date) {
    return (
      <div className="pt-4 float-right text-sm">
        <FormatDate date={date} />
      </div>
    );
  } else {
    return null;
  }
}
