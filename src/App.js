import "./App.css";
import React, { useState } from "react";
import { getUserToken, setUserToken, clearUserToken } from "./utils/authToken";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
// import Results from './components/Results'
import Nav from "./components/Nav";

export const LoginContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newUser = await fetch(
        "http://localhost:9000/auth/register",
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

  return (
    <div className="background">
      <LoginContext.Provider
        value={{
          currentUser: currentUser,
          isAuthenticated: isAuthenticated,
          registerUser: registerUser,
          token: getUserToken(),
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
