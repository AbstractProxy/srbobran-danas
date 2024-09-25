import HomePageWrapper from "../HomePageWrapper/HomePageWrapper";
import HomePostsDecider from "../HomePostsDecider/HomePostsDecider";

export default async function HomeBlockRenderer({ blocks }) {
  return (
    <>
      {blocks.map((item, index) => {
        console.log("Attributes: ", item.attributes.data);
        return (
          <HomePageWrapper>
            <HomePostsDecider
              key={index}
              type={item.attributes.data.tip_objava}
              postsNumber={parseInt(item.attributes.data.broj_postova)}
              hasNextPage={item.attributes.data.navigacija_na_sledecu_stranu}
              categoriesForQuery={item.attributes.data.kategorija}
              styleType={item.attributes.data.tip_prikaza_postova}
            />
          </HomePageWrapper>
        );
      })}
    </>
  );
}
