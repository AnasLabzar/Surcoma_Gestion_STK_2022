import React, { useEffect, useState } from "react";
import Axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  const [listFournisseur, setlistFournisseur] = useState([]);
  console.log(listFournisseur);

  useEffect(() => {
    Axios.get("http://localhost:8080/Surcoma/Fournisseur/get").then((response) => {
      setlistFournisseur(response.data);
      // console.log(response);
    });
  }, []);


  return (
    <TableContainer component={Paper} className="px-10">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="text-center">
            <TableCell>Username</TableCell>
            <TableCell align="right">Supplier Type</TableCell>
            <TableCell align="right">Adresse</TableCell>
            <TableCell align="right">Mail</TableCell>
            <TableCell align="right">Tel (+212)</TableCell>
            <TableCell align="right">Fax (+212)</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listFournisseur.map((val, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.Username}
              </TableCell>
              <TableCell align="right">{val.Supplier_Type}</TableCell>
              <TableCell align="right">{val.Adresse}</TableCell>
              <TableCell align="right">{val.Mail}</TableCell>
              <TableCell align="right">{val.Tel}</TableCell>
              <TableCell align="right">{val.Fax}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
