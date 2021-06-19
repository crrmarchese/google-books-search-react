import React from 'react';
import Search from '../Search/Search'
import './styles.css';

function Grid() {
    return (
        <div className="p-grid p-container">
            <div className="p-col p-col-align-start">
                <h2>Book Search</h2>
                <Search />
            </div>
        </div>
    )
}

export default Grid

