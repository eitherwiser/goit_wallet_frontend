import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "./Chart.module.css";
import DiagramTab from "components/DiagramTab/DiagramTab";

ChartJS.register(ArcElement, Tooltip, Legend);
const obj = {
  category: [
    {
      id: "321321321",
      name: "Еда поменял вручную",
      isInc: false,
      color: "#ffffff",
      isActive: true,
      total: 10,
    },
    {
      id: "387721321",
      name: "Дети",
      isInc: false,
      color: "#ff22ff",
      isActive: true,
      total: 20,
    },
    {
      id: "321320909",
      name: "Развитие",
      isInc: false,
      color: "#33ffff",
      isActive: true,
      total: 30,
    },
    {
      id: "771321321",
      name: "Остальное",
      isInc: false,
      color: "#f45454",
      isActive: true,
      total: 30,
    },
    {
      id: "321328821",
      name: "Налоги",
      isInc: false,
      color: "#ff2345",
      isActive: true,
      total: 40,
    },
  ],
  total: {
    Expence: 130,
    Income: 50000,
  },
};
const arrName = [];
const arrTotal = [];
const arrColor = [];

obj.category.map((item) => {
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

export default function Chart() {
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
            <DiagramTab />
          </div>
        </div>
      </div>
    </>
  );
}
