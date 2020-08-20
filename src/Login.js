import React from "react";
import "./style/Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify logo */}
      {/* Login with spotify button */}

      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
