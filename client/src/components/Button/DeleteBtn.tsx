import React from 'react';
import { Button } from 'primereact/button';
import './style.css';

function DeleteBtn() {
    return (
        <>
          <Button label="Delete" icon="pi pi-trash" role="button" className="btn-delete" />  
        </>
    )
}

export default DeleteBtn
