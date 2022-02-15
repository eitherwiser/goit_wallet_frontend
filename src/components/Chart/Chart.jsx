import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


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

    },


  ],

};

const options = {

    plugins: {

        legend: {
            display: false,
    //         labels: {
    //             color: '#000000',
    //             boxWidth:24,
    //             boxHeight:24,
    //             padding:32,

    //             font:{
    //                 size: 16,
    //                 weight:400,
    //                 lineHeight:1.16
    //             }
    //         },
    //         htmlLegend: {
    //           // ID of the container to put the legend in
    //           containerID: 'custom-legend',
    //         },
    //         position: 'right',

    //         title:{
    //             color:"#000000",
    //             text:"Категория  Сумма",
    //             display:true,
    //             font:{
    //                 size: 18,
    //                 weight:800,
    //                 lineHeight:1.16
    //             }
    //         }
        }
    },

}

export default function Chart() {
  return (
  <>

  <Doughnut data={data} options={options}/>
  </>
  )
}

