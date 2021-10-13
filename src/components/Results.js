import React from "react";
import FavoriteResults from "./FavoriteResults";

const Results = (props) => {
  // console.log("props", props.activity)
  const activity = props.activity;

  return (
    <>
      <h2>{activity}</h2>

      <div id="email-results">
        {!activity ? null : <FavoriteResults activity={activity} />}
      </div>
    </>
  );
};

export default Results;
