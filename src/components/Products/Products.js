import React, { useState, useEffect } from "react";
import "./Products.css";
import Papa from "papaparse";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import productsCSV from "../../products.csv";

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

function Products() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [data, setData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(productsCSV, {
      header: true,
      download: true,
      complete: (results) => {
        setData(results.data);
        setFirstLoad(true);
      },
    });
  }, [firstLoad]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section id="products" className="products">
      <div className="products__container">
        <h1>Browse our products</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className="products__container--head">
                <TableRow>
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
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
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
                            startIcon={<AddShoppingCartIcon />}
                            variant="outlined"
                            disableElevation
                            onClick={() => {
                              handleAddToCart(row);
                            }}
                          >
                            Add
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
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </section>
  );
}

export default Products;
