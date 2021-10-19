import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 38rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 28rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }

  .spock {
    left: 0;
    bottom: 11.5rem;
    background-image: linear-gradient(hsl(189, 58%, 57%), hsl(189, 59%, 53%));
    box-shadow: 0 0.35rem rgba(64, 185, 206, 0.7);
  }
  .scissors {
    top: 0;
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    box-shadow: 0 0.35rem #ff7f00ba;
  }
  .paper {
    right: 0;
    bottom: 11.5rem;
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    box-shadow: 0 0.35rem rgba(72, 101, 244, 0.6);
  }
  .rock {
    bottom: 0;
    right: 4.5rem;
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    box-shadow: 0 0.35rem rgba(220, 46, 78, 0.6);

    img {
      height: 3rem;
    }
  }
  .lizard {
    bottom: 0;
    left: 4.5rem;
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    box-shadow: 0 0.35rem rgba(131, 79, 227, 0.6);
  }
`;

export const Attack = styled.button`
  position: absolute;
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  border: none;

  div {
    width: 76%;
    height: 76%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: inset 0 0.3rem #cbcbcb;

    img {
      height: 3.5rem;
      width: auto;
    }
  }
`;
