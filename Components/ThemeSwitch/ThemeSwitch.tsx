"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <div className="group flex">
        <p className="text-gray-900 font-semibold group-hover:text-gray-400 dark:text-slate-200 dark:hover:text-gray-400">
          Dnevni režim
        </p>
        <MdLightMode
          className="w-10 h-10 group-hover:text-gray-400"
          onClick={() => setTheme("light")}
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="group flex">
        <p className="text-gray-900 font-semibold group-hover:text-gray-400 dark:text-slate-200 dark:hover:text-gray-400">
          Noćni režim
        </p>
        <MdDarkMode
          className="text-gray-900 w-10 h-10 group-hover:text-gray-400"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
}
