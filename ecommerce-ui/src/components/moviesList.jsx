import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', description: 'A mind-bending thriller that was directed by Christopher Nolan.' },
        { id: 2, title: 'Bridesmaids', description: 'A comedy about a distressed woman whos bestfriend is getting married.' },
        { id: 3, title: 'The Sweetest Thing', description: 'A comedy about two bestfriends on a mission to find their husband' }
    ]);

  
    const toggleDetails = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };


    const removeMovie = (index) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    };

    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index} onClick={() => toggleDetails(movie.id)}>
                        {movie.title}
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}> Remove </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;