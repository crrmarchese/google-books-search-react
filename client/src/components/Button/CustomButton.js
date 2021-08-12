import React from 'react';
import { Button } from 'primereact/button';
import './styles.css';

function CustomButton({btntype, iconName, link, btnFunction, id, book}) {
    return (
        <>
        {btntype === "View" ? (
            <a href={link} target="_blank" rel="noreferrer">
               <Button label={btntype} icon={iconName} role="button" className={btntype === "Delete" ? "btn-delete" : " "} /> 
            </a>
        ) : (
                <Button label={btntype} icon={iconName} role="button" className={btntype === "Delete" ? "btn-delete" : " "} onClick={btntype==="Delete" ? () => btnFunction(id) : () => btnFunction(book)} />
        )

        }
        </>
    )
}

export default CustomButton
