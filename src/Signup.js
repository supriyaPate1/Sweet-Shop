import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Login.css";
import { myContext } from "./App";
import userArr from "./userData.json";

export default function Signup() {
  const user = useContext(myContext);
  const navigate = useNavigate();
var arr=[];
  const signupfun = () => {
    var mail = document.getElementById("email").value;
    var passwrd = document.getElementById("pass").value;
    var Cpass = document.getElementById("Conpass").value;
    var nam_inp = document.getElementById("firstN").value;
    if (passwrd === Cpass && mail !== "" && passwrd !== "" && Cpass !== "") {
      arr = {
        id: userArr.length,
        userName:nam_inp,
        email:mail,
        password: passwrd,
      };
      userArr.splice(0, 0, arr); //pushing new blog at index 0
      user.setSnack({
          open: true,
          msg: "Account creation successful!.",
          severity: "success",
        });
      navigate("/");
    } else if (passwrd !== Cpass) {
      document.getElementById("pass").value = "";
      document.getElementById("Conpass").value = "";
      user.setConfP("");
      user.setPass("");
      user.setStatusSign("Password didn't match.");
    }
    console.log(userArr);
  };
  return (
    <>
      <div className="LoginDiv">
        <div className="login">
          <div className="cross">
            <Link to="/">
              <h2>&#10060;</h2>
            </Link>
          </div>
          <h1>Signup</h1>
          <h5>
            Please enter your{" "}
            <a id="internet" href="#">
              Internet Archieve
            </a>{" "}
            email and password to create your Sweet Account
          </h5>
          <form>
            <table className="loginTable">
              <thead>
                <tr>
                  <td>Enter your name</td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      type="text"
                      required
                      id="firstN"
                      placeholder="name"
                      minLength="2"
                      maxLength="20"
                      pattern="[A-Za-z]{1,32}"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Enter your Email</td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      placeholder="Email"
                      id="email"type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Create Password</td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      placeholder="Password"
                      id="pass" minLength="2"
                      maxLength="20"
                      pattern="[A-Za-z]{1,32}"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Repeat Password</td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      id="Conpass"
                      placeholder="Password"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" onClick={signupfun}>
                      Signup
                    </button>
                  </td>
                </tr>
                <tr>
                  <td id="member">
                    Member of our sweet store?{" "}
                    <Link to="/login">Login now</Link>
                  </td>
                </tr>
              </thead>
            </table>
          </form>
        </div>
        <Outlet />
      </div>
    </>
  );
}
