import styled from "styled-components";

export const Container = styled.div`
  padding-block: 3rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  outline: 0.3rem solid hsl(217, 16%, 45%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 70rem);

  img {
    width: clamp(5.2rem, 10vw, 9.5rem);
    margin-left: 2rem;
    margin-block: 1.5rem;
  }
`;

export const ScoreCard = styled.div`
  background-color: #fcfcfc;
  padding: 0.8rem 2.3rem;
  margin: 1rem;
  border-radius: 0.5rem;

  @media only screen and (min-width: 37.5em) {
    margin-right: 2rem;
    padding: 0.8rem 3rem;
  }

  h3 {
    font-size: clamp(1.1rem, 2vw, 1.8rem);
    letter-spacing: 0.2rem;
    color: hsl(229, 64%, 46%);
  }

  h2 {
    font-size: clamp(4.2rem, 5vw, 4.9rem);
    color: #3b4262;
    line-height: 1;
    margin-top: -0.3rem;
  }
`;
