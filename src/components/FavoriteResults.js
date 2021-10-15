import React from "react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./Filters";
import { LoginContext } from "../App";
import { getUserToken, setUserToken, clearUserToken } from "../utils/authToken";

const FavoriteResults = (props) => {
  const { activity, type } = useContext(DataContext);
  const { currentUser, token } = useContext(LoginContext);
  console.log("FAVRESULTS CurrentUser > ", currentUser);
  console.log(currentUser._id);
  console.log("FAVRESULTS Token > ", token)

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
      console.log("FAVRESULTS > Hitting Try");
      const config = {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          "Authorization": `bearer ${token}`,
        },
      };
      console.log("FAVRESULTS > Created configs");

      const createdFavorite = await fetch(
        "http://localhost:9000/favorites",
        config
      );
      console.log("FAVRESULTS > createdFavorite", createdFavorite);

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
      creator: currentUser._id,
    });
  }, [activity, type]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="email-form">
        <form onSubmit={handleSubmit}>
          <input name="activity" value={activity} onChange={handleChange} />
          <input name="category" value={type} onChange={handleChange} />
          <input name="isDone" value="false" onChange={handleChange} />
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
