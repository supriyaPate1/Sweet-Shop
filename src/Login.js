import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Login.css";
import userArr from "./userData.json";
import { useContext } from "react";
import { myContext } from "./App";
export default function Login() {
  const { setLogin, setSnack, User, setUser } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="LoginDiv">
        <div className="login">
          <div className="cross">
            <Link to="/">
              <h2>&#10060;</h2>
            </Link>
          </div>
          <h1>Log In</h1>
          <h5>
            Please enter your email and password to access your sweet account
            Account
          </h5>
          <form>
            <table className="loginTable">
              <thead>
                <tr>
                  <td>
                    Email--<a href="#"> Forgot your email</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      placeholder="sup@gmail.com"
                      type="text"
                      id="email1"
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="tabInp"
                      placeholder="1234"
                      id="pass1"
                      minLength="2"
                      maxLength="10"
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      onClick={() => {
                        var emailIN = document.getElementById("email1").value;
                        var passIN = document.getElementById("pass1").value;
                        userArr.forEach((val) => {
                          if (
                            val.email === emailIN &&
                            val.password === passIN
                          ) {
                            setLogin(true);
                            setUser(val);
                            setSnack({
                              open: true,
                              msg: "Login successful!.",
                              severity: "success",
                            });
                            navigate("/");
                          } else {
                            document.getElementById("email1").value = "";
                            document.getElementById("pass1").value = "";
                          }
                        });
                      }}
                      type="button"
                    >
                      Log in
                    </button>
                  </td>
                </tr>
                <tr>
                  <td id="member">
                    Not a member of our sweet store?{" "}
                    <Link to="/signup">Sign up now</Link>
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
