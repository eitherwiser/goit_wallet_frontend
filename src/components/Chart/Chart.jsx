import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import s from "./Chart.module.css"
import DiagramTab from "../../components/DiagramTab/DiagramTab"



ChartJS.register(ArcElement, Tooltip, Legend);


 const data = {
  labels: ['Основные рассходы ', 'Продукты', 'Машина', 'Забота о себе', 'Забота о детях', 'Товары для дома', 'Образование', 'Досуг', 'Другие рассходы'],

  datasets: [
    {
      label: '# of Votes',
      data: [8700, 3800, 1500, 800, 2208, 300, 3400, 1230, 610],
      backgroundColor: [
        '#FED057',
        '#FFD8D0',
        '#FD9498',
        '#C5BAFF',
        '#6E78E8',
        '#4A56E2',
        '#81E1FF',
        '#24CCA7', 
        '#00AD84',
      ],


      borderWidth: 0,
      cutout: 110,
   
      
    },


  ],

};

const options = {
    plugins: {

      title: {
        display: true,
        text: '24000',
       
       
      },
        legend: {
            display: false,

        }
    },

}

export default function Chart() {
  return (
  <>


<div className={s.wrapper}>    <p className={s.mainTitte}>Статистика</p>
<div className={s.rightContainer}><div className={s.chart}>  <Doughnut data={data} options={options}/></div>
<div><DiagramTab/></div></div></div>


  </>
  )
}

