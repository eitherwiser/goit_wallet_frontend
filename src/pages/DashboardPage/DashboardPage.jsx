import Media from "react-media";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import MobileNavigation from "components/MobileNavigation/MobileNavigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";

import s from "./DashboardPage.module.css";

import Container from "components/Container/Container";
import Header from "components/Header/Header";

import ButtonAddTransactions from "components/ButtonAddTransactions/ButtonAddTransactions";
import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";

export default function DashboardPage() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <div className={s.dashboardPage}>
        <Container>
          <div className={s.wrapper}>
            <div className={s.flex}>
              <div className={s.navBox}>
                <div className={s.nav}>
                  <Navigation />

                  {/* ОКСАНА */}
                  {/* {


            <Media
              query="(max-width: 768px)"
              render={() => <MobileNavigation />}
            />
          } */}

                  {/* ОКСАНА */}
                </div>

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
            {/* <Media query="(min-width: 768px)" render={() => <TransactionTable />} /> */}
            <Outlet />
          </div>
        </Container>
      </div>

      {/* <ModalAddTransaction /> */}
    </>
  );
}
