import React, { useState, useEffect } from "react";
import { Modal, Table } from "react-bootstrap";

const FavoritesList = (props) => {
  // needs to fetch all Favorites items from the database
  // not sure if need to update state yet
  // i think state will update when component mounts

  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const favorites = await fetch("http://localhost:9000/favorites");
      const parsedFavorites = await favorites.json();
      // console.log(parsedFavorites);
      setFavorites(parsedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

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

  const favoritesRow = favorites.map((favorite) => (
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
