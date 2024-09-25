import { mapMenuItems } from "@/utills/items_mapping/items_mapping";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import NavModalListContainer from "../NavModalListContainer/NavModalListContainer";

export default function NavModalList({
  menuArray,
  modalDiv,
  modalLinks,
  closeNavModal,
}) {
  return (
    <NavModalListContainer>
      <div className="space-y-2 py-6">
        {mapMenuItems(menuArray.edges, modalDiv, modalLinks, closeNavModal)}
      </div>
      <div className="py-6">
        <ThemeSwitch />
      </div>
    </NavModalListContainer>
  );
}
