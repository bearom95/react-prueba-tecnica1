import { useEffect } from 'react';
import { useState } from 'react';

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

      setPeliculas(pelisnuevas);
    };
    /*     getData();
     */ getPelis();
    console.log('esto cuando se lanza???');
  }, [JSON.stringify(shows)]);

  return (
    <div>
      <h1>Peliculas page</h1>
      <div className="allmovies">
        {peliculas.map((pelicula) => (
          <div key={pelicula.title}>
            <h2>{pelicula.title}</h2>
            <img src={pelicula.images['Poster Art'].url} alt="movie poster" />
          </div>
        ))}
      </div>
    </div>
  );
};
