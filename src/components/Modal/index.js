import { Container, Rules } from "./Modal.styles";
import { AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    y: "110vh",
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 40,
    },
  },
};

const Modal = ({ showModal, modal }) => {
  return (
    <AnimatePresence>
      {modal && (
        <Container
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3>Rules</h3>
          <Rules src="images/image-rules-bonus.svg" alt="rules" />
          <button onClick={() => showModal()}>
            <img src="images/icon-close.svg" alt="close icon" />
          </button>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Modal;
