import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Pentagon from "./components/Pentagon";
import Rules from "./components/Rules";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Modal showModal={showModal} modal={modal} />
      <Header />
      <Switch>
        <Route path="/">
          <Pentagon />
        </Route>
      </Switch>
      <Rules showModal={showModal} />
    </div>
  );
}

export default App;
