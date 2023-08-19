import React from 'react'
import { Link } from 'react-router-dom'
import './Poster.css'
export default function Offer() {
  return (
   <>
    <div className='offerPoster'>
      <img src='https://images.indianexpress.com/2020/09/Untitled-design-57-3.jpg' alt='' width={'100%'}height={'100%'}/>
      <center><Link to='/products'><button>Have a Look</button></Link>
      </center></div></>
  )
}
