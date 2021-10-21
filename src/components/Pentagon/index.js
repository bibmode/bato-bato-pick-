import { Attack, Container, Wrapper } from "./Pentagon.styles";
import { useHistory } from "react-router-dom";

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
    x: "100vw",
    scale: 0.5,
    opacity: 0,
  },
  second: {
    rotate: [360, 0],
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
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

const Pentagon = ({ getWinner, setChoice }) => {
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
