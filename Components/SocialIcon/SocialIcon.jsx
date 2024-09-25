import Link from "next/link";

export default function SocialIcon({ label, iconClass, icon }) {
  return (
    <Link
      href={""}
      className={iconClass}
      target="_blank"
      rel="noopener"
      aria-label={label}
      draggable="false"
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <title>{label}</title>
        {icon}
      </svg>
    </Link>
  );
}
