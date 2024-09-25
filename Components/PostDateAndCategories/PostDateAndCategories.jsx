import DisplayCategoriesAndPlaces from "@/Components/DisplayCategoriesAndPlaces/DisplayCategoriesAndPlaces";
import FormatDate from "@/Components/FormatDate/FormatDate";

export default function PostDateAndCategories({ date, categories, linkClass }) {
  return (
    <div className="flex items-center  sm:mt-1  gap-x-4 text-xs">
      {date && <FormatDate date={date} />}

      {categories && categories.length > 0 && (
        <DisplayCategoriesAndPlaces data={categories} linkClass={linkClass} />
      )}
    </div>
  );
}
