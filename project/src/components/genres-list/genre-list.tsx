import Genre from '../genre/genre';

type GenreListProps = {
  genres : string[];
}

function GenreList({genres} : GenreListProps): JSX.Element {
  return(
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Genre key ={genre} genreName={genre}/>
      ))}
    </ul>
  );
}
export default GenreList;
