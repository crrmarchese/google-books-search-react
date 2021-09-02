import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Grid from '../components/Grid/Grid';
import BookDataHeader from '../components/BookDataHeader/BookDataHeader';
import { Dialog } from 'primereact/dialog';
import API from "../utils/API";


function SearchBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
     // If there is an error with deleting
     const [error, setError] = useState(false);
     // Modal visibility
     const [visible, setVisible] = useState(false);
     // Is there a pending a request?
     const [loading, setLoading] = useState(false);


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function addBook(book) {
        setLoading(true);
        setVisible(true);
        API.saveBook(book)
            .then(res => {
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err);
        });
    
    };

    // Search book-when search button is clicked, the searchBook axios function is called 
    function searchBook(e) {
        e.preventDefault();
        API.searchBook({searchRequest:searchTerm})
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                console.log(err);
        });
    
    };

     // Hide modal
     const onHide = () => {
        setVisible(false);
    }

    return (
        <>
            <Jumbotron />
            <Grid searchTerm={searchTerm} handleChange={setSearchTerm} searchBook={searchBook}/>
            <BookDataHeader heading="Results" btntype="Save" iconName="pi pi-save" booklist={books} btnFunction={ addBook }/>
            <Dialog header="Save Confirmation" visible={visible} onHide={onHide} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}}>
                { loading ? "Wait your book is being saved" : error ? "Your book was not saved." : "Your book was saved!"}
            </Dialog>
        </>
    )
}

export default SearchBooks
