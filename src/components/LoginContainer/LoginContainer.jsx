import PropTypes from "prop-types";
import s from "./LoginContainer.module.css";

export default function LoginContainer({ children }) {
  return <div className={s.container}>{children}</div>;
}

LoginContainer.propTypes = {
  children: PropTypes.node,
};
