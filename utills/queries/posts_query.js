//?SVI POSTOVI:

export const POSTS_QUERY = `#graphql
  query AllPosts($offset: Int!, $pageSize: Int!) {
    posts(where: { offsetPagination: { offset: $offset, size: $pageSize } }) {
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
  }
`;
