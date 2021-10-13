import React from "react";
import { useState, useEffect } from "react";

const FavoriteResults = (props) => {
  console.log("props on emailResults component", props.activity);

  // form state
  const [form, setForm] = useState({});

  // handle submit
  const handleSubmit = async (e) => {
    setForm({
      activity: props.activity,
      category: "test category",
      isDone: false,
    });

    e.preventDefault();

    try {
      console.log("logging form in handleSubmit try", form);
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
      console.log(parsedFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  // use effect
  useEffect(() => {
    setForm({ activity: props.activity });
  }, []);

  return (
    <>
      <div id="email-form">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="activity" value={props.activity} />
          <input type="hidden" name="category" value="test category" />
          <input type="hidden" name="isDone" value="false" />
          <button type="submit" className="button">
            Favorite this result
          </button>
        </form>
      </div>
    </>
  );
};

export default FavoriteResults;
