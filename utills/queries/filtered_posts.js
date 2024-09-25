//?FILTEROVANI POSTOVI:

export const FILTERED_POSTS = `#graphql
  query FILTERED_QUERY(
    $offset: Int!
    $pageSize: Int!
    $taxonomyName: TaxonomyEnum
    $slug: [String]
  ) {
    posts(
      where: {
        offsetPagination: { offset: $offset, size: $pageSize }
        taxQuery: {
          taxArray: {
            taxonomy: $taxonomyName
            terms: $slug
            field: SLUG
            operator: IN
          }
        }
      }
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
