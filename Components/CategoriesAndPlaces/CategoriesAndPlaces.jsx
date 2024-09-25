import AllCategoriesAndPlaces from "@/Components/AllCategoriesAndPlaces/AllCategoriesAndPlaces";

export default function CategoriesAndPlaces({ categories, places }) {
  //!DIVOVE VRATITI PO POTREBI NA ALLCATEGORIESANDPLACES

  return (
    <div className="py-2">
      <AllCategoriesAndPlaces query={categories} />

      <AllCategoriesAndPlaces query={places} />
    </div>
  );
}
