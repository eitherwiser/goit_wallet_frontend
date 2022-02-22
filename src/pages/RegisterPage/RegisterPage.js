import s from "./RegisterPage.module.css";
import { useMediaQuery } from "react-responsive";
import RegisterForm from "components/RegisterForm/RegisterForm";

function RegisterPage() {
  const isMobileOrTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Finance App</h1>
      </div>
      <div className={s.content_container}>
        {isMobileOrTablet ? <div className={s.content_filter}></div> : <></>}
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
