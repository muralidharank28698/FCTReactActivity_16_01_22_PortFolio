import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className='header__title'>
                <h1>Product<span>Portfolio</span></h1>
            </div>
            <div className='header__links'>
               <ul className='header__links__ul'>
                   <li><a href=''>About</a></li>
                   <li><a href=''>Products</a></li>
                   <li><a href=''>Review</a></li>
                   <li><a href=''>Blog</a></li>
               </ul>
            </div>
        </div>
    )
}

export default Header
