import logo from "../../images/logo-form/logo.jpg";
import logoMobile from "../../images/logo-form/logoMobile.jpg";
import s from "./Header.module.css";
import UserMenu from "components/UserMenu/UserMenu";

export default function Header() {
  return (
    <header className={s.header}>
      <picture>
        <source media="(min-width: 768px)" srcSet={logo} />
        <img className={s.logo} src={logoMobile} alt="logo" />
      </picture>
      <UserMenu />
    </header>
  );
}
