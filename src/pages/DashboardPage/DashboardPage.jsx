import Media from "react-media";
import { Outlet } from "react-router-dom";

// import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
// import TransactionTable from "components/TransactionTable/TransactionTable";
import CurrencyTable from "components/Currency/Currency";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    // <Container>
    <div className={s.dashboardPage}>
      <div className={s.container}>
        <div className={s.nav}>
          <Navigation />
          <Balance />
        </div>
        <Media query="(min-width: 768px)" render={() => <CurrencyTable />} />
        {/* <CurrencyTable /> */}
      </div>

      {/* <Media query="(min-width: 768px)" render={() => <TransactionTable />} /> */}
      <Outlet />
    </div>
    // </Container>
  );
}
