import React from 'react';
import { Breadcrumbs, Item } from '@adobe/react-spectrum'

function AddBreadcrumbs(pathsOb) {
    //format pathsOb example
    // pathsOb = [
    //     { id: 1, label: 'Home' },
    //     { id: 2, label: 'Trendy' },
    //     { id: 3, label: 'March 2020 Assets' }
    // ];
    pathsObDefault = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'Default' }
    ];
    let newPaths = (pathsOb.length > 0) ? pathsOb : pathsObDefault;

    if (typeof newPaths === 'object') {

        let [pathId, setPathId] = React.useState(null);
        return (
            <div>
                <Breadcrumbs onAction={(a) => setFolderId(a)}>
                    {newPaths.map(f => <Item key={f.id}>{f.label}</Item>)}
                </Breadcrumbs>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default AddBreadcrumbs;