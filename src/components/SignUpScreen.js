import React, { useState } from "react";
import Axios from "axios";

const SignUpScreen = () => {
  const [userObject, setUserObject] = useState({});

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("/api/signup", userObject)
      .then(({ data: addedUser }) => {
        console.log(addedUser);
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
            type="text"
            placeholder={"Enter your name"}
            id={"text1"}
            value={userObject.name}
            onChange={(e) =>
              setUserObject({ ...userObject, name: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="email"
            placeholder={"Enter your email"}
            id={"text2"}
            value={userObject.email}
            onChange={(e) =>
              setUserObject({ ...userObject, email: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type={"number"}
            value={userObject.phoneNumber}
            placeholder={"Enter your mobile number"}
            id={"text3"}
            onChange={(e) =>
              setUserObject({ ...userObject, phoneNumber: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type={"password"}
            id={"pass"}
            value={userObject.password}
            placeholder={"Enter your password"}
            onChange={(e) =>
              setUserObject({ ...userObject, password: userObject.password })
            }
          />
          <br />
          <br />
          <select
            id={"menu"}
            style={{
              width: "235px",
              minHeight: "28px",
              fontFamily: "calibri",
              fontSize: "18px",
            }}
            onChange={(e) =>
              setUserObject({ ...userObject, securityQuestion: e.target.value })
            }
            value={userObject.securityQuestion}
          >
            <option value="" disabled selected hidden>
              Choose Security Question:&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
            <option value={"What is your mother's maiden name?"}>
              What is your mother's maiden name?
            </option>
            <option value={"What is your nick name?"}>
              What is your nick name?
            </option>
            <option value={"Where is your favorite place to vacation?"}>
              Where is your favorite place to vacation?
            </option>
            <option value={"What city were you born in?"}>
              What city were you born in?
            </option>
            <option value={"Where did you go to high school/college?"}>
              Where did you go to high school/college?
            </option>
            <option value={"What is your favorite food?"}>
              What is your favorite food?
            </option>
          </select>
          <br />
          <br />
          <input
            type={"text"}
            value={userObject.securityAnswer}
            placeholder={"Enter Answer"}
            id={"answer"}
            onChange={(e) =>
              setUserObject({
                ...userObject,
                securityAnswer: e.target.securityAnswer,
              })
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

export default SignUpScreen;
