import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../../features/cartSlice";

import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  const navigate = useNavigate();
  const quantity = useSelector(selectCartTotalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img
          className="name"
          src="https://i.imgur.com/DOKvX6r.png"
          alt="Tinda-han"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="icon"
          src="https://i.imgur.com/jLXVuor.png"
          alt="Tinda-han"
          onClick={() => {
            navigate("/");
          }}
        />
        <Badge badgeContent={quantity} color="primary">
          <Button
            variant="contained"
            startIcon={<ShoppingCartOutlinedIcon />}
            disableElevation
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Button>
        </Badge>
      </div>
    </nav>
  );
}

export default Navbar;
