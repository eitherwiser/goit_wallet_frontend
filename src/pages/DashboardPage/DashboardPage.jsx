import Media from "react-media";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";

import s from "./DashboardPage.module.css";
import Container from "components/Container/Container";
import Header from "components/Header/Header";

export default function DashboardPage() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className={s.dashboardPage}>
        <div className={s.container}>
          <div className={s.nav}>
            <Navigation />
            <Balance />
          </div>
          <Media query="(min-width: 768px)" render={() => <CurrencyTable />} />
        </div>
        <Outlet />
      </div>
    </>
  );
}
