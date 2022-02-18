import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import s from "./ButtonAddTransactions.module.css";

const ButtonAddTransactions = () => {
  const [Loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <CSSTransition
      in={Loaded}
      timeout={500}
      classNames={{
        enterActive: `${s.buttonShow}`,
        enterDone: `${s.buttonBounce}`,
      }}
      mountOnEnter
    >
      <button type="button" className={s.button}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0V20" stroke="white" strokeWidth="2" />
          <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </CSSTransition>
  );
};

export default ButtonAddTransactions;
