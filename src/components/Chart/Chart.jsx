import React from "react";
import { useState,useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "./Chart.module.css";
import DiagramTab from "components/DiagramTab/DiagramTab";
import { useSelector } from "react-redux";

import { getBalance } from "redux/transactions/transactions-selectors";

import LoaderSpinner from "components/LoaderComponentCurrency/LoaderComponent";


ChartJS.register(ArcElement, Tooltip, Legend);

const obj = {
  category: [
    {
      id: "",
      name: "",
      color: "",
      total: 0,
    },
  ],
  total: {
    Expense: 0,
    Income: 0,
  },
};

export default function Chart() {
  const balance = useSelector(getBalance);
  const [loader, setLoader]= useState(true)
  const [fetchDate, setFetchDate] = useState(obj);
  const arrName = [];
  const arrTotal = [];
  const arrColor = [];

  fetchDate?.category.forEach((item) => {
    arrName.push(item.name);
    arrTotal.push(item.total);
    arrColor.push(item.color);
  });


  useEffect(() => {
    setTimeout(()=>{setLoader(false)}, 1000)
  },[fetchDate]);
 

  const data = {
    labels: [...arrName],

    datasets: [
      {
        data: [...arrTotal],
        backgroundColor: [...arrColor],

        borderWidth: 0,
        cutout: 100,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className={s.wrapper}>
        <p className={s.mainTitle}>Статистика</p>
        
        <div className={s.rightContainer}>
          {fetchDate.total.Expense === 0  && !loader &&(
            <p className={s.text}>За выбранный период затрат нет</p>
          )}


           {fetchDate.total.Expense === 0 &&  loader &&   <div className={s.chart}>
           <div className={s.loader}>
            <LoaderSpinner />
          </div>
            </div>}
          



          {fetchDate.total.Expense !== 0 &&     <div className={s.chart}>
              <Doughnut data={data} options={options} />
              <p className={s.total}>&#x20b4; {balance}</p>
            </div>}
       
          

          <div className={s.containerDiagram}>
            <DiagramTab fetchDate={setFetchDate} data={fetchDate} />
          </div>
        </div>
      </div>
    </>
  );
}
