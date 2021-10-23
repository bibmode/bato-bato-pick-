import { Attack, Container, Wrapper } from "./Pentagon.styles";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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

const Pentagon = ({ getWinner, setChoice, enemy, setComputer }) => {
  const attacks = ["spock", "scissors", "paper", "rock", "lizard"];
  const history = useHistory();
  const randomNum = Math.floor(Math.random() * 5);
  setComputer(attacks[randomNum]);

  const tablet = useMediaQuery("(min-width: 37.5em)");

  const containerVariants = tablet
    ? {
        initial: {
          x: "100vw",
          scale: 0.5,
          opacity: 0,
        },
        second: {
          rotate: [360, 0],
          x: 0,
          y: 70,
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
      }
    : {
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
              getWinner(attack, enemy);
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
