import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../App";
import { Modal, Table } from "react-bootstrap";

const FavoritesList = (props) => {

  const { currentUser, token, BASE_URL } = useContext(
    LoginContext
  );

  console.log("FAVLIST currentUser > ", currentUser)
  const user = currentUser._id

  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const favorites = await fetch(BASE_URL + "/favorites");
      const parsedFavorites = await favorites.json();
      setFavorites(parsedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const userFavorites = favorites.filter(userFavorite => (userFavorite.creator._id === user))
  console.log(userFavorites)

  const deleteFavorite = async (id) => {
    console.log("FAVLIST > deleteFavorite id > ", id)
    console.log("FAVLIST > deleteFavorites token > ", token)
    try {
      const deletedFavorite = await fetch(
        BASE_URL + "/favorites/" + id,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      console.log("FAVLIST > deleteFavorite deletedFavorite > ", deletedFavorite)
      const parsedFavorite = await deletedFavorite.json();
      console.log("FAVLIST > deleteFavorite parsedFavorite > ", parsedFavorite);
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
        </Table>
      </Modal.Body>
    </div>
  );
};

export default FavoritesList;
