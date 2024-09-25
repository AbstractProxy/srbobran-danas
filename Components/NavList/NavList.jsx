import { mapMenuItems } from "@/utills/items_mapping/items_mapping";

export default function NavList({ menuArray, mainMenuUl, mainMenuLinks }) {
  return (
    <>
      {mapMenuItems(menuArray.edges, mainMenuUl, mainMenuLinks)}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </>
  );
}
