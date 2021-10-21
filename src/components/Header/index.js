import { useEffect } from "react";
import { Container, ScoreCard, Wrapper } from "./Header.styles";

const Header = ({ score }) => {
  return (
    <Container>
      <Wrapper>
        <img src="images/logo-bonus.svg" alt="logo" />
        <ScoreCard>
          <h3>Score</h3>
          <h2>{score}</h2>
        </ScoreCard>
      </Wrapper>
    </Container>
  );
};

export default Header;
