//?NAVIGACIONI MENI:
export const NAVBAR_QUERY = `#graphql
  query NewQuery($slug: String) {
    menus(where: { slug: $slug }) {
      edges {
        node {
          id
          slug
          menuItems {
            edges {
              node {
                uri
                label
              }
            }
          }
        }
      }
    }
  }
`;
