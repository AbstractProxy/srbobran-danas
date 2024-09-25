import DisplayCategoriesAndPlaces from "@/Components/DisplayCategoriesAndPlaces/DisplayCategoriesAndPlaces";

export default function PostPlaces({ places, linkClass }) {
  return (
    <>
      {places && places.length > 0 && (
        <DisplayCategoriesAndPlaces data={places} linkClass={linkClass} />
      )}
    </>
  );
}
