import React from 'react';
import MainMenu from '../menu/Menu';

const MainTemplate = ( {children} ) => {
    return (
        <div className="page">
            <MainMenu />
            {children}
        </div>
    )
}

export default MainTemplate;