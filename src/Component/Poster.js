import React from 'react'
import './Poster.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
export default function Poster() {
  return (
    <>
      <div className='mainPoster'>
        <div className='PosterCont'>
           <div className='text'>
              <h1>Welcome To Your Sweet Store</h1>
              <h2>Bring your home some Sweet Delight</h2>
             <Link to='/login'><button>Login</button></Link>
              <h4>Do not have an account? Create Now</h4>
             <Link to='/signup'><button>Create Account</button></Link>
           </div>
        </div>
        <div className='arrow'><FileDownloadIcon  sx={{ fontSize: '60px' }}/></div>
    </div>
    </>
  
  )
}
