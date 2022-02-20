import s from "./Header.module.css";

import LogoComponent from "components/LogoComponent";
import UserMenu from "components/UserMenu/UserMenu";

export default function Header() {
  return (
    <header className={s.header}>
      <LogoComponent />
      <UserMenu />
    </header>
  );
}
