import { Container, Button } from "./Rules.styles";

const Rules = ({ showModal }) => {
  return (
    <Container>
      <Button onClick={() => showModal()}>Rules</Button>
    </Container>
  );
};

export default Rules;
