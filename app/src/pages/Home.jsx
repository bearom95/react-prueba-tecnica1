import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  //hay que poner navigate despues de la arrow para que no se autoejecute
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => navigate('/peliculas')}>Peliculas</button>
      <button onClick={() => navigate('/series')}>Series</button>
    </div>
  );
};
