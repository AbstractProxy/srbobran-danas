import client from "@/client";

export async function fetchSinglePageData(slug, query) {
  const { data } = await client({
    query: query,
    variables: {
      slug: slug,
    },
  });

  return {
    details:
      data?.postBy?.posts ||
      data?.desavanjeBy?.desavanja ||
      data?.poslovniKontaktBy?.poslovniAdresar,
    blocksJSON:
      data?.postBy?.blocksJSON ||
      data?.desavanjeBy?.blocksJSON ||
      data?.poslovniKontaktBy?.blocksJSON ||
      data?.aktivnostBy?.blocksJSON,
    title:
      data?.postBy?.title ||
      data?.desavanjeBy?.title ||
      data?.poslovniKontaktBy?.title ||
      data?.aktivnostBy?.title,
    date:
      data?.postBy?.date ||
      data?.desavanjeBy?.date ||
      data?.poslovniKontaktBy?.date ||
      data?.aktivnostBy?.date,
    featuredImage:
      data?.postBy?.featuredImage ||
      data?.desavanjeBy?.featuredImage ||
      data?.poslovniKontaktBy?.featuredImage ||
      data?.aktivnostBy?.featuredImage,
    imageUrl:
      data?.postBy?.featuredImage?.node?.mediaItemUrl ||
      data?.desavanjeBy?.featuredImage?.node?.mediaItemUrl ||
      data?.poslovniKontaktBy?.featuredImage?.node?.mediaItemUrl ||
      data?.aktivnostBy?.featuredImage?.node?.mediaItemUrl,
    width:
      data?.postBy?.featuredImage?.node?.mediaDetails?.width ||
      data?.desavanjeBy?.featuredImage?.node?.mediaDetails?.width ||
      data?.poslovniKontaktBy?.featuredImage?.node?.mediaDetails?.width ||
      data?.aktivnostBy?.featuredImage?.node?.mediaDetails?.width,
    height:
      data?.postBy?.featuredImage?.node?.mediaDetails?.height ||
      data?.desavanjeBy?.featuredImage?.node?.mediaDetails?.height ||
      data?.poslovniKontaktBy?.featuredImage?.node?.mediaDetails?.height ||
      data?.aktivnostBy?.featuredImage?.node?.mediaDetails?.height,

    postImages:
      data?.postBy?.postImages?.postImages ||
      data?.desavanjeBy?.postImages?.postImages ||
      data?.poslovniKontaktBy?.postImages?.postImages ||
      data?.aktivnostBy?.postImages?.postImages,

    gallery:
      data?.postBy?.galerijaNew?.galerijaNew?.edges ||
      data?.desavanjeBy?.galerijaNew?.galerijaNew?.edges ||
      data?.poslovniKontaktBy?.galerijaNew?.galerijaNew?.edges ||
      data?.aktivnostBy?.galerijaNew?.galerijaNew?.edges,

    categories:
      data?.postBy?.categories?.edges ||
      data?.desavanjeBy?.desavanjaKategorije?.edges ||
      data?.poslovniKontaktBy?.poslovniAdresarKategorije?.edges ||
      data?.aktivnostBy?.aktivnostiKategorije?.edges,
    mesta:
      data?.postBy?.mesta?.edges ||
      data?.desavanjeBy?.desavanjaMesta?.edges ||
      data?.poslovniKontaktBy?.poslovniAdresarMesta?.edges ||
      data?.aktivnostBy?.aktivnostiMesta?.edges,
    postId: data?.postBy?.postId,
    seo:
      data?.postBy?.seo ||
      data?.desavanjeBy?.seo ||
      data?.poslovniKontaktBy?.seo ||
      data?.aktivnostBy?.seo,
    allSettings: data?.allSettings,
    author:
      data?.postBy?.author ||
      data?.desavanjeBy?.author ||
      data?.poslovniKontaktBy?.author ||
      data?.aktivnostBy?.author,
  };
}

export async function fetchOtherSinglePost(slug, query) {
  const { data } = await client({
    query: query,
    variables: {
      slug: slug,
    },
  });
  return {
    title: data?.pageBy?.title,
    blocksJSON: data?.pageBy?.blocksJSON,
    postImages: data?.pageBy?.postImages?.postImages,
    gallery: data?.pageBy?.galerijaNew?.galerijaNew?.edges,
    featuredImage: data?.pageBy?.featuredImage,
    imageUrl: data?.pageBy?.featuredImage?.node?.mediaItemUrl,
    width: data?.pageBy?.featuredImage?.node?.mediaDetails?.width,
    height: data?.pageBy?.featuredImage?.node?.mediaDetails?.height,
  };
}

export async function fetchNavigationData(slug, query) {
  const { data } = await client({
    query: query,
    variables: {
      slug: slug,
    },
  });

  return data.menus?.edges[0].node?.menuItems;
}

export async function fetchFooterData(query) {
  const { data } = await client({
    query: query,
  });
  return {
    footerArray: data?.footerBoxPodesavanja?.footerapi?.blokFootera,
    footerText: data?.footerBoxPodesavanja?.footerapi?.prviBlockFooter,
  };
}

