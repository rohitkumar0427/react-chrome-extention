import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <NavLink to="/NotesApp">NotesApp</NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/WebsiteBlocker">WebsiteBlocker</NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/Bookmarks">Bookmarks</NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/Remainder">Remainder</NavLink>
        </Grid>
      </Grid>
      <Switch>
        <Route path="/NotesApp">HI</Route>
        <Route path="/Bookmarks">Bro</Route>
        <Route path="/Remainder">How</Route>
        <Route path="/WebsiteBlocker">Are</Route>
      </Switch>
    </div>
  );
}

export default App;
