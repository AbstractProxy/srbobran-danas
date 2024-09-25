export const HOME_POSTS_QUERY = `#graphql
query AllPosts($size: Int! , $categoryIn: [ID]) {
%%%%(where: { offsetPagination: { offset: 0, size: $size } , categoryIn: $categoryIn}) {
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
        @@@ {
          edges {
            node {
              link
              name
            }
          }
        }
        $$$ {
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
    }
  }
}
}
`;
