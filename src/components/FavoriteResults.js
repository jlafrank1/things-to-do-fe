import React from "react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./Filters";
import { LoginContext } from "../App";
import { getUserToken, setUserToken, clearUserToken } from "../utils/authToken";

const FavoriteResults = (props) => {
  const { activity, type } = useContext(DataContext);
  const { currentUser, isAuthenticated } = useContext(LoginContext);
  console.log("CurentUser > ", currentUser);

  // form state
  const [input, setInput] = useState();

  const [form, setForm] = useState();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({
      activity: activity,
      category: type,
      isDone: false,
    });

    e.preventDefault();

    try {
      const config = {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          Authorization: `bearer ${getUserToken()}`,
        },
      };
      const createdFavorite = await fetch(
        "http://localhost:9000/favorites",
        config
      );
      const parsedFavorite = await createdFavorite.json();
      console.log(
        "FAVORITERESULTS > handleSubmit > your new favorite is > ",
        parsedFavorite
      );
    } catch (err) {
      console.log(err);
    }
  };

  // use effect
  useEffect(() => {
    setForm({
      activity: activity,
      category: type,
      isDone: false,
    });
  }, [activity, type]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="email-form">
        <form onSubmit={handleSubmit}>
          <input
            name="creator"
            value="6168860051c4b6102a8ebdf7"
            onChange={handleChange}
          />
          <input name="activity" value={activity} onChange={handleChange} />
          <input name="category" value={type} onChange={handleChange} />
          <input name="isDone" value="false" onChange={handleChange} />
          <button type="submit" className="button">
            Favorite this result
          </button>
        </form>
      </div>
    </>
  );
};

export default FavoriteResults;
