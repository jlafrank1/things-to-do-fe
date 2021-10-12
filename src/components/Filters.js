import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";

const Filters = (props) => {
  // ideally, these will dynamically populate for each category in array [type]
  // set an array of types
  // for each type
  // create a function and API fetch

  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const [activity, setActivity] = useState();

  const getImBoredResult = async () => {
    const newResult = await fetch("http://www.boredapi.com/api/activity/");
    const parsedResult = await newResult.json();
    const { key, activity } = parsedResult;
    setActivity(activity);
  };

  const getTypeResult = async (e) => {
    console.log("e.target.value", e.target.value);
    let type = e.target.value;
    const newResult = await fetch(
      `http://www.boredapi.com/api/activity?type=${type}`
    );
    // console.log("new result", newResult)
    const parsedResult = await newResult.json();
    // console.log("parsed result", parsedResult)
    const { key, activity } = parsedResult;
    // console.log("activity", activity)
    setActivity(activity);
  };

  useEffect(() => {
    setActivity();
  }, []);

  const typeButton = types.map((type) => (
    <>
      <button
        onClick={getTypeResult}
        key={type}
        value={type}
        className="button filter"
      >
        {type}
      </button>
    </>
  ));

  return (
    <>
      <button onClick={getImBoredResult} className="button bored-button">
        I'm <br /> Bored
      </button>

      <div id="filter-row">{typeButton}</div>

      <Results activity={activity} />
    </>
  );
};

export default Filters;
