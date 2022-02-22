import s from "./LoginPage.module.css";
import { useMediaQuery } from "react-responsive";
import LoginForm from "components/LoginForm/LoginForm";

function LoginPage() {
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Finance App</h1>
        </div>
        <div className={s.content_container}>
          {isMobileOrTablet ? <div className={s.content_filter}></div> : <></>}
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
