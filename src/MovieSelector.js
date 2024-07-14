import { useState } from "react";
import MovieDisplay from "./MovieDisplay";

export default function MovieSelector({ movies, movie, setMovie }) {

    const [tempMovie, setTempMovie] = useState(movies[0].id);

    const handleMovieChange = (e) => {
        const movieId = +e.target.value;
        const selectedMovie = movies.find(movie => movie.id === movieId);

        setMovie(selectedMovie.name)
        setTempMovie(movieId)
    };

    const displayMovie = movies.find(movie => movie.id === tempMovie) || {};
    return (
        <>
            <select value={tempMovie} onChange={handleMovieChange}>
                {movies.map(thisMovie => (
                    <option value={thisMovie.id}>{thisMovie.name}</option>
                ))}
            </select>
            <div>
                <MovieDisplay
                    name={displayMovie.name}
                    photoURL={displayMovie.photoURL}
                />
            </div>
        </>
    )
}