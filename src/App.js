import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
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
  const [choice, setChoice] = useState(0);
  const [pentagon, setPentagon] = useState(true);
  const [computer, setComputer] = useState(
    choices[Math.floor(Math.random() * 5)]
  );

  const location = useLocation();

  const showModal = () => {
    setModal(!modal);
  };

  const scoreTally = (champ) => {
    setWinner(champ);
    setTimeout(() => {
      champ === 1
        ? setScore(score + 1)
        : champ === 2 && score !== 0
        ? setScore(score - 1)
        : setScore(score);
    }, 3800);
  };

  const getWinner = (pick, enemy) => {
    if (pick === enemy) {
      setWinner(3);
    } else if (pick === "spock" && (enemy === "scissors" || enemy === "rock"))
      scoreTally(1);
    else if (pick === "scissors" && (enemy === "paper" || enemy === "lizard"))
      scoreTally(1);
    else if (pick === "paper" && (enemy === "rock" || enemy === "spock"))
      scoreTally(1);
    else if (pick === "rock" && (enemy === "scissors" || enemy === "lizard"))
      scoreTally(1);
    else if (pick === "lizard" && (enemy === "spock" || enemy === "paper"))
      scoreTally(1);
    else scoreTally(2);
  };

  return (
    <div className="App">
      <Modal showModal={showModal} modal={modal} />
      <Header score={score} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/battle">
            <Battle
              setPentagon={() => setPentagon(!pentagon)}
              user={choice}
              computer={computer}
              winner={winner}
            />
          </Route>
          <Route path="/">
            <Pentagon
              setPentagon={() => setPentagon(!pentagon)}
              pentagon={pentagon}
              getWinner={getWinner}
              setChoice={setChoice}
              setComputer={setComputer}
              enemy={computer}
            />
          </Route>
        </Switch>
      </AnimatePresence>
      <Rules showModal={showModal} />
    </div>
  );
}

export default App;
