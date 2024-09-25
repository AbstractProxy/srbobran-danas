import ModalButton from "../ModalButton/ModalButton";
import SrbobranDanasSvg from "../SrbobrandanasSvg/SrbobranDanasSvg";

export default function NavModalInnerButton({ closeNavModal, isModalOpen }) {
  return (
    <div className="flex items-center justify-between">
      <SrbobranDanasSvg svgClass={"h-10 w-auto"} />
      <ModalButton
        onClickHandler={closeNavModal}
        spanText={"Ugasi meni"}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}
