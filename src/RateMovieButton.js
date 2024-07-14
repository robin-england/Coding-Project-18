import { useState } from "react";
import MovieSelector from "./MovieSelector"

export default function RateMovieButton({ movies }) {

    const [rating, setRating] = useState(1);
    const [movie, setMovie] = useState(movies[0]);

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    };

    const handleButtonClick = () => {
        alert(`Thank you for your feedback. Movie: ${movie} Rating: ${rating} out of 5 stars.`)
    }

    return (
        <div className="Rating">
            <MovieSelector movies={movies} movie={movie} setMovie={setMovie} />
            <section>Please submit your rating: </section>
            <form name="feedback-form">
                <select value={rating} onChange={handleRatingChange}>
                    <option value="1"> 1/5 Stars </option>
                    <option value="2"> 2/5 Stars </option>
                    <option value="3"> 3/5 Stars </option>
                    <option value="4"> 4/5 Stars </option>
                    <option value="5"> 5/5 Stars </option>
                </select>
                <button
                    onClick={handleButtonClick}
                >Submit Rating</button>
            </form>
        </div>
    )
}