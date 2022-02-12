import PropTypes from "prop-types";
import s from "./RegisterContainer.module.css";

export default function RegisterContainer({ children }) {
  return <div className={s.container}>{children}</div>;
}

RegisterContainer.propTypes = {
  children: PropTypes.node,
};
