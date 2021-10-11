import React from "react";

const EmailResults = (props) => {
  console.log("props on emailResults component", props.activity);
  return (
    <>
      <p>Email this result</p>

      <div>
        <form>
          <input name="email" defaultValue="Email address" />
          <br />
          <input name="message" defaultValue="Enter Your Note" />
          <br />
          <button type="submit" value="Email" className="button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default EmailResults;
