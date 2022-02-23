import s from "./ModalLogout.module.css";
import { useEffect } from "react";
import closeIcon from "./cross.svg";

function ModalLogout({ onModalClose, onOverlayClose, onUserLogOut }) {
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={s.overlay} onClick={onOverlayClose}>
      <div className={s.modal}>
        <p className={s.title}>Вы действительно хотите выйти?</p>
        <button className={s.cansellBtn} type='button' onClick={onModalClose}>
          НЕТ
        </button>
        <button className={s.agreeBtn} type='button' onClick={onUserLogOut}>
          ДА
        </button>
        <button className={s.closeBtn} onClick={onModalClose}>
          <img
            className={s.icon}
            src={closeIcon}
            width={12}
            height={12}
            alt=''
          />
        </button>
      </div>
    </div>
  );
}

export default ModalLogout;
