//?ZASEBNO DESAVANJE:

export const DESAVANJE_SLUG_QUERY = `#graphql
  query DESAVANJE_QUERY($slug: String!) {
    desavanjeBy(slug: $slug) {
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
      desavanjaKategorije {
        edges {
          node {
            link
            name
          }
        }
      }
      desavanjaMesta {
        edges {
          node {
            link
            name
          }
        }
      }
      seo {
        opengraphAuthor
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
