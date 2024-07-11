export default function RateMovieButton() {

    const displayFeedback = () => {
        return (
            console.log(`Thank you for providing feedback`)
        )
    }

    return (
        <>
            <select name="rating" id="rating">
                <option value="1"> 1/5 Stars </option>
                <option value="2"> 2/5 Stars </option>
                <option value="3"> 3/5 Stars </option>
                <option value="4"> 4/5 Stars </option>
                <option value="5"> 5/5 Stars </option>
            </select>
            <button type="submit" onClick={displayFeedback} >Submit Rating</button>
        </>
    )
}

