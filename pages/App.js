import React from 'react';
import PropTypes from 'prop-types'
import { Counter } from "./Counter"
import { Accordion } from './Accordion'
import { Input } from './Input'
import { MovieList } from './MovieList'
import "./App.css"

function App() {
    return (
        <div className="App">
            <MovieList />
        </div>
    );
}

export default App;
