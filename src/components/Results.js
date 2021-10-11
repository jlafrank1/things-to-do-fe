import React from "react";
import EmailResults from "./EmailResults";

const Results = (props) => {
  // console.log("props", props.activity)
  const activity = props.activity;

  return (
    <>
      <h2>{activity}</h2>

      <div>{!activity ? null : <EmailResults acitvity={activity} />}</div>
    </>
  );
};

export default Results;
