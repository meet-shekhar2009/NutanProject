import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MoviesLsit from './MoviesList';
import { Movies, MovieDetails as MovieDetailsApi } from './Api';
import MovieDetails from './movieDetails';

import './style.css';

const MoviesView = () => {
    const [list, setList] = useState([]);
    const [isLoading, setLoder] = useState(false);
    const [isDataLoading, setDataLoder] = useState(false);
    const [data, setData] = useState(null);
    const handleSubmit = async (term) => {
        setLoder(true);
        const result = await Movies(term);
        setLoder(false);
        setList(result)
    }

    const handleClick = async (id, country) => {
        setDataLoder(true)
        const result = await MovieDetailsApi(id, country);
        setData(result);
        setDataLoder(false)
        console.log(result);
    }

    return (
        <div className='container'>
            <div className='ngh'>
                <SearchBar onSubmit={handleSubmit} />
                <MoviesLsit list={list} isLoading={isLoading} handleClick={handleClick} />

            </div >
            <div>
                <MovieDetails data={data} isDataLoading={isDataLoading} />
            </div>
        </div>
    )
}

export default MoviesView;