import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Grid from '../components/Grid/Grid';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';

function SearchBooks() {
    return (
        <div>
            <Jumbotron />
            <Grid />
            <BookDataHeader /> 
        </div>
    )
}

export default SearchBooks
