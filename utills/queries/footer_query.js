//?FOOTER QUERY

export const NEW_FOOTER_QUERY = `#graphql
  query JOB_QUERY {
    footerBoxPodesavanja {
      footerapi {
        blokFootera {
          linkovi {
            fieldGroupName
            link {
              target
              title
              url
            }
          }
          naslov
        }
        prviBlockFooter
      }
    }
  }
`;
