import React from "react";
import '../Main/Main.css'
// import {useSelector} from "react-redux";

export const Info = () => {
    // const lang = useSelector(state=>state);
    return(
        <div className='frame-text'>
        <div className='Main'>
            {/*<p className='general general-second'>{lang === 'RU' ? 'Основными источниками наших исследований являются книги записи актов гражданского состояния (до 1918 г. – метрические книги), исповедные росписи православных церквей, официальные переписи населения (ревизские сказки), поземельные переписи, писцовые книги и другие архивные документы.'*/}
            {/*    : lang === 'EN' ? 'The main sources of our research are civil registry books (until 1918 - metric books), confessional records’ books of Orthodox churches, official censuses (revision books), land censuses, track records and other archival documents.'*/}
            {/*    : 'Основними джерелами наших досліджень є книги реєстрації актів цивільного стану (до 1918 р - метричні книги), сповідні розписи православних церков, офіційні переписи населення (ревізькі казки), поземельні переписи, послужні списки та інші архівні документи.'}*/}
            {/*</p>*/}
            {/*<p className='general general-second'>*/}
            {/*{lang === 'RU' ? 'Литература:'*/}
            {/*    : lang === 'EN' ? 'Literature:' :*/}
            {/*        'Література:'*/}
            {/*}*/}
            {/*</p>*/}
            <ul className='general-second general' style={{textAlign: 'left', listStyleType: 'decimal'}}>
                <li>
                    Helmut T. Huebert. Mennonite Estates in Imperial Russia. Second Edition (revised and expanded). – Winnipeg, Canada: Springfield Publishers, 2008. – 460 p.
                </li>
                <li>
                    Pułaski Kazimierz. Kronika polskich rodów szlacheckich Podola, Wołynia i Ukrainy: monografie i wzmianki. - Brody: nakł. i dr. F. West; Warszawa: E. Wende, 1911.
                </li>
                <li>
                    Андриевский Ф. Н. Статистический справочник Таврической губернии. [Статистический очерк Таврической губернии со списком населенных пунктов по уездам]. – Симферополь, 1915. – 1202 с.
                </li>
                <li>
                    Антонов А. В., Баранов К. В. Акты служилых землевладельцев XV – начала XVII века. В 4-х т. – М.: Изд. “Археографический центр”, 1997-2008.
                </li>
                <li>
                    Архів Коша Нової Запорозької Січі. 1734 – 1775 : корпус документів. В 8 т. / ред. кол. П. С. Сохань [та ін.]; Центр. держ. істор. арх. України, НАН України, Ін-т укр. археографії та джерелознавства ім. М. С. Грушевського. – К., 1998-2019.
                </li>
                <li>
                    Багалей Д. И. Материалы для истории колонизации и быта Харьковской и отчасти Курской и Воронежской губерний. – Харьков: Тип. К.Л. Счасни, 1890. – 456 с.
                </li>
                <li>
                    Белокуров С. А. Разрядные записи за Смутное время (7113-7121 гг.). – М.: Типография штаба Московского военного округа, 1907.
                </li>
                <li>
                    Бойко Д. А. Материалы к истории Екатеринославского дворянства. 1784-2014. – Александровск, 2014. – 652 с.: 19 л. ил.
                </li>
                <li>
                    Буганов В. И. Разрядные книги последней четверти XV - начала XVII в. / Акад. наук СССР. Ин-т истории. – Москва: Изд-во Акад. наук СССР, 1962. – 263 с.
                </li>
                <li>
                    Бычкова М. Е. Русско-литовская знать XV-XVII веков. Источниковедение. Генеалогия. Геральдика. – М.: Квадрига, 2012. — 368 с.
                </li>
                <li>
                    Волков С. В. Офицеры флота и морского ведомства: Опыт мартиролога. – Москва: Русский путь, 2004.
                </li>
                <li>
                    Высшие чины Российской империи (22.10.1721 – 2.03.1917) : биографический словарь. В 4-х т. / сост. Е. Л. Потемкин. – Москва, 2019.
                </li>
                <li>
                    Гермоген (К. П. Добронравин). Таврическая епархия / [Соч.] Гермогена, еп. Псковского и Порховского, бывшего Таврического и Симферопольского. – Псков: тип. Губ. правл., 1887. - [2], IV, 520 с., 1 л. табл.; 24.
                </li>
                <li>
                    Демидова Н. Ф. Служилая бюрократия в России XVII века (1625 – 1700). Биографический справочник. – М.: Памятники исторической мысли, 2011. – 718 с.
                </li>
                <li>
                    Джерела з історії Полтавського полку. Середина XVII - XVIII ст. Т. І: Компути та ревізії Полтавського полку. Компут 1649 р. Компут 1718 р. / Упорядкування, підготовка до друку, вступна стаття В.О. Мокляка. – Полтава: АСМІ, 2007. – 400 с., іл.
                </li>
                <li>
                    Зимин А. А. (ред.) / Тысячная книга 1550 и Дворовая тетрадь 50-х гг. XVI в. – М.-Л.: Изд-во Академии Наук СССР, 1950. – 449 с.
                </li>
                <li>
                    Именной список убитым, раненым и без вести пропавшим нижним чинам. - Петербург: Военная тип. имп. Екатерины Великой, 1914-1920.
                </li>
                <li>
                    Историческая летопись курского дворянства : Т. 1 / сост. А. А. Танков. – М., 1913. - [2], II, 476, 156 с.; 21 л. ил.
                </li>
                <li>
                    История городов и сел Украинской ССР: В 26 т. / АН УССР. Ин-т истории; Гл. редкол.: П. Т. Тронько (пред.) и др. – К.: Гл. ред. Укр. сов. энцикл. АН УССР, 1968-1974.
                </li>
                <li>
                    Кабузан В. М. Заселение Новороссии (Екатеринославской и Херсонской губ.) в XVIII – первой половине XIX века (1719-1858 гг.) / АН СССР; худож. Г. А. Астафьева. – М. : Наука, 1976. – 308 с.
                </li>
                <li>
                    Кобрин В. Б. Материалы генеалогии княжеско-боярской аристократии XV-XVI вв. – М.: Российский государственный гуманитарный университет, 1995. – 243 с.
                </li>
                <li>
                    Коваль А. П. Знайомі незнайомці: походження назв поселень України. – Київ: Либідь, 2001. – 300, [2] с.
                </li>
                <li>
                    Кривошея В.В., Кривошея І.І., Кривошея О.В. Неурядова старшина Гетьманщини. – К.: «Стилос», 2009. – 432 с.
                </li>
                <li>
                    Мазепина книга / Упор. та вступна стаття І. Ситого. – Чернігів: ЦНТЕІ, 2005. – 524 с.
                </li>
                <li>
                    Малороссийские переписные книги 1666 года / С послесл. Ал. Лазаревского. – Киев : тип. Имп. Унив. св. Владимира, 1900. - [2], 109 с.
                </li>
                <li>
                    Материалы для историко-статистического описания Екатеринославской Епархии. Церкви и приходы прошедшего XXVIII столетия : Вып. 1-2. – Екатеринослав : Тип. Я. М. Чаусского, 1880. – 2 т.
                </li>
                <li>
                    Милорадович Г. А. Родословная книга черниговского дворянства. В 2 т.  – СПб. : Губ. тип., 1901.
                </li>
                <li>
                    Модзалевский В. Л. Малороссийский родословник. В 5 т. – Киев, 1908-1914.
                </li>
                <li>
                    Никулов А. П. Оскольские древности. В 2 т. – Ст. Оскол: ТНТ, 2004. – 816 с.
                </li>
                <li>
                    Описи Степової України останньої чверті XVIII – початку XIX століття / Упорядн. А. Бойко. Запорізьке наукове товариство ім. Я. Новицького; Інститут української археографії та джерелознавства ім. М. С. Грушевського НАН України – Запорізьке відділення; Східний інститут українознавства ім. Ковальських – Запорізька філія. – Запоріжжя, 2009. – 434 с.
                </li>
                <li>
                    Памятники южновеликорусского наречия. Отказные книги / Отв. ред. С. И. Котков. – М.: Наука, 1977. – 360 с.
                </li>
                <li>
                    Писцовые книги Московского государства / под ред. Н. В. Калачова; изд. Императорского русского географического общ-ва. - Санкт-Петербург: в типографии Второго отделения Собственной Е. И. В. Канцелярии, 1872-1895.
                </li>
                <li>
                    Присяга Війська Запорозького Низового 1762 року / Упорядник та передмова Іван Синяк. – Чернігів : Видавець Лозовий В.М., 2015. – 240 с.
                </li>
                <li>
                    Присяжні книги 1654 р. Білоцерківський та Ніжинський полки. / Упорядники: Ю. Мицик, М. Кравець. — Київ, 2003. — 350 с.
                </li>
                <li>
                    Ревізія Чернігівського полку 1732 року / Упор. та вступ Ігор Ситий, Сергій Горобець, передмова Ірина Кривошея. – Чернігів : Видавець Лозовий В. М., 2014. – 720 с.
                </li>
                <li>
                    Реестра всего Войска Запорожского послѣ Зборовскаго договора с королемъ Польскимъ Яномъ Казимиромъ составленные 1649 года, октября 16 дня / Изданные по подлиннику О.М.Бодянскимъ. — Москва: Изданіе Императорскаго Общества Исторіи и Древностей Российскіхъ при Московскомъ Университетѣ, 1875.
                </li>
                <li>
                    Родословная книга потомственных дворян Харьковской губернии / Авторы-составители: Гнездило О.С., Момот Л.М., Панасенко Л.А., Парамонов А.Ф., Сафонова Е.В. – Харьковский частный музей городской усадьбы, 2010.
                </li>
                <li>
                    Русская генеалогия: [Энцикл. справ.] / Бычкова М. Е. – М.: Богор. печатник, 1999. – 229 с.
                </li>
                <li>
                    Русское служилое дворянство второй половины XVIII века (1764-1795). Список по Месяцесловам / Составитель В. П. Степанов – СПб.: Академический проект, 2003.
                </li>
                <li>
                    Списки населенных мест Российской империи, составленные и издаваемые Центральным статистическим комитетом Министерства внутренних дел. В 43 т. – СПб.: изд. Центр. стат. ком. Мин. внутр. дел, 1861-1885.
                </li>
                <li>
                    Список генералитету по старшинству. – Санкт-Петербург: Воен. тип., 1809-1916.
                </li>
                <li>
                    Список дворян, внесенных в дворянскую родословную книгу Полтавской губернии за 1802-1907 годы / Ред. А.А. Шумков. Сост. В.В. Коротенко, И.Г. Рыклис, М.Ю. Чиркова, А.И. Якименко. – М.: Старая Басманная, 2013. – 668 с.
                </li>
                <li>
                    Список дворян, внесенных в родословную книгу Подольской губернии. – Каменец-Подольский: Изд. Подольского Дворянского Депутатского Собрания, 1897. – 377 с.
                </li>
                <li>
                    Список дворян Киевской губернии / Киев. Дворян. Депутат. Собр. – Киев: Тип. 1-й Киев. Артели Печ. Дела, 1906. – XVI, 327 c.
                </li>
                <li>
                    Список землевладельцев и арендаторов Волынской губернии, во владении коих находится не менее 50 десятин земли. – Житомир: Волынский губ. стат. ком., 1913 [4]. – 270 c.
                </li>
                <li>
                    Список населенных мест Екатеринославской губернии / Оценочно-стат. отд-ние Екатеринослав. губ. земской управы. – Екатеринослав : Тип. губ. земства, 1911
                </li>
                <li>
                    Список населенных мест Киевской губернии / Издание Киевского губернского статистического коммитета. – Киев: Типография Ивановой, 1900. – 1976 c.
                </li>
                <li>
                    Список населенных мест Полтавской губернии с кратким географическим очерком губернии / Издание Полтавского губернского статистического комитета. — Полтава: Типография Подземского, 1912. — 517 с.
                </li>
                <li>
                    Список населенных мест Херсонской губернии : (по данным Всероссийской сел.-хоз. переписи 1916 г.). – Александрия : Тип. Ф. Х. Райхельсона, 1917. - [2], 377 с.
                </li>
                <li>
                    Список населенных мест Черниговской губернии, имеющих не менее 10 жителей, по данным за 1901 год / Чернигов. губ. стат. комитет. – Чернигов : Тип. губ. правления, 1902. – 188 с.
                </li>
                <li>
                    Теодорович Н. И. Историко-статистическое описание церквей и приходов Волынской епархии. – Почаев, 1888-1903. - 5 т.
                </li>
                <li>
                    Труды Подольского епархиального историко-статистического комитета. – Вып. 9: Приходы и церкви Подольской епархии / Под ред. Е. Сецинского. – Каменец-Подольск, 1901. – 1267 с.
                </li>
                <li>
                    Филарет (Д. Г. Гумилевский). Историко-статистическое описание Харьковской Епархии (издание 1852 г.). – Том 1. – Х., 2005. – 336 с.
                </li>
                <li>
                    Швидько Г. К. Компут і ревізія Миргородського полку 1723 р. – Дніпропетровськ: Національний гірничий університет, 2004. – 335 с.
                </li>
                <li>
                    Шумаков С.А. Сотницы (1537-1597 гг.), грамоты и записи (1561-1696 гг.). – М.: изд. Императорскаго о-ва истории и древностей российских при Московском ун-те, 1902. – VIII, 272 с.
                </li>

            </ul>
        </div>
        </div>
    )
}