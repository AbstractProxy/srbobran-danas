//?SVA DESAVANJA:

export const DESAVANJA_QUERY = `#graphql
  query DESAVANJA_QUERY($offset: Int!, $pageSize: Int!) {
    desavanja(
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
