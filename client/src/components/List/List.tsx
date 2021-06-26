import React from 'react';
// import { OrderList } from 'primereact/orderlist';
import ViewBtn from '../Button/ViewBtn';
import SaveBtn from '../Button/SaveBtn';
import './styles.css';

function List() {
    return (
        <div className="search-results-list">
            <ul className="p-orderlist-list">
                <li className="p-orderlist-item">
                    <div className="product-item">
                        <div className="p-grid">

                            <div className="p-col-8">
                                <div className="product-list-detail">
                                    <h4 className="p-mb-2">Harry Potter's Bookshelf</h4>
                                    <p>The Great Book's behind the Hogwarts Adventures</p>
                                    <p>Written by John Somebody</p>
                                </div>
                            </div>
                            <div className="p-col-4">
                                <div className="product-list-action">
                                    <ViewBtn />
                                    <SaveBtn />
                                </div>
                            </div>
                            <div className="p-col-2">
                                <div className="image-container">
                                    Image goes here
                                </div>
                            </div>
                            <div className="p-col-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac habitasse. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Enim ut tellus elementum sagittis vitae et leo. Posuere morbi leo urna molestie at elementum eu. Scelerisque viverra mauris in aliquam sem. Duis ultricies lacus sed turpis tincidunt id aliquet. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Augue mauris augue neque gravida. Libero volutpat sed cras ornare arcu dui vivamus arcu. Gravida cum sociis natoque penatibus et. Amet cursus sit amet dictum sit amet justo donec.</p>
                            </div>


                        </div>
                        
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default List

