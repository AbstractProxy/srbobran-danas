//?AKTIVNA OBAVESTENJA:

export const ACTIVE_NOTIFICATIONS_QUERY = `#graphql
  query ActiveNotificationsQuery {
    aktivnaObavestenja {
      title
      excerpt
      url
      img
      od
      do
    }
  }
`;
