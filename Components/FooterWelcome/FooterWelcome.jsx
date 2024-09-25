import SocialLinks from "@/Components/SocialLinks/SocialLinks";
import SrbobranDanasSvg from "@/Components/SrbobrandanasSvg/SrbobranDanasSvg";

export default function FooterWelcome({ footerText }) {
  return (
    <div className="space-y-5 order-last lg:order-first ">
      <SrbobranDanasSvg svgClass={""} />
      <div
        className="text-sm leading-6 text-gray-600 dark:text-slate-200"
        dangerouslySetInnerHTML={{ __html: footerText }}
      />

      <SocialLinks />
    </div>
  );
}
