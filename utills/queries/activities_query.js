//?AKTIVNOSTI QUERY

export const ACTIVITIES_QUERY = `#graphql
  query AllActivities($offset: Int!, $pageSize: Int!) {
    aktivnosti(
      where: { offsetPagination: { offset: $offset, size: $pageSize } }
    ) {
      edges {
        node {
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
