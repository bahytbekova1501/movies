import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CartContext, { useCartContext } from "../contexts/CartContext";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function CardPage() {
  const { cart, plusCount, minusCount, deleteMoviesFromCart } =
    useCartContext();

  if (cart.movies.length < 1) {
    return <h1>корзина пустая </h1>;
  }
  return (
    <Box style={{ background: "white" }}>
      <TableContainer sx={{ padding: "10px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Наименование</TableCell>
              <TableCell align="right">Постер</TableCell>
              <TableCell align="right">Категория</TableCell>
              <TableCell align="right">Прайс</TableCell>
              <TableCell align="right"> Общая сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.movies.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name_russian}
                </TableCell>
                <TableCell align="right">
                  <img width={50} src={item.poster} alt="" />
                </TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.subPrice?.toFixed(2)}</TableCell>
                <TableCell>
                  <Button onClick={() => plusCount(item.id)}>+</Button>
                  <Typography component="span" variant="h6">
                    {item.count}
                  </Typography>
                  <Button
                    onClick={() => {
                      if (item.count <= 1) {
                        deleteMoviesFromCart(item.id);
                      } else {
                        minusCount(item.id);
                      }
                    }}
                  >
                    -
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h4">
            Total ptice:{cart.totalPrice?.toFixed(2)}$
          </Typography>
          <Button component={Link} to="/success" variant="contained">
            Buy
          </Button>
        </Box>
      </TableContainer>
    </Box>
  );
}
