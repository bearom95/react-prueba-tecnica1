import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from '../components/Card';
import { Loading } from './Loading';

export const Series = () => {
  const [shows, setShows] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:8080/entries');
      const dataToJson = await data.json();
      setShows(dataToJson);
    };
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 800);
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

      const series20 = seriesordenadas.slice(1, 21);
      setSeries(series20);
    };

    getSeries();
  }, [JSON.stringify(shows)]);

  return (
    <div className="seriespage">
      <h1>Popular series</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="allseries">
          {series.map((serie) => (
            <Card key={serie.title} item={serie} />
          ))}
        </div>
      )}
    </div>
  );
};
