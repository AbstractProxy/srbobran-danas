import RelevantExcerpt from "../RelevantExcerpt/RelevantExcerpt";
import RelevantTitle from "../RelevantTitle/RelevantTitle";

export default function RelevantTitleAndExcerpt({ uri, title, excerpt }) {
  return (
    <div className="group relative">
      <RelevantTitle uri={uri} title={title} />
      <RelevantExcerpt excerpt={excerpt} />
    </div>
  );
}
