import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';
import { Dialog } from 'primereact/dialog';
import API from "../utils/API";

function SavedBooks() {
   // Setting our component's initial state
   // First param is the variable, second param is the function to update the variable (first param)
    const [books, setBooks] = useState([]);
    // If there is an error with deleting
    const [error, setError] = useState(false);
    // Modal visibility
    const [visible, setVisible] = useState(false);
    // Is there a pending a request?
    const [loading, setLoading] = useState(false);
    


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

    // Hide modal
    const onHide = () => {
        setVisible(false);
    }

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        setLoading(true);
        setVisible(true);
        API.deleteBook(id)
        .then(res => {
           setLoading(false);
            loadBooks();
        })
        .catch(err => {
            setLoading(false);
            setError(true);
            console.log(err);
        });
    }

    return (
        <>
            <Jumbotron />
            <BookDataHeader heading="Saved Books" btntype="Delete" iconName="pi pi-trash" booklist={books} btnFunction={deleteBook} /> 
            <Dialog header="Delete Confirmation" visible={visible} onHide={onHide} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}}>
                { loading ? "Wait your book is being deleted" : error ? "Your book was not deleted." : "Your book was deleted!"}
            </Dialog>
        </>
    )
}

export default SavedBooks
