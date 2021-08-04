import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Grid from '../components/Grid/Grid';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';
import API from "../utils/API";


function SearchBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function addBook(book) {
        
        API.saveBook(book)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    
    };

    // Search book
    function searchBook(e) {
        e.preventDefault();
        API.searchBook({searchRequest:searchTerm})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    
    };

    return (
        <>
            <Jumbotron />
            <Grid searchTerm={searchTerm} handleChange={setSearchTerm} searchBook={searchBook}/>
            <BookDataHeader heading="Results" btntype="Save" iconName="pi pi-save" booklist={books} btnFunction={ addBook }/> 
        </>
    )
}

export default SearchBooks
