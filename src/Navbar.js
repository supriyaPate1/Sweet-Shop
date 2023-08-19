import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./navbar.css";
import "./Component/Poster";
import { Link } from "react-router-dom";
import { myContext } from "./App";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Drawer } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar(props) {
  const {
    logedin,
    setLogin,
    setSnack,
    User,
    searchCategory,
    filterPrice,
    getSearch,
    wish,
  } = useContext(myContext);
  const [open, setOpen] = useState(false);

  // function for enter key
  const EnterKey = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  //function to filter by category of sweets
  const byCategory = (event) => {
    var catVal = event.target.value;
    searchCategory(catVal);
  };

  //function to filter by price
  const byPrice = (event) => {
    var priceVal = event.target.value;
    filterPrice(priceVal);
  };

  //function for manual search in search bar
  const search = () => {
    var inpVal = document.getElementById("serachVal").value.toUpperCase();
    getSearch(inpVal);
  };

  //func to switch themes
  var chooseTheme = () => {
    var element = document.body;
    element.classList.toggle("darkmode");
  };

  return (
    <>
      <div className="helpline">
        <div className="logohead">
          <h2>Sweeters'</h2>
        </div>
        <div className="helpnum">
          <p>
            <EmailIcon sx={{ color: "red" }} />
            supriya@gmail.com&emsp;
            <WhatsAppIcon sx={{ color: "green" }} />
            8088001122&emsp;&emsp;Helpline-
            <CallIcon sx={{ color: "blue" }} />
            +91-9900001111
          </p>
        </div>
      </div>
      <div className="Nav">
        <div className="HomePro">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="searchBar">
          <div className="Sbar">
            <input
              id="serachVal"
              placeholder="search for items"
              onKeyPress={EnterKey}
            />
            <button onClick={search}>Search</button>
          </div>
        </div>
        <div className="cartWish">
          <div>
            <Link to="/cart">
              <h4>Cart{props.quan}</h4>
            </Link>
          </div>
          <div>
            <Link to="/wishlist">
              <FavoriteBorderOutlinedIcon id="wish" />
              {wish}
            </Link>
          </div>
        </div>

        <div className="otherlink2">
          <div>
            <select id="categ" onChange={byCategory}>
              <option value="">All Sweets</option>
              <option>Sugarfree</option>
            </select>
          </div>
          <div>
            <select id="price" onChange={byPrice}>
              <option value={-1}>Filter By Price</option>
              <option value={0}>Low to High</option>
              <option value={1}>High to Low</option>
            </select>
          </div>
          {!logedin && (
            <div>
              <Link to="/login" id="loginLink">
                Login
              </Link>
            </div>
          )}
          {!logedin && (
            <div>
              <Link to="/signup" id="signUpLink">
                Signup
              </Link>
            </div>
          )}
          {logedin && <div id="name">Welcome {User.userName}</div>}
          {logedin && (
            <div id="logoutLink">
              <Link
                to="/"
                onClick={() => {
                  setLogin(false);
                  setSnack({
                    open: true,
                    msg: "Logout Successfully!.",
                    severity: "success",
                  });
                }}
              >
                Logout
              </Link>{" "}
            </div>
          )}
          <div className="modes">
            <LightModeIcon onClick={chooseTheme} />
            <DarkModeIcon onClick={chooseTheme} />
          </div>
        </div>
        <div id="otherlink2">
          <MenuIcon
            onClick={() => {
              setOpen(true);
            }}
            sx={{ fontSize: "40px", color: "black" }}
          />
        </div>
      </div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
        PaperProps={{
          sx: { width: "50%", backgroundColor: "  rgba(230, 224, 238)" },
        }}
      >
        <div className="paperNav">
        {!logedin && (
            <div>
              <Link to="/login" id="loginLink">
                Login
              </Link>
            </div>
          )}
          {!logedin && (
            <div>
              <Link to="/signup" id="signUpLink">
                Signup
              </Link>
            </div>
          )}
          {logedin && <div id="name">Welcome {User.userName}</div>}
          {logedin && (
            <div id="logoutLink">
              <Link
                to="/"
                onClick={() => {
                  setLogin(false);
                  setSnack({
                    open: true,
                    msg: "Logout Successfully!.",
                    severity: "success",
                  });
                }}
              >
                Logout
              </Link>{" "}
            </div>
          )}
          <div>
            <select id="categ" onChange={byCategory}>
              <option>All Sweets</option>
              <option>Sugarfree</option>
            </select>
          </div>
          <div>
            <select id="price" onChange={byPrice}>
              <option value={-1}>Filter By Price</option>
              <option value={0}>Low to High</option>
              <option value={1}>High to Low</option>
            </select>
          </div>
          <div>
            <LightModeIcon onClick={chooseTheme} />
            <DarkModeIcon onClick={chooseTheme} />
          </div>
          <div></div>
        </div>
      </Drawer>
      <Outlet />
    </>
  );
}
