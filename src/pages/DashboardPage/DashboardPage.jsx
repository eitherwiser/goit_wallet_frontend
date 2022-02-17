import Media from "react-media";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import MobileNavigation from "components/MobileNavigation/MobileNavigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";

import s from "./DashboardPage.module.css";

import Header from "components/Header/Header";

export default function DashboardPage() {
  return (
    
    <div className={s.dashboardPage}>
      <div className={s.container}>
        <div className={s.box}>
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
        </div>
        {<Media query="(min-width: 768px)" render={() => <CurrencyTable />} />}
        {/* <Media query="(min-width: 768px)" render={() => <TransactionTable />} /> */}
      </div>
      <Outlet />
    </div>

  );
}
