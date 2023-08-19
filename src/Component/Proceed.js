import React from 'react'
import "./Poster.css"
import { Link } from "react-router-dom";
export default function Proceed() {
  return (
    <>
   <center>
     <div className='thanku'>
      <h1>Thank you for shopping with us :)</h1>     
    </div>
    <div className='shopMore'>
      <Link to="/"><button>Shop More</button></Link>
    </div>
   </center>
    </> 
  )
}
 