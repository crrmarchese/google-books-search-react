import React from 'react';
import { Button } from 'primereact/button';
import './style.css';

function CustomButton({btntype, iconName}) {
    return (
        <>
            <Button label={btntype} icon={iconName} role="button" className={btntype === "delete" ? "btn-delete" : " "} />
        </>
    )
}

export default CustomButton
