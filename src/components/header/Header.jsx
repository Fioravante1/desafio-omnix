import React from 'react';
import style from './header.module.css';
import logo from '../../Assets/Logo.png';

function Header() {
  return (
    <header className={style.header__container}>
      <img src={logo} alt="mais veloz omnix" />
    </header>
  );
}

export default Header;
