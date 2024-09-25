import NavModalContent from "../NavModalContent/NavModalContent";
import NavModalInnerButton from "../NavModalInnerButton/NavModalInnerButton";
import NavModalList from "../NavModalList/NavModalList";
import NavModalWrapper from "../NavModalWrapper/NavModalWrapper";

export default function NavModal({
  menuArray,
  closeNavModal,
  modalDiv,
  modalLinks,
  isModalOpen,
}) {
  return (
    <NavModalWrapper>
      <div className="fixed inset-0 z-10"></div>
      <NavModalContent>
        <NavModalInnerButton
          closeNavModal={closeNavModal}
          isModalOpen={isModalOpen}
        />
        <NavModalList
          menuArray={menuArray}
          modalDiv={modalDiv}
          modalLinks={modalLinks}
          closeNavModal={closeNavModal}
        />
      </NavModalContent>
    </NavModalWrapper>
  );
}
