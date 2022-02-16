import Media from "react-media";

import TransactionTableMobile from "./TransactionTableMobile";
import TransactionTable from "./TransactionTable";

export default function Table() {
  return (
    <Media query={{ minWidth: 768 }}>
      {(matches) =>
        matches ? <TransactionTable /> : <TransactionTableMobile />
      }
    </Media>
  );
}
