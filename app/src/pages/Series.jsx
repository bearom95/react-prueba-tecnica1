import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from '../components/Card';

export const Series = () => {
  const [shows, setShows] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:8080/entries');
      const dataToJson = await data.json();
      setShows(dataToJson);
    };
    getData();
    const getSeries = () => {
      const seriesfiltradas = shows.filter((show) => show.programType == 'series');
      const seriesnuevas = seriesfiltradas.filter((serie) => serie.releaseYear >= 2010);
      const seriesordenadas = seriesnuevas.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return +1;
        } else if (a.title.toLowerCase() == b.title.toLowerCase()) {
          return 0;
        }
      });

      setSeries(seriesordenadas);
      console.log(seriesordenadas);
    };

    getSeries();
  }, [JSON.stringify(shows)]);

  return (
    <div>
      <h1>Series page</h1>
      <div className="allseries">
        {series.map((serie) => (
          <Card key={serie.title} item={serie} />
        ))}
      </div>
    </div>
  );
};
