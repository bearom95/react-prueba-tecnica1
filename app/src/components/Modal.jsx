import Popup from 'reactjs-popup';
import styled from 'styled-components';

const TitleModalStyled = styled.h2`
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
`;

const ModalDivStyled = styled.div`
  background-color: rgb(36, 32, 32);
  width: 80vw;
  /*   max-height: 80vh; */
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;
  box-shadow: inset 0 0 5rem black;

  button {
    all: unset;
    font-size: 1.3rem;
    position: relative;
    margin: 0 1rem;
    float: right;
    background-color: inherit;
    border: none;
    color: white;
  }
  .modalcontent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .imgmodal {
    max-height: 20rem;
    margin: 1rem;
  }
  .textdiv {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-direction: column;
    margin: 1rem;
    max-width: 40vw;
    gap: 0.5rem;
  }
  .titulomodal {
    color: whitesmoke;
  }
`;

export const TitleModal = ({ item }) => (
  <Popup trigger={<TitleModalStyled>{item.title}</TitleModalStyled>} modal nested>
    {(close) => (
      <ModalDivStyled>
        <div className="buttondiv">
          <button onClick={close}>X</button>
        </div>
        <div className="modalcontent">
          <img className="imgmodal" src={item.images['Poster Art'].url} alt="poster" />
          <div className="textdiv">
            <h2 className="titulomodal">{item.title}</h2>
            <p>{item.releaseYear}</p>
            <p>{item.description}</p>
          </div>
        </div>
      </ModalDivStyled>
    )}
  </Popup>
);
