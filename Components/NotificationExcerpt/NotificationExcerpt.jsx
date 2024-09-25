export default function NotificationExcerpt({ excerpt }) {
  return (
    <p
      className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-200"
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
  );
}
