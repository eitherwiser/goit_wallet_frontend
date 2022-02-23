import React from "react";
import { NavLink } from "react-router-dom";
import path from "../../routes_path";

import styles from "./MobileNavigation.module.css";
import sprite from "../../images/svg_sprite.svg";

export default function MobileNavigation() {
  return (
    <>
      <nav className={styles.imgSmallNav}>
        <NavLink
          className={styles.imgSmall}
          activeClassName={styles.imgSmallActive}
          exact
          to={path.dashboardPage}
        >
          <svg height="38px" width="38px">
            <use href={sprite + "#icon-home"}></use>
          </svg>
        </NavLink>
        <NavLink
          className={styles.imgSmall}
          activeClassName={styles.imgSmallActive}
          exact
          to={path.statistic}
        >
          <svg height="38px" width="38px">
            <use href={sprite + "#icon-statistics"}></use>
          </svg>
        </NavLink>
        <NavLink
          className={styles.imgSmall}
          activeClassName={styles.imgSmallActive}
          exact
          to="/exchangeRates"
        >
          <svg height="38px" width="38px">
            <use href={sprite + "#icon-currency"}></use>
          </svg>
        </NavLink>
      </nav>
    </>
  );
}
