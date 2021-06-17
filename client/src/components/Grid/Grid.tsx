import React from 'react';
import Search from '../Search/Search'
import './styles.css';

function Grid() {
    return (
        <div className="p-grid p-container">
            <div className="p-col p-col-align-start">
                <h3>Book Search</h3>
                <Search />
            </div>
        </div>
    )
}

export default Grid

