//?POSTOVI KATEGORIJE:

export const POSTS_KATEGORIJE = `#graphql
  query DesavanjaQuery {
    categories {
      edges {
        node {
          uri
          name
          slug
        }
      }
    }
  }
`;
