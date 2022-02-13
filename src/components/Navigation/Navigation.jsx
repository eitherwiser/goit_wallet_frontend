import classnames from "classnames";

import Currency from "components/Currency/Currency";
import DashboardPage from "pages/DashboardPage/DashboardPage";

import s from "./Navigation.module.css";

import homeImg from "../../images/navigation/home.svg";
import pbImg from "../../images/navigation/pb.svg";
import statisticsImg from "../../images/navigation/statistics.svg";

export default function Navigation() {
	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<li className={s.item}>
					<a href="DashboardPage" className={s.link}>
						{/* в реакт jsx другие правила использ свг-почитать как */}
						{/* <svg className={s.navImg}>
              <use href="../../images/navigation/navigation.svg#icon-home" />
            </svg> */}

						<img className={s.navImg} src={homeImg} alt="" />
						<span className={s.text}>Главная</span>
					</a>
				</li>
				<li className={s.item}>
					<a href="#" className={s.link}>
						{/* <svg className={s.navImg}>
              <use href="../../images/navigation/navigation.svg#icon-statistics" />
            </svg> */}

						<img className={s.navImg} src={statisticsImg} alt="" />
						<span className={s.text}>Статистика</span>
					</a>
				</li>
				<li className={s.item}>
					<a href="Currency" className={s.link}>
						{/* <svg className={s.navImg}>
              <use href="../../images/navigation/navigation.svg#icon-pb" />
            </svg> */}

						<img
							className={classnames(s.navImg, s.navImgPb)}
							src={pbImg}
							alt=""
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
}
