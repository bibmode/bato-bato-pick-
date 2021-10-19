import { Attack, Container, Wrapper } from "./Pentagon.styles";

const Pentagon = () => {
  const attacks = ["spock", "scissors", "paper", "rock", "lizard"];
  return (
    <Container>
      <Wrapper>
        <img src="images/bg-pentagon.svg" alt="pentagon background" />
        {attacks.map((attack) => (
          <Attack className={attack}>
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
