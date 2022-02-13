import s from "./RegisterPage.module.css";
import RegisterForm from "components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Finance App</h1>
      </div>
      <div className={s.content_container}>
        <div className={s.content_filter}></div>
      </div>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;