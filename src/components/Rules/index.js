import { Container, Button } from "./Rules.styles";

// const buttonVariants = {
//   changeBg: {
//     backgroundColor: "#eee",
//     color: "hsl(229, 25%, 31%)",
//     scale: 1.1,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

const Rules = ({ showModal }) => {
  return (
    <Container>
      <Button onClick={() => showModal()}>Rules</Button>
    </Container>
  );
};

export default Rules;
