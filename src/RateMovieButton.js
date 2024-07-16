import { useState } from "react";
import MovieSelector from "./MovieSelector"

export default function RateMovieButton({ movies }) {

    const [rating, setRating] = useState(1);    // sets initial states for rating, movie, and comments
    const [movie, setMovie] = useState("Titanic");
    const [comments, setComments] = useState("")

    const handleRatingChange = (e) => {     // Stores Change in rating
        setRating(e.target.value)
    };

    const handleCommentsChange = (e) => {   // Stores Change in Comments
        setComments(e.target.value)
    };

    const handleButtonClick = () => {       // Displays alert showing selected movie, rating, and comments
        alert(`Uploading feedback... Movie: ${movie}. Rating: ${rating} out of 5 stars. Comments: ${comments}`)
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
                <br />
                Please share your feedback:
                <input type="textarea" class="comments" onChange={handleCommentsChange}></input>
                <br />
                <button onClick={handleButtonClick}>Submit Feedback</button>
            </form>
        </div>
    )
}