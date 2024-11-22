import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { CustomerModel, customerService } from "../service/customerService";
import { Button, ButtonGroup } from "@mui/material";
import { enqueueSnackbar } from "notistack";

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

export default function PaginatedCustomers() {
  const [customerList, setCustomerList] = useState<CustomerModel[]>([]);
  const [ind, setInd] = useState<number>(1);
  useEffect(() => {
    console.log(ind);
    fetchCustomerList(ind, 10);
  }, [ind]);

  const fetchCustomerList = (index: number, limit: number) => {
    customerService.getPaginatedCustomer(index, limit).then((res) => {
      if (res.length > 0) {
        setCustomerList(res);
      } else {
        enqueueSnackbar("End Of Data", { variant: "warning" });
        setInd(ind - 1);
      }
    });
  };
  const handleNext = () => {
    setInd(ind + 1);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Id&nbsp;</TableCell>
              <TableCell align="right">Year&nbsp;</TableCell>
              <TableCell align="right">Contact Number&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>

                <TableCell align="right">{row.CustomerId}</TableCell>
                <TableCell align="right">{row.Year}</TableCell>
                <TableCell align="right">{row.ContactNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button onClick={() => (ind - 1 > 0 ? setInd(ind - 1) : setInd(ind))}>
          Prev
        </Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </ButtonGroup>
    </div>
  );
}
