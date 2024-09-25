//?VIDEI IZ SIDEBARA QUERY

export const SIDEBAR_VIDEOS_QUERY = `#graphql
  query NewQuery {
    sideBar {
      id
      sidebarBoxPodesavanje {
        sidebarSadrzaj {
          ... on SidebarBoxPodesavanjeSidebarSadrzajYoutubeLayout {
            fieldGroupName
            naslov
            opis
            prikaziImeIOpis
            youtubeLink {
              target
              title
              url
            }
          }
          ... on SidebarBoxPodesavanjeSidebarSadrzajBlockLinkLayout {
            fieldGroupName
            textLinka
            link {
              target
              title
              url
            }
            slikaLinka {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;
