import s from "./Header.module.css";
import UserMenu from "components/UserMenu/";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as LogoMobile } from "../../images/logo-form/logoMobile.svg";
import { ReactComponent as Logo } from "../../images/logo-form/logo.svg";

export default function Header() {
  const isMobileorTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <header className={s.header}>
      {isMobileorTablet ? (
        <div className={s.header__logo}>
          <Logo /> <span className={s.header__logo_text}> Wallet</span>
        </div>
      ) : (
        <div className={s.header__logo}>
          <LogoMobile /> <span className={s.header__logo_text}> Wallet</span>
        </div>
      )}

      <UserMenu />
    </header>
  );
}
