//?POSTOVI MESTA:
export const POSTS_MESTA = `#graphql
  query DesavanjaQuery {
    mesta {
      edges {
        node {
          name
          uri
          slug
        }
      }
    }
  }
`;
