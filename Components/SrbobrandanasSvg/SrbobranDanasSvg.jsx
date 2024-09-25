"use client";
import Link from "next/link";
import FeaturedImage from "@/Components/FeaturedImage/FeaturedImage";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//?Succesfully implemented UseEffect

//?UsseEffect u ovoj situaciji omogucava da se stanje url-a ne dodeli tokom server-side-renderinga nego tek nakon sto dodje do klijenta.Kako vrednosti ne bi pogresno bile dodeljene.

//?U sustini useEffect znaci da se stanje ne postavlja dok ne dodje skroz do klijenta da ne bi doslo do neke zabune i postavljanja nekih nejasnih vrednosti.

export default function SrbobranDanasSvg({ svgClass }) {
  const { resolvedTheme } = useTheme();
  console.log("Resolved theme: ", resolvedTheme);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (resolvedTheme) {
      const url =
        resolvedTheme === "dark"
          ? "/Images/srbobrandanas-svg-white.svg"
          : "/Images/srbobrandanas-svg.svg";
      setImageUrl(url);
    }
  }, [resolvedTheme]);

  return (
    <div className="flex lg:flex-1 lg:pr-3">
      <Link href="/" className="-m-1.5 p-1.5">
        {imageUrl && (
          <FeaturedImage
            alt={"srbobran"}
            imageUrl={
              resolvedTheme === "dark"
                ? "/Images/srbobrandanas-svg-white.svg"
                : "/Images/srbobrandanas-svg.svg"
            }
            width={200}
            height={200}
            imageClass={svgClass || ""}
          />
        )}
      </Link>
    </div>
  );
}
