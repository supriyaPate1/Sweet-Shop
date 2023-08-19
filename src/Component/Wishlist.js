import React from 'react'
import product from "./Data";
import {useContext} from "react";
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { myContext } from "../App";
import './wishlist.css'
export default function Wishlist(props) {
  const user = useContext(myContext); 
  var [temp,setTemp]=useState(0)

//function to empty wishlist
  const emptyWish=()=>{
    if(window.confirm("Do you really want to empty cart?")===true){
    product.forEach((val)=>{
     val.wishVal=0;
     setTemp(++temp)
     user.countWish(0)
    })}
    }
   
// function when clicked on add to cart btn
    const AddToCart = (event) => {
    var count = props.quan;
    var cnt=user.wish;
    var click = event.target.name;
    if(product[click].quantity === 0) {
      product[click].quantity++;
      product[click].totalPrice = product[click].price;
      props.setQuan(++count);
    } 
    product[click].wishVal=0; 
    --cnt;
    user.countWish(cnt) 
  };

  //when clicked on remove
  const deleteWish=(event)=>{
    var cnt=user.wish;
    var click=event.target.name; 
    product[click].wishVal=0; 
    product[click].totalPrice=0;
      --cnt;
      setTemp(++temp)
      user.countWish(cnt) 
   }

  return (
    <>
      <div className='dispWish'>
        <div className='emptyWish'><button onClick={emptyWish}>Empty Wishlist</button></div>
        {
          (user.wish>0?<div className='cardsDisp'>{ product.map((val,i)=>{
            if(val.wishVal>0){     
            return<div className='WishlistDis' key={i}>
                <div className='DispImg'>
                    <img src={val.imageCloth} alt='cover'/>
                </div>
                <div className='sweetDetail'>
                    <h4 className='details'>{val.name}</h4>
                    <p className='details'>Price: Rs. {val.price}</p>
                    <p className='details'>Contains: {val.category}</p>
                    <p className='details'>Quantity: {val.weight}</p>
                </div>
                <div className='btns'>
                  <br></br>
                  <div><button name={i} onClick={AddToCart}>Move To Cart</button></div>
                  <br></br>
                  <div><button name={i} onClick={deleteWish}>Remove</button></div>
                </div>
            </div>
              }})}</div>:<div className='ShopNow'><img src='https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/add-to-wishlist-icon.png' alt='cover'/><center><Link to='/products'><button>Shop Now</button></Link></center></div>)
        }
      </div> 
   <Outlet/>
   </>
  )
}
