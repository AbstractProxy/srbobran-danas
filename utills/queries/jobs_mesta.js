//?MESTA POSLOVA:
export const JOBS_MESTA = `#graphql
  query NewQuery {
    poslovniAdresarMesta {
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
