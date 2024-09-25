import NavModalCloseIcon from "../NavModalCloseIcon/NavModalCloseIcon";
import NavModalOpenIcon from "../NavModalOpenIcon/NavModalOpenIcon";

export default function ModalButton({ onClickHandler, spanText, isModalOpen }) {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={onClickHandler}
    >
      <span className="sr-only">{spanText}</span>
      {isModalOpen ? <NavModalCloseIcon /> : <NavModalOpenIcon />}
    </button>
  );
}
