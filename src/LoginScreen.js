import React, { useState } from "react";
import Axios from "axios";

const LoginScreen = () => {
  const [authObject, setAuthObject] = useState({});

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("/api/signin", authObject)
      .then(({ data: loggedInUser }) => {
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form>
        <fieldset style={{ width: "250px" }}>
          <legend>Sign Up</legend>
          <input
            type="email"
            placeholder={"Enter your email"}
            id={"text2"}
            value={authObject.email}
            onChange={(e) =>
              setAuthObject({ ...authObject, email: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type={"password"}
            id={"pass"}
            value={authObject.password}
            placeholder={"Enter your password"}
            onChange={(e) =>
              setAuthObject({ ...authObject, password: authObject.password })
            }
          />
          <br />
          <br />
          <input
            type={"submit"}
            value={"Submit"}
            id={"b1"}
            onClick={(e) => onFormSubmit(e)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
        </fieldset>
      </form>
    </>
  );
};

export default LoginScreen;
