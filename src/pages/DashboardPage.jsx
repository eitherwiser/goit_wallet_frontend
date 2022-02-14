import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Balance from '../components/Balance/Balance';
import TransactionTable from '../components/TransactionTable/TransactionTable';
import CurrencyTable from '../components/Currency/Currency';

import s from './DashboardPage.module.css';

export default function DashboardPage() {
  return (
    <Container>
      <Header />
      <div className={s.dashboardPage}>
        {/* <div>Навигация</div> */}
        <Navigation />
        <Balance />
        <CurrencyTable />
        <div>Приват Банк</div>
        <TransactionTable />
      </div>
    </Container>
  );
}
