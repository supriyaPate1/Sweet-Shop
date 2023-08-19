import product from "./Data";
import "./home.css";
import {useContext} from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "./cart.css";
import Poster from "./Poster";
import { myContext } from "../App";
import About from "../About";
import Offer from "./Offer";

export default function Home(props) {
  const user = useContext(myContext); 
  
  // function when clicked on add to cart btn
  const AddToCart = (event) => {
    var count = props.quan;
    var click = event.target.name;
    let obj = product.find(a=> a.id === +click)
    if (obj.quantity === 0) {
      obj.quantity++;
      obj.totalPrice = obj.price;
      props.setQuan(++count);
    } else {
      obj.quantity++;
      obj.totalPrice =
      obj.price * obj.quantity;
    }
  };

 // function when clicked on wishlist btn
 const AddToWish = (event) => {
  var count = user.wish;
  var click = event.target.id;
  let obj = product.find(a=> a.id === +click)
  if (obj.wishVal === 0) {
    obj.wishVal++;
    obj.totalPrice = obj.price;
    user.countWish(++count);
  } else {
    obj.wishVal++;
    obj.totalPrice =
    obj.price * obj.wishVal;
  }
};

//func to move to top of the page
const moveTop=()=>{
  window.scrollTo(0, 0);
}
  return (
    <>
    <Offer/>
      {user.logedin===false?<Poster/>:""}
      {user.logOut===true?<Poster/>:""}
       <div className="reviews">
        <div className="ContentREV">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/businessman-going-to-office-bicycle-man-enjoying-music-using-earphones-commuting-biking-listening-137836287.jpg"
              alt="card cap3"
            />
            <p>
              I am a happy customer of this site. Thank you for always providing me what I need.
            </p>
            <h6>Sharad Verma, Gomtinagar</h6>
          </div>
          <div>
            <img
              src="https://i0.wp.com/www.sarita.in/wp-content/uploads/2018/02/beautiful-woman-at-the-office-1.jpg?resize=825%2C510&ssl=1"
              alt="card cap2"
            />
            <p>
              This site gives one of the best Sweet Dishes. Thanks
            </p>
            <h6>Shivanshi Patel, Indra nagar</h6>
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/businessman-going-to-office-bicycle-man-enjoying-music-using-earphones-commuting-biking-listening-137836287.jpg"
              alt="card cap3"
            />
            <p>
              Hassle free shopping and fast deliveries always. Thank you.
            </p>
            <h6>Neeraj Verma, Nishatganj</h6>
          </div>
        </div>
      </div>
      <div className="main">
        {/* Displaying products*/}
        {
           product.filter((val)=>{ return  val.SweetName.toUpperCase().indexOf(user.search)>-1 && val.category.indexOf(user.category)>-1}).sort((a,b)=>{return (user.price==='-1')?'':(user.price==='0')? a.price-b.price:b.price-a.price}).map((val, i) => {
              return (
                <div className="card" key={i}>
                   <div className="imageDiv">
                    <img
                      className="imageFood"
                      src={val.imageCloth}
                      alt="cloth cap"
                    />
                  </div>
                  <div className="textLogo">
                    <h4 name={i}>{val.SweetName}</h4>
                    <h5 name={i}>Weight: {val.weight} ({val.category})</h5>
                    <p>Rs. {val.price}.00</p>
                    <button name={val.id} onClick={AddToCart}>
                      Add to cart
                    </button>
                  </div>
                  <div className="wishbtn" >
                    <button id={val.id} onClick={AddToWish}>
                    <i class="fa fa-heart" aria-hidden="true"id={val.id}  onClick={AddToWish} style={{color:(val.wishVal>1)?"red":""}}></i>
                    </button>                   
                  </div>
                </div>
              );  
          })}
      </div>
      <div className="moveTop"><KeyboardDoubleArrowUpIcon onClick={moveTop}/></div>
      <About/>
    </>
  );
}
