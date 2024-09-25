import Link from "next/link";

export default function FacebookButton({ title }) {
  return (
    <Link
      href="https://www.facebook.com/srbobrandanas/"
      target="_blank"
      className="inline-block bg-blue-500 text-white px-2  py-0.5 mt-5  rounded-md text-center text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
    >
      {title}
    </Link>
  );
}
