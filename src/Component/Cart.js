import React, { useContext } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import product from "./Data";
import { myContext } from "../App";

const Cart = (props) => {
  const user = useContext(myContext); 
  var [temp, setTemp] = useState(0);
  var [count3, setCount3] = useState(0);

  //function when clicked on empty cart
  const emptyCart = () => {
    if (window.confirm("Do you really want to empty cart?") === true) {
      product.forEach((val) => {
        val.quantity = 0;
        setTemp(++temp);
        props.setQuan(0);
      });
    }
  };

  //function when clicked on delete btn
  const deleteRow = (event) => {
    if (window.confirm("Do you really want to delete this item?") === true) {
      var cnt = props.quan;
      var click = event.target.name;
      product[click].quantity = 0;
      product[click].totalPrice = 0;
      --cnt;
      setTemp(++temp);
      props.setQuan(cnt);
      grandPrice()
    }
  };

  //function when clicked on + btn
  const PlusPro = (event) => {
    var count1 = props.quan;
    var click = event.target.name;
    let obj = product.find(a=> a.id === +click)
   obj.quantity++;
   obj.totalPrice += obj.price;
    props.setProCount(++count1);
    setTemp(++temp);
    grandPrice()
  };

  //function when clicked on - btn
  const minusPro = (event) => {
    var count1 = props.quan;
    var cnt = props.quan;
    var click = event.target.name;
    let obj = product.find(a=> a.id === +click)
    if (obj.quantity > 1) {
      obj.quantity--;
      obj.totalPrice -= obj.price;
      props.setProCount(--count1);
      setTemp(--temp);
      if (obj.quantity < 1) --cnt;
      props.setQuan(cnt);
      grandPrice()
    }
  };

  //function to calculate total cart value
  const grandPrice = () => {
    var Gval = 0;
    var cnt = props.quan;
    product.map((val) => {
      if (cnt > 0) {
        Gval += val.totalPrice;
      }
    });
    user.setGp(Gval);
    var gpval = document.getElementById("gp").value;
    if (gpval !== "") {
      user.setStatus("Your total cart value is: Rs. ");
    }
    setCount3(+count3 + 1);
  };

  return (
    <>
      <div className="cartmain">
        <div className="emptyCart">
          <button onClick={emptyCart}>Empty Cart</button>
        </div>
        {props.quan > 0 ? (
          <div className="sweetsDisp">
            {product
              .filter((val) => {
                return val.quantity > 0;
              })
              .map((val, i) => {
                return (
                  <div className="cartDisplay" key={i}>
                    <div className="prodimg">
                      <img src={val.imageCloth} alt='cover' />
                    </div>
                    <div className="prod_details">
                      <h2>
                        {val.SweetName}
                      </h2>
                      <p>Price: Rs. {val.price}</p>
                      <p>Contains: {val.category}</p>
                      <p>Quantity: {val.weight}</p>
                    </div>
                    <div className="quantitymanage">
                     <div> <button id="minus" name={val.id} onClick={minusPro}>
                        -
                      </button>
                      {val.quantity}
                      <button id="plus" name={val.id} onClick={PlusPro}>
                        +
                      </button></div><br></br>
                      <div className="toPrice">Total Price: {val.totalPrice}</div>
                    </div>
                    <div className="removebtn">
                      <button
                        type="button"
                        id="delPro"
                        className="delete"
                        name={i}
                        onClick={deleteRow}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            <center>
              <h2 id="gp">
                {user.status}
                {user.GP}
              </h2>
             {user.logedin===true? <Link to="/proceed">
                <button id="chkoutBtn">Proceed to Checkout</button>
              </Link>: <Link to="/login">
                <button id="chkoutBtn">Proceed to Checkout</button>
              </Link>}
            </center>
          </div>
        ) : (
          <div className="emptyCartImg">
            <img
              src="https://static.thenounproject.com/png/538404-200.png"
              alt="cover"/>
            <center>
              <Link to="/products">
                <button>Shop Now</button>
              </Link>
            </center>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
