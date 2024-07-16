import { useState } from "react";
import MovieDisplay from "./MovieDisplay";

export default function MovieSelector({ movies, movie, setMovie }) {    // takes in current movie, movies, and setMovie from parent

    const [tempMovie, setTempMovie] = useState(movies[0].id);   // Creates local variable to use 

    const handleMovieChange = (e) => {
        const movieId = +e.target.value;    // + adds numerical format, then takes in value from input
        const selectedMovie = movies.find(movie => movie.id === movieId);   // locates movie with id corresponding to selected ID

        setMovie(selectedMovie.name)    // sets movie to name of selected movie
        setTempMovie(movieId)           // sets local variable to select movie 
    };

    const displayMovie = movies.find(movie => movie.id === tempMovie) || {};    // sets selected movie as movie to be displayed
    return (
        <div className="Movie-Selector">
            <section>Select your movie: </section>
            <select value={tempMovie} onChange={handleMovieChange}>
                {movies.map(thisMovie => (
                    <option value={thisMovie.id}>{thisMovie.name}</option>      // displays movie name, but selects id of the movie
                ))} 
            </select>
            <div>
                <MovieDisplay
                    name={displayMovie.name}
                    photoURL={displayMovie.photoURL}
                />
            </div>
        </div>
    )
}