import React, { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom";

class Header extends Component{
  render() {
    return (
        <div className='HeaderBackGround'>
          <h1 className='Name'>Память Веков</h1>
          <ul>
              <Link to="/" className='HeaderLi' style={{opacity: 1}}>Главная</Link>
            <Link to="/provinces" className='HeaderLi'>Губернии</Link>
            <Link to="/services" className='HeaderLi'>Услуги</Link>
            <Link to="/info" className='HeaderLi'>Источники</Link>
            <Link to="/contacts" className='HeaderLi'>Контакты</Link>
          </ul>
        </div>
    )
  }
};

export default Header