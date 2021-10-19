import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Pentagon from "./components/Pentagon";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Pentagon />
      </Switch>
    </div>
  );
}

export default App;
