import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import s from './TransactionTable.module.css';

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          table: {
            backgroundColor: 'inherit',
            // border: "1px solid green",
          },
          thead: {
            backgroundColor: '#fff',
            // borderRadius: "30px",
            border: '1px solid green',
          },
          tbody: {
            backgroundColor: 'inherit',
            // borderRadius: "30px",
            border: '1px solid green',
          },
          // th: {
          //   borderRadius: "30px",
          // },
        },
      },
    },
  },
});

function createData(name, type, category, comment, amount, balance) {
  return { name, type, category, comment, amount, balance };
}

const rows = [
  createData('04.01.19', '-', 'Разное', 'Подарок жене', 300.0, 6900.0),
  createData('04.01.20', '-', 'Разное', 'Подарок жене', 300.0, 6900.0),
];

export default function TransactionTable() {
  return (
    // <div className="s.container">
    <ThemeProvider theme={theme}>
      {/* <TableContainer component={Paper}> */}
      <Table aria-label="transacti table">
        <TableHead>
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
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </TableContainer> */}
    </ThemeProvider>
    // </div>
  );
}
