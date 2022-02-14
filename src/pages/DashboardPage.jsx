import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Balance from "../components/Balance/Balance";
import TransactionTable from "../components/TransactionTable/TransactionTable";

import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <Container>
      <Header />
      <div className={s.dashboardPage}>
        <Navigation />
        <Balance />

        <div>Приват Банк</div>
        <TransactionTable />
      </div>
    </Container>
  );
}
