import { Attack, Container, Wrapper } from "./Pentagon.styles";

const attackVariants = {
  tap: {
    y: 6,
    boxShadow: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500,
    },
  },
};

const Pentagon = () => {
  const attacks = ["spock", "scissors", "paper", "rock", "lizard"];
  return (
    <Container>
      <Wrapper>
        <img src="images/bg-pentagon.svg" alt="pentagon background" />
        {attacks.map((attack) => (
          <Attack className={attack} variants={attackVariants} whileTap="tap">
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
