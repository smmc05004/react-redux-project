import React from 'react';
import { NavLink } from 'react-router-dom';

// const selectedStyle = {
//     background: "white",
//     color: "slategray"
// }

const MainMenu = () => {
    return (
        <nav className="mainMenu">
            {/* <NavLink to="/" activeStyle={selectedStyle}> */}
            <NavLink to="/">
                [ 메인 페이지 ]
            </NavLink>
            {/* <NavLink to="/Board" activeStyle={selectedStyle}> */}
            <NavLink to="/Board">
                [ 게시판 ]
            </NavLink>
        </nav>
    );
}

export default MainMenu;