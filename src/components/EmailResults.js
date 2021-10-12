import React from "react";

const EmailResults = (props) => {
  console.log("props on emailResults component", props.activity);
  return (
    <>
      <div id="email-form">
        <span class="small-text">Email this result</span>

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
