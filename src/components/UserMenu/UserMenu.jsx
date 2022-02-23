import { ReactComponent as Logout } from "../../images/icon-logout/logout.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { getUsername, getUserAvatar } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-operations";
import ModalLogout from "components/ModalLogout/ModalLogout";

export default function UserMenu() {
  const [showModal, setShowModal] = useState(false);

  const name = useSelector(getUsername);
  const avatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const onModalToggle = () => {
    setShowModal((prev) => !prev);
  };

  const onOverlayClose = (event) => {
    if (event.target === event.currentTarget) {
      onModalToggle();
    }
  };

  const onUserLogOut = () => {
    dispatch(logOut());
    onModalToggle();
  };

  return (
    <div className={s.header__user}>
      <>
        <img
          style={{ borderRadius: "50%" }}
          src={avatar}
          width='25px'
          height='25px'
          alt='avatar'
        />
        <span className={s.header__text}>{name}</span>
        <span className={s.line}>{isMobileOrTablet ? "|" : ""}</span>
        <button onClick={onModalToggle} type='button' className={s.logout}>
          {<Logout />}
          <span className={s.exit}>{isMobileOrTablet ? "Выйти" : ""}</span>
        </button>
      </>

      {showModal && (
        <ModalLogout
          onModalClose={onModalToggle}
          onOverlayClose={onOverlayClose}
          onUserLogOut={onUserLogOut}
        />
      )}
    </div>
  );
}
