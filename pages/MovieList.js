import React from 'react'

const movies = [
    {
        name: 'Man of Iron'
    },
    {
        name: 'Malokila'
    },
    {
        name: 'Sotasota'
    }
]

export function MovieList() {
    return (
        <div>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.name}>{movie.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}