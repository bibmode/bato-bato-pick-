import { Attack, Container, Pick, PickWrapper, Results } from "./Battle.styles";
import { useHistory } from "react-router";

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
    },
  },
};

const Battle = ({ user, computer, winner }) => {
  const history = useHistory();

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <PickWrapper>
        <Pick>
          <Attack className={user}>
            <div>
              <img src={`images/icon-${user}.svg`} alt={user} />
            </div>
          </Attack>
          <h3>you picked</h3>
        </Pick>
        <Pick className="computer">
          <Attack className={computer}>
            <div>
              <img src={`images/icon-${computer}.svg`} alt={computer} />
            </div>
          </Attack>
          <h3>the house picked</h3>
        </Pick>
      </PickWrapper>

      <Results>
        <h2>{winner ? "You win" : winner === false ? "You lose" : "Draw"}</h2>
        <button onClick={() => history.push("/")}>Play again</button>
      </Results>
    </Container>
  );
};

export default Battle;
