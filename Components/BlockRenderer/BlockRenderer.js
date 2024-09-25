import BlockGallery from "@/Components/BlockGallery/BlockGallery";
import CoreContent from "../CoreContent/CoreContent";

export const BlockRenderer = ({ blocks, photos }) => {
  return blocks.map((block, index) => {
    switch (block.name) {
      case "core/heading": {
        return (
          <CoreContent
            block={block}
            level={block.attributes.level}
            isText={true}
          />
        );
      }
      case "core/paragraph": {
        return <CoreContent key={index} block={block} isParagraph={true} />;
      }
      case "core/image": {
        return (
          <CoreContent
            key={index}
            block={block}
            isImage={true}
            photos={photos}
          />
        );
      }

      case "core/embed": {
        return <CoreContent key={index} block={block} isVideo={true} />;
      }

      case "core/verse": {
        return <CoreContent key={index} block={block} isVerse={true} />;
      }

      case "core/quote": {
        return <CoreContent key={index} block={block} isQuote={true} />;
      }
      case "core/pullquote": {
        return <CoreContent key={index} block={block} isQuote={true} />;
      }

      case "core/gallery": {
        return <BlockGallery block={block} />;
      }

      case "core/freeform": {
        return (
          <CoreContent
            key={index}
            block={block}
            level={block.attributes.level}
            isText={true}
          />
        );
      }
      case "core/list": {
        return (
          <CoreContent
            key={index}
            block={block}
            level={block.attributes.level}
            isText={true}
          />
        );
      }
      case "core/preformatted": {
        return (
          <CoreContent
            key={index}
            block={block}
            level={block.attributes.level}
            isText={true}
          />
        );
      }

      default: {
        return null;
      }
    }
  });
};
