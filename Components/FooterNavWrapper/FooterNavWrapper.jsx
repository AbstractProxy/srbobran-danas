import FooterHeading from "@/Components/FooterHeading/FooterHeading";
import FooterList from "@/Components/FooterList/FooterList";
import FooterNavigation from "@/Components/FooterNavigation/FooterNavigation";

export default function FooterNavWrapper({
  footerArray,
  classForUl,
  classForLinks,
}) {
  return (
    <FooterNavigation>
      {footerArray.map((item, index) => (
        <div key={index}>
          <FooterHeading>{item.naslov}</FooterHeading>
          <FooterList
            data={item.linkovi}
            classForUl={classForUl}
            classForLinks={classForLinks}
          />
        </div>
      ))}
    </FooterNavigation>
  );
}
