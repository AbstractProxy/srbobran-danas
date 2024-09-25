import SocialLink from "../SocialLink/SocialLink";
import SocialLinksWrapper from "../SocialLinksWrapper/SocialLinksWrapper";

export default function MapSocialLinks({ data }) {
  return (
    <SocialLinksWrapper>
      {data.map((item, index) => (
        <SocialLink key={index} item={item} />
      ))}
    </SocialLinksWrapper>
  );
}
