import React from 'react';

const Nav = () => {
    return (
       <nav className='bg-purple-800 h-20 flex items-center'>
            <ul className='flex text-white'>
                <li className='mx-9'>Home</li>
                <li className='mx-9'>Order</li>
                <li className='mx-9'>Contact</li>
                <li className='mx-9'>About</li>
                <li className='mx-9'>Log in</li>
            </ul>
       </nav>
    );
};

export default Nav;