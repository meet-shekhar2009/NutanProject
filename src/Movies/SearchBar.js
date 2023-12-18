import React, { useState } from "react";
import { ReactDOM } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }
    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div>
            <h2>Search Movies</h2>
            <form onSubmit={handleFormSubmit}>
                <input className="txt-search" value={term} placeholder="Search movies by title" onChange={handleChange}></input>
                <button className="btn-search">SEARCH</button>
            </form>
        </div>
    )
}
export default SearchBar;
