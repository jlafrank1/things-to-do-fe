import React from "react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./Filters";

const FavoriteResults = (props) => {
  const { activity, type } = useContext(DataContext);

  // console.log("FAVORITE RESULTS activity, type > ", activity, type);

  // need to update the FavoriteResults form state when Results changes state

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
      // console.log("FAVORITE RESULTS in handleSubmit > ", activity, type);
      const config = {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
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
          <button type="submit" className="button">
            Favorite this result
          </button>
        </form>
      </div>
    </>
  );
};

export default FavoriteResults;
