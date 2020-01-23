import React from "react";
import './Main.css'
import Photo from "./photo.JPG";

export const Main = () => {
    return(
        <div>
            <div className='frame'>
            <img className='photo' src={ Photo } alt=""/>
            </div>
            <div className='frame-text'>
            <div className='Main'>
            <p className='slogan'>Мы строим мосты между прошлым и будущим</p>
            <p className='general general-first'>
                Память веков – это генеалогический центр, осуществляющий профессиональные исследования по изучению родословных и составлению генеалогических древ. Более 10 лет наша команда квалифицированных специалистов из различных регионов Украины занимается предоставлением широкого спектра услуг, начиная от поиска информации об одном человеке (событии) и заканчивая полным генеалогическим исследованием рода до XVII-XVIII вв.
            </p>
            <p className='general general-second'>
                Еще 150 лет назад люди верили, что необходимо знать как минимум 8 поколений своего рода для защиты его от исчезновения на несколько столетий вперед. Сейчас возможность узнать свои корни есть практически у каждого из нас. Путем привлечения архивных документов мы поможем Вам выяснить, где жили Ваши предки, чем занимались, в каких войнах принимали участие и многое другое.
        </p>
            <p className='general general-second'>
                «Память веков» проводит исследования в центральных и региональных архивах Украины и России, а именно: ЦГИАК (Центральный государственный исторический архив Украины, г. Киев), РГАДА (Российский государственный архив древних актов), РГИА (Российский государственный исторический архив, г. Санкт-Петербург), государственные архивы АР Крым, Белгородской, Воронежской, Днепровской, Донецкой, Запорожской, Кировоградской, Курской, Николаевской, Полтавской, Сумской, Харьковской, Херсонской, Черниговской, Черкасской областей. Более подробный список городов и населенных пунктов, а также некоторые списки фамилий Вы сможете найти в разделе «Губернии». В зависимости от конкретного исследования, данный список может быть расширен.
                </p>
            <p className='general general-second'>
                Наши специалисты по генеалогии, истории и краеведению всегда готовы проконсультировать Вас по любому интересующему вопросу. Индивидуальный подход и достоверность предоставленной нами информации гарантируем.
               </p>
            <p className='general general-second'>
                Изучение истории семьи – верный путь к сохранению памяти рода, формированию личности и характера человека. Вы готовы пройти этот путь вместе с нами?
            </p>
        </div>
        </div>
        </div>
    )
}