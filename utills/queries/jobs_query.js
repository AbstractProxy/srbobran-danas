//?SVI POSLOVI:

export const JOBS_QUERY = `#graphql
  query POSTS_QUERY($offset: Int!, $pageSize: Int!) {
    poslovniKontakti(
      where: { offsetPagination: { offset: $offset, size: $pageSize } }
    ) {
      edges {
        node {
          date
          title(format: RENDERED)
          uri
          excerpt(format: RENDERED)
          featuredImage {
            node {
              altText
              mediaDetails {
                sizes(include: MEDIUM) {
                  file
                  fileSize
                  height
                  width
                  sourceUrl
                  mimeType
                  name
                }
              }
            }
          }
          poslovniAdresarKategorije {
            edges {
              node {
                link
                name
              }
            }
          }
          poslovniAdresarMesta {
            edges {
              node {
                link
                name
              }
            }
          }
        }
      }
      pageInfo {
        offsetPagination {
          total
          hasPrevious
          hasMore
        }
      }
    }
    seo {
    openGraph {
      frontPage {
        description
        title
      }
      defaultImage {
        altText
        caption
        commentCount
        commentStatus
        contentTypeName
        databaseId
        date
        description
      }
    }
    schema {
      companyName
      companyOrPerson
      homeUrl
      inLanguage
      personName
      siteName
      siteUrl
      wordpressSiteName
    }
  }
  }
`;
