import React from "react";
import { useContext } from "react";
import FavoriteResults from "./FavoriteResults";
import { DataContext } from "./Filters";
import { LoginContext } from "../App";

const Results = (props) => {
  const { activity, type } = useContext(DataContext);
  const { currentUser } = useContext(LoginContext);
  console.log("RESULTS > currentUser > ", currentUser);
  console.log("RESULTS activity, type > ", activity, type);

  return (
    <>
      <h2>{activity}</h2>

      <div id="email-results">
        {activity ? <FavoriteResults currentUser={currentUser} /> : null}
      </div>
    </>
  );
};

export default Results;
