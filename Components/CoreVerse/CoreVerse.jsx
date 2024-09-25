import React from "react";

export default function CoreVerse({ content }) {
  return (
    <pre
      className="whitespace-pre-wrap p-4 text-lg lg:text-2xl dark:text-slate-200 bg-blue-100"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      {content}
    </pre>
  );
}