export async function fetchSocialLinks(query) {
  const { data } = await client({
    query: query,
  });
  return {
    instagramLink: data?.socialSettings?.socijalneMreze?.instagramLink,
    facebookLink: data?.socialSettings?.socijalneMreze?.facebookMetaLink,
    youtubeLink: data?.socialSettings?.socijalneMreze?.youtubeLink,
    tiktokLink: data?.socialSettings?.socijalneMreze?.tiktokLink,
  };
}

export async function fetchDataByYear(slug, query, currentPage, pageSize) {
  const offset = (currentPage - 1) * pageSize;
  const parsedSlug = parseInt(slug);
  const { data } = await client({
    query: query,
    variables: {
      offset: offset,
      pageSize: pageSize,
      slug: parsedSlug,
    },
  });
  return {
    data: data?.posts,
    total: data?.posts?.pageInfo?.offsetPagination?.total,
    hasNextPage: data?.posts?.pageInfo?.offsetPagination?.hasMore,
    hasPreviousPage: data?.posts?.pageInfo?.offsetPagination?.hasPrevious,
  };
}

export async function fetchData(query, currentPage, pageSize) {
  const offset = (currentPage - 1) * pageSize;
  const { data } = await client({
    query: query,
    variables: {
      offset: offset,
      pageSize: pageSize,
    },
  });

  return {
    data:
      data?.posts ||
      data?.desavanja ||
      data?.poslovniKontakti ||
      data?.aktivnosti,
    total:
      data?.posts?.pageInfo?.offsetPagination?.total ||
      data?.desavanja?.pageInfo?.offsetPagination?.total ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.total ||
      data?.aktivnosti?.pageInfo?.offsetPagination?.total,
    hasNextPage:
      data?.posts?.pageInfo?.offsetPagination?.hasMore ||
      data?.desavanja?.pageInfo?.offsetPagination?.hasMore ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.hasMore ||
      data?.aktivnosti?.pageInfo?.offsetPagination?.hasMore,
    hasPreviousPage:
      data?.posts?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.desavanja?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.aktivnosti?.pageInfo?.offsetPagination?.hasPrevious,
  };
}

export async function fetchAllCategoriesAndPlaces(query) {
  const { data } = await client({
    query: query,
  });
  return {
    data:
      data?.categories ||
      data?.desavanjaKategorije ||
      data?.poslovniAdresarKategorije ||
      data?.mesta ||
      data?.desavanjaMesta ||
      data?.poslovniAdresarMesta,
  };
}

export async function fetchCategories(query) {
  const { data } = await client({
    query: query,
  });
  return data;
}

export async function fetchFilteredData(
  slug,
  query,
  currentPage,
  pageSize,
  taxonomyName
) {
  const offset = (currentPage - 1) * pageSize;
  const { data } = await client({
    query: query,
    variables: {
      offset: offset,
      pageSize: pageSize,
      taxonomyName: taxonomyName,
      slug: slug,
    },
  });
  return {
    data: data?.desavanja || data?.posts || data?.poslovniKontakti,
    total:
      data?.desavanja?.pageInfo?.offsetPagination?.total ||
      data?.posts?.pageInfo?.offsetPagination?.total ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.total,
    hasNextPage:
      data?.desavanja?.pageInfo?.offsetPagination?.hasMore ||
      data?.posts?.pageInfo?.offsetPagination?.hasMore ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.hasMore,
    hasPreviousPage:
      data?.desavanja?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.posts?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.posts?.pageInfo?.offsetPagination?.hasPrevious,
  };
}

export async function fetchRelevantData(query, postId, categoryNames) {
  const { data } = await client({
    query: query,
    variables: {
      categoryNames: categoryNames,
      postId: postId,
    },
  });
  return {
    data: data?.posts || data?.desavanja || data?.poslovniKontakti,
  };
}

export async function fetchActiveNotificationsData(query) {
  const { data } = await client({
    query: query,
  });
  return {
    data: data?.aktivnaObavestenja,
  };
}

export async function fetchSidebarVideos(query) {
  const { data } = await client({
    query: query,
  });
  return data?.sideBar?.sidebarBoxPodesavanje?.sidebarSadrzaj;
}

export async function fetchHomePageData(query, uri) {
  const { data } = await client({
    query: query,
    variables: {
      uri: uri,
    },
  });
  return data?.pageBy?.blocksJSON;
}

export async function fetchHomePostsData(
  query,
  size,
  type,
  categories,
  categoriesQueryName,
  placesQueryName
) {
  let newQuery = query.replace("%%%%", type);
  newQuery = newQuery.replace("@@@", categoriesQueryName);
  newQuery = newQuery.replace("$$$", placesQueryName);

  const { data } = await client({
    query: newQuery,
    variables: {
      size: size,
      categoryIn: categories,
    },
  });
  return {
    data:
      data?.posts ||
      data?.desavanja ||
      data?.poslovniKontakti ||
      data?.aktivnosti,
    total:
      data?.posts?.pageInfo?.offsetPagination?.total ||
      data?.desavanja?.pageInfo?.offsetPagination?.total ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.total ||
      data?.aktivnosti?.pageInfo?.offsetPagination?.total,
    hasPreviousPage:
      data?.posts?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.desavanja?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.poslovniKontakti?.pageInfo?.offsetPagination?.hasPrevious ||
      data?.aktivnosti?.pageInfo?.offsetPagination?.hasPrevious,
  };
}
