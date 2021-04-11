import React from "react";
import "./contacts.css"
import {useSelector} from "react-redux";
import Telegram from './1024px-Telegram_2019_Logo.svg.png';
import Viber from './viber_PNG25.png';
import Whatsapp from './whatsapp_PNG21.png'
import Instagram from './1024px-Instagram_icon.png'

export const Contacts = () => {
    const lang = useSelector(state=>state);
    return(
        <>
            <h3 className='h3' style={{"margin": '50px'}}>
                {lang === 'RU' ? 'Консультации по телефону: +380637466673 (пн-сб с 9.00 до 21.00)'
                    : lang === 'EN' ? ''
                        : 'Консультації по телефону: +380637466673 (пн-сб с 9.00 до 21.00)'}
            </h3>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                <a href="viber://add?number=380637466673"><img className='img' src={Viber} alt=''/></a>
                <a href="https://wa.me/380637466673"><img className='img' src={Whatsapp} alt=''/></a>
                <a href="https://t.me/centuriesmemory"><img className='img' src={Telegram} alt=''/></a>
                <a href="https://www.instagram.com/memory_of_centuries/"><img className='img' src={Instagram} alt=''/></a>
            </div>
            </div>
            <h3 className='h3' style={{"margin": '50px'}}>
                Email: centuries.memory@gmail.com
            </h3>
        <h3 className='h3' style={{"margin": '50px'}}>
            {lang === 'RU' ? 'Напишите нам и мы обязательно свяжемся с Вами:'
                : lang === 'EN' ? 'Send your contacts and we\'ll be back for you shortly:'
                    : 'Напишіть нам і ми обов\'язково зв\'яжемося з Вами:'}
        </h3>
        <div style={{'display': "flex", 'justifyContent': "center"}}>
            <form id="form" action="//formspree.io/centuries.memory@gmail.com"
            method="POST">
                <input className="form-control" type="text" name="name" placeholder=
                    {lang === 'RU' ? 'Ваше имя'
                        : lang === 'EN' ? 'Your name'
                            : 'Ваше ім\'я'}
                       required /><br/>
                <input className="form-control" type="text" name="phone" placeholder=
                    {lang === 'RU' ? 'Телефон'
                        : lang === 'EN' ? 'Phone'
                            : 'Телефон'}
                       required /><br/>
                <input className="form-control" type="text" name="mail" placeholder="Email" required /><br/>
                <textarea rows='6' className="form-control message" name="message" placeholder=
                    {lang === 'RU' ? 'Сообщение'
                        : lang === 'EN' ? 'Message'
                            : 'Повідомлення'}/><br/>
                <button className="btn btn-primary">
                    {lang === 'RU' ? 'Отправить'
                        : lang === 'EN' ? 'Send'
                            : 'Відправити'}
                </button>
            </form>
        </div>
            </>
    )
}