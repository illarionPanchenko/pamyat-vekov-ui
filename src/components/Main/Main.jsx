import React from "react";
import './Main.css'
import Photo from "./photo.JPG";
import {useSelector} from "react-redux";

export const Main = () => {
    const lang = useSelector(state=>state);
    return(
        <div>
            <div style={{'textAlign': 'left'}}>
            <img className='photo' src={ Photo } alt=""/>
            <div className='frame'>
            </div>
            </div>
            <div className='frame-text'>
            <div className='Main'>
            <p className='slogan'>
                {lang === 'RU' ? 'Мы строим мосты между прошлым и будущим'
                    : lang === 'EN' ? 'We build bridges between past and future'
                        : 'Ми будуємо мости між минулим і майбутнім'}
            </p>
            <p className='general general-second'>
                {lang === 'RU' ? 'Память веков – это генеалогический центр, осуществляющий профессиональные исследования по изучению родословных и составлению генеалогических древ. Более 10 лет наша команда квалифицированных специалистов из различных регионов Украины занимается предоставлением широкого спектра услуг, начиная от поиска информации об одном человеке (событии) и заканчивая полным генеалогическим исследованием рода до XVII-XVIII вв.'
                    : lang === 'EN' ? 'Memory of Centuries is a genealogy center specializing in professional research of archival documents and family trees compilation. For more than 10 years our team of qualified specialists from different regions of Ukraine has been providing a wide range of services, from searching for information about one person (event) to a complete genealogical research of the genus up to the XVII-XVIII centuries.'
                        : '«Пам\'ять віків» – це генеалогічний центр, що проводить професійні  дослідження з вивчення родоводу та встановлення родинних зв’язків. Більше 10 років наша команда кваліфікованих фахівців з різних регіонів України займається наданням широкого спектру послуг, починаючи від пошуку інформації про одну людину (подію) і закінчуючи повним генеалогічним дослідженням роду до XVII-XVIII ст.' }
            </p>
            <p className='general general-second'>
                {lang === 'RU' ? 'Еще 150 лет назад люди верили, что необходимо знать как минимум 8 поколений своего рода для защиты его от исчезновения на несколько столетий вперед. Сейчас возможность узнать свои корни есть практически у каждого из нас. Путем привлечения архивных документов мы поможем Вам выяснить, где жили Ваши предки, чем занимались, в каких войнах принимали участие и многое другое.'
                    : lang === 'EN' ? 'Just 150 years ago people believed that it was necessary to know at least 8 generations of a family to protect it from extinction for several centuries in advance. Nowadays everyone has the opportunity to know their roots. Using archival documents, we will help you find out where your ancestors lived, what were their professions, in which wars they took part and much more.'
                        : 'Ще 150 років тому люди вірили, що необхідно знати як мінімум 8 поколінь свого роду для захисту його від зникнення на кілька століть вперед. Зараз можливість дізнатися свої коріння є практично у кожного з нас. Шляхом залучення архівних документів ми допоможемо Вам з\'ясувати, де жили Ваші предки, чим займалися, в яких війнах брали участь і багато іншого.'}
                    </p>
            <p className='general general-second'>
                {lang === 'RU' ? '«Память веков» проводит исследования в центральных и региональных архивах Украины и России, а именно: ЦГИАК (Центральный государственный исторический архив Украины, г. Киев), РГАДА (Российский государственный архив древних актов), РГИА (Российский государственный исторический архив, г. Санкт-Петербург), государственные архивы АР Крым, Белгородской, Винницкой, Воронежской, Днепровской, Донецкой, Житомирской, Запорожской, Кировоградской, Курской, Николаевской, Полтавской, Сумской, Харьковской, Херсонской, Хмельницкой, Черниговской, Черкасской областей.'
                    : lang === 'EN' ? 'Memory of Centuries conducts research in central and regional archives of Ukraine and Russia, namely: Central State Historical Archives of Ukraine (Kiev), Russian State Archive of Ancient Acts (Moscow), Russian State Historical Archive (St. Petersburg), State archives of the Crimea, Belgorod, Vinnytsya, Voronezh, Dnipro, Donetsk, Zaporozhye, Zhytomyr, Kirovograd, Kursk, Nikolaev, Poltava, Sumy, Kharkov, Kherson, Khmelnitsky, Chernigov, Cherkasy regions.'
                        : '«Пам\'ять віків» проводить дослідження в центральних і регіональних архівах України та Росії, а саме: ЦДІАК (Центральний державний історичний архів України, м. Київ), РДАДА (Російський державний архів давніх актів, м. Москва), РДІА (Російський державний історичний архів, м. Санкт-Петербург), державні архіви АР Крим, Бєлгородської, Вінницької, Воронезької, Дніпровської, Донецької, Житомирської, Запорізької, Кіровоградської, Курської, Миколаївської, Полтавської, Сумської, Харківської, Херсонської, Хмельницької, Чернігівської, Черкаської областей.  ' }
                    </p>
            <p className='general general-second'>
                    {lang === 'RU' ? 'Наши специалисты по генеалогии, истории и краеведению всегда готовы проконсультировать Вас по любому интересующему вопросу. Индивидуальный подход и достоверность предоставленной нами информации гарантируем.'
                        : lang === 'EN' ? 'Our experts in genealogy and history are always ready to advise you on any matter you are interested in. An individual approach and the authenticity of the information we provide are guaranteed.'
                            : 'Наші фахівці з генеалогії, історії та краєзнавства завжди готові проконсультувати Вас з будь-якого питання. Індивідуальний підхід і достовірність наданої нами інформації гарантуємо.' }
                        </p>
            <p className='general general-second'>
                {lang === 'RU' ? 'Изучение истории семьи – верный путь к сохранению памяти рода, формированию личности и характера человека. Вы готовы пройти этот путь вместе с нами?'
                    : lang === 'EN' ? 'Studying family history is the best way to preserve the memory of your ancestors for future generations. Are you ready to go with us along this path?'
                        : 'Вивчення історії сім\'ї - найкращий шлях до збереження пам\'яті роду, формування особистості та характеру людини. Ви готові пройти цей шлях разом з нами?' }
                    </p>
        </div>
        </div>
        </div>
    )
}
