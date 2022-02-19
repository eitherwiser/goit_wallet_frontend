import Media from "react-media";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import ButtonAddTransactions from "components/ButtonAddTransactions/ButtonAddTransactions";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <div className={s.dashboardPage}>
        <div className={s.bgLeftBtn}>
          <Container>
            <div className={s.wrapper}>
              <div className={s.flex}>
                <div className={s.navBox}>
                  <Navigation />
                  <Balance />
                  <ButtonAddTransactions />
                </div>
                {
                  <Media
                    query="(min-width: 768px)"
                    render={() => <CurrencyTable />}
                  />
                }
              </div>
              <Outlet />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
