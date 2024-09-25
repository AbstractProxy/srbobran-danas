//?DESAVANJA KATEGORIJE:

export const DESAVANJA_KATEGORIJE = `#graphql
  query DESAVANJA_KATEGORIJE {
    desavanjaKategorije {
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
