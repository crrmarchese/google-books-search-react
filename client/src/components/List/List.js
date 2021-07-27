import React from 'react';
import Card from '../Card/Card';
import './styles.css';


function List({btntype, iconName, booklist}) {
    return (
        <div className="results-list">
            <ul className="p-orderlist-list">
                    {booklist.map(book => 
                        <Card key={book._id} btntype={btntype} iconName={iconName} book={book}  />
                        )
                    }
            </ul>
            
        </div>
    )
}

export default List

