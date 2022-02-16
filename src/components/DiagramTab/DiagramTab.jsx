import React, { useState } from 'react';
import s from "./DiagramTab.module.css"
import {FormControl, InputLabel, Select,MenuItem} from '@mui/material';


export default function DiagramTab(){

    const [val, setVal] = useState('');
    const func = (a)=>setVal(a.target.value);
    return(
        <>
<div className={s.containerButton}>
   
    <FormControl fullWidth>
  <InputLabel className={s.inputLabel} id="demo-simple-select-label">Месяц</InputLabel>
  <Select
  className={s.select}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={val}
    label="месяц"
    onChange={func}
  >
    <MenuItem value={1}>Январь</MenuItem>
    <MenuItem value={2}>Февраль</MenuItem>
    <MenuItem value={3}>Март</MenuItem>
    <MenuItem value={4}>Апрель</MenuItem>
    <MenuItem value={5}>Май</MenuItem>
    <MenuItem value={6}>Июнь</MenuItem>
    <MenuItem value={7}>Июль</MenuItem>
    <MenuItem value={8}>Агуст</MenuItem>
    <MenuItem value={9}>Сентябрь</MenuItem>
    <MenuItem value={10}>Октябрь</MenuItem>
    <MenuItem value={11}>Ноябрь</MenuItem>
    <MenuItem value={12}>Декабрь</MenuItem>
  </Select>
</FormControl>
   
        
</div>
        <div className={s.container}><p className={s.title}>Категория</p> <p className={s.title}>Сумма</p></div>
        <div className={s.containerTab}><div className={s.leftContainer}><span 
        style = {{ display: 'block', width:'24px', height:'24px', backgroundColor:'#000',marginRight:'16px'}}>
            </span><p className={s.name}>Основные расходы:</p></div><p className={s.name}>3000</p>
            </div>
   

         <div className={s.containerSum}><p className={s.titleSum}>Расходы</p><span className={s.costs}>200</span>
            </div><div className={s.containerSum}><p className={s.titleSum}>Доходы</p><span className={s.income}>100</span></div>
        </>
    )
}