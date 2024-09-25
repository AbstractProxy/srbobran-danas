import RelevantArticle from "@/Components/RelevantArticle/RelevantArticle";
import RelevantDateAndCategories from "@/Components/RelevantDateAndCategories/RelevantDateAndCategories";
import RelevantPhoto from "@/Components/RelevantPhoto/RelevantPhoto";
import RelevantText from "@/Components/RelevantText/RelevantText";
import RelevantTitleAndExcerpt from "@/Components/RelevantTitleAndExcerpt/RelevantTitleAndExcerpt";
export default function RelevantPostProperty({
  date,
  title,
  uri,
  excerpt,
  categories,
  imageUrl,
  width,
  height,
  linkClass,
}) {
  return (
    <RelevantArticle>
      <RelevantPhoto
        uri={uri}
        imageUrl={imageUrl}
        width={width}
        height={height}
      />
      <RelevantText>
        <RelevantDateAndCategories
          date={date}
          categories={categories}
          linkClass={linkClass}
        />
        <RelevantTitleAndExcerpt title={title} uri={uri} excerpt={excerpt} />
      </RelevantText>
    </RelevantArticle>
  );
}
