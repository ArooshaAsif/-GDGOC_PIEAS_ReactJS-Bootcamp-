const BookCard = ({ id, title, author, rating, genre, onAdd, onFavorite }) => (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <button onClick={() => onAdd(title)}>Add Me</button>
      <button onClick={() => onFavorite(title)}>Favorite</button>
    </div>
  );
  
  export default BookCard;