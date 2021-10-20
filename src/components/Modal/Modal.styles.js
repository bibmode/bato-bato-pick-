import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 110vh;
  background-color: #fbfbfb;
  z-index: 1000;
  position: fixed;
  left: 0;
  top: -30px;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 12rem 10rem;

  h3 {
    font-size: 3rem;
    color: hsl(217, 16%, 45%);
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    margin-top: 3rem;
  }
`;

export const Rules = styled.img`
  width: 85%;
`;
