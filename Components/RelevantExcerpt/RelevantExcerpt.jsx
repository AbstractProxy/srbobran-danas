export default function RelevantExcerpt({ excerpt }) {
  return (
    <h4
      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-200"
      dangerouslySetInnerHTML={{ __html: excerpt }}
    ></h4>
  );
}
