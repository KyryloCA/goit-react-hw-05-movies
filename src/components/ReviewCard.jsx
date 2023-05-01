import React from 'react';
import { Container, DescriptionContainer } from './MovieCard.styled';

const ReviewCard = ({ content, author }) => {
  return (
    <Container>
      <DescriptionContainer>
        <h3>{author}</h3>
        <p>{content}</p>
      </DescriptionContainer>
    </Container>
  );
};

export default ReviewCard;
