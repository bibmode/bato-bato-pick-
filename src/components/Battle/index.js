import {
  Attack,
  Container,
  Pick,
  PickWrapper,
  Plate,
  Results,
} from "./Battle.styles";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {
    scale: 0.5,
    x: "100vw",
  },
  visible: {
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    scale: [1, 0.5],
    transition: {
      duration: 0.5,
    },
  },
};

const attackVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const resultVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Battle = ({ user, computer, winner, setPentagon }) => {
  const history = useHistory();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showResults, setShowResults] = useState(false);

  setTimeout(() => {
    setShowFirst(true);
  }, 300);

  setTimeout(() => {
    setShowSecond(true);
  }, 1500);

  setTimeout(() => {
    setShowResults(true);
  }, 2500);

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PickWrapper>
        <Pick>
          {showFirst ? (
            <Attack
              variants={attackVariants}
              initial="initial"
              animate="active"
              className={user}
            >
              <div>
                <img src={`images/icon-${user}.svg`} alt={user} />
              </div>
            </Attack>
          ) : (
            <Plate />
          )}
          <h3>you picked</h3>
        </Pick>
        <Pick className="computer">
          {showSecond ? (
            <Attack
              variants={attackVariants}
              initial="initial"
              animate="active"
              className={computer}
            >
              <div>
                <img src={`images/icon-${computer}.svg`} alt={computer} />
              </div>
            </Attack>
          ) : (
            <Plate />
          )}
          <h3>the house picked</h3>
        </Pick>
      </PickWrapper>

      {showResults && (
        <Results variants={resultVariants} initial="initial" animate="active">
          <h2>{winner ? "You win" : winner === false ? "You lose" : "Draw"}</h2>
          <button
            onClick={() => {
              history.push("/");
              setPentagon();
            }}
          >
            Play again
          </button>
        </Results>
      )}
    </Container>
  );
};

export default Battle;
