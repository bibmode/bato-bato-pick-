import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: max(100%, 30rem);
  min-height: 38rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  height: clamp(28rem, 42vw, 47rem);
  width: clamp(30rem, 50vw, 55rem);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }

  .spock {
    left: 3%;
    bottom: clamp(11.5rem, 17vw, 19rem);
    background-image: linear-gradient(hsl(189, 58%, 57%), hsl(189, 59%, 53%));
    box-shadow: 0 clamp(0.35rem, 1vw, 0.6rem) rgba(64, 185, 206, 0.7);
  }
  .scissors {
    top: clamp(-2rem, -20vw, -14rem);
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    box-shadow: 0 clamp(0.35rem, 1vw, 0.6rem) #ff7f00ba;
  }
  .paper {
    right: 3%;
    bottom: clamp(11.5rem, 17vw, 19rem);
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    box-shadow: 0 clamp(0.35rem, 1vw, 0.6rem) rgba(72, 101, 244, 0.6);
  }
  .rock {
    bottom: 0;
    right: clamp(4.5rem, 9vw, 9rem);
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    box-shadow: 0 clamp(0.35rem, 1vw, 0.6rem) rgba(220, 46, 78, 0.6);

    img {
      height: 45%;
    }
  }
  .lizard {
    bottom: 0;
    left: clamp(4.5rem, 9vw, 9rem);
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    box-shadow: 0 clamp(0.35rem, 1vw, 0.6rem) rgba(131, 79, 227, 0.6);
  }
`;

export const Attack = styled(motion.button)`
  position: absolute;
  width: clamp(9rem, 13vw, 15rem);
  height: clamp(9rem, 13vw, 15rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  div {
    width: 76%;
    height: 76%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: inset 0 clamp(0.35rem, 0.5vw, 0.5rem) #cbcbcb;

    img {
      height: 50%;
      width: auto;
    }
  }
`;
