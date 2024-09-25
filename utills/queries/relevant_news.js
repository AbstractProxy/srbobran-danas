//?RELEVANTNE/SRODNE OBJAVE:

export const RELEVANT_NEWS = `#graphql
  query DesavanjaQuery($categoryNames: String, $postId: [ID]) {
    posts(
      where: {
        categoryName: $categoryNames
        notIn: $postId
        offsetPagination: { offset: 0, size: 6 }
      }
    ) {
      edges {
        node {
          postId
          date
          title(format: RENDERED)
          uri
          excerpt
          featuredImage {
            node {
              mediaItemUrl
              mediaDetails {
                width
                height
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
        }
      }
    }
  }
`;
