import React, {useState, useEffect} from 'react';
import CustomButton from '../Button/CustomButton';
import './styles.css';


function Card({ book, btntype, iconName, btnFunction }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    // Tracking the width of the screen for when the screen width changes so React will rerender
    useEffect(() => {
       const handleResize = () => {
        setScreenWidth(window.innerWidth);
       }
       window.addEventListener("resize", handleResize);
    }, [])

    return (
        <>
        <li className="p-orderlist-item">
            <div className="product-item">
                <div className="p-grid">
{/* Screens greater than 749px, the title and authors will be 8 and buttons will 4 in the same row. Screens smaller than 749px, the title and authors will be full width; the buttons will be rendered after the book information  */}
                    <div className={screenWidth > 749 ? "p-col-8" : "p-col-12"}>
                        <div className="product-list-detail">
                            <h4 className="p-mb-2">{book.title}</h4>
                            {book.subtitle && <p>{book.subtitle}</p>}
                            <p>Written by {book.authors}</p>
                        </div>
                    </div>
                    {screenWidth > 749 && (
                    <div className="p-col-4">
                         <div className="product-list-action">
                             <CustomButton btntype="View" iconName="pi pi-eye" link={book.link} />
                             <CustomButton btntype={btntype} iconName={iconName} btnFunction={btnFunction} id={book._id} book={book} />
 
                         </div>
                     </div>
                    )}
                   
                    <div className="p-col-12 p-md-2">
                        <div className="image-container">
                            <img src={book.image ? book.image : `${process.env.PUBLIC_URL}/no-image-available-sm.png`} alt={book.title}/>
                        </div>
                    </div>
                    <div className="p-md-10">
                        <p>{book.description}</p>
                    </div>
                    {screenWidth <= 749 && (
                    <div className="p-col-12">
                         <div className="product-list-action">
                             <CustomButton btntype="View" iconName="pi pi-eye" link={book.link} />
                             <CustomButton btntype={btntype} iconName={iconName} btnFunction={btnFunction} id={book._id} book={book} />
 
                         </div>
                     </div>
                    )}

                </div>

            </div>
        </li>
        </>
    )
}

export default Card
