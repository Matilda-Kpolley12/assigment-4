import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import SingUp from "./SignUp";

const Login = () => {
  const [visitor, setVisitor] = useState({ userVisitor: "", password: "" });
  const [error, setError] = useState("");

  const [user] = useContext(AuthContext);

  const signUp = (details) => {
    console.log(details);

    if (
      user.userName === visitor.userVisitor &&
      user.password === visitor.password
    )
      console.log("Logged in");
  };

  const Logout = () => {
    console.log("Logout");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      {visitor.userVisitor !== "" && visitor.password !== "" ? (
        <div className="welcome">
          <h2>Welcome {user.userName}</h2>
          <button>Logout</button>
        </div>
      ) : (
        <SingUp Signup={signUp} error={error} />
      )}

      <div className="form-inner">
        <h2>Login</h2>
        {/* {ERROR} */}
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setVisitor({ ...visitor, userVisitor: e.target.value })
            }
            value={visitor.userVisitor}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setVisitor({ ...visitor, password: e.target.value })
            }
            value={visitor.password}
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
