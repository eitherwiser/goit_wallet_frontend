import Media from "react-media";

import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";
import Balance from "components/Balance/Balance";
import CurrencyTable from "components/Currency/Currency";
import TransactionTable from "components/TransactionTable/TransactionTable";
import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <Container>
      <div className={s.dashboardPage}>
        <Navigation />
        <Balance />
        <CurrencyTable />

        <ModalAddTransaction />

        <Media query="(min-width: 768px)" render={() => <TransactionTable />} />
      </div>
    </Container>
  );
}
