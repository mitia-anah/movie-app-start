import React, { useEffect, useState } from 'react'
import { Filter } from '../pages/Filter';
import { Movie } from "../movies/Movie";
import PropTypes from 'prop-types'



const API_URL = "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key="
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key='

export function MovieList() {
    console.log(process.env.MOVIE_API);
    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})

    const getMovie = async () => {
        try {
            const res = await fetch(API_URL + process.env.MOVIE_API);
            const movies = await res.json()
            setMovies(movies.results)
            console.log('movies', movies);
        } catch (e) {
            console.error(e);
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.MOVIE_API);
            const config = await res.json();
            setConfig(config);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMovie()
        getConfig()
    }, [])

    // const ulRef = useRef(null)
    // console.log('ulRef', ulRef);

    return (
        <div>
            <Filter filter={filter}
                setFilter={setFilter}
            />
            <ul className='movies-list' > {
                movies.
                    filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase())).map((movie) => < Movie key={movie.id}
                        movie={movie}
                        config={config}
                    />)
            } </ul>
        </div>
    )
}
Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
}