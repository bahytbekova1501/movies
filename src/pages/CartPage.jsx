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
import DeleteIcon from "@mui/icons-material/Delete";
export default function CardPage() {
  const { cart, plusCount, minusCount, deleteMoviesFromCart } =
    useCartContext();

  if (cart.movies.length < 1) {
    return <h1>корзина пустая </h1>;
  }
  return (
    <Box>
      <TableContainer
        style={{ backgroundColor: "black", color: "white" }}
        sx={{ maxWidth: "100%", position: "absolute", margin: "20px" }}
        component={Paper}
      >
        <Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "white" }}>Наименование</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Постер
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Категория
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Прайс
                </TableCell>
                {/* <TableCell style={{ color: "white" }} align="right">
                Cумма
              </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.movies.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {item.name_russian}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    <img width={50} src={item.poster} alt="" />
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.type}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.price}
                  </TableCell>
                  {/* <TableCell style={{ color: "white" }} align="right">
                  {item.subPrice?.toFixed(2)}
                </TableCell> */}
                  <TableCell>
                    {/* <Button onClick={() => plusCount(item.id)}>+</Button> */}
                    {/* <Typography
                    style={{ color: "white" }}
                    component="span"
                    variant="h6"
                  >
                    {item.count}
                  </Typography> */}
                    <Button
                      onClick={() => {
                        if (item.count <= 1) {
                          deleteMoviesFromCart(item.id);
                        } else {
                          minusCount(item.id);
                        }
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h4">
              Total ptice:{cart.totalPrice?.toFixed(2)}$
            </Typography>
            <Button
              style={{
                backgroundColor: "var(--red-color)",
                marginRight: "100px",
              }}
              component={Link}
              to="/success"
              variant="contained"
            >
              Купить
            </Button>
          </Box>
        </Box>
      </TableContainer>
    </Box>
  );
}
