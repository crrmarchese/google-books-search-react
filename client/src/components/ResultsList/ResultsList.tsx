import React from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import './styles.css';

function ResultsList() {
    return (
        <div>
            <ul className="p-orderlist-list">
                <li className="p-orderlist-item">
                    <div className="product-item">
                        <div className="p-col-8">
                            <div className="product-list-detail">
                                <h4 className="p-mb-2">Harry Potter's Bookshelf</h4>
                                <p>The Great Book's behind the Hogwarts Adventures</p>
                                <p>Written by John Somebody</p>
                            </div>
                        </div>
                        <div className="p-col-4">
                            <div className="product-list-action">
                                <Button label="View" icon="pi pi-eye" />
                                <Button label="Save" icon="pi pi-save" />
                            </div>
                        </div>
                        
                        <div className="image-container">

                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default ResultsList

