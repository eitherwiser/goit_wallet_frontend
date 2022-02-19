import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { getTransactionCategories } from "../../redux/auth/auth-selectors";

import dateConverter from "../../services/dateConverter";
import createData from "../../services/createData";

// import s from "./TransactionTable.module.css";

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          tbody: {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

export default function TransactionTableMobile({ transactions }) {
  const transactionCategories = useSelector(getTransactionCategories);

  const column = transactions.map((trans) => {
    const isIncome = trans.isIncome ? "+" : "-";
    const fullDate = dateConverter(trans.date);

    const transactionName = transactionCategories.find(
      (el) => el.id === trans.categoryId
    );

    // console.log(transactionName.color);

    const arrCol = createData(
      fullDate,
      isIncome,
      transactionName.name,
      trans.comment,
      trans.amount,
      trans.balance
    );
    return arrCol;
  });

  return (
    <ThemeProvider theme={theme}>
      {column.map((col, idx) => (
        <Table
          key={idx}
          sx={{
            maxWidth: 480,
            mb: 10,
            borderCollapse: "initial",
            borderLeft: "5px solid #FF6596",
            // borderLeft: `5px solid ${transactionName.color}`,
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <TableBody>
            <TableRow
              sx={{
                "& .MuiTableCell-root:last-of-type": {
                  borderTopRightRadius: "10px",
                },
              }}
            >
              <TableCell align="left">Дата</TableCell>
              <TableCell align="right">{col.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Тип</TableCell>
              <TableCell align="right">{col.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Категория</TableCell>
              <TableCell align="right">{col.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Коментарий</TableCell>
              <TableCell align="right">{col.comment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Сумма</TableCell>
              <TableCell align="right">{col.amount}</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "& .MuiTableCell-root:last-of-type": {
                  borderBottomRightRadius: "10px",
                },
              }}
            >
              <TableCell align="left">Баланс</TableCell>
              <TableCell align="right">{col.balance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </ThemeProvider>
  );
}
