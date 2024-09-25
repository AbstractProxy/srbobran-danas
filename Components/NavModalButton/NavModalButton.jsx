import ModalButton from "../ModalButton/ModalButton";

export default function NavModalButton({ openNavModal, isModalOpen }) {
  return (
    <div className="flex lg:hidden">
      <ModalButton
        onClickHandler={openNavModal}
        spanText={"Open main menu"}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}
