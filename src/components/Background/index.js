import { Container } from "./Background.styles";
import { AnimatePresence } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Background = ({ showModal }) => {
  return (
    <AnimatePresence>
      <Container
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={() => showModal()}
      />
    </AnimatePresence>
  );
};

export default Background;
