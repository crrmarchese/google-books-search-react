import React from 'react';
import {InputText} from 'primereact/inputtext';

function Search() {
    return (
        <div>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="bookname">Book</label>
                    <InputText id="bookname" type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Search
