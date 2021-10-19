import { Attack, Container, Wrapper } from "./Pentagon.styles";

const Pentagon = () => {
  return (
    <Container>
      <Wrapper>
        <img src="images/bg-pentagon.svg" alt="pentagon background" />
        <Attack className="spock">
          <div>
            <img src="images/icon-spock.svg" alt="spock" />
          </div>
        </Attack>
        <Attack className="scissors">
          <div>
            <img src="images/icon-scissors.svg" alt="scissors" />
          </div>
        </Attack>
        <Attack className="paper">
          <div>
            <img src="images/icon-paper.svg" alt="paper" />
          </div>
        </Attack>
        <Attack className="rock">
          <div>
            <img src="images/icon-rock.svg" alt="rock" />
          </div>
        </Attack>
        <Attack className="lizard">
          <div>
            <img src="images/icon-lizard.svg" alt="lizard" />
          </div>
        </Attack>
      </Wrapper>
    </Container>
  );
};

export default Pentagon;
