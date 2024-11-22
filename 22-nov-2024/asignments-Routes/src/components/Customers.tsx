import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, age: number, gender: string, city: string) {
  return { name, age, gender, city };
}

const rows = [
  createData("Aryan", 19, "M", "Pune"),
  createData("Bob", 23, "M", "Dehli"),
  createData("Builder", 25, "M", "Pune"),
  createData("Cupcake", 22, "F", "Dehradun"),
  createData("Gingerbread", 26, "M", "London"),
];

export default function Customers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age&nbsp;(g)</TableCell>
            <TableCell align="right">Gender&nbsp;(g)</TableCell>
            <TableCell align="right">City&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
