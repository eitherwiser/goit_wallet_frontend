import Media from "react-media";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";
import TransactionTable from "components/TransactionTable/TransactionTable";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (

//     <Container>
//       <div className={s.dashboardPage}>
//         <Navigation />
//         <Balance />
//         <CurrencyTable />
//         <Media query="(min-width: 768px)" render={() => <TransactionTable />} />

    <div className={s.dashboardPage}>
      <div className={s.container}>
        <div className={s.nav}>
          <Navigation />
          <Balance />
        </div>
    {<Media query="(min-width: 768px)" render={() => <CurrencyTable />} />}
      </div>
      <Outlet />
    </div>
  );
}
