import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import s from "./TransactionTable.module.css";

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

function createData(name, type, category, comment, amount, balance) {
  return { name, type, category, comment, amount, balance };
}

const column = [
  createData("04.01.19", "-", "Разное", "Подарок жене", 300.0, 6900.0),
  createData("04.01.20", "-", "Разное", "Подарок жене", 300.0, 6900.0),
];

export default function TransactionTableMobile({ transactions }) {
  // console.log(transactions);
  return (
    <ThemeProvider theme={theme}>
      {column.map((col) => (
        <Table
          key={col.name}
          sx={{
            maxWidth: 480,
            mb: 10,
            borderCollapse: "initial",
            borderLeft: "5px solid #FF6596",
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
                // "& .MuiTableCell-root:first-of-type": {
                //   borderTopLeftRadius: "10px",
                // },
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
                // "& .MuiTableCell-root:first-of-type": {
                //   borderBottomLeftRadius: "10px",
                // },
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
