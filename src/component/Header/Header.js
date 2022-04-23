import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
            <Link to='/update' >Update</Link>
        </nav>
    );
};

export default Header;