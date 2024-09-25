//?DESAVANJA MESTA:

export const DESAVANJA_MESTA = `#graphql
  query DesavanjaQuery {
    desavanjaMesta {
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
