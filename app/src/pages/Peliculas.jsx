import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from '../components/Card';
export const Peliculas = () => {
  const [shows, setShows] = useState([]);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:8080/entries');
      const dataToJson = await data.json();
      setShows(dataToJson);
    };
    getData();
    const getPelis = () => {
      const pelisfiltradas = shows.filter((show) => show.programType == 'movie');
      const pelisnuevas = pelisfiltradas.filter((peli) => peli.releaseYear >= 2010);
      const pelisordenadas = pelisnuevas.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return +1;
        } else if (a.title == b.title) {
          return 0;
        }
      });

      setPeliculas(pelisordenadas);
    };
    getPelis();
  }, [JSON.stringify(shows)]);

  return (
    <div>
      <h1>Peliculas page</h1>
      <div className="allmovies">
        {peliculas.map((pelicula) => (
          <Card key={pelicula.title} item={pelicula} />
        ))}
      </div>
    </div>
  );
};
