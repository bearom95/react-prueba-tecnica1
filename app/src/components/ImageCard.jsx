import styled from 'styled-components';

const ImageStyled = styled.img`
  object-fit: contain;
  width: 10rem;
  height: 15rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Image = ({ src, alt }) => {
  return <ImageStyled src={src} alt={alt} />;
};
