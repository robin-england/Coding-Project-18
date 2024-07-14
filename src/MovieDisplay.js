export default function MovieDisplay({ name, photoURL }) { 
    return (
        <div>
            <h2>{name}</h2>
            <img src={photoURL} width={400} alt={`Profile of ${name}`}
            />
        </div>
    )
}