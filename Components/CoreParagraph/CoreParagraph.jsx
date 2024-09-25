export default function CoreParagraph({ block }) {
  const content = block.attributes?.content;
  return (
    <p
      dangerouslySetInnerHTML={{ __html: content }}
      className="mt-10 text-lg lg:text-2xl dark:text-slate-200"
    />
  );
}
