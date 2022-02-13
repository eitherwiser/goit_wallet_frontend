import { ReactComponent as Logout } from "../../images/icon-logout/logout.svg";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import s from "./UserMenu.module.css";
import { logOut } from "redux/auth/auth-operations";
export default function UserMenu() {
  const dispatch = useDispatch();
  const isMobileorTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className={s.header__user}>
      <span className={s.header__text}>Имя</span>
      <span className={s.line}>{isMobileorTablet ? "|" : ""}</span>
      <button
        onClick={() => dispatch(logOut())}
        type="button"
        className={s.logout}
      >
        {<Logout />}
        <span className={s.exit}>{isMobileorTablet ? "Выйти" : ""}</span>
      </button>
    </div>
  );
}
