
import { useParams } from 'react-router-dom'
import { get } from '../utils/httpClient'
import { Spinner } from '../components/Spinner'
import styles from './MovieDetails.module.css';
import { useEffect, useState } from 'react'
import { getMovieImg } from '../utils/getMovieImg';


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)



    useEffect(() => {
        setIsLoading(true)

        get("/movie/"+ movieId).then(data => {
            setIsLoading(false)
            setMovie(data);
        });
    }, [movieId])

    if (isLoading) {
        return <Spinner />;
    }

    if (!movie) {
        return null;
    }


    const imageUrl = getMovieImg(movie.poster_path, 500);
    return <div className={styles.detailsContainer}>
        <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />

        <div className={styles.col + " " + styles.movieDetails}>
            <p className={styles.primero}>
            <strong> Título:</strong> {movie.title}
            </p>
            <p> 
            <strong> Descripción:</strong> {movie.overview}
            </p>
            <p>
            <strong> Género:</strong> {movie.genres.map(genre => genre.name).join(', ')}    
            </p> 
        </div>
    </div>
}
