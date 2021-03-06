import React from 'react';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./styles.css";

function SearchBar({searchTerm, handleChange, searchBook}) {
    return (
        <div>
            <form>
                <div className="p-field p-fluid">
                        <label htmlFor="bookname">Book</label>
                        <InputText id="bookname" type="text" value={searchTerm} onChange={(event) => handleChange(event.target.value)}/>
                </div>
                <div className="p-d-flex p-jc-end search-container">
                        <Button label="Search" icon="pi pi-search" className="gb-btn-search" onClick={searchBook} />
                </div>
            </form>
            
        </div>
    )
}

export default SearchBar
