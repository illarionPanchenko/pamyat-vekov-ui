import React from "react";
import './Header.css'
import {useSelector, useDispatch} from "react-redux";
import { action } from "../../index";
import Fua from './fua.png'
import Fru from './fru.png'
import Fgb from './fgb.png'
import { Link } from "react-router-dom";

export const Header = () => {

    const lang = useSelector(state=>state);
    const dispatch = useDispatch();

    return (
        <div className='HeaderBackGround'>
          <h1 className='Name'>
              {lang === 'RU' ? 'Память Веков' : lang === 'EN' ? 'Memory of Centuries' : 'Пам\'ять Віків'}
          </h1>
            <hr style={{'backgroundColor': 'white'}}/>
            <div className='ul-box'>
          <ul className='ul-left'>
              <div className="dropdown HeaderLi">
                  <button className="btn btn-light dropdown-toggle butt" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {lang}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <p className="dropdown-item"
                         style={{'margin': 0}}
                         onClick={() => dispatch(action('RU'))}
                      >RU<img src={Fru} alt=''className='flag'/></p>
                      <p className="dropdown-item"
                         style={{'margin': 0}}
                         onClick={() => dispatch(action('EN'))}
                      >EN<img src={Fgb} alt='' className='flag'/></p>
                      <p className="dropdown-item"
                         style={{'margin': 0}}
                         onClick={() => dispatch(action('UA'))}
                      >UA<img src={Fua} alt='' className='flag'/>
                      </p>
                  </div>
              </div>
              <Link to="/" className='HeaderLi'>
                  {lang === 'RU' ? 'Главная' : lang === 'EN' ? 'Main' : 'Головна'}
              </Link>
            <Link to="/provinces" className='HeaderLi'>
                {lang === 'RU' ? 'Губернии' : lang === 'EN' ? 'Governorates' : 'Губернії'}
            </Link>
          </ul>
            <ul className='ul-right'>
                <Link to="/services" className='HeaderLi'>
                    {lang === 'RU' ? 'Услуги' : lang === 'EN' ? 'Services' : 'Послуги'}
                </Link>
            <Link to="/info" className='HeaderLi'>
                {lang === 'RU' ? 'Литература' : lang === 'EN' ? 'Literature' : 'Література'}
            </Link>
            <Link to="/contacts" className='HeaderLi'>
                {lang === 'RU' ? 'Контакты' : lang === 'EN' ? 'Contacts' : 'Контакти'}
            </Link>
          </ul>
            </div>
        </div>
    )
};
