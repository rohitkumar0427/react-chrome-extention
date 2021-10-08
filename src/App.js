import logo from "./logo.svg";
import "./App.css";
import { VocabList } from "./VocabList";

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(VocabList.length));

  return (
    <div className="App">
      <Switch>
        <Route path="/NotesApp">
        
        </Route>
        <Route path="/Bookmarks">

        </Route>
        <Route path="/Remainder">

        </Route>
        <Route path="/WebsiteBlocker">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
