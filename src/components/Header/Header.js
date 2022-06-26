import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to='/Register'>Register</Link>
                <span className='user-name'>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button className='sign-out-btn' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/Login'>Login</Link>
                }
            </nav>
        </div >
    );
};

export default Header;