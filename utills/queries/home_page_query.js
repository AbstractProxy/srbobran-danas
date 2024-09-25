export const HOME_PAGE_QUERY = `#graphql
query AllPosts($uri: String) {
  pageBy(uri: $uri) {
    blocksJSON
  }
}`;
