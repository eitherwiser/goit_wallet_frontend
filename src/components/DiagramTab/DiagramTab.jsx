import React from "react";
import s from "./DiagramTab.module.css";
import TableFilters from "components/Select/Select";
import Category from "components/category/category";


const obj={
  "category": [
      {
          "id": "321321321",
          "name": "Еда поменял вручную",
          "isInc": false,
          "color": "#ffffff",
          "isActive": true,
          "total": 10
      },
      {
          "id": "387721321",
          "name": "Дети",
          "isInc": false,
          "color": "#ff22ff",
          "isActive": true,
          "total": 20
      },
      {
          "id": "321320909",
          "name": "Развитие",
          "isInc": false,
          "color": "#33ffff",
          "isActive": true,
          "total": 30
      },
      {
          "id": "771321321",
          "name": "Остальное",
          "isInc": false,
          "color": "#f45454",
          "isActive": true,
          "total": 30
      },
      {
          "id": "321328821",
          "name": "Налоги",
          "isInc": false,
          "color": "#ff2345",
          "isActive": true,
          "total": 40
      }
  ],
  "total": {
      "Expence": 130,
      "Income": 50000
  }
}


export default function DiagramTab() {

  return (
    <>
     <TableFilters/>
      <div className={s.container}>
        <p className={s.title}>Категория</p> <p className={s.title}>Сумма</p>
      </div>
    
     <Category/>

      <div className={s.containerSum}>
        <p className={s.titleSum}>Расходы</p>
        <span className={s.costs}>{obj.total.Expence}</span>
      </div>
      <div className={s.containerSum}>
        <p className={s.titleSum}>Доходы</p>
        <span className={s.income}>{obj.total.Income}</span>
      </div>
    </>
  );
}
