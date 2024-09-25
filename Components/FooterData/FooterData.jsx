import FooterWrapper from "@/Components/FooterWrapper/FooterWrapper";
import FooterContent from "@/Components/FooterContent/FooterContent";
import FooterWelcome from "@/Components/FooterWelcome/FooterWelcome";
import FooterNavWrapper from "@/Components/FooterNavWrapper/FooterNavWrapper";
import FooterPrivacyPolicy from "@/Components/FooterPrivacyPolicy/FooterPrivacyPolicy";

export default function FooterData({ footerArray, footerText }) {
  //!SKLONITI CLASSNAME IZ FOOTERWRAPPER

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterNavWrapper
          footerArray={footerArray}
          classForUl="list-none mt-6 space-y-4"
          classForLinks="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-slate-200 dark:hover:text-slate-400"
        />
        <FooterWelcome footerText={footerText} />
      </FooterContent>
      <FooterPrivacyPolicy />
    </FooterWrapper>
  );
}
