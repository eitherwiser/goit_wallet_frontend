import Media from "react-media";

import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import TransactionTable from "components/TransactionTable/TransactionTable";
import CurrencyTable from "components/Currency/Currency";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <Container>
      <div className={s.dashboardPage}>
        <Navigation />
        <Balance />
        <CurrencyTable />
        <div>Приват Банк</div>

        <Media query="(min-width: 768px)" render={() => <TransactionTable />} />
      </div>
    </Container>
  );
}
