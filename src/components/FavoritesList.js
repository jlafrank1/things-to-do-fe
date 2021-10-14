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
      console.log(parsedFavorites);
      setFavorites(parsedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const favoritesRow = favorites.map((favorite) => (
    <tr>
      <td>{favorite.activity}</td>
      <td>{favorite.category}</td>
    </tr>
  ));

  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Table responsive>
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Category</th>
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
