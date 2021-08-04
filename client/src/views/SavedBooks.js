import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';
import API from "../utils/API";

function SavedBooks() {
   // Setting our component's initial state
   // First param is the variable, second param is the function to update the variable (first param)
    const [books, setBooks] = useState([])


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

     // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
        .then(res => {
            //console.log(res)
            setBooks(res.data)
        })

        .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return (
        <>
            <Jumbotron />
            <BookDataHeader heading="Saved Books" btntype="Delete" iconName="pi pi-trash" booklist={books} btnFunction={deleteBook} /> 
        </>
    )
}

export default SavedBooks
