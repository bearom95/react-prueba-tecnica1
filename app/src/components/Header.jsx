import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo">
        Demo streaming
      </NavLink>
      <div className="logintrialdiv">
        <a href="..">Login</a>
        <button>Start you free trial</button>
      </div>
    </header>
  );
};
