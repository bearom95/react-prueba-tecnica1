import './App.css';

import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
