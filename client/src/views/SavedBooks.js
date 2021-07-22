import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';

function SavedBooks() {
    return (
        <>
            <Jumbotron />
            <BookDataHeader heading="Saved Books" btntype="Delete" iconName="pi pi-trash" /> 
        </>
    )
}

export default SavedBooks