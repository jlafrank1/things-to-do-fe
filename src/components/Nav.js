import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import FavoritesList from "./FavoritesList";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { LoginContext } from "../App";
// import { getUserToken, setUserToken, clearUserToken } from "./utils/authToken";

const Nav = (props) => {
  const { registerUser, BASE_URL } = useContext(
    LoginContext
  );
  console.log("NAV Base_URL > ", BASE_URL)
  // console.log("NAV current user > ", currentUser);
  // console.log("NAV current user email > ", currentUser.email)
  // console.log("NAV current user id > ", currentUser._id)
  // console.log("NAV isAuthenticated > ", isAuthenticated);

  // log out functionality

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
    <>
      <button className="button" onClick={handleShowLogin}>
        Login
      </button>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <LoginForm onHide={handleCloseLogin}/>
      </Modal>

      <button className="button" onClick={handleShowRegister}>
        Sign up
      </button>
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <RegisterForm registerUser={registerUser} onHide={handleCloseRegister} />
      </Modal>

      <button className="button" onClick={handleShowFavorites}>
        View Favorites
      </button>
      <Modal show={showFavorites} onHide={handleCloseFavorites}>
        <FavoritesList onHide={handleCloseFavorites}/>
      </Modal>
    </>
  );
};

export default Nav;
