import React from "react";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "./Chart.module.css";
import DiagramTab from "components/DiagramTab/DiagramTab";

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
  const [fetchDate, setFetchDate] = useState(obj);

  

 const arrName = [];
const arrTotal = [];
const arrColor = [];

{fetchDate?.category.map((item) => {
  arrName.push(item.name);
  arrTotal.push(item.total);
  arrColor.push(item.color);
});

const data = {
  labels: [...arrName],

  datasets: [
    {
      label: "# of Votes",
      data: [...arrTotal],
      backgroundColor: [...arrColor],

      borderWidth: 0,
      cutout: 110,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "24000",
    },
    legend: {
      display: false,
    },
  },
};
  return (
    <>

      <div className={s.wrapper}>
        {" "}
        <p className={s.mainTitle}>Статистика</p>
        <div className={s.rightContainer}>
          <div className={s.chart}>
            {" "}
            <Doughnut data={data} options={options} />
          </div>
          <div className={s.containerDiagram}>
            <DiagramTab fetchDate={setFetchDate} data = {fetchDate}/>
          </div>
        </div>
      </div>
    </>
  );
}}
