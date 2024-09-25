import DisplayCategoriesAndPlaces from "@/Components/DisplayCategoriesAndPlaces/DisplayCategoriesAndPlaces";
import FormatDate from "@/Components/FormatDate/FormatDate";

export default function RelevantDateAndCategories({
  date,
  categories,
  linkClass,
}) {
  return (
    <div className=" flex items-center gap-x-2 text-xs">
      <FormatDate date={date} />

      <DisplayCategoriesAndPlaces data={categories} linkClass={linkClass} />
    </div>
  );
}
