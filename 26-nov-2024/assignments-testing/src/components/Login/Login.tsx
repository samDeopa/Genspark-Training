import React, { FormEvent, useState } from "react";
import "./Login.css"; // Import the CSS file

function Login() {
  const [uid, setUserId] = useState("");
  const [pwd, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [uidError, setUidError] = useState<string | null>(null);
  const [pwdError, setPwdError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setUidError(null);
    setPwdError(null);
    if (uid === "") {
      setUidError("Please Enter The UID");
      return;
    } else if (pwd === "") {
      setPwdError("Password Field cannot be empty!");
      return;
    }
    if (uid === "admin" && pwd === "admin123") {
      setResult("Welcome to Admin");
    } else {
      setResult("Invalid User Id or Password");
    }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <legend className="form-title">User Login</legend>

      <label className="form-label">User ID:</label>
      <input
        type="text"
        id="t1"
        placeholder="Enter User ID"
        value={uid}
        onChange={(event) => setUserId(event.target.value)}
        className="form-input"
      />
      {uidError && <p className="form-error">{uidError}</p>}

      <label className="form-label">Password:</label>
      <input
        type="password"
        id="t2"
        placeholder="Enter Password"
        value={pwd}
        onChange={(event) => setPassword(event.target.value)}
        className="form-input"
      />
      {pwdError && <p className="form-error">{pwdError}</p>}

      <input type="submit" id="b1" value="Login" className="form-button" />

      {result && (
        <p
          id="result"
          className={`form-result ${
            result === "Welcome to Admin" ? "success" : "error"
          }`}
        >
          {result}
        </p>
      )}
      <a href="/signup">SignUp</a>
    </form>
  );
}

export default Login;
