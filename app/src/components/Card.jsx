export const Card = ({ item }) => {
  return (
    <figure className="card">
      <h2>{item.title}</h2>
      <img src={item.images['Poster Art'].url} alt="item poster" />
    </figure>
  );
};
