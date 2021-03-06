import "./App.css";
import React, { useState, useEffect } from "react";
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

require("dotenv").config();

const BASE_URL = process.env.REACT_APP_PRODUCTION_URL;

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
  console.log("APP currentUser > ", currentUser);

  const registerUser = async (data) => {
    console.log("APP Base_URL > ", BASE_URL);
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newUser = await fetch(BASE_URL + "/auth/register", configs);
      const parsedUser = await newUser.json();
      // console.log("APP parsedUser register > ", parsedUser);
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
      // console.log("APP parsedUser login > ", parsedUser);
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

  const logoutUser = async (data) => {
    console.log("APP logout route");
    // useState to set currentUser and isAuthenticated to zero
    // and clearUserToken to clear token
    setCurrentUser("");
    setIsAuthenticated("");
    clearUserToken("");
    console.log("APP logoutUser new currentuser > ", currentUser);
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

  useEffect(() => {
    setCurrentUser();
  }, []);

  return (
    <div className="background">
      <LoginContext.Provider
        value={{
          currentUser: currentUser,
          isAuthenticated: isAuthenticated,
          registerUser: registerUser,
          loginUser: loginUser,
          token: getUserToken(),
          BASE_URL,
        }}
      >
        <main>
          <div className="right">
            <Stack direction="horizontal">
              {!currentUser ? (
                <>
                  <div>
                    <button className="button" onClick={handleShowLogin}>
                      Login
                    </button>
                  </div>

                  <div>
                    <button className="button" onClick={handleShowRegister}>
                      Sign up
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <button className="button" onClick={logoutUser}>
                      Log out
                    </button>
                  </div>
                  <div>
                    <button className="button" onClick={handleShowFavorites}>
                      View Favorites
                    </button>
                  </div>
                  <div className="ms-auto">
                    <h4>Welcome! You're logged in.</h4>
                  </div>
                </>
              )}
            </Stack>
          </div>

          {/* Modals */}
          <Modal show={showLogin} onHide={handleCloseLogin}>
            <LoginForm onHide={handleCloseLogin} />
          </Modal>

          <Modal show={showRegister} onHide={handleCloseRegister}>
            <RegisterForm
              registerUser={registerUser}
              onHide={handleCloseRegister}
            />
          </Modal>

          <Modal show={showFavorites} onHide={handleCloseFavorites}>
            <FavoritesList onHide={handleCloseFavorites} />
          </Modal>
          <div className="center">
            <Intro />
            <Filters />
          </div>
        </main>
        <div className="center">
          <Footer />
        </div>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
