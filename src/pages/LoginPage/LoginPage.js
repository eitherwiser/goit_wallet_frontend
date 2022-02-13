import s from "./LoginPage.module.css";
import LoginForm from "components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Finance App</h1>
      </div>
      <div className={s.content_container}>
        <div className={s.content_filter}></div>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
