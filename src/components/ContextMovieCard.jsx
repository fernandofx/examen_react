import { useEffect, useState } from "react"
import { get } from "../data/httpClient.js"
import { MovieCard} from "./MovieCard.jsx"
import "../components/ContextMovieCard1.css"

export function ContextMovieCard(){

    const [movies, setMovies ] = useState([])

    useEffect( ()=> {   

        get("3/discover/movie").then(movie => {
            setMovies(movie.results)
            console.log(movie.results)
        })
        .catch(err => console.log(err))

    }, [])

    return(
        <ul className="container">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </ul>
    )
}