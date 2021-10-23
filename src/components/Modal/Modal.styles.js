import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 150vh;
  background-color: #fbfbfb;
  z-index: 1000;
  position: fixed;
  left: 0;
  top: -3rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 12rem 50rem;

  @media only screen and (min-width: 37.5em) {
    height: min(70vh, 60rem);
    width: 45rem;
    border-radius: 1rem;
    top: 0;
    left: 50%;
    padding: 3rem;

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: min-content 1fr;
  }

  h3 {
    font-size: 3rem;
    color: hsl(217, 16%, 45%);
    grid-column: 1;
    justify-self: left;

    @media only screen and (min-width: 37.5em) {
      line-height: 1;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    margin-top: 8rem;

    @media only screen and (min-width: 37.5em) {
      grid-column: -1;
      margin-top: 0;
    }
  }
`;

export const Rules = styled.img`
  width: min(85%, 35rem);
  margin-top: 3rem;

  @media only screen and (min-width: 37.5em) {
    grid-column: 1 / span 3;
    grid-row: 2;
    width: 100%;
    margin-left: 0.3rem;
    margin-top: 0;
  }
`;
