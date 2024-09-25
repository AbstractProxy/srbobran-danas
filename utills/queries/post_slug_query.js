//?ZASEBNI POST:

export const POST_SLUG_QUERY = `#graphql
  query POST_QUERY($slug: String!) {
    postBy(slug: $slug) {
      author {
        node {
          name
        }
      }
      postId
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
                sizes(include: THUMBNAIL) {
                  sourceUrl
                }
                width
                height
              }
              mediaItemUrl
              sourceUrl
              title(format: RENDERED)
            }
          }
        }
      }
      categories {
        edges {
          node {
            link
            name
          }
        }
      }
      mesta {
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
