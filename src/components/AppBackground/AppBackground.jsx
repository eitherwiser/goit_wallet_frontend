import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Ellipse1 } from "images/AppBackground/Ellipse_1.svg";
import { ReactComponent as Ellipse2 } from "images/AppBackground/Ellipse_2.svg";
import s from "./AppBackground.module.css";

export default function AppBackground({ children }) {
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className={s.AppBackground}>
      {isMobileOrTablet ? (
        <>
          <Ellipse1 className={s.Ellipse1} />
          <Ellipse2 className={s.Ellipse2} />
        </>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
}

AppBackground.propTypes = {
  children: PropTypes.node,
};
