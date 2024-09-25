import React from "react";

export default function CoreQuote({ content }) {
  return (
    <div className="my-4">
      <blockquote
        className="relative border-l-4 border-yellow-500 pl-4 italic text-lg lg:text-2xl dark:text-slate-200"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <span
          className="absolute -left-4 top-0 text-4xl font-bold text-yellow-500"
          aria-hidden="true"
        >
          “
        </span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <span
          className="absolute -right-4 bottom-0 text-4xl font-bold text-yellow-500"
          aria-hidden="true"
        >
          ”
        </span>
      </blockquote>
    </div>
  );
}
