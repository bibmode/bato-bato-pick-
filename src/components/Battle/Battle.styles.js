import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #eee;
  margin-top: 5rem;
  z-index: 100;
`;

export const PickWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Pick = styled(motion.div)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-inline: -1rem -1.5rem;
  position: relative;
  z-index: 10;

  h3 {
    margin-top: 2rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 1.6rem;
    z-index: 100;
  }

  .spock {
    background-image: linear-gradient(hsl(189, 58%, 57%), hsl(189, 59%, 53%));
    box-shadow: 0 0.35rem rgba(64, 185, 206, 0.7);
  }
  .scissors {
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    box-shadow: 0 0.35rem #ff7f00ba;
  }
  .paper {
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    box-shadow: 0 0.35rem rgba(72, 101, 244, 0.6);
  }
  .rock {
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    box-shadow: 0 0.35rem rgba(220, 46, 78, 0.6);
  }
  .lizard {
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    box-shadow: 0 0.35rem rgba(131, 79, 227, 0.6);
  }
`;

export const AttackDiv = styled(motion.div)`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Attack = styled(motion.div)`
  width: 13rem;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  border: none;
  z-index: initial;

  .image {
    width: 76%;
    height: 76%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: inset 0 0.3rem #cbcbcb;

    img {
      height: 5rem;
      width: auto;
    }
  }
`;

export const Plate = styled(motion.div)`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  background-color: rgba(20, 21, 57, 0.5);
`;

export const Backdrop = styled(motion.div)`
  width: 1rem;
  position: absolute;
  top: 48%;
`;

export const PlayerBackdrop = styled(motion.div)`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: absolute;
  border-radius: 50%;
  background-color: rgba(96, 110, 133, 0.1);
  z-index: -1;
  margin: 50%;
  transform: translate(-50%, -50%);
`;

export const Results = styled(motion.div)`
  width: 100%;
  margin-top: 3rem;

  h2 {
    font-size: 5.8rem;
  }

  button {
    font-family: inherit;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: hsl(229, 25%, 31%);
    border: none;
    outline: none;
    padding: 1.5rem 6.5rem;
    border-radius: 1rem;
  }
`;
