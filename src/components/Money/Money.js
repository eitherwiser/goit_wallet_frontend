import React from 'react';

import s from './Money.module.css';
import sprite from '../../images/svg_sprite.svg';

const Money = () => (
  <div className={s.moneyContainer}>
    <svg className={s.money1} id="coin" width="30px" height="30px">
      <use href={sprite + '#coin-svg'}></use>
    </svg>

    <svg className={s.money2} id="coin2" width="20px" height="20px">
      <use href={sprite + '#coin'}></use>
    </svg>

    <svg className={s.money3} id="coin3" width="60px" height="50px">
      <use href={sprite + '#banknot'}></use>
    </svg>

    <svg className={s.money4} id="coin4" width="40px" height="40px">
      <use href={sprite + '#coin-svg'}></use>
    </svg>

    <svg className={s.money5} id="coin5" width="35px" height="35px">
      <use href={sprite + '#coin'}></use>
    </svg>

    <svg className={s.money6} id="coin6" width="40px" height="30px">
      <use href={sprite + '#banknot'}></use>
    </svg>
    <svg className={s.money7} id="coin6" width="50px" height="40px">
      <use href={sprite + '#banknot'}></use>
    </svg>
    <svg className={s.money8} id="coin6" width="25px" height="15px">
      <use href={sprite + '#banknot'}></use>
    </svg>
    <svg className={s.money9} id="coin6" width="30px" height="20px">
      <use href={sprite + '#banknot'}></use>
    </svg>
    <svg className={s.money10} id="coin6" width="25px" height="25px">
      <use href={sprite + '#coin-b'}></use>
    </svg>
    <svg className={s.money11} id="coin6" width="30px" height="30px">
      <use href={sprite + '#coin-b'}></use>
    </svg>
    <svg className={s.money12} id="coin6" width="40px" height="30px">
      <use href={sprite + '#banknot'}></use>
    </svg>
  </div>
);

export default Money;
