import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom";
import {useState, createContext} from "react";
import Home from './Component/Home'
import Products from './Component/Products'
import Cart from './Component/Cart';
import Wishlist from './Component/Wishlist';
import Login from './Login';
import Signup from './Signup';
import Proceed from './Component/Proceed';
import {Alert, Snackbar} from "@mui/material";
export const myContext = createContext();

function App() {
  //defining states 
  const [snack, setSnack] = useState({
    open: false,
    msg: "",
    severity: "info",
  });
  const [quan,setQuan]=useState(0); 
  const [statusSign,setStatusSign]=useState("")
  const[proCount,setProCount]=useState(0);
  var [wish,countWish]=useState(0);
  var [GP,setGp]=useState(0)
  var [category,searchCategory]=useState("")
  var [price,filterPrice]=useState('-1')
  var [size,searchSize]=useState("")
  var [search,getSearch]=useState("")
  const [logedin, setLogin] = useState(false);
  const [logOut, setlogOut] = useState(false);
  const [User, setUser] = useState('');
  var [status, setStatus] = useState("");
  return (
   <>
   <myContext.Provider value={{GP,setGp,status, setStatus,snack, setSnack,User, setUser,logOut,setlogOut,logedin, setLogin,statusSign,setStatusSign,category:category,searchCategory:searchCategory,size:size,searchSize:searchSize,search:search,getSearch:getSearch,price:price,filterPrice:filterPrice,wish:wish,countWish:countWish,
    }}>
   <Routes>
      <Route  element={<Navbar  quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} />}>
      <Route path="/" element={<Home quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} 
        proCount={proCount} setProCount={setProCount} />} /> 
         <Route path="/products" element={<Products quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} 
        proCount={proCount} setProCount={setProCount} />} />             
      <Route path="/cart" element={<Cart quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} 
        proCount={proCount} setProCount={setProCount}/>} />
         <Route path="/wishlist" element={<Wishlist quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} 
        proCount={proCount} setProCount={setProCount}/>} />
         <Route path="/signup" element={<Signup/>} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/proceed" element={<Proceed />} />
      </Route>  
    </Routes> 
   </myContext.Provider>
   <Snackbar
        open={snack.open}
        onClose={() => {
          setSnack({ open: false, msg: "", severity: "info" });
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <Alert
          variant="filled"
          onClose={() => {
            setSnack({ open: false, msg: "", severity: "info" });
          }}
          severity={snack.severity}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
   </>
  );
}
export default App;
