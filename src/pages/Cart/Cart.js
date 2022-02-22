import React, { useState } from "react";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartList,
  removeFromCart,
  selectCartTotalAmount,
} from "../../features/cartSlice";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const columns = [
  { id: "display_name", label: "Product Name", minWidth: 300 },
  { id: "brand", label: "Brand", minWidth: 170 },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
  },
  {
    id: "price",
    label: "Price (PHP)",
    minWidth: 170,
  },
];

function Cart() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const dispatch = useDispatch();
  const cart = useSelector(selectCartList);
  const total = useSelector(selectCartTotalAmount);

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="cart">
      <div className="cart__container">
        <h1>Your Cart</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className="products__container--head">
                <TableRow>
                  <TableCell key="quantity" style={{ minWidth: 50 }}>
                    Quantity
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell
                    key="actions"
                    align="right"
                    style={{ minWidth: 100 }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="products__container--body">
                {cart
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell key="quantity" align="center">
                          {row.cartQuantity}
                        </TableCell>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <TableCell key="actions" align="right">
                          <Button
                            startIcon={<DeleteOutlineIcon />}
                            variant="outlined"
                            disableElevation
                            onClick={() => {
                              handleRemoveCart(row);
                            }}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={cart.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <h2>
          <span>Total</span>
          <span className="amount">PHP {total.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
}

export default Cart;
