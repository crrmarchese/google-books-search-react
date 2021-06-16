import React from 'react';
import { Menubar } from 'primereact/menubar';
import "./styles.css"

function Nav() {
    const start = 'Google Books';

    const items = [
        {label: 'Search', icon: 'pi pi-fw pi-search'},
        {label: 'Saved', icon: 'pi pi-fw pi-save'},
    ];
    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} />
            </div>
        </div>
    )
}

export default Nav
