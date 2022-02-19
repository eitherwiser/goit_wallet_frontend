import s from "./category.module.css";
// const obj = {
//   category: [
//     {
//       id: "321321321",
//       name: "Еда поменял вручную",
//       isInc: false,
//       color: "#ffffff",
//       isActive: true,
//       total: 10,
//     },
//     {
//       id: "387721321",
//       name: "Дети",
//       isInc: false,
//       color: "#ff22ff",
//       isActive: true,
//       total: 20,
//     },
//     {
//       id: "321320909",
//       name: "Развитие",
//       isInc: false,
//       color: "#33ffff",
//       isActive: true,
//       total: 30,
//     },
//     {
//       id: "771321321",
//       name: "Остальное",
//       isInc: false,
//       color: "#f45454",
//       isActive: true,
//       total: 30,
//     },
//     {
//       id: "321328821",
//       name: "Налоги",
//       isInc: false,
//       color: "#ff2345",
//       isActive: true,
//       total: 40,
//     },
//   ],
//   total: {
//     Expence: 130,
//     Income: 50000,
//   },
// };

export default function Category({data}) {
  return (
    <ul className={s.list}>
      {data?.category.map((item) => (
        <li key={item.id}>
          <div className={s.containerTab}>
            <div className={s.leftContainer}>
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                  backgroundColor: `${item.color}`,
                  marginRight: "16px",
                }}
              ></span>
              <p className={s.name}>{item.name}:</p>
            </div>
            <p className={s.name}>{item.total}</p>{" "}
          </div>
        </li>
      ))}
    </ul>
  );
}
