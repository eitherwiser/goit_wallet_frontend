import Media from "react-media";
import { useEffect, useState } from "react";

import fetchTransactions from "../../services/transactionsApi";

import TransactionTableMobile from "./TransactionTableMobile";
import TransactionTable from "./TransactionTable";

export default function Table() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ0MDlhZTBmMzI1MTI0ODE5ZjdiYyIsImlhdCI6MTY0NTA0MzIyMiwiZXhwIjoxNjQ1MDQ2ODIyfQ.-oEWwcuErdGoZOufbnF8jKyalxGM7CvUb4-DUxjrOSY";
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchTransactions(token).then(setTransactions);
    return () => setTransactions([]);
  }, []);
  // console.log(transactions);

  return (
    <Media query={{ minWidth: 768 }}>
      {(matches) =>
        matches ? (
          <TransactionTable transactions={transactions.transactions} />
        ) : (
          <TransactionTableMobile transactions={transactions.transactions} />
        )
      }
    </Media>
  );
}
