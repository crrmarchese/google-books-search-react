import React from 'react';
import CustomButton from '../Button/CustomButton';

function Card({ book, btntype, iconName }) {
    return (
        <>
        <li className="p-orderlist-item">
            <div className="product-item">
                <div className="p-grid">

                    <div className="p-col-8">
                        <div className="product-list-detail">
                            <h4 className="p-mb-2">{book.title}</h4>
                            {book.subtitle && <p>{book.subtitle}</p>}
                            <p>Written by {book.authors}</p>
                        </div>
                    </div>
                    <div className="p-col-4">
                        <div className="product-list-action">
                            <CustomButton btntype="View" iconName="pi pi-eye" link={book.link} />
                            <CustomButton btntype={btntype} iconName={iconName} />

                        </div>
                    </div>
                    <div className="p-col-2">
                        <div className="image-container">
                            <img src={book.image} />
                        </div>
                    </div>
                    <div className="p-col-10">
                        <p>{book.description}</p>
                    </div>


                </div>

            </div>
        </li>
        </>
    )
}

export default Card
