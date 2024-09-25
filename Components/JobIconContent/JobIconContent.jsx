import Link from "next/link";

export default function JobIconContent({ link, svgPath }) {
  return (
    <Link href={link || ""}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 mt-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
      </svg>
    </Link>
  );
}
