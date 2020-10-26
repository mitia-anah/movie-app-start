import React from 'react';
import PropTypes from 'prop-types'
import { Counter } from "./Counter"
import { Accordion } from './Accordion'
import { Input } from './Input'
import { MovieList } from '../movies/MovieList'
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieDetail from '../movies/movieDetail'
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/movie/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/">
                        <MovieList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
