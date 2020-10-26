import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Movie({ movie, config }) {
    return (
        <li>
            <Link to={`movie/${movie.id}`}>
                {config.images?.base_url &&
                    <img src={config.images.base_url + 'w342' + movie.poster_path}
                        alt={`${movie.title}`} />
                }
                <h3>{movie.title}</h3>
            </Link>
        </li>
    )
}

Movie.propTypes = {
    movie: propTypes.shape({
        title: propTypes.string.isRequired,
        poster_path: propTypes.string.isRequired,
    }).isRequired,
    config: propTypes.shape({
        images: propTypes.shape({
            base_url: propTypes.string
        })
    })
}