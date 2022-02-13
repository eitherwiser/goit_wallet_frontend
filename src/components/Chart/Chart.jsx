import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";
// import { expensesСategoryColors } from "./constants";

export default function Chart() {
	// const data = {
	//
	// };
	return (
		<div className={styles.doughnut}>
			<div className={styles.balance}>123₴</div>
			{/* <Doughnut data={data} /> */}
		</div>
	);
}
