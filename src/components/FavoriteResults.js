import React from "react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./Filters";
import { LoginContext } from "../App";
// import { getUserToken, setUserToken, clearUserToken } from "../utils/authToken";

const FavoriteResults = (props) => {
  const { activity, type } = useContext(DataContext);
  const { currentUser, token, BASE_URL } = useContext(LoginContext);

  console.log("FAVRESULTS currentUser > ", currentUser);

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
      creator: currentUser._id,
    });

    try {
      const config = {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          Authorization: `bearer ${token}`,
        },
      };
      const createdFavorite = await fetch(BASE_URL + "/favorites", config);
      const parsedFavorite = await createdFavorite.json();
      console.log(
        "FAVORITERESULTS > handleSubmit > your new favorite is > ",
        parsedFavorite
      );

      if (!currentUser._id) {
        alert("Please log in!");
      } else {
        alert("Added to Favorites!");
      }
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
      creator: currentUser._id,
    });
  }, [activity, type, currentUser._id]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="email-form">
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="activity"
            value={activity}
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="category"
            value={type}
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="isDone"
            value="false"
            onChange={handleChange}
          />
          <input
            name="creator"
            value={currentUser._id}
            onChange={handleChange}
          />
          <button type="submit" className="button">
            Favorite this result
          </button>
        </form>
      </div>
    </>
  );
};

export default FavoriteResults;
