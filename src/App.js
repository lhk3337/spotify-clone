import React, { useEffect, useState } from "react";
import "./style/App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotityWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./ContextAPI/DataLayer";
const spotify = new SpotityWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Spotify Logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
