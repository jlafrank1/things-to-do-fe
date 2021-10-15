import React from "react";
import { useContext } from "react";
import FavoriteResults from "./FavoriteResults";
import { DataContext } from "./Filters";
import { LoginContext } from "../App";

const Results = (props) => {
  const { activity, type } = useContext(DataContext);
  const { BASE_URL } = useContext(
    LoginContext)
    console.log("RESULTS BASE_URL > ", BASE_URL)

  console.log("RESULTS activity, type > ", activity, type);

  return (
    <>
      <h2>{activity}</h2>

      <div id="email-results">{!activity ? null : <FavoriteResults />}</div>
    </>
  );
};

export default Results;
