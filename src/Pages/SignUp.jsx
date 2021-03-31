import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUp = ({ Login, error }) => {
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [_, setUser] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    setUser({ userName: details.userName, password: details.password });

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>SignUp</h2>
        {/* {ERROR} */}
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setDetails({ ...details, userName: e.target.value })
            }
            value={details.userName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default SignUp;
