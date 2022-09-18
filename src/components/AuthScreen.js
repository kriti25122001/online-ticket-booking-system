import React from "react";

const AuthScreen = () => {
  return (
    <>
      <p id={"logo"}>Ticketify</p>
      <div className={"forward"}>
        <a href={"signup.html"}>
          <button
            className={"fwd"}
            style={{ marginTop: "110px", marginLeft: "2px" }}
          >
            new user? Sign up
          </button>
        </a>
        <a href={"login.php"}>
          <button class={"fwd"}>already a member? Sign in</button>
        </a>
      </div>
    </>
  );
};

export default AuthScreen;
