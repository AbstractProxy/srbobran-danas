export default function RelevantTitle({ uri, title }) {
  return (
    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-200">
      <a href={uri}>
        <span className="absolute inset-0" />
        {title}
      </a>
    </h3>
  );
}
