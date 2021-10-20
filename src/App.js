import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Pentagon from "./components/Pentagon";
import Rules from "./components/Rules";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Battle from "./components/Battle";
import { AnimatePresence } from "framer-motion";

function App() {
  const choices = ["spock", "scissors", "paper", "rock", "lizard"];
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [choice, setChoice] = useState(null);
  const [computer, setComputer] = useState(
    choices[Math.floor(Math.random() * 5)]
  );

  const showModal = () => {
    setModal(!modal);
  };

  const getWinner = (choice) => {
    const randomNum = Math.floor(Math.random() * 5);
    setComputer(choices[randomNum]);

    if (choice === computer) {
      setWinner(null);
    } else {
      if (choice === "spock") {
        if (computer === "scissors" || computer === "rock") setWinner(true);
        else setWinner(false);
      }
      if (choice === "scissors") {
        if (computer === "paper" || computer === "lizard") setWinner(true);
        else setWinner(false);
      }
      if (choice === "paper") {
        if (computer === "rock" || computer === "spock") setWinner(true);
        else setWinner(false);
      }
      if (choice === "rock") {
        if (computer === "scissors" || computer === "lizard") setWinner(true);
        else setWinner(false);
      }
      if (choice === "lizard") {
        if (computer === "spock" || computer === "paper") setWinner(true);
        else setWinner(false);
      }
    }
  };

  useEffect(() => {
    if (winner === true) setScore(score + 1);
    else if (winner === false) setScore(score - 1);
  }, [winner, computer]);

  return (
    <div className="App">
      <Modal showModal={showModal} modal={modal} />
      <Header score={score} />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/battle">
            <Battle user={choice} computer={computer} winner={winner} />
          </Route>
          <Route path="/">
            <Pentagon getWinner={getWinner} setChoice={setChoice} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Rules showModal={showModal} />
    </div>
  );
}

export default App;
