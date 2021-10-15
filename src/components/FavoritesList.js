import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../App";
import { Modal, Table } from "react-bootstrap";

const FavoritesList = (props) => {
  // needs to fetch all Favorites items from the database
  // not sure if need to update state yet
  // i think state will update when component mounts

  const { currentUser } = useContext(
    LoginContext
  );
  console.log("FAVLIST currentUser > ", currentUser)
  const user = currentUser._id

  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const favorites = await fetch("http://localhost:9000/favorites");
      const parsedFavorites = await favorites.json();
      console.log("FAVLIST parsedFavs > ", parsedFavorites);
      console.log("FAVLIST parsedFavs creator > ", parsedFavorites[0].creator._id)
      setFavorites(parsedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserFavorites = () => {
    console.log("FAVLIST > getUserFavorites > user id > ", favorites[0].creator._id)
    // for all items in favorites array
    // if favorites[i].creator._id === user
    // map it out
  }

  const userFavorites = favorites.filter(userFavorite => (userFavorite.creator._id === user))
  console.log(userFavorites)

  const deleteFavorite = async (id) => {
    try {
      const deletedFavorite = await fetch(
        "http://localhost:9000/favorites/" + id,
        {
          method: "DELETE",
        }
      );
      const parsedFavorite = await deletedFavorite.json();
      // console.log(parsedFavorite);
      const updatedFavorites = favorites.filter(
        (favorite) => favorite._id !== parsedFavorite._id
      );
      setFavorites(updatedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const favoritesRow = userFavorites.map((favorite) => (
    <tr>
      <td>{favorite.category}</td>
      <td>{favorite.activity}</td>
      <td onClick={() => deleteFavorite(favorite._id)}>
        <button>X</button>
      </td>
    </tr>
  ));

  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Table>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Activity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{favoritesRow}</tbody>
          </table>
          <button onClick={getUserFavorites}>get user fav</button>
        </Table>
      </Modal.Body>
    </div>
  );
};

export default FavoritesList;
