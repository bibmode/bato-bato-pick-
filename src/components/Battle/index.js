import {
  Attack,
  AttackDiv,
  Container,
  Pick,
  PickWrapper,
  Plate,
  PlayerBackdrop,
  Results,
  Backdrop,
} from "./Battle.styles";
import { useHistory } from "react-router";
import { useState } from "react";

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
    opacity: 0,
    scale: [1, 0.8, 1],
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "backInOut",
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
      duration: 0.6,
    },
  },
};

const backdropVariants = {
  initial: {
    opacity: 1,
  },
  active: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const backVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  active: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      type: "tween",
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
  }, 1200);

  setTimeout(() => {
    setShowResults(true);
  }, 2300);

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
            <AttackDiv>
              <Attack
                variants={attackVariants}
                initial="initial"
                animate="active"
                className={user}
              >
                <div className="image">
                  <img src={`images/icon-${user}.svg`} alt={user} />
                </div>
              </Attack>
              {winner === 1 && showResults && (
                <Backdrop
                  variants={backdropVariants}
                  initial="initial"
                  animate="active"
                >
                  <PlayerBackdrop
                    key={1}
                    variants={backVariants}
                    size="17rem"
                    className="first"
                  />
                  <PlayerBackdrop
                    key={2}
                    variants={backVariants}
                    size="22rem"
                    className="second"
                  />
                  <PlayerBackdrop
                    key={3}
                    variants={backVariants}
                    size="28rem"
                  />
                </Backdrop>
              )}
            </AttackDiv>
          ) : (
            <Plate />
          )}

          <h3>you picked</h3>
        </Pick>
        <Pick className="computer">
          {showSecond ? (
            <AttackDiv>
              <Attack
                variants={attackVariants}
                initial="initial"
                animate="active"
                className={computer}
              >
                <div className="image">
                  <img src={`images/icon-${computer}.svg`} alt={computer} />
                </div>
              </Attack>
              {winner === 2 && showResults && (
                <Backdrop
                  variants={backdropVariants}
                  initial="initial"
                  animate="active"
                >
                  <PlayerBackdrop
                    key={4}
                    variants={backVariants}
                    size="17rem"
                    className="first"
                  />
                  <PlayerBackdrop
                    key={5}
                    variants={backVariants}
                    size="22rem"
                    className="second"
                  />
                  <PlayerBackdrop
                    key={6}
                    variants={backVariants}
                    size="28rem"
                  />
                </Backdrop>
              )}
            </AttackDiv>
          ) : (
            <Plate />
          )}
          <h3>the house picked</h3>
        </Pick>
      </PickWrapper>

      {showResults && (
        <Results variants={resultVariants} initial="initial" animate="active">
          <h2>
            {winner === 1 ? "You win" : winner === 2 ? "You lose" : "Draw"}
          </h2>
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
