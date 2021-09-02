import React from 'react';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import './styles.css';

function CustomButton({btntype, iconName, link, btnFunction, id, book}) {
    // Modal message for Delete or Save button

    // const modalMessage = () => {
    //     const [displayModal, setDisplayModal] = useState(false);
    //     const [position, setPosition] = useState('center');
    // }
    
    // const modalFunc = {
    //     'displayModal': setDisplayModal,
    // }

    // const onClickModal = (name, position) => {
    //     modalFunc[`${name}`](true);

    //     if (position) {
    //         setPosition(position);
    //     }
    // }

    // const onHide = (name) => {
    //     modalFunc[`${name}`](false);
    // }

    
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
