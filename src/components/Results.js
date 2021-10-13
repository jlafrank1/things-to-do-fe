import React from "react";
import { useContext } from "react";
import FavoriteResults from "./FavoriteResults";
import { DataContext } from "./Filters";

const Results = (props) => {
  const { activity, type } = useContext(DataContext);

  console.log("RESULTS dataContext > ", activity, type);

  return (
    <>
      <h2>{activity}</h2>

      <div id="email-results">{!activity ? null : <FavoriteResults />}</div>
    </>
  );
};

export default Results;
