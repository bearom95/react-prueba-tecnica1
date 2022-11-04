import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/series">Series</NavLink>
      <NavLink to="/peliculas">Peliculas</NavLink>
    </header>
  );
};
