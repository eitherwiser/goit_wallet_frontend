import React from "react";
import s from "./DiagramTab.module.css";
import SelectDate from "components/Select/Select";
import Category from "components/Сategory/Category";




export default function DiagramTab({fetchDate, data}) {
  return (
    <>
     <SelectDate fetchDate={fetchDate}/>
      <div className={s.container}>
        <p className={s.title}>Категория</p> <p className={s.title}>Сумма</p>
      </div>
    
     <Category  data={data}/>

      <div className={s.containerSum}>
        <p className={s.titleSum}>Расходы</p>
        <span className={s.costs}>{data.total.Expense}</span>
      </div>
      <div className={s.containerSum}>
        <p className={s.titleSum}>Доходы</p>
        <span className={s.income}>{data.total.Income}</span>
      </div>
    </>
  );
}
