import React from "react";

export default function CoreText({ content, level }) {
  const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
      1: "text-5xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-1xl",
      6: "text-base",
    };
    return `${fontSizeMap[level] || ""}`;
  };

  if (!content) return null;

  const Tag = `h${level}`;

  if (level) {
    return (
      <Tag
        dangerouslySetInnerHTML={{ __html: content }}
        className={`mt-6 leading-8 ${
          getFontSizeForHeading(level) || "text-4xl"
        }`}
      />
    );
  } else {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`mt-6 leading-8   dark:text-slate-200`}
      />
    );
  }
}
