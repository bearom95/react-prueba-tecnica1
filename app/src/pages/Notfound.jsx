import styled from 'styled-components';

const NotfoundStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 3% 10%;
  flex-direction: column;
  gap: 1rem;
`;

export const Notfound = () => {
  return (
    <NotfoundStyled>
      <h2>Ups... an error has ocurred</h2>
      <p>This might be due to an incorret route path or a system failure.</p>
      <p>
        Please check the route path to make sure it´s an existing one or try to reload the
        page.
      </p>
    </NotfoundStyled>
  );
};
