import { ReactComponent as Logout } from "../../images/icon-logout/logout.svg";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { getUsername, getUserAvatar } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-operations";
import { getAuth } from "redux/auth/auth-selectors";
export default function UserMenu() {
  const name = useSelector(getUsername);
  const avatar = useSelector(getUserAvatar);
  // const isAuth = useSelector(getAuth);
  const dispatch = useDispatch();
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={s.header__user}>
      <>
        <img
          style={{ borderRadius: "50%" }}
          src={avatar}
          width="25px"
          height="25px"
          alt="avatar"
        />
        <span className={s.header__text}>{name}</span>
        <span className={s.line}>{isMobileOrTablet ? "|" : ""}</span>
        <button
          onClick={() => dispatch(logOut())}
          type="button"
          className={s.logout}
        >
          {<Logout />}
          <span className={s.exit}>{isMobileOrTablet ? "Выйти" : ""}</span>
        </button>
      </>
    </div>
  );
}
