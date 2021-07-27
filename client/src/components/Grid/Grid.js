import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './styles.css';

function Grid({searchTerm, handleChange}) {
    return (
        <div className="p-grid p-container">
            <div className="p-col p-col-align-start">
                <h2>Book Search</h2>
                <SearchBar searchTerm={searchTerm} handleChange={handleChange}/>
            </div>
        </div>
    )
}

export default Grid

