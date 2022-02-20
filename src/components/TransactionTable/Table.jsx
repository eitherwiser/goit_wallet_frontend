import Media from "react-media";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TransactionTableMobile from "./TransactionTableMobile";
import TransactionTable from "./TransactionTable";
import { getTransactions } from "../../redux/transactions/transactions-selectors";
import { getAllTransactions } from "../../redux/transactions/transaction-operations";

export default function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const transactions = useSelector(getTransactions);

  if (!transactions) {
    return null;
  }

  return (
    <Media query={{ minWidth: 768 }}>
      {(matches) =>
        matches ? (
          <TransactionTable transactions={transactions} />
        ) : (
          <TransactionTableMobile transactions={transactions} />
        )
      }
    </Media>
  );
}
