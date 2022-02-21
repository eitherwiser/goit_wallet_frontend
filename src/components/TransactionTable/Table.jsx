import Media from "react-media";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TransactionTableMobile from "./TransactionTableMobile";
import TransactionTable from "./TransactionTable";
import LoaderComponent from "components/LoaderComponent/LoaderComponent";

import { getTransactions } from "redux/transactions/transactions-selectors";
import { getAllTransactions } from "redux/transactions/transaction-operations";
import { getLoading } from "../../redux/transactions/transactions-selectors";

export default function Table() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const transactions = useSelector(getTransactions);

  if (!transactions) {
    return null;
  }

  return isLoading ? (
    <LoaderComponent />
  ) : (
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
