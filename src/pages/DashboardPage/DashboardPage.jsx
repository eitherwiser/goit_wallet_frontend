import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";
import Container from "components/Container/Container";
import Header from "components/Header/Header";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <Header />
      <Container>
        <div className={s.wrapper}>
          <div className={s.flex}>
            <div className={s.navBox}>
              <Navigation />
              <Balance />
            </div>
            {isMobileOrTablet && <CurrencyTable />}
          </div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}
