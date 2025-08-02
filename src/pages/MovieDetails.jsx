import styles from './MovieDetails.module.css'

import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMovieImg"



export function MovieDetails(){

    
    const [movie, setMovie] = useState([])
    const [genero, setGenero] = useState([])
    const { movieId } = useParams()

    console.log(movieId)
    
    useEffect(()=> {
        get("3/movie/" + movieId).then(data => {            
            setMovie(data)
            setGenero(data.genres[0])          
        })        

    }, [movieId] )  

   
            const imageUrl = getMovieImg(movie.poster_path, 400)
        



    return (
        <div className={styles.detailsContainer}>
         <img src={imageUrl} alt="Hummm..."  className={`${styles.movieImage} ${styles.col}`} />
         <div>
            <p className={styles.title_img}>
                <strong>Titulo: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Genero: </strong>
                {genero.name}
            </p>
            <div className={styles.description}>
                <strong>Descripción: </strong>
                {movie.overview}
            </div>
         </div> 
        </div>
    )

   
}