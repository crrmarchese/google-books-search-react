import React from 'react';
import { Menubar } from 'primereact/menubar';
import "./styles.css"

function Nav() {
    const start = 'Google Books';

    const items = [
        {label: 'Search', icon: 'pi pi-fw pi-search', url: '/'},
        {label: 'Saved', icon: 'pi pi-fw pi-save', url: '/save'},
    ];
    return (
        <>
            <header className="header">
                <nav className="nav card">
                    <Menubar model={items} start={start} />
                </nav>
            </header>  
        </>
    )
}

export default Nav
