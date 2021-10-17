import "./App.css";
import React, { useState } from "react";
import { Modal, Stack } from "react-bootstrap";
import { getUserToken, setUserToken, clearUserToken } from "./utils/authToken";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
// import Results from './components/Results'
// import Nav from "./components/Nav";
import FavoritesList from "./components/FavoritesList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

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
      console.log("APP parsedUser register > ", parsedUser);
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
      const newUser = await fetch(BASE_URL + "/auth/login", configs);
      const parsedUser = await newUser.json();
      console.log("APP parsedUser login > ", parsedUser);
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

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showFavorites, setShowFavorites] = useState(false);
  const handleCloseFavorites = () => setShowFavorites(false);
  const handleShowFavorites = () => setShowFavorites(true);

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
      <Stack direction="horizontal" gap={3}>
        <div><button className="button" onClick={handleShowLogin}>
          Login
        </button></div>

        <div><button className="button" onClick={handleShowRegister}>
          Sign up
        </button></div>

        <div><button className="button" onClick={handleShowFavorites}>
          View Favorites
        </button></div>
      </Stack>

      {/* Modals */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <LoginForm onHide={handleCloseLogin}/>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <RegisterForm registerUser={registerUser} onHide={handleCloseRegister} />
      </Modal>

      <Modal show={showFavorites} onHide={handleCloseFavorites}>
        <FavoritesList onHide={handleCloseFavorites}/>
      </Modal>



          <Intro />
          <Filters />
        </main>
        <Footer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
