//?FOOTER ZASEBAN POST QUERY

export const ONE_PAGE_QUERY = `#graphql
query NewQuery($slug: String!) {
  pageBy(uri: $slug) {
    title(format: RENDERED)
    blocksJSON
    featuredImage {
      node {
        mediaItemUrl
        mediaDetails {
          width
          height
          sizes {
            width
            height
            file
            sourceUrl
          }
        }
      }
    }
    postImages {
      postImages
    }
    galerijaNew {
      galerijaNew {
        edges {
          node {
            id
            altText
            caption
            mediaDetails {
              sizes(include: THUMBNAIL) {
                sourceUrl
              }
              width
              height
            }
            mediaItemUrl
            sourceUrl
            title
          }
        }
      }
    }
  }
}

`;
