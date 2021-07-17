import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './styles.css';

function Grid() {
    return (
        <div className="p-grid p-container">
            <div className="p-col p-col-align-start">
                <h2>Book Search</h2>
                <SearchBar />
            </div>
        </div>
    )
}

export default Grid

