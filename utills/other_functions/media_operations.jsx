export const extractVideoIdFromUrl = (url) => {
  let videoId = "";

  const newUrl = new URL(url);

  if (newUrl.hostname === "www.youtube.com") {
    videoId = newUrl.searchParams.get("v");
  } else if (newUrl.hostname === "youtu.be") {
    let trimmedUrl = newUrl.pathname.slice(1);
    videoId = trimmedUrl;
  }
  return videoId;
};

export const getImageUrl = (videoId) => {
  const sourceUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  return sourceUrl;
};

export const checkIsLinkOnSite = (url) => {
  let newUrl = new URL(url);
  if (newUrl.hostname === `srbobrandanas.rs`) {
    return true;
  } else {
    return false;
  }
};
