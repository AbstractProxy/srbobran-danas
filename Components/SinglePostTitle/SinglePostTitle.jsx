export default function SinglePostTitle({ title }) {
  return (
    <h1
      className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-200"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
}
