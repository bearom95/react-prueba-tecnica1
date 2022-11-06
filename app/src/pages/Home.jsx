import './Home.css';

import { useNavigate } from 'react-router-dom';

/* import { setLoading } from './Loading'; */
/* import Peliculas from './Peliculas'; */

export const Home = () => {
  const navigate = useNavigate();
  //hay que poner navigate despues de la arrow para que no se autoejecute
  return (
    <div className="homediv">
      <h1>Popular Titles</h1>
      <div className="buttonsdiv">
        <button onClick={() => navigate('/peliculas')}>
          <p>PELICULAS</p>
        </button>
        <button onClick={() => navigate('/series')}>
          <p>SERIES</p>
        </button>
      </div>
    </div>
  );
};
