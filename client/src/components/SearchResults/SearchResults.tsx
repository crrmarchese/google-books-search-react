import React from 'react';
import ResultsList from '../ResultsList/ResultsList';
import './styles.css';

function SearchResults() {
    return (
        <div className="p-grid p-container">
            <div className="p-col-12">
                <div className="card">
                    <div className="p-orderlist p-orderlist-list-container">
                        <div className="p-orderlist-header">
                        <h2>Results</h2>
                        </div>
                    </div> 
                    <ResultsList />
                </div>
                
            </div>
        </div>
    )
}

export default SearchResults


