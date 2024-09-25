import Error from "@/Components/Error/Error";
import { fetchSinglePageData } from "../queries/fetch_data";

export async function generateSinglePageSEOData(slug, query) {
  try {
    const { seo, allSettings } = await fetchSinglePageData(slug, query);

    const description =
      seo?.metaDesc === "" ? seo?.opengraphDescription : seo?.metaDesc;

    return {
      generator: "Next.js",
      applicationName: "Next.js",
      authors: [{ name: "SrbobranDanas" }],
      publisher: seo?.opengraphPublisher,
      title: seo?.title,
      alternates: {
        canonical: seo?.canonical,
        languages: {
          sr_RS: allSettings?.generalSettingsLanguage,
        },
      },
      description: description,
      siteName: seo?.opengraphSiteName,
      openGraph: {
        title: seo?.opengraphTitle,
        description: seo?.opengraphDescription,
        url: seo?.opengraphUrl,
        type: seo?.opengraphType,
        publishedTime: seo?.opengraphPublishedTime,
        modifiedTime: seo?.opengraphModifiedTime,
        locale: allSettings?.generalSettingsLanguage,
        images: [
          {
            url: seo?.opengraphImage?.sourceUrl,
            width: seo?.opengraphImage?.mediaDetails?.width,
            height: seo?.opengraphImage?.mediaDetails?.height,
          },
        ],
      },
      twitter: {
        title: seo?.twitterTitle || seo?.openGraphTitle,
        description: seo?.twitterDescription,
      },
      robots: {
        index: seo?.metaRobotsNoindex,
        follow: seo?.metaRobotsNofollow,
      },
    };
  } catch (error) {
    return <Error text={"seo data"} error={error} />;
  }
}
