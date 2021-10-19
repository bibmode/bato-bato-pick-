import { Container, ScoreCard, Wrapper } from "./Header.styles";
import LogoBonus from "../../images/logo-bonus.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={LogoBonus} alt="logo" />
        <ScoreCard>
          <h3>Score</h3>
          <h2>12</h2>
        </ScoreCard>
      </Wrapper>
    </Container>
  );
};

export default Header;
