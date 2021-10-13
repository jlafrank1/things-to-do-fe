import React from "react";
import { useContext } from "react";
import FavoriteResults from "./FavoriteResults";
import { DataContext } from "./Filters";

const Results = (props) => {
  // console.log("props", props.activity)
  // const activity = props.activity;

  const dataContext = useContext(DataContext);
  // usecontext to subscribe to state in Filters component. state only changes here.
  console.log("RESULTS dataContext > ", dataContext);

  return (
    <>
      <h2>{dataContext}</h2>

      <div id="email-results">{!dataContext ? null : <FavoriteResults />}</div>
    </>
  );
};

export default Results;
