import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2d962d',
    color: theme.palette.common.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(period, total_signals, profit, loss, total_profit) {
  total_profit = profit - loss;
  return { period, total_signals, profit, loss, total_profit };
}

const rows = [
  createData('June', 159, 12242, 5045),
  createData('May', 145, 14201, 3425),
  createData('April', 132, 11202, 3120),
  createData('March', 163, 15230, 6125),
  createData('February', 152, 13420, 7521),
  createData('January', 214, 17290, 7321),
];

export default function CustomizedTables() {
  return (
    <div className="Table">
      <h2>Previous Results</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Period</StyledTableCell>
              <StyledTableCell align="center">Total Signals</StyledTableCell>
              <StyledTableCell align="center">Positive Pips</StyledTableCell>
              <StyledTableCell align="center">Negative Pips</StyledTableCell>
              <StyledTableCell align="center">Profit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.period}>
                <StyledTableCell component="th" scope="row">
                  {row.period}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.total_signals}
                </StyledTableCell>
                <StyledTableCell align="center">{row.profit}</StyledTableCell>
                <StyledTableCell align="center">-{row.loss}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={row.total_profit > 0 && { color: 'var(--green)' }}
                >
                  {row.total_profit}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
