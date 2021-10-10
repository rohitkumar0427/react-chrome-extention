import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TodoApp } from "./Components/NotesApp/TodoApp";
import Bookmark from "./Components/bookmark/bookmark";
import Sound from "react-sound";
import SpeakerIcon from "@mui/icons-material/Speaker";
import { useState } from "react";
import { GrVolumeMute } from "react-icons/gr";
import { GrVolume } from "react-icons/gr";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { IconContext } from "react-icons/lib";
import { Reminder } from "./Components/Reminder/Reminder";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  const [play, setPlay] = useState(false);

  console.log(window.location.hostname);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Grid container spacing={3} className="appbar">
          <Grid item>
            <NavLink
              className="appbar_menuItem"
              activeClassName="appbar_activemenu"
              to="/NotesApp"
            >
              NotesApp
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              className="appbar_menuItem"
              activeClassName="appbar_activemenu"
              to="/WebsiteBlocker"
            >
              WebsiteBlocker
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              className="appbar_menuItem"
              activeClassName="appbar_activemenu"
              to="/Bookmarks"
            >
              Bookmarks
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              className="appbar_menuItem"
              activeClassName="appbar_activemenu"
              to="/Remainder"
            >
              Reminder
            </NavLink>
          </Grid>
          <Grid item justifySelf="right">
            <IconContext.Provider
              value={{
                size: "2rem",
                style: { verticalAlign: "middle", color: "white" },
              }}
            >
              {play ? (
                <GrVolume
                  onClick={() => setPlay(!play)}
                  className="soundIcon"
                />
              ) : (
                <GrVolumeMute
                  onClick={() => setPlay(!play)}
                  className="soundIcon"
                />
              )}
            </IconContext.Provider>
          </Grid>
        </Grid>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/NotesApp" />;
            }}
          />

          <Route exact path="/Bookmarks">
            <Bookmark />
          </Route>

          <Route exact path="/Remainder">
            <Reminder/>
          </Route>
          <Route exact path="/WebsiteBlocker"></Route>
          <Route path="" exact>
            <TodoApp />
          </Route>
        </Switch>
        <Sound
          url="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
          playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
          // playFromPosition={300 /* in milliseconds */}
          volume="10"
          autoplay="true"
          autoLoad="true"
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
