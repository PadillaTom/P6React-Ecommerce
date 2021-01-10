import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  // Array Stars --> Creamos Array
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // Necesitamos index hasta: 5
    // Stars Media:
    const number = index + 0.5;
    // :::MAIN:::
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill></BsStarFill>
        ) : stars >= number ? (
          <BsStarHalf></BsStarHalf>
        ) : (
          <BsStar></BsStar>
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} Customer Reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

// Manual Stars --> Cambiando los numeros
{
  /* <span>
  {stars >= 1 ? (
    <BsStarFill></BsStarFill>
  ) : stars >= 0.5 ? (
    <BsStarHalf></BsStarHalf>
  ) : (
    <BsStar></BsStar>
  )}
</span>; */
}
