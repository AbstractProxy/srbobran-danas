import Link from "next/link";

export default function SocialLink({ item }) {
  return (
    <Link
      key={item.name}
      href={item.href}
      className="text-gray-400 hover:text-gray-500 dark:text-slate-200 dark:hover:text-slate-400"
      target="_blank"
    >
      <span className="sr-only">{item.name}</span>
      <item.icon className="h-10 w-10" aria-hidden="true" />
    </Link>
  );
}
