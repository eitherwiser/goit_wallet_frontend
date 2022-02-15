import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
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

function createData(name, type, category, comment, amount, balance) {
  return { name, type, category, comment, amount, balance };
}

const column = [
  createData("04.01.19", "-", "Разное", "Подарок жене", 300.0, 6900.0),
  createData("04.01.20", "-", "Разное", "Подарок жене", 300.0, 6900.0),
];

export default function TransactionTableMobile() {
  //   console.log(column);
  return (
    // <div className={s.table}>
    // <table>
    //   {column.map((col) => (
    //     <tbody key={col.name}>
    //       <tr>
    //         <th>Дата</th>
    //         <th>{col.name}</th>
    //       </tr>
    //       <tr>
    //         <th>Тип</th>
    //         <th>{col.type}</th>
    //       </tr>
    //       <tr>
    //         <th>Категория</th>
    //         <th>{col.category}</th>
    //       </tr>
    //       <tr>
    //         <th>Коментарий</th>
    //         <th>{col.comment}</th>
    //       </tr>
    //       <tr>
    //         <th>Сумма</th>
    //         <th>{col.amount}</th>
    //       </tr>
    //       <tr>
    //         <th>Баланс</th>
    //         <th>{col.balance}</th>
    //       </tr>
    //     </tbody>
    //   ))}
    // </table>
    //</div>
    <Table>
      {column.map((col) => (
        <TableBody key={col.name}>
          <TableRow>
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
          <TableRow>
            <TableCell align="left">Баланс</TableCell>
            <TableCell align="right">{col.balance}</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
}
