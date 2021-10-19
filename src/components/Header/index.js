import { Container, ScoreCard, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src="images/logo-bonus.svg" alt="logo" />
        <ScoreCard>
          <h3>Score</h3>
          <h2>12</h2>
        </ScoreCard>
      </Wrapper>
    </Container>
  );
};

export default Header;
