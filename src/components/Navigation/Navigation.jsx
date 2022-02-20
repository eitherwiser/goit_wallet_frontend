import { NavLink } from "react-router-dom";

// mobile
import { ReactComponent as HomeImgMob } from "images/navigation/mobile/home.svg";
import { ReactComponent as PbImgMob } from "images/navigation/mobile/pb.svg";
import { ReactComponent as StatisticsImgMob } from "images/navigation/mobile/statistics.svg";

// tablet
import { ReactComponent as HomeImgTab } from "images/navigation/tablet/home.svg";
import { ReactComponent as StatisticsImgTab } from "images/navigation/tablet/statistics.svg";

import s from "./Navigation.module.css";
import Media from "react-media";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        <HomeImgMob className={s.navImgMob} />
        <HomeImgTab className={s.navImgTab} />
        <span className={s.text}>Главная</span>
      </NavLink>

      <NavLink
        to="/diagram"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        <StatisticsImgMob className={s.navImgMob} />
        <StatisticsImgTab className={s.navImgTab} />
        <span className={s.text}>Статистика</span>
      </NavLink>

      <Media
        query="(max-width: 767px)"
        render={() => (
          <NavLink
            to="/exchangeRates"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <PbImgMob className={s.navImgMob} />
          </NavLink>
        )}
      />
    </nav>
  );
}
