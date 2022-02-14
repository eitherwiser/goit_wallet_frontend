import s from "./DiagramTab.module.css"

export default function diagramTab(){
    return(
        <>

        <div className={s.container}><p className={s.title}>Категория</p> <p className={s.title}>Сумма</p></div>
        <div className={s.containerTab}><div className={s.leftContainer}><span 
        style = {{ display: 'block', width:'24px', height:'24px', backgroundColor:'#000',marginRight:'16px'}}>
            </span><p className={s.name}>Основные расходы:</p></div><p className={s.name}>3000</p>


            </div>
            <div className={s.containerTab}><div className={s.leftContainer}><span 
        style = {{ display: 'block', width:'24px', height:'24px', backgroundColor:'#000',marginRight:'16px'}}>
            </span><p className={s.name}>Основные расходы:</p></div><p className={s.name}>3000</p>


            </div>

         <div className={s.containerSum}><p className={s.titleSum}>Расходы</p><span className={s.costs}>200</span>
            </div><div className={s.containerSum}><p className={s.titleSum}>Доходы</p><span className={s.income}>100</span></div>
        </>
    )
}