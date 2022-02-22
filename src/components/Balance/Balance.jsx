import { useSelector, useDispatch } from "react-redux";
import s from "./Balance.module.css";
import { useEffect } from "react";
import {
  getBalance,
  getTransactions,
} from "redux/transactions/transactions-selectors";
import { getBalanceTransactions } from "redux/transactions/transaction-operations";
export default function Balance() {
  const balance = useSelector(getBalance);
  const transactions = useSelector(getTransactions);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getBalanceTransactions()), [dispatch, transactions]);
  return (
    <div className={s.balance}>
      <div className={s.label}>Ваш баланс</div>
      <div className={s.amount}>&#x20b4; {balance}</div>
    </div>
  );
}
