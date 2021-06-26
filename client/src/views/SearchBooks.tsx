import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Grid from '../components/Grid/Grid';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';

function SearchBooks() {
    return (
        <>
            <Jumbotron />
            <Grid />
            <BookDataHeader heading="Results" /> 
        </>
    )
}

export default SearchBooks
