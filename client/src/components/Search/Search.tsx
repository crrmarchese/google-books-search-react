import React from 'react';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./styles.css";

function Search() {
    return (
        <div>
            <div className="p-field p-fluid">
                    <label htmlFor="bookname">Book</label>
                    <InputText id="bookname" type="text"/>
            </div>
            <div className="p-d-flex p-jc-end">
                    <Button label="Search" icon="pi pi-search" className="gb-btn-search" />
            </div>
        </div>
    )
}

export default Search
