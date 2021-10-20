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
    scale: 1,
    x: 0,
  },
  exit: {
    scale: 0.5,
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const Pentagon = ({ getWinner, setChoice }) => {
  const attacks = ["spock", "scissors", "paper", "rock", "lizard"];
  const history = useHistory();

  return (
    <AnimatePresence>
      <Container variants={containerVariants} initial="initial" exit="exit">
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
              }}
            >
              <div>
                <img src={`images/icon-${attack}.svg`} alt={attack} />
              </div>
            </Attack>
          ))}
        </Wrapper>
      </Container>
    </AnimatePresence>
  );
};

export default Pentagon;
