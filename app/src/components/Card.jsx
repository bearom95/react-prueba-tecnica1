import styled from 'styled-components';

import { Image } from './ImageCard';
import { TitleModal } from './Modal';

const CardStyled = styled.figure`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 10rem;
  background-color: white;
  margin: 0.5rem;
  color: black;
  transition: 0.2s all ease-in-out;
  &:hover {
    opacity: 70%;
  }
`;

export const Card = ({ item }) => {
  return (
    <CardStyled className="card">
      <Image
        src={item.images['Poster Art'].url}
        alt={`Poster for the show: ${item.title}`}
      />
      <TitleModal style={{ cursor: 'pointer' }} item={item} />
    </CardStyled>
  );
};
