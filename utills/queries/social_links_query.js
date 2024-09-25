//?SOCIAL LINKOVI QUERY

export const SOCIAL_LINKS_QUERY = `#graphql
  query SOCIAL_LINKS_QUERY {
    socialSettings {
      socijalneMreze {
        facebookMetaLink
        instagramLink
        tiktokLink
        youtubeLink
      }
    }
  }
`;
