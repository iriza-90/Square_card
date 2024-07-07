import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header>
        <div class="header-left">
            <div class="logo">Square Card</div>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <div class="header-right">
            <img src='/images/search.svg' width={20} height={20} alt='Search something' />
            <button class="sign-up">Sign Up</button>
        </div>
    </header>
  );
};

export default Header;