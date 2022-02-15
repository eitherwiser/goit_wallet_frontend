import Chart from "../../components/Chart/Chart" 
import DiagramTab from "../../components/DiagramTab/DiagramTab"
import s from "./StatisticsPages.module.css"

export default function Statistics(){
    return(
        <div className={s.container}>

        <div className={s.leftContainer}>Оксана, твоя половинка</div>
        <div className={s.wrapper}>    <p className={s.mainTitte}>Статистика</p>
        <div className={s.rightContainer}><div className={s.chart}><Chart/></div>
      <div><DiagramTab/></div></div></div>


        </div>
    )
} 