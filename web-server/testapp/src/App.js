import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import { GoogleLogin } from "@react-oauth/google";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <div>
        clientID : {user.clientId} <br />
        credential : {JSON.stringify(jwtDecode(user.credential), null, 2)}{" "}
        <br />
        select_by : {user.select_by} <br />
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          setUser(credentialResponse);
        }}
        onError={() => {
          console.log("Error");
        }}
      />
    </>
  );
}

export default App;
