//?AKTIVNOSTI SLUG QUERY

export const AKTIVNOST_SLUG_QUERY = `#graphql
  query AKTIVNOST_QUERY($slug: String!) {
    aktivnostBy(slug: $slug) {
      id
      blocksJSON
      title(format: RENDERED)
      date
      featuredImage {
        node {
          mediaItemUrl
          mediaDetails {
            width
            height
            sizes {
              width
              height
              file
              sourceUrl
              name
            }
          }
        }
      }
      postImages {
        postImages
      }
      galerijaNew {
        galerijaNew {
          edges {
            node {
              id
              altText
              caption(format: RENDERED)
              mediaDetails {
                width
                height
              }
              mediaItemUrl
              sourceUrl
              title(format: RENDERED)
              uri
            }
          }
        }
      }
      aktivnostiKategorije {
        edges {
          node {
            link
            name
          }
        }
      }
      aktivnostiMesta {
        edges {
          node {
            link
            name
          }
        }
      }
      seo {
        opengraphPublisher
        title 
        canonical 
        metaDesc
        opengraphSiteName
        opengraphTitle 
        opengraphDescription
        opengraphUrl
        opengraphType 
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage { 
          sourceUrl 
        mediaDetails { 
          width 
          height 
        }
        author { 
          node { 
            name 
          }
        }
      }
        twitterTitle  
        twitterDescription
        metaRobotsNofollow 
        metaRobotsNoindex

        cornerstone 
        focuskw 
        fullHead 
        metaKeywords   
      }     
   }
   allSettings {
    generalSettingsLanguage
    generalSettingsTitle
    generalSettingsUrl
  }
}
`;
