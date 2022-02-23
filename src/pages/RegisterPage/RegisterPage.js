import s from "./RegisterPage.module.css";
import { useMediaQuery } from "react-responsive";
import RegisterForm from "components/RegisterForm/RegisterForm";

function RegisterPage() {
  const isLarge = useMediaQuery({ query: "(min-width: 1240px)" });
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Finance App</h1>
      </div>
      <div className={s.content_container}>
        {isLarge && <div className={s.content_filter}></div>}
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
