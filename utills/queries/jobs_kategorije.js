//?KATEGORIJE POSLOVA:

export const JOBS_KATEGORIJE = `#graphql
  query NewQuery {
    poslovniAdresarKategorije {
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
