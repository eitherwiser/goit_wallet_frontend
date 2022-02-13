import { useSelector } from "react-redux";

import { getBalance } from "../../redux/balance/balance-selectors";
import s from "./Balance.module.css";

export default function Balance() {
	const balance = useSelector(getBalance);
	return (
		<div className={s.balance}>
			<div className={s.label}>Ваш баланс</div>
			<div className={s.amount}>&#x20b4; {balance}</div>
		</div>
	);
}
