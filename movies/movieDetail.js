import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function MovieDetail() {
    const BASE_URL = "https://api.themoviedb.org/3/movie/"
    const API_KEY = "?api_key="
    const IMAGE_URL = "https://image.tmdb.org/t/p/";
    const BACKDROP_SIZE = "original"
    const POSTER_SIZE = 'w342'

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try {
            const res = await fetch(BASE_URL + id + API_KEY + process.env.MOVIE_API);
            const newMovies = await res.json()
            setMovie(newMovies)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    if (!movie.title) return null

    return (
        <div>
            <img className="backdrop"
                src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
                alt={movie.title + 'backdrop'}
            />
            <div className="detail-details" >
                <img className="detail-poster"
                    src={IMAGE_URL + POSTER_SIZE + movie.backdrop_path}
                    alt={movie.title + 'poster'}
                />
                <div>
                    <h1> {movie.title} </h1>
                    <p> {movie.overview} </p>
                    <ul>{movie.genres.map((genre) => (
                        <li key={genre.id} > { genre.name} </li>
                    ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default MovieDetail