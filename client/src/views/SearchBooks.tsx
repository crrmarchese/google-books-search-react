import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Grid from '../components/Grid/Grid';
import SearchResults from '../components/SearchResults/SearchResults';

function SearchBooks() {
    return (
        <div>
            <Jumbotron />
            <Grid />
            <SearchResults /> 
        </div>
    )
}

export default SearchBooks
