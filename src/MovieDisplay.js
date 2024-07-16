export default function MovieDisplay({ name, photoURL }) { // takes in name and photo of current movie
    return (    // Displays individual movie
        <div>
            <h2>{name}</h2>
            <img src={photoURL} width={300} alt={`Profile of ${name}`}
            />
        </div>
    )
}