import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 5rem;
  z-index: 700;

  @media only screen and (min-width: 37.5em) {
    width: fit-content;
    position: absolute;
    right: 3rem;
    bottom: 3.5rem;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  text-transform: uppercase;
  padding: 0.8rem 4rem;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 0.6rem;
  border: 2px solid rgb(255 255 255 / 50%);
  background-color: transparent;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  height: fit-content;

  :hover {
    background-color: #eee;
    color: hsl(229, 25%, 31%);
    transform: scale(1.1);
  }
`;
