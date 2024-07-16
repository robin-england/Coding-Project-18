// U63166005
// Coding Project #18

import RateMovieButton from "./RateMovieButton";
import movies from "./MovieList"; // imports movies from movielist to use 
import './App.css';

export default function App() {
  return (
    <div className="App">
      <RateMovieButton movies={movies} />         {/* sends movies from imported list to children */}
    </div>
  )
}