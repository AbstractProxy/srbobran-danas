import Link from "next/link";

export default function NotificationTitle({ url, title }) {
  return (
    <>
      <h3 className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-200 dark:hover:text-gray-600 max-w-60">
        <Link href={url} dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
    </>
  );
}
