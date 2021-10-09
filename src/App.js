import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TodoApp } from "./Components/NotesApp/TodoApp";

function App() {
  return (
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
            Remainder
          </NavLink>
        </Grid>
      </Grid>
      <Switch>
        <Route path="/NotesApp">
          <TodoApp />
        </Route>
        <Route path="/Bookmarks">Bro</Route>
        <Route path="/Remainder">How</Route>
        <Route path="/WebsiteBlocker">Are</Route>
      </Switch>
    </div>
  );
}

export default App;
