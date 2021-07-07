import React from 'react';
import List from '../List/List';
import './styles.css';

export interface IProps {
    heading: string;
    btntype: string;
}

function BookDataHeader({heading, btntype}:IProps) {
    return (
        <div className="results-section p-grid p-container">
            <div className="p-col-12">
                <div className="search-results card">
                    <div className="p-orderlist p-orderlist-list-container">
                        <div className="p-orderlist-header">   
                            <h2>{heading}</h2>   
                        </div>
                    </div> 
                    <List btntype={btntype}/>
                </div>
                
            </div>
        </div>
    )
}

export default BookDataHeader


