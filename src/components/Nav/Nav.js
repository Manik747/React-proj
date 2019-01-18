import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    {'  |  '}
                    <Link to='/about'>About</Link>
                    {'  |  '}
                    <Link to='/contact'>Contact</Link>
                    {'  |  '}
                    <Link to='/users/register'>Register</Link>
                    {'  |  '}
                    <Link to='/users/login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};
