import React, { useEffect, useState } from 'react';

export default function MovieCard() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=e65a273f')
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div style={styles.card}>
      <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  poster: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
};
