import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { getTransactionCategories } from "../../redux/auth/auth-selectors";

import NoTransactions from "../NoTransactions/NoTransactions";

import dateConverter from "../../services/dateConverter";
import createData from "../../services/createData";

import s from "./TransactionTable.module.css";

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          table: {
            backgroundColor: "inherit",
          },
          thead: {
            backgroundColor: "#fff",
            th: { borderBottom: "none" },
          },
        },
      },
    },
  },
});

export default function TransactionTable({ transactions }) {
  const transactionCategories = useSelector(getTransactionCategories);

  const rows = transactions.map((trans) => {
    const isIncome = trans.isIncome ? "+" : "-";
    const fullDate = dateConverter(trans.date);

    const transactionName = transactionCategories.find(
      (el) => el.id === trans.categoryId
    );

    const arrRow = createData(
      fullDate,
      isIncome,
      transactionName.name,
      trans.comment,
      trans.amount,
      trans.balance
    );
    return arrRow;
  });

  if (rows[0] === undefined) {
    return (
      <div className={s.tableWrapper}>
        <NoTransactions />
      </div>
    );
  }

  return (
    <div className={s.tableWrapper}>
      <div className={s.table}>
        <ThemeProvider theme={theme}>
          <Table aria-label="transacti table" sx={{ position: "relative" }}>
            <TableHead
              sx={{
                position: "sticky",
                top: "0",
                "& .MuiTableCell-root:first-of-type": {
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                },
                "& .MuiTableCell-root:last-of-type": {
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                },
              }}
            >
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell align="center">Тип</TableCell>
                <TableCell align="center">Категория</TableCell>
                <TableCell align="center">Коментарий</TableCell>
                <TableCell align="center">Сумма</TableCell>
                <TableCell align="center">Баланс</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.comment}</TableCell>
                  <TableCell
                    sx={{
                      color: row.type === "+" ? "#24CCA7" : "#FF6596",
                      fontWeight: 700,
                    }}
                    align="center"
                  >
                    {row.amount.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">{row.balance.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ThemeProvider>
      </div>
    </div>
  );
}
