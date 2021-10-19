import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 3.5rem;
`;

export const Wrapper = styled.div`
  outline: 0.3rem solid hsl(217, 16%, 45%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 6rem;
    margin-left: 2rem;
  }
`;

export const ScoreCard = styled.div`
  background-color: #fcfcfc;
  padding: 0.8rem 2.5rem;
  margin: 1rem;
  border-radius: 0.5rem;

  h3 {
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    color: hsl(229, 64%, 46%);
  }

  h2 {
    font-size: 4.3rem;
    color: hsl(229, 25%, 31%);
    line-height: 1;
    margin-top: -0.2rem;
  }
`;
