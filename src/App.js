import "./App.css";
import React, { useState } from "react";
import { getUserToken, setUserToken, clearUserToken } from "./utils/authToken";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
// import Results from './components/Results'
import Nav from "./components/Nav";

require('dotenv').config()

const BASE_URL = process.env.REACT_APP_PRODUCTION_URL

// let BASE_URL;
// if (process.env.NODE_ENV === "production") {
//   BASE_URL = process.env.REACT_APP_PRODUCTION_URL
// } else {
//   BASE_URL = process.env.REACT_APP_DEV_URL
// }


export const LoginContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (data) => {
    console.log("APP Base_URL > ", BASE_URL)
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newUser = await fetch(
        BASE_URL + "/auth/register",
        configs
      );
      const parsedUser = await newUser.json();
      console.log("APP parsedUser > ", parsedUser);
      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.user);
      setIsAuthenticated(parsedUser.isLoggedIn);

      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  };

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newUser = await fetch("http://localhost:9000/auth/login", configs);
      const parsedUser = await newUser.json();
      console.log("APP parsedUser > ", parsedUser);
      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.user);
      setIsAuthenticated(parsedUser.isLoggedIn);

      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="background">
      <LoginContext.Provider
        value={{
          currentUser: currentUser,
          isAuthenticated: isAuthenticated,
          registerUser: registerUser,
          loginUser: loginUser,
          token: getUserToken(),
          BASE_URL
        }}
      >
        <main>
          <Nav />
          <Intro />
          <Filters />
        </main>
        <Footer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
