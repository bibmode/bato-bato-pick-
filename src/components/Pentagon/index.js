import { Attack, Container, Wrapper } from "./Pentagon.styles";
import { useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const attackVariants = {
  tap: {
    y: 6,
    boxShadow: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

const containerVariants = {
  initial: {
    x: 300,
    opacity: 1,
  },
  second: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: -300,
    opacity: 1,
    scale: [1, 0.5],
    transition: {
      duration: 0.8,
    },
  },
};

const Pentagon = ({ getWinner, setChoice, pentagon, setPentagon }) => {
  const attacks = ["spock", "scissors", "paper", "rock", "lizard"];
  const history = useHistory();

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="second"
      exit="exit"
    >
      <Wrapper>
        <img src="images/bg-pentagon.svg" alt="pentagon background" />
        {attacks.map((attack) => (
          <Attack
            className={attack}
            variants={attackVariants}
            whileTap="tap"
            onClick={() => {
              getWinner(attack);
              setChoice(attack);
              history.push("/battle");
              setPentagon();
            }}
          >
            <div>
              <img src={`images/icon-${attack}.svg`} alt={attack} />
            </div>
          </Attack>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Pentagon;
