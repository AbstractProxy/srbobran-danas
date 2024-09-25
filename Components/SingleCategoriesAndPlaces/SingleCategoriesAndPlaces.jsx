import DisplayCategoriesAndPlaces from "@/Components/DisplayCategoriesAndPlaces/DisplayCategoriesAndPlaces";

export default function SingleCategoriesAndPlaces({
  categories,
  mesta,
  linkClass,
}) {
  return (
    <>
      {categories && (
        <DisplayCategoriesAndPlaces
          data={categories}
          linkClass={linkClass}
          isCategories={true}
        />
      )}

      {mesta && (
        <DisplayCategoriesAndPlaces data={mesta} linkClass={linkClass} />
      )}
    </>
  );
}
