import s from "./Header.module.css";
import UserMenu from "components/UserMenu/";
import LogoComponent from "components/LogoComponent";

export default function Header() {
  return (
    <header className={s.header}>
      <LogoComponent />
      <UserMenu />
    </header>
  );
}
