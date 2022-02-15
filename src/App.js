import Table from "components/TransactionTable/Table";
import useWindowSize from "./hooks/useWindowSize";
import Media from 'react-media';
import TransactionTable from './components/TransactionTable/TransactionTable';
import CurrencyTable from './components/Currency/Currency';
import './App.css';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { getAuth } from 'redux/auth/auth-selectors';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  const isAuth = useSelector(getAuth);
  const size = useWindowSize();
  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      {!isAuth && (
        <Container>
          <Header />
        </Container>
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DashboardPage />
            // !isAuth ? (
            //   <Navigate replace to="/home" />
            // ) : (
            //   <Navigate replace to="/login" />
            // )
            // !isAuth && <Navigate replace to="/login" />
          }
        >
          {/* <Route path="diagram" element={<Statistics />} /> */}
          <Route path="home" element={<Table />} />

//           <Route path="diagram" element={<Statistics />} />
//           <Route
//             path="home"
//             element={
//               <Media
//                 query="(min-width: 768px)"
//                 render={() => <TransactionTable />}
//               />
//             }
//           />

          {/*Вместо текста компонент кружочка */}
          <Route path="diagram" element={<span>Кружок со статистикой</span>} />

          <Route
            path="exchangeRates"
            element={
              size.width < 768 ? (
                <CurrencyTable />
              ) : (
                <Navigate replace to="/home" />
              )
            }
          />
        </Route>

        <Route
          path="login"
          element={isAuth ? <Navigate replace to="/home" /> : <LoginPage />}
        />
        <Route
          path="register"
          element={isAuth ? <Navigate replace to="/home" /> : <RegisterPage />}
        />
        {/* <Route
          path="home"
          element={
            !isAuth ? <DashboardPage /> : <Navigate replace to="/login" />
          }
        /> */}
      </Routes>
      {/* <Container>
        <StatisticsPages />
      </Container> */}
    </>
  );
}
