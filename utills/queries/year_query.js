//?SVI POSTOVI PO GODINAMA:

export const YEAR_QUERY = `#graphql
  query POSTS_QUERY($slug: Int!, $offset: Int!, $pageSize: Int!) {
    posts(
      where: {
        dateQuery: { year: $slug }
        offsetPagination: { offset: $offset, size: $pageSize }
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
              mediaDetails {
                sizes {
                  width
                  height
                  file
                  fileSize
                  mimeType
                  name
                  sourceUrl
                }
              }
            }
          }
          kategorije {
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
  }
`;
