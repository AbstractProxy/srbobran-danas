import CoreText from "../CoreText/CoreText";
import CoreParagraph from "../CoreParagraph/CoreParagraph";
import CoreQuote from "../CoreQuote/CoreQuote";
import CoreVerse from "../CoreVerse/CoreVerse";
import CoreImage from "../CoreImage/CoreImage";
import YoutubeVideoBlock from "../YoutubeVideoBlock/YoutubeVideoBlock";

export default function CoreContent({
  block,
  level,
  isText,
  isParagraph,
  isQuote,
  isVerse,
  isImage,
  isVideo,
  photos,
}) {
  const content =
    block.attributes?.content || (block.originalContent && block.saveContent);

  if (isText) return <CoreText content={content} level={level} />;
  else if (isParagraph) return <CoreParagraph block={block} />;
  else if (isQuote) return <CoreQuote content={content} />;
  else if (isVerse) return <CoreVerse content={content} />;
  else if (isImage) {
    const { id } = block?.attributes;

    const idString = id?.toString();

    if (photos[idString]) {
      return (
        <CoreImage
          imageUrl={
            `https://srbobrandanas.rs/wp-content/uploads/` + photos[id].file
          }
          width={photos[id].width}
          height={photos[id].height}
          description={photos[id].image_meta.title}
        />
      );
    } else if (isVideo) return <YoutubeVideoBlock block={block} />;
  }
}
