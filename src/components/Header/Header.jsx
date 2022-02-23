import s from "./Header.module.css";

import LogoComponent from "components/LogoComponent";
import UserMenu from "components/UserMenu/UserMenu";
import Container from "components/Container/Container";

export default function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <LogoComponent />
          <UserMenu />
        </div>
      </Container>
    </header>
  );
}
