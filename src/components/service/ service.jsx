import React from "react";
import '../Main/Main.css'
import './service.css'
import {useSelector} from "react-redux";

export const Service = () => {
    const lang = useSelector(state=>state);
  return(
      <div>
          <div className='frame-text'>
              <div className='Main'>
              <p className='general general-second'>
                  {lang === 'RU' ? 'Стоимость наших услуг зависит от многих факторов, главными из которых являются сохранность архивных документов по исследуемым населенным пунктам, их количество и территориальная разбросанность, а также принадлежность Ваших предков к определенному сословию. Сроки выполнения оговариваются индивидуально после предоставления Вами вводных данных для поиска.'
                      : lang === 'EN' ? 'The price of our services depends on many factors. The main ones are the preservation level of archival documents for the studied settlements, their number and territorial dispersion, as well as your ancestors’ belonging to a certain estate. The deadlines are discussed individually after you give us information for the search.'
                          :'Вартість наших послуг залежить від багатьох факторів, основними з яких є рівень збереження архівних документів у досліджуваних населених пунктах, іх кількість та місця розташування, а також належність Ваших предків до певного стану. Терміни виконання обговорюються індивідуально після надання Вами початкових даних для пошуку.'}
                      </p>
              <p className='general general-second'>
                  {lang === 'RU' ? 'В таблице ниже представлен перечень наших основных услуг с усредненной ценой в евро. Каждое исследование подразумевает собой глубинный поиск до наиболее раннего упоминания о Вашем предке (максимально возможная грубина поиска – XVII век).'
                      : lang === 'EN' ? 'The table below shows a list of our basic services with an average price in euros. Each study involves an in-depth search to the earliest mention of your ancestor (the maximum possible search depth is the 17th century).'
                          :'У таблиці нижче наведено перелік наших основних послуг із середньою ціною в євро. Кожне дослідження являє собою глибинний пошук до найбільш ранньої згадки про Вашого предка (максимально можлива глибина пошуку – XVII ст.)'}
                      </p>
                  <table className="table">
                      <thead>
                      <tr className='general general-second' style={{'textAlign': 'center'}}>
                          <th scope="col">{lang === 'RU' ? 'Услуги'
                              : lang === 'EN' ? 'Services' : 'Послуги'}</th>
                          <th style={{'width': '30%'}} scope="col">{lang === 'RU' ? 'Стоимость (в €)'
                              : lang === 'EN' ? 'Price (€)' : 'Ціна (в €)'}</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Исследование 1 родовой линии (одна фамилия)'
                              : lang === 'EN' ? 'Research of 1 family line (one surname)'
                                          : 'Дослідження 1 родової лінії (одне прізвище)' } </td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>
                              600</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Исследование 3-х родовых линий и больше (цена за одну фамилию)'
                              : lang === 'EN' ? 'Research of 3 and more family lines (the price is for one surname)'
                                  : 'Дослідження 3-х родових ліній і більше (ціна за одне прізвище)'
                          }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>450</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Полное исследование родословной (от 8 поколений)'
                              : lang === 'EN' ? 'Full genealogical research (from 8 generations)'
                                  : 'Повне дослідження родоводу (від 8 поколінь)'}</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>{lang === 'RU' ? 'От 2000' : lang === 'EN' ? 'from 2000' : 'Від 2000'}</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Просмотр одной метрической книги, ревизской сказки или исповедной росписи за 1 год'
                              : lang === 'EN' ? 'Revision of one metric book, population census or confessional records’ book for 1 year'
                                  : 'Перегляд однієї метричної книги, ревізької казки або сповідного розпису за 1 рік'}</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>20</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Исследование вспомогательных документов (за единицу хранения)'
                              : lang === 'EN' ? 'Research of additional documents (per storage unit)'
                                  : 'Дослідження допоміжних документів (за одиницю зберігання)'}</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>10</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Поиск справок в трудовых архивах (за 1 ед.)'
                              : lang === 'EN' ? 'Information search in labor archives (per one)'
                                  : 'Пошук довідок із трудових архівів (за 1 од.)'}</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>50</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Исследование истории населенного пункта'
                              : lang === 'EN' ? 'Research of the settlements’ history'
                                  :'Дослідження історії населеного пункту' }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>300</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'Отекстовка архивных документов (за 1 л.):'
                              : lang === 'EN' ? 'Translation of archival documents (per 1 page):'
                                  :'Розшифрування архівних документів (за 1 л.):' }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}/>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'XVII век'
                              : lang === 'EN' ? 'XVII century'
                                  :'XVII ст.' }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>2</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'XVIII в.'
                              : lang === 'EN' ? 'XVIII cent.'
                                  :'XVIII ст.' }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>1,5</td>
                      </tr>
                      <tr>
                          <td className='general general-second'>{lang === 'RU' ? 'XIX в.'
                              : lang === 'EN' ? 'XIX cent.'
                                  :'XIX ст.' }</td>
                          <td className='general general-second' style={{'textAlign': 'center'}}>1</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
};