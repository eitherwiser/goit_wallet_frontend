import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Balance from "../../components/Balance/Balance";
import Chart from "../../components/Chart/Chart";
import s from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <Container>
      <Header />
      <div className={s.dashboardPage}>
        {/* <div>Навигация</div> */}
        <Navigation />
        <Balance />
        <Chart />
        <div>Приват Банк</div>
        <div>Транзакции</div>
      </div>
    </Container>
  );
}
