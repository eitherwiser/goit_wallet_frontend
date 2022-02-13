import { useMediaQuery } from "react-responsive";
import s from "./LogoComponent.module.css";
import { ReactComponent as LogoMobile } from "../../images/logo-form/logoMobile.svg";
import { ReactComponent as Logo } from "../../images/logo-form/logo.svg";

export default function LogoComponent({ style }) {
  const isMobileorTablet = useMediaQuery({ query: "(min-width: 768px)" });
  style = {
    marginBottom: "50px",
  };
  return (
    <>
      {isMobileorTablet ? (
        <div className={s.logo}>
          <Logo /> <span className={s.logo__text}> Wallet</span>
        </div>
      ) : (
        <div className={s.logo}>
          <LogoMobile />
          <span className={s.logo__text}> Wallet</span>
        </div>
      )}
    </>
  );
}
