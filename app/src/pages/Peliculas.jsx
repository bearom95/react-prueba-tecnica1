import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from '../components/Card';
import { Loading } from './Loading';
import { Notfound } from './Notfound';

export const Peliculas = () => {
  const [shows, setShows] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('http://localhost:8080/entries');
        const dataToJson = await data.json();
        setShows(dataToJson);
      } catch (error) {
        console.log('error');
        setError(true);
      }
    };

    setTimeout(() => {
      getData();
      setLoading(false);
    }, 800);
    const getPelis = () => {
      const pelisfiltradas = shows.filter((show) => show.programType == 'movie');
      const pelisnuevas = pelisfiltradas.filter((peli) => peli.releaseYear >= 2010);
      const pelisordenadas = pelisnuevas.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return +1;
        } else if (a.title.toLowerCase() == b.title.toLowerCase()) {
          return 0;
        }
      });

      setPeliculas(pelisordenadas);
    };
    getPelis();
  }, [JSON.stringify(shows)]);

  return (
    <div className="pelispage">
      <h1>Popular movies</h1>
      {error ? (
        <Notfound />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="allmovies">
          {peliculas.map((pelicula) => (
            <Card key={pelicula.title} item={pelicula} />
          ))}
        </div>
      )}
    </div>
  );
};
