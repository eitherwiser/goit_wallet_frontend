import classnames from "classnames";

// import Currency from "components/Currency/Currency";
// import DashboardPage from "pages/DashboardPage/DashboardPage";

import { NavLink, Outlet } from "react-router-dom";

// mobile
import { ReactComponent as HomeImgMob } from "../../images/navigation/mobile/home.svg";
import { ReactComponent as PbImgMob } from "../../images/navigation/mobile/pb.svg";
import { ReactComponent as StatisticsImgMob } from "../../images/navigation/mobile/statistics.svg";

// tablet
import { ReactComponent as HomeImgTab } from "../../images/navigation/tablet/home.svg";
import { ReactComponent as StatisticsImgTab } from "../../images/navigation/tablet/statistics.svg";

import s from "./Navigation.module.css";
import Media from "react-media";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      {/* <ul className={s.list}>
        <li className={s.item}>
          <a href="DashboardPage" className={s.link}>
            <HomeImgMob className={s.navImgMob} />
            <HomeImgTab className={s.navImgTab} />
            <span className={s.text}>Главная</span>
          </a>
        </li>

        <li className={s.item}>
          <a href="Currency" className={s.link}>
            <StatisticsImgMob className={s.navImgMob} />
            <StatisticsImgTab className={s.navImgTab} />
            <span className={s.text}>Статистика</span>
          </a>
        </li>

        <li className={s.item}>
          <a href="#" className={s.link}>
            <PbImgMob className={s.navImgMob} />
          </a>
        </li>
      </ul> */}

      <NavLink
        to="/home"
        // className={({ isActive }) => (isActive ? activeLink : link)}
      >
        Главная
      </NavLink>
      <NavLink
        to="/diagram"
        // className={({ isActive }) => (isActive ? activeLink : link)} Exchange Rates
      >
        Статистика
      </NavLink>

      <Media
        query="(max-width: 767px)"
        render={() => (
          <NavLink
            to="/exchangeRates"
            // className={({ isActive }) => (isActive ? activeLink : link)}
          >
            Курс валют
          </NavLink>
        )}
      />

      {/* <Outlet /> */}
    </nav>
  );
}
